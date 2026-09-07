import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { LinkButton } from '@/components/ui/Button'
import { ScenarioPlayer } from '@/components/ScenarioPlayer'
import { SCENARIOS } from '@/data/scenarios'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function ScenarioDetail() {
  const { scenarioId } = useParams<{ scenarioId: string }>()
  const scenario = SCENARIOS.find((s) => s.id === scenarioId)
  const { user } = useAuth()
  const { scenarioProgress, completeScenario } = useProgress()
  useDocumentTitle(scenario?.title)
  const [saved, setSaved] = useState(false)

  if (!scenario) return <Navigate to="/real-life" replace />

  const existing = scenarioProgress[scenario.id]

  async function handleDecide(optionId: string) {
    if (user && !existing?.completed) {
      await completeScenario(scenario!, optionId)
      setSaved(true)
    }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <Link to="/real-life" className="text-sm font-medium text-ink-faint hover:text-brand-700">
          ← Real Life
        </Link>

        <div className="mt-4">
          <ScenarioPlayer scenario={scenario} onDecide={handleDecide} initialChoiceId={existing?.chosenOptionId} />
        </div>

        {!user && (
          <p className="mt-4 text-center text-sm text-ink-faint">
            <Link to="/signup" className="font-semibold text-brand-700 underline">
              Create a free account
            </Link>{' '}
            to save your decision and earn XP.
          </p>
        )}
        {user && saved && (
          <p className="mt-4 text-center text-sm font-semibold text-brand-700">+{scenario.xp} XP earned — nice work.</p>
        )}

        <div className="mt-8 text-center">
          <LinkButton to="/real-life" variant="secondary">
            Try another scenario
          </LinkButton>
        </div>
      </div>
    </Layout>
  )
}
