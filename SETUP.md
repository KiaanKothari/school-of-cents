# School of Cents — Setup Guide

School of Cents is a complete React + TypeScript + Tailwind app. The frontend is finished and works today (marketing pages,
all 38 lessons, 10 real-life scenarios, calculators, the daily challenge). Accounts, saved progress, XP, streaks, and
badges need a Supabase project connected — this takes about five minutes.

## 1. Install dependencies

```bash
npm install
```

## 2. Run it right now (no backend yet)

```bash
npm run dev
```

Open the printed local URL. You'll see a small "Demo mode" banner — the whole site works, but sign-up/login are
disabled until you connect Supabase (see below). This is intentional: School of Cents never fakes authentication or
progress.

## 3. Create a free Supabase project

1. Go to [supabase.com](https://supabase.com) and create a free account/project (pick any name/region/password).
2. Wait ~2 minutes for the project to finish provisioning.
3. In the Supabase dashboard, go to **Project Settings → API**. Copy the **Project URL** and the **anon / public**
   key.

## 4. Run the database schema

1. In the Supabase dashboard, open the **SQL Editor**.
2. Open `supabase/schema.sql` from this project, copy its entire contents, paste it into a new query, and click
   **Run**.
3. This creates every table School of Cents needs (`profiles`, `lesson_progress`, `scenario_progress`,
   `daily_challenge_progress`, `badges_earned`, `streak_log`), turns on Row Level Security everywhere, and adds the
   `record_activity` function that safely awards XP and updates streaks server-side (so streaks can't be gamed by
   refreshing the page).

## 5. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and paste in your values:

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

Restart `npm run dev` after saving. The demo-mode banner disappears and sign-up/login start working immediately.

## 6. (Recommended) Turn off email confirmation for local testing

By default, Supabase requires users to click a confirmation email before they can log in. For local development this
is inconvenient. In the Supabase dashboard: **Authentication → Providers → Email → Confirm email → toggle off.**
(Leave it on for a real production launch, and configure a custom SMTP sender under **Authentication → Emails** so
confirmation and password-reset emails actually get delivered.)

## 7. Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy it to any static host (Vercel, Netlify, Cloudflare Pages, etc.) and set the same two
`VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` environment variables in that host's dashboard — never commit `.env`.

## What's already wired up vs. what you provide

| Already built | You provide |
|---|---|
| Full UI, routing, all 38 lessons, 10 scenarios, 16 daily challenges, 11 badges, calculators, leaderboard UI | A Supabase project (free tier is plenty) |
| Real Supabase auth calls (signup/login/logout/reset password) | The schema migration (one paste into the SQL editor) |
| Row-level-security-protected progress, XP, streak, and badge logic | Your two env vars |
| Rewarded-ad abstraction with a labeled dev placeholder | A real ad network integration, if/when you want one (see below) |
| Newsletter form structured for a real provider | A Resend/Mailchimp/ConvertKit API key, if/when you want real sends |

## Adding a real ad network later

`src/services/adService.ts` defines a `RewardedAdProvider` interface with one method, `show()`. Today
`rewardedAdProvider` points at `DevRewardedAdProvider`, a placeholder that's clearly labeled in the UI and never
claims a real ad played. To go live with AdMob, Google Ad Manager, IronSource, etc.: implement the interface against
that SDK and change the single export at the bottom of the file. No other file needs to change.

## Turning on Google AdSense (display ads)

This is already wired into the code — `src/components/ads/AdSlot.tsx` renders a real AdSense unit, and one is placed
on the Home page and the Learn page. Until you complete the steps below, `<AdSlot>` renders nothing at all (not even
empty space), so there's no broken ad box anywhere. Ads only ever appear once your account is approved and configured.

1. **Deploy the app to your real domain first.** AdSense reviews a live, publicly reachable site — it won't approve
   `localhost` or an unfinished deploy. Do this after the deployment steps earlier in this guide.
2. **Sign up at [adsense.google.com](https://adsense.google.com)** with a Google account and add your site's URL
   (e.g. `https://schoolofcents.com`).
3. **Verify ownership with `ads.txt`** (the easiest of Google's three verification options). This repo already ships
   a placeholder at `public/ads.txt` — open it and replace `pub-0000000000000000` with your real Publisher ID, which
   AdSense shows you under **Account → Account information**. Redeploy so the updated file is live at
   `https://schoolofcents.com/ads.txt`, then confirm in AdSense.
4. **Request review.** Google checks the whole site for policy compliance — this typically takes a few days, but can
   take up to 2–4 weeks. Real traffic on real pages during this window helps; a completely empty site can slow review
   down.
5. **When declaring your audience during sign-up**, note that School of Cents is general-audience educational content
   (budgeting, taxes, investing, retirement — most of it is just as relevant to adults as students), not a site
   specifically directed at children under 13. If you later market it specifically to a younger audience, re-check
   Google's child-directed-treatment policy, since that changes what AdSense is allowed to serve.
6. **Once approved**, create a "Display ad" ad unit in AdSense for each placement (Ads → By ad unit → Display ads) and
   copy its slot ID. Paste the real slot IDs into the two `<AdSlot slot="...">` calls in `src/pages/Home.tsx` and
   `src/pages/Learn.tsx` (they currently hold placeholder IDs).
7. **Set `VITE_ADSENSE_CLIENT_ID`** to your Publisher ID (looks like `pub-1234567890123456`) in your hosting
   provider's environment variables — same place you set the two Supabase variables — and redeploy. Ads appear
   automatically from then on; no other code changes needed.

Ads were deliberately left off the signup, login, and dashboard pages so they never get in the way of someone
creating an account or actually learning — Home and Learn are lower-stakes, higher-traffic pages where a single
unobtrusive unit fits naturally. Add more `<AdSlot>` calls anywhere else you'd like once you're comfortable with how
the first two look and perform.

## Turning on analytics (GA4)

Also already wired in, also off by default. `src/services/analytics.ts` defines `trackEvent()` and the fixed set of
events the app knows how to send: `page_view` (fires automatically on every route change), `signup`, `login`,
`lesson_started`, `lesson_completed`, `challenge_started`, `challenge_completed`, `calculator_used`,
`achievement_unlocked`, `newsletter_signup`. A `premium_clicked` event type is defined for future use but nothing
calls it yet, since there's no premium feature to click.

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com) and copy its **Measurement ID**
   (looks like `G-XXXXXXXXXX`).
2. Set `VITE_GA_MEASUREMENT_ID` to that value in your hosting provider's environment variables (same place as the
   Supabase and AdSense variables) and redeploy.

No event ever includes an email address, display name, or other personal information — only non-identifying context
like a lesson id or a badge id. Given some users here may be minors, keep it that way if you add more events later.

## Adding a real newsletter provider later

`src/components/NewsletterForm.tsx` has a single `subscribe()` function at the top. Replace its body with a call to
your provider's API (or, better, a serverless/edge function that holds the API key) — the form, validation, and
"You're on the list! 🎉" confirmation state are already built.

## Moving lesson content into the database (optional)

Lessons, scenarios, badges, and daily challenges currently live as typed data files under `src/data/` — this makes
the app work with zero backend content setup and is easy for a developer to extend (add an object to an array,
following the `Lesson`/`Scenario`/etc. types in `src/types/index.ts`). If you later want non-developers to edit
content, the shapes already match a straightforward Postgres schema — mirror `src/types/index.ts` into new Supabase
tables (`lessons`, `scenarios`, `daily_challenges`) and swap the imports in `src/data/lessons/index.ts` etc. for a
fetch from Supabase, with the bundled data as an offline fallback.

## Testing checklist (what's been verified vs. what needs your Supabase project)

Verified in this environment (production build + automated browser smoke tests, `scripts/smoke-test.mjs` and
`scripts/interaction-test.mjs`):
- Every route renders with no console/JS errors, including protected-route redirects and the 404 page
- Interactive quiz questions, scenario decisions, and calculators all update correctly on user input
- Signup/login forms correctly disable submission when no backend is connected (never fake success)
- Mobile navigation, responsive layout, and all internal links work

Needs your own Supabase project to verify end-to-end (do this once you've completed steps 1–5 above):
- Sign up → check inbox (if email confirmation is on) → log in → log out
- Completing a lesson awards the correct XP and marks the next lesson in that topic unlocked
- Completing lessons on two different days advances the streak; skipping a day resets it
- Badges unlock at the right thresholds (try the "First Lesson" and "1,000 XP" badges first — fastest to reach)
- Refreshing the page mid-session keeps you logged in and preserves all progress
- The leaderboard shows your account once you opt in from **Profile**
