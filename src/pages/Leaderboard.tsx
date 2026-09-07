import { useEffect, useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { EmptyState } from '@/components/ui/EmptyState'
import { useAuth } from '@/context/AuthContext'
import { fetchLeaderboard } from '@/services/db'
import type { LeaderboardEntry } from '@/types'
import { cn } from '@/utils/cn'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

const DEMO_ENTRIES: LeaderboardEntry[] = [
  { id: 'demo-1', displayName: 'Alex', xp: 1240, isDemo: true },
  { id: 'demo-2', displayName: 'Sam', xp: 1180, isDemo: true },
  { id: 'demo-3', displayName: 'Jordan', xp: 1050, isDemo: true },
  { id: 'demo-4', displayName: 'Riley', xp: 890, isDemo: true },
  { id: 'demo-5', displayName: 'Morgan', xp: 620, isDemo: true },
]

export default function Leaderboard() {
  const { user, profile, configured } = useAuth()
  const [entries, setEntries] = useState<LeaderboardEntry[]>(DEMO_ENTRIES)
  const [loading, setLoading] = useState(configured)
  const [error, setError] = useState<string | null>(null)
  useDocumentTitle('Leaderboard')

  useEffect(() => {
    if (!configured) return
    let active = true
    fetchLeaderboard(50)
      .then((real) => {
        if (!active) return
        const merged = [...real, ...DEMO_ENTRIES].sort((a, b) => b.xp - a.xp)
        setEntries(merged)
      })
      .catch((err) => {
        console.error(err)
        if (active) setError('Could not load live rankings — showing demo data.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [configured])

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-ink">This Week's School of Cents Leaders</h1>
          <p className="mt-2 text-ink-faint">Includes demo learners until the community grows — no email addresses shown, ever.</p>
        </div>

        {loading ? (
          <LoadingSpinner className="mt-10" />
        ) : entries.length === 0 ? (
          <EmptyState className="mt-10" icon="🏆" title="No leaders yet" description="Complete a lesson to be the first on the board." />
        ) : (
          <Card className="mt-8 divide-y divide-ink/[0.06] p-0">
            {entries.slice(0, 20).map((entry, i) => {
              const isMe = user && profile && entry.id === profile.id
              return (
                <div key={entry.id} className={cn('flex items-center gap-4 px-5 py-3.5', isMe && 'bg-brand-50')}>
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                      i === 0 && 'bg-gold-400/30 text-gold-500',
                      i === 1 && 'bg-ink/10 text-ink-soft',
                      i === 2 && 'bg-coral-400/20 text-coral-500',
                      i > 2 && 'bg-paper-dim text-ink-faint',
                    )}
                  >
                    {i + 1}
                  </span>
                  <p className="flex-1 truncate text-sm font-semibold text-ink">
                    {entry.displayName} {isMe && <span className="text-xs font-normal text-brand-600">(you)</span>}
                  </p>
                  {entry.isDemo && <span className="text-[10px] font-medium uppercase tracking-wide text-ink-faint">demo</span>}
                  <span className="text-sm font-bold text-brand-700">{entry.xp.toLocaleString()} XP</span>
                </div>
              )
            })}
          </Card>
        )}

        {error && <p className="mt-4 text-center text-sm text-coral-500">{error}</p>}

        {user && profile && !profile.showOnLeaderboard && (
          <p className="mt-6 text-center text-sm text-ink-faint">
            You're currently hidden from the leaderboard.{' '}
            <Link to="/profile" className="font-semibold text-brand-700 underline">
              Change this in your profile
            </Link>
            .
          </p>
        )}
      </div>
    </Layout>
  )
}
