# School of Cents

**Learn money. Make better decisions.**

<p align="center"> <a href="https://schoolofcents.com"> <img alt="Try School of Cents free" src="https://img.shields.io/badge/%F0%9F%94%97_Try_it_free-schoolofcents.com-1F3B57?style=for-the-badge"> </a> </p>
New here? Sign up free at schoolofcents.com — 38 lessons, 10 real-life money scenarios, and a daily challenge, gamified with XP, streaks, and badges. Takes about 30 seconds, no credit card, and your progress is saved so you can pick up where you left off.

School of Cents is an interactive financial literacy platform — short lessons, real-life financial scenarios, daily
challenges, XP, streaks, and badges, built to feel like "Duolingo for financial literacy" rather than a textbook or a
bank.

## Features

Financial-literacy lessons with quizzes, real-life decision scenarios, a daily money challenge, XP/levels, streaks,
badges, a leaderboard, financial calculators (compound growth, budget, debt payoff), user accounts with persisted
progress, and a newsletter signup ("The Money Minute"). Optional, off-by-default Google AdSense and GA4 analytics
integrations are wired in but inert until configured (see SETUP.md).

## Quick start

```bash
npm install
npm run dev
```

The site runs immediately — lessons, scenarios, calculators, and the marketing pages all work with no setup. To turn
on real accounts and saved progress, follow **[SETUP.md](./SETUP.md)** (about five minutes, connects a free Supabase
project).

## Environment variables

All optional in development (the app runs in a clearly-labeled demo mode without them) but required for a real
deployment. Copy `.env.example` to `.env` and fill in what you need — full walkthrough in **[SETUP.md](./SETUP.md)**.

| Variable | Required for | Where to get it |
|---|---|---|
| `VITE_SUPABASE_URL` | Accounts, saved progress | Supabase dashboard → Project Settings → API |
| `VITE_SUPABASE_ANON_KEY` | Accounts, saved progress | Supabase dashboard → Project Settings → API |
| `VITE_ADSENSE_CLIENT_ID` | Display ads (optional) | Google AdSense, once approved |
| `VITE_GA_MEASUREMENT_ID` | Analytics (optional) | Google Analytics 4 property |

## Production build

```bash
npm run build    # tsc -b && vite build — output goes to dist/
npm run preview  # serve the production build locally to sanity-check it
npm run lint     # oxlint
```

Deploy `dist/` to any static host. This repo ships SPA-fallback config for the two most common ones —
`public/_redirects` (Netlify) and `vercel.json` (Vercel) — so a direct link to a route like `/leaderboard` doesn't
404 at the host level before React Router gets a chance to render it. Using a different host (Cloudflare Pages,
GitHub Pages, S3 + CloudFront, etc.)? It needs an equivalent "serve index.html for unknown paths" rule.

## Stack

- **React 19 + TypeScript** — components in `src/components`, pages in `src/pages`
- **Tailwind CSS v4** — theme tokens in `src/index.css`
- **React Router** — routes wired in `src/App.tsx`
- **Supabase** — auth + Postgres database, schema in `supabase/schema.sql`, data access in `src/services/db.ts`

## Project structure

```
src/
  components/     Reusable UI (Button, Card, Navbar, QuizQuestionCard, ScenarioPlayer, ...)
  context/        AuthContext (Supabase auth), ProgressContext (XP/streak/badges), ToastContext
  data/           Lesson, scenario, daily challenge, badge, category, and level content
  pages/          One file per route
  services/       db.ts (Supabase data access), adService.ts (rewarded-ad abstraction)
  types/          Shared TypeScript types — the contract between content and UI
  utils/          Pure helper functions (dates, XP math, calculators, badge evaluation)
supabase/
  schema.sql      Full database schema, RLS policies, and the record_activity() function
scripts/
  smoke-test.mjs        Automated route-by-route console-error check (Playwright)
  interaction-test.mjs  Automated interaction check: quizzes, scenarios, calculators, auth gating
```

## Content

38 lessons across 7 topics (Money Basics, Budgeting, Credit & Debt, Investing, Taxes, Real Estate, Retirement), 10
real-life financial scenarios, 16 daily challenge questions, and 11 badges — all in `src/data/`, typed against
`src/types/index.ts` so new content is just adding another object to an array.

## Educational disclaimer

School of Cents is an educational platform. Content is provided for general educational purposes and does not constitute
financial, investment, tax, or legal advice.

## Roadmap

- Banking lessons (the category exists in the UI, marked "Coming soon" — no content behind it yet)
- A genuine self-service account-deletion flow (today, requests go through the Contact page)
- A real newsletter provider and AdSense/GA4 account, once traffic exists to justify them
- Broader lesson content (more topics, more depth per topic)

## Author

Built by Kiaan Kothari as a financial-literacy project for students.

## License

No LICENSE file is included, so default copyright applies: all rights reserved, no one else may copy, modify, or
redistribute this code without permission. 
