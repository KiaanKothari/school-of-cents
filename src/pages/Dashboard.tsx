import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Button, LinkButton } from '@/components/ui/Button'
import { BadgeTile } from '@/components/BadgeTile'
import { RewardedAdModal } from '@/components/RewardedAdModal'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { CATEGORIES } from '@/data/categories'
import { categoryById } from '@/data/categories'
import { BADGES } from '@/data/badges'
import { levelForXp, levelProgressPercent, nextLevel } from '@/data/levels'
import { greeting, todayISO } from '@/utils/date'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function Dashboard() {
  useDocumentTitle('Dashboard')
  const { profile } = useAuth()
  const { continueLesson, categoryProgressPercent, todaysChallenge, todaysChallengeProgress, badgesEarned, ready, awardBonusXp } =
    useProgress()
  const [adOpen, setAdOpen] = useState(false)
  const [claimingBonus, setClaimingBonus] = useState(false)

  if (!profile || !ready) {
    return (
      <Layout>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="h-40 animate-shimmer rounded-2xl bg-gradient-to-r from-paper-dim via-white to-paper-dim" />
        </div>
      </Layout>
    )
  }

  const level = levelForXp(profile.xp)
  const next = nextLevel(profile.xp)
  const progressToNext = levelProgressPercent(profile.xp)
  const bonusClaimed = profile.lastBonusClaimDate === todayISO()
  const upNext = continueLesson()
  const upNextCategory = upNext ? categoryById(upNext.categoryId) : null
  const trackedCategories = CATEGORIES.filter((c) => c.id !== 'banking')

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {greeting()}, {profile.displayName} 👋
        </h1>

        {/* Journey card */}
        <Card className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-600">Your Financial Journey</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-ink">
                Level {level.level} — {level.name}
              </p>
              <p className="mt-0.5 text-sm text-ink-faint">
                {profile.xp.toLocaleString()} XP {next && `· ${(next.minXp - profile.xp).toLocaleString()} XP to Level ${next.level}`}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-2 text-sm font-bold text-ink">
              🔥 {profile.currentStreak} day{profile.currentStreak === 1 ? '' : 's'} streak
            </div>
          </div>
          <ProgressBar percent={progressToNext} className="mt-4" label="Progress to next level" />
        </Card>

        {/* Continue learning */}
        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Continue Learning</h2>
          {upNext ? (
            <Card className="mt-3 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                  {upNextCategory?.icon ?? '📘'}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{upNextCategory?.name}</p>
                  <p className="font-display font-bold text-ink">{upNext.title}</p>
                  <p className="text-sm text-ink-faint">{upNext.estimatedMinutes} min · {upNext.xp} XP</p>
                </div>
              </div>
              <LinkButton to={`/lesson/${upNext.id}`}>Continue</LinkButton>
            </Card>
          ) : (
            <Card className="mt-3">
              <p className="text-sm text-ink-faint">You've completed every lesson. Incredible work — check back for new content soon.</p>
            </Card>
          )}
        </section>

        {/* Progress bars */}
        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Your Progress</h2>
          <Card className="mt-3 space-y-4">
            {trackedCategories.map((category) => {
              const percent = categoryProgressPercent(category.id)
              return (
                <div key={category.id}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{category.icon} {category.shortName}</span>
                    <span className="text-ink-faint">{percent}%</span>
                  </div>
                  <ProgressBar percent={percent} className="mt-1.5" />
                </div>
              )
            })}
          </Card>
        </section>

        {/* Today's challenge */}
        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Today's Challenge</h2>
          <Card className="mt-3 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display font-bold text-ink">{todaysChallenge.title}</p>
              <p className="mt-1 text-sm text-ink-faint">{todaysChallenge.prompt}</p>
              {todaysChallengeProgress?.completed && (
                <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">✓ Completed today</p>
              )}
            </div>
            {todaysChallengeProgress?.completed ? (
              <Button variant="secondary" disabled>
                Done for today
              </Button>
            ) : (
              <LinkButton to="/challenges">Take the Challenge</LinkButton>
            )}
          </Card>
        </section>

        {/* Bonus content via rewarded ad */}
        <section className="mt-8">
          <Card className="flex flex-col items-start justify-between gap-4 border-dashed sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/20 text-2xl">🎁</div>
              <div>
                <p className="font-display font-bold text-ink">Bonus Boost</p>
                <p className="text-sm text-ink-faint">
                  {bonusClaimed ? "You've claimed today's bonus XP." : 'Watch a short ad to unlock 25 bonus XP.'}
                </p>
              </div>
            </div>
            <Button variant="secondary" onClick={() => setAdOpen(true)} disabled={bonusClaimed || claimingBonus}>
              {bonusClaimed ? 'Claimed' : 'Watch Ad'}
            </Button>
          </Card>
        </section>

        <RewardedAdModal
          open={adOpen}
          reward="bonus_xp"
          onClose={() => setAdOpen(false)}
          onGranted={async () => {
            setClaimingBonus(true)
            try {
              await awardBonusXp(25, 'Bonus Boost')
            } catch {
              // Most likely it was already claimed today (e.g. from another
              // tab) — the profile's already-current lastBonusClaimDate will
              // flip the button to "Claimed" on its own, so there's nothing
              // else to show here.
            } finally {
              setClaimingBonus(false)
            }
          }}
        />

        {/* Achievements */}
        <section className="mt-8 mb-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-ink">Your Achievements</h2>
            <Link to="/profile" className="text-sm font-semibold text-brand-700 hover:underline">
              View profile
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {BADGES.map((badge) => (
              <BadgeTile key={badge.id} badge={badge} earned={badgesEarned.has(badge.id)} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
