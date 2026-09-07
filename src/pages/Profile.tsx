import { useState, type FormEvent } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BadgeTile } from '@/components/BadgeTile'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { setShowOnLeaderboard } from '@/services/db'
import { BADGES } from '@/data/badges'
import { CATEGORIES } from '@/data/categories'
import { levelForXp } from '@/data/levels'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function Profile() {
  useDocumentTitle('My Profile')
  const { profile, updateDisplayName, setProfile } = useAuth()
  const { categoryProgressPercent, completedLessonsCount, completedScenariosCount, badgesEarned, ready } = useProgress()

  const [name, setName] = useState(profile?.displayName ?? '')
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [toggling, setToggling] = useState(false)

  if (!profile || !ready) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="h-40 animate-shimmer rounded-2xl bg-gradient-to-r from-paper-dim via-white to-paper-dim" />
        </div>
      </Layout>
    )
  }

  const level = levelForXp(profile.xp)
  const trackedCategories = CATEGORIES.filter((c) => c.id !== 'banking')

  async function handleSave(e: FormEvent) {
    e.preventDefault()
    if (!name.trim()) {
      setError('Display name cannot be empty.')
      return
    }
    setSaving(true)
    setError(null)
    const { error: err } = await updateDisplayName(name.trim())
    setSaving(false)
    if (err) {
      setError(err)
      return
    }
    setEditing(false)
  }

  async function handleToggleLeaderboard() {
    if (!profile) return
    setToggling(true)
    try {
      const updated = await setShowOnLeaderboard(profile.id, !profile.showOnLeaderboard)
      setProfile(updated)
    } catch (err) {
      console.error(err)
    } finally {
      setToggling(false)
    }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">My Profile</h1>

        <Card className="mt-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 font-display text-2xl font-bold text-brand-700">
                {profile.displayName.slice(0, 1).toUpperCase()}
              </div>
              <div>
                {!editing ? (
                  <p className="font-display text-xl font-bold text-ink">{profile.displayName}</p>
                ) : (
                  <form onSubmit={handleSave} className="flex items-center gap-2">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-label="Display name"
                      className="rounded-lg border border-ink/10 px-3 py-1.5 text-sm focus:border-brand-400 focus:outline-none"
                      autoFocus
                    />
                    <Button size="sm" type="submit" loading={saving}>
                      Save
                    </Button>
                    <Button size="sm" type="button" variant="ghost" onClick={() => setEditing(false)}>
                      Cancel
                    </Button>
                  </form>
                )}
                <p className="text-sm text-ink-faint">
                  Level {level.level} — {level.name}
                </p>
              </div>
            </div>
            {!editing && (
              <Button size="sm" variant="secondary" onClick={() => setEditing(true)}>
                Edit name
              </Button>
            )}
          </div>
          {error && <p className="mt-3 text-sm text-coral-500">{error}</p>}
        </Card>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatTile label="XP" value={profile.xp.toLocaleString()} />
          <StatTile label="Current streak" value={`${profile.currentStreak}d`} />
          <StatTile label="Longest streak" value={`${profile.longestStreak}d`} />
          <StatTile label="Lessons" value={String(completedLessonsCount)} />
        </div>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Topic Progress</h2>
          <Card className="mt-3 grid gap-3 sm:grid-cols-2">
            {trackedCategories.map((category) => (
              <div key={category.id} className="flex items-center justify-between rounded-xl bg-paper-dim/60 px-4 py-2.5">
                <span className="text-sm font-medium text-ink">{category.icon} {category.shortName}</span>
                <span className="text-sm font-semibold text-brand-700">{categoryProgressPercent(category.id)}%</span>
              </div>
            ))}
          </Card>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Challenges Completed</h2>
          <Card className="mt-3">
            <p className="text-sm text-ink-soft">{completedScenariosCount} real-life scenarios decided so far.</p>
          </Card>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold text-ink">Leaderboard visibility</h2>
          <Card className="mt-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-ink">Show my profile on the public leaderboard</p>
              <p className="text-sm text-ink-faint">Your email is never shown — only your display name and XP.</p>
            </div>
            <button
              onClick={handleToggleLeaderboard}
              disabled={toggling}
              role="switch"
              aria-checked={profile.showOnLeaderboard}
              className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${profile.showOnLeaderboard ? 'bg-brand-500' : 'bg-ink/15'}`}
            >
              <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${profile.showOnLeaderboard ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </Card>
        </section>

        <section className="mt-8 mb-4">
          <h2 className="font-display text-lg font-bold text-ink">Badges</h2>
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

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <Card padded className="text-center">
      <p className="font-display text-xl font-bold text-ink">{value}</p>
      <p className="text-xs text-ink-faint">{label}</p>
    </Card>
  )
}
