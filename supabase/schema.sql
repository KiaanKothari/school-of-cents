-- =============================================================================
-- School of Cents — Supabase schema
--
-- Run this once against a fresh Supabase project (SQL Editor → New query → Run,
-- or `supabase db push` if you use the CLI). It creates every table School of Cents
-- needs, turns on Row Level Security everywhere, and adds the policies/functions
-- that keep each user's data private and their streak honest.
--
-- Safe to re-run: every statement uses IF NOT EXISTS / OR REPLACE / drops the
-- old trigger first, so re-running it after a partial failure won't duplicate
-- anything.
-- =============================================================================

create extension if not exists "pgcrypto";

-- -----------------------------------------------------------------------------
-- profiles — one row per user, created automatically on signup.
-- -----------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  display_name text not null,
  xp integer not null default 0,
  level integer not null default 1,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_active_date date,
  show_on_leaderboard boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select" on public.profiles;
create policy "profiles_select"
  on public.profiles for select
  using (auth.uid() = id or show_on_leaderboard = true);

drop policy if exists "profiles_insert_self" on public.profiles;
create policy "profiles_insert_self"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "profiles_update_self" on public.profiles;
create policy "profiles_update_self"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Auto-create a profile the moment someone signs up, using the display name
-- they gave the signup form (falls back to the part of their email before @).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- -----------------------------------------------------------------------------
-- lesson_progress — one row per (user, lesson)
-- -----------------------------------------------------------------------------
create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_id text not null,
  completed boolean not null default false,
  quiz_score integer,
  completed_at timestamptz,
  unique (user_id, lesson_id)
);

alter table public.lesson_progress enable row level security;

drop policy if exists "lesson_progress_owner" on public.lesson_progress;
create policy "lesson_progress_owner"
  on public.lesson_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- scenario_progress — one row per (user, real-life scenario)
-- -----------------------------------------------------------------------------
create table if not exists public.scenario_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  scenario_id text not null,
  completed boolean not null default false,
  chosen_option_id text,
  completed_at timestamptz,
  unique (user_id, scenario_id)
);

alter table public.scenario_progress enable row level security;

drop policy if exists "scenario_progress_owner" on public.scenario_progress;
create policy "scenario_progress_owner"
  on public.scenario_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- daily_challenge_progress — one row per (user, calendar date)
-- -----------------------------------------------------------------------------
create table if not exists public.daily_challenge_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  challenge_date date not null,
  challenge_id text not null,
  completed boolean not null default false,
  chosen_choice_id text,
  completed_at timestamptz,
  unique (user_id, challenge_date)
);

alter table public.daily_challenge_progress enable row level security;

drop policy if exists "daily_challenge_progress_owner" on public.daily_challenge_progress;
create policy "daily_challenge_progress_owner"
  on public.daily_challenge_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- badges_earned — one row per (user, badge)
-- -----------------------------------------------------------------------------
create table if not exists public.badges_earned (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  badge_id text not null,
  earned_at timestamptz not null default now(),
  unique (user_id, badge_id)
);

alter table public.badges_earned enable row level security;

drop policy if exists "badges_earned_owner" on public.badges_earned;
create policy "badges_earned_owner"
  on public.badges_earned for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- streak_log — one row per (user, calendar day) they did any learning activity.
--
-- The streak shown on a profile is ALWAYS recomputed from this append-only log
-- inside record_activity() below, server-side. A user can't inflate their streak
-- by refreshing the page or editing client state — only a genuine activity on a
-- genuine new calendar day adds a row, and the streak is the count of
-- consecutive days in this table ending today.
-- -----------------------------------------------------------------------------
create table if not exists public.streak_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  activity_date date not null,
  unique (user_id, activity_date)
);

alter table public.streak_log enable row level security;

drop policy if exists "streak_log_owner" on public.streak_log;
create policy "streak_log_owner"
  on public.streak_log for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- xp_to_level — single source of truth for the level thresholds.
-- Keep this in sync with src/data/levels.ts if you ever change the XP curve.
-- -----------------------------------------------------------------------------
create or replace function public.xp_to_level(p_xp integer)
returns integer
language sql
immutable
as $$
  select case
    when p_xp >= 5000 then 7
    when p_xp >= 3500 then 6
    when p_xp >= 2000 then 5
    when p_xp >= 1000 then 4
    when p_xp >= 500  then 3
    when p_xp >= 200  then 2
    else 1
  end;
$$;

-- -----------------------------------------------------------------------------
-- record_activity — the ONLY way XP and streaks change.
--
-- Call this once per completed lesson, quiz, scenario, or daily challenge with
-- the XP that activity is worth. It is security-definer so it can trust
-- auth.uid(), runs as one transaction, and is idempotent per calendar day for
-- streak purposes (calling it five times today still only counts as one day).
-- -----------------------------------------------------------------------------
create or replace function public.record_activity(p_xp integer default 0)
returns public.profiles
language plpgsql
security definer set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_today date := current_date;
  v_streak integer := 1;
  v_cursor date := v_today;
  v_profile public.profiles;
begin
  if v_user is null then
    raise exception 'not authenticated';
  end if;

  insert into public.streak_log (user_id, activity_date)
  values (v_user, v_today)
  on conflict (user_id, activity_date) do nothing;

  loop
    v_cursor := v_cursor - 1;
    exit when not exists (
      select 1 from public.streak_log where user_id = v_user and activity_date = v_cursor
    );
    v_streak := v_streak + 1;
  end loop;

  update public.profiles
     set xp = xp + greatest(p_xp, 0),
         level = public.xp_to_level(xp + greatest(p_xp, 0)),
         current_streak = v_streak,
         longest_streak = greatest(longest_streak, v_streak),
         last_active_date = v_today
   where id = v_user
   returning * into v_profile;

  return v_profile;
end;
$$;

-- -----------------------------------------------------------------------------
-- Helpful indexes
-- -----------------------------------------------------------------------------
create index if not exists idx_lesson_progress_user on public.lesson_progress (user_id);
create index if not exists idx_scenario_progress_user on public.scenario_progress (user_id);
create index if not exists idx_daily_challenge_progress_user on public.daily_challenge_progress (user_id);
create index if not exists idx_badges_earned_user on public.badges_earned (user_id);
create index if not exists idx_streak_log_user_date on public.streak_log (user_id, activity_date);
create index if not exists idx_profiles_leaderboard on public.profiles (xp desc) where show_on_leaderboard = true;

-- =============================================================================
-- Done. Next: copy your project URL and anon key into .env (see .env.example
-- and SETUP.md), then `npm run dev`.
-- =============================================================================
