// Thin data-access layer over Supabase. Every table read/write for
// user-owned progress data goes through here so the rest of the app never
// touches snake_case columns or raw Supabase calls directly.
import { supabase } from '@/lib/supabaseClient'
import type {
  BadgeEarnedRow,
  DailyChallengeProgressRow,
  LeaderboardEntry,
  LessonProgressRow,
  Profile,
  ScenarioProgressRow,
} from '@/types'

function requireClient() {
  if (!supabase) throw new Error('Supabase is not configured. See SETUP.md.')
  return supabase
}

function mapProfile(row: Record<string, unknown>): Profile {
  return {
    id: row.id as string,
    email: row.email as string,
    displayName: row.display_name as string,
    xp: row.xp as number,
    level: row.level as number,
    currentStreak: row.current_streak as number,
    longestStreak: row.longest_streak as number,
    lastActiveDate: (row.last_active_date as string | null) ?? null,
    lastBonusClaimDate: (row.last_bonus_claim_date as string | null) ?? null,
    showOnLeaderboard: row.show_on_leaderboard as boolean,
    createdAt: row.created_at as string,
  }
}

export async function fetchProfile(userId: string): Promise<Profile | null> {
  const client = requireClient()
  const { data, error } = await client.from('profiles').select('*').eq('id', userId).maybeSingle()
  if (error) throw error
  return data ? mapProfile(data) : null
}

/** Fallback creator in case the on-signup trigger hasn't run yet (rare race). */
export async function ensureProfile(userId: string, email: string, displayName: string): Promise<Profile> {
  const client = requireClient()
  const existing = await fetchProfile(userId)
  if (existing) return existing
  const { data, error } = await client
    .from('profiles')
    .upsert({ id: userId, email, display_name: displayName }, { onConflict: 'id' })
    .select('*')
    .single()
  if (error) throw error
  return mapProfile(data)
}

export async function updateDisplayName(userId: string, displayName: string): Promise<Profile> {
  const client = requireClient()
  const { data, error } = await client
    .from('profiles')
    .update({ display_name: displayName })
    .eq('id', userId)
    .select('*')
    .single()
  if (error) throw error
  return mapProfile(data)
}

export async function setShowOnLeaderboard(userId: string, show: boolean): Promise<Profile> {
  const client = requireClient()
  const { data, error } = await client
    .from('profiles')
    .update({ show_on_leaderboard: show })
    .eq('id', userId)
    .select('*')
    .single()
  if (error) throw error
  return mapProfile(data)
}

/**
 * The single entry point for awarding XP and advancing the daily streak.
 * Backed by the `record_activity` Postgres function so streaks can't be
 * manipulated from the client (see supabase/schema.sql).
 */
export async function recordActivity(xp: number): Promise<Profile> {
  const client = requireClient()
  const { data, error } = await client.rpc('record_activity', { p_xp: xp })
  if (error) throw error
  const row = Array.isArray(data) ? data[0] : data
  return mapProfile(row)
}

/**
 * Server-side-idempotent version of `recordActivity` for the Dashboard's
 * "watch an ad, get bonus XP" flow. Backed by `claim_daily_bonus`, which
 * checks `last_bonus_claim_date` inside the same transaction as the XP grant
 * — so refreshing the page (or replaying the request some other way) cannot
 * claim the bonus twice in one day, unlike a plain client-side "claimed" flag.
 */
export async function claimDailyBonus(xp: number): Promise<Profile> {
  const client = requireClient()
  const { data, error } = await client.rpc('claim_daily_bonus', { p_xp: xp })
  if (error) throw error
  const row = Array.isArray(data) ? data[0] : data
  return mapProfile(row)
}

export async function fetchLessonProgress(userId: string): Promise<Record<string, LessonProgressRow>> {
  const client = requireClient()
  const { data, error } = await client.from('lesson_progress').select('*').eq('user_id', userId)
  if (error) throw error
  const map: Record<string, LessonProgressRow> = {}
  for (const row of data ?? []) {
    map[row.lesson_id as string] = {
      lessonId: row.lesson_id,
      completed: row.completed,
      quizScore: row.quiz_score,
      completedAt: row.completed_at,
    }
  }
  return map
}

export async function upsertLessonProgress(
  userId: string,
  lessonId: string,
  fields: { completed: boolean; quizScore: number | null },
): Promise<void> {
  const client = requireClient()
  const { error } = await client.from('lesson_progress').upsert(
    {
      user_id: userId,
      lesson_id: lessonId,
      completed: fields.completed,
      quiz_score: fields.quizScore,
      completed_at: fields.completed ? new Date().toISOString() : null,
    },
    { onConflict: 'user_id,lesson_id' },
  )
  if (error) throw error
}

export async function fetchScenarioProgress(userId: string): Promise<Record<string, ScenarioProgressRow>> {
  const client = requireClient()
  const { data, error } = await client.from('scenario_progress').select('*').eq('user_id', userId)
  if (error) throw error
  const map: Record<string, ScenarioProgressRow> = {}
  for (const row of data ?? []) {
    map[row.scenario_id as string] = {
      scenarioId: row.scenario_id,
      completed: row.completed,
      chosenOptionId: row.chosen_option_id,
      completedAt: row.completed_at,
    }
  }
  return map
}

export async function upsertScenarioProgress(
  userId: string,
  scenarioId: string,
  chosenOptionId: string,
): Promise<void> {
  const client = requireClient()
  const { error } = await client.from('scenario_progress').upsert(
    {
      user_id: userId,
      scenario_id: scenarioId,
      completed: true,
      chosen_option_id: chosenOptionId,
      completed_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,scenario_id' },
  )
  if (error) throw error
}

export async function fetchDailyChallengeProgress(
  userId: string,
  date: string,
): Promise<DailyChallengeProgressRow | null> {
  const client = requireClient()
  const { data, error } = await client
    .from('daily_challenge_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('challenge_date', date)
    .maybeSingle()
  if (error) throw error
  return data
    ? {
        challengeDate: data.challenge_date,
        challengeId: data.challenge_id,
        completed: data.completed,
        chosenChoiceId: data.chosen_choice_id,
      }
    : null
}

export async function upsertDailyChallengeProgress(
  userId: string,
  date: string,
  challengeId: string,
  chosenChoiceId: string,
): Promise<void> {
  const client = requireClient()
  const { error } = await client.from('daily_challenge_progress').upsert(
    {
      user_id: userId,
      challenge_date: date,
      challenge_id: challengeId,
      completed: true,
      chosen_choice_id: chosenChoiceId,
      completed_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,challenge_date' },
  )
  if (error) throw error
}

export async function fetchBadgesEarned(userId: string): Promise<BadgeEarnedRow[]> {
  const client = requireClient()
  const { data, error } = await client.from('badges_earned').select('*').eq('user_id', userId)
  if (error) throw error
  return (data ?? []).map((row) => ({ badgeId: row.badge_id, earnedAt: row.earned_at }))
}

export async function awardBadge(userId: string, badgeId: string): Promise<boolean> {
  const client = requireClient()
  const { error } = await client
    .from('badges_earned')
    .upsert({ user_id: userId, badge_id: badgeId }, { onConflict: 'user_id,badge_id', ignoreDuplicates: true })
  if (error) throw error
  return true
}

export async function fetchStreakLog(userId: string, sinceIso: string): Promise<string[]> {
  const client = requireClient()
  const { data, error } = await client
    .from('streak_log')
    .select('activity_date')
    .eq('user_id', userId)
    .gte('activity_date', sinceIso)
  if (error) throw error
  return (data ?? []).map((row) => row.activity_date as string)
}

/**
 * Served through the `get_leaderboard` Postgres function rather than a direct
 * `profiles` select. That function only ever returns id/display_name/xp —
 * enforced in the database itself, not just by which columns this query asks
 * for — so there's no path (including a raw API call bypassing this file)
 * that can pull another user's email or other profile fields off the
 * leaderboard. See supabase/schema.sql.
 */
export async function fetchLeaderboard(limit = 20): Promise<LeaderboardEntry[]> {
  const client = requireClient()
  const { data, error } = await client.rpc('get_leaderboard', { p_limit: limit })
  if (error) throw error
  return (data ?? []).map((row: { id: string; display_name: string; xp: number }) => ({
    id: row.id,
    displayName: row.display_name,
    xp: row.xp,
    isDemo: false,
  }))
}
