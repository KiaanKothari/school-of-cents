import { Link } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { SCENARIOS } from '@/data/scenarios'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function RealLife() {
  const { user } = useAuth()
  const { scenarioProgress } = useProgress()
  useDocumentTitle('Real Life Scenarios')

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
            🧭 Real Life
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">Face the decision, not just the theory</h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-faint">
            Ten realistic money moments. Pick a path, see the honest tradeoffs — there's rarely one right answer.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SCENARIOS.map((scenario) => {
            const done = user && scenarioProgress[scenario.id]?.completed
            return (
              <Link key={scenario.id} to={`/real-life/${scenario.id}`}>
                <Card className="flex h-full items-start gap-4 transition-all hover:-translate-y-0.5 hover:shadow-card">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                    {scenario.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-display font-bold text-ink">{scenario.title}</p>
                      {done && <span className="text-xs font-semibold text-brand-600">✓ Decided</span>}
                    </div>
                    <p className="mt-1 text-sm text-ink-faint">{scenario.prompt}</p>
                    <p className="mt-2 text-xs font-semibold text-brand-600">+{scenario.xp} XP</p>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
