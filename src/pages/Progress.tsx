import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { StreakCalendar } from '@/components/StreakCalendar'
import { BadgeTile } from '@/components/BadgeTile'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { CATEGORIES } from '@/data/categories'
import { LESSONS } from '@/data/lessons'
import { SCENARIOS } from '@/data/scenarios'
import { BADGES } from '@/data/badges'
import { levelForXp, levelProgressPercent, nextLevel } from '@/data/levels'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function ProgressPage() {
  useDocumentTitle('Your Progress')
  const { profile } = useAuth()
  const { categoryProgressPercent, completedLessonsCount, completedScenariosCount, badgesEarned, streakDates, ready } =
    useProgress()

  if (!profile || !ready) {
    return (
      <Layout>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="h-40 animate-shimmer rounded-2xl bg-gradient-to-r from-paper-dim via-white to-paper-dim" />
        </div>
      </Layout>
    )
  }

  const level = levelForXp(profile.xp)
  const next = nextLevel(profile.xp)
  const trackedCategories = CATEGORIES.filter((c) => c.id !== 'banking')

  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">Your Progress</h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Level</p>
            <p className="mt-1 font-display text-2xl font-bold text-ink">{level.level}</p>
            <p className="text-sm text-ink-faint">{level.name}</p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Total XP</p>
            <p className="mt-1 font-display text-2xl font-bold text-ink">{profile.xp.toLocaleString()}</p>
            <p className="text-sm text-ink-faint">{next ? `${(next.minXp - profile.xp).toLocaleString()} to next level` : 'Max level!'}</p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Streak</p>
            <p className="mt-1 font-display text-2xl font-bold text-ink">🔥 {profile.currentStreak}</p>
            <p className="text-sm text-ink-faint">Longest: {profile.longestStreak} days</p>
          </Card>
        </div>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Level Progress</h2>
          <Card className="mt-3">
            <ProgressBar percent={levelProgressPercent(profile.xp)} />
            <p className="mt-2 text-sm text-ink-faint">
              {next ? `${levelProgressPercent(profile.xp)}% of the way to Level ${next.level} — ${next.name}` : "You've reached the top level."}
            </p>
          </Card>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Learning Streak</h2>
          <Card className="mt-3">
            <StreakCalendar streakDates={streakDates} />
            <p className="mt-3 text-sm text-ink-faint">
              {profile.currentStreak > 0 ? "You're building a habit!" : 'Complete a lesson today to start a new streak.'}
            </p>
          </Card>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Topic Progress</h2>
          <Card className="mt-3 space-y-4">
            {trackedCategories.map((category) => {
              const percent = categoryProgressPercent(category.id)
              return (
                <div key={category.id}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{category.icon} {category.name}</span>
                    <span className="text-ink-faint">{percent}%</span>
                  </div>
                  <ProgressBar percent={percent} className="mt-1.5" />
                </div>
              )
            })}
          </Card>
        </section>

        <section className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="text-center">
              <p className="font-display text-2xl font-bold text-ink">{completedLessonsCount} / {LESSONS.length}</p>
              <p className="text-sm text-ink-faint">Lessons completed</p>
            </Card>
            <Card className="text-center">
              <p className="font-display text-2xl font-bold text-ink">{completedScenariosCount} / {SCENARIOS.length}</p>
              <p className="text-sm text-ink-faint">Scenarios decided</p>
            </Card>
          </div>
        </section>

        <section className="mt-8 mb-4">
          <h2 className="font-display text-lg font-bold text-ink">Achievements</h2>
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
