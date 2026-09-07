import { useEffect, useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { useProgress } from '@/context/ProgressContext'
import { cn } from '@/utils/cn'
import { formatFriendlyDate, todayISO } from '@/utils/date'
import { useDocumentTitle } from '@/utils/useDocumentTitle'
import { trackEvent } from '@/services/analytics'

export default function Challenges() {
  useDocumentTitle("Today's Challenge")
  const { todaysChallenge, todaysChallengeProgress, completeDailyChallenge } = useProgress()
  const [selected, setSelected] = useState<string | null>(todaysChallengeProgress?.chosenChoiceId ?? null)
  const [submitting, setSubmitting] = useState(false)

  const answered = Boolean(selected)
  const chosenIsSoundest = selected === todaysChallenge.soundestChoiceId

  // todaysChallenge is a module-level constant (see ProgressContext) that
  // never changes for the lifetime of this page, so an empty deps array is
  // intentional here — this should fire exactly once, on mount.
  useEffect(() => {
    trackEvent('challenge_started', { challenge_id: todaysChallenge.id })
  }, [])

  async function choose(choiceId: string) {
    if (answered) return
    setSelected(choiceId)
    setSubmitting(true)
    await completeDailyChallenge(choiceId)
    setSubmitting(false)
    trackEvent('challenge_completed', { challenge_id: todaysChallenge.id })
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
            📅 {formatFriendlyDate(todayISO())}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink">Today's Money Challenge</h1>
          <p className="mt-2 text-ink-faint">One sharp question a day keeps your financial instincts sharp.</p>
        </div>

        <Card className="mt-8">
          <p className="font-display text-lg font-bold text-ink text-balance">{todaysChallenge.prompt}</p>

          <div className="mt-5 flex flex-col gap-2.5">
            {todaysChallenge.choices.map((choice) => {
              const isSoundest = choice.id === todaysChallenge.soundestChoiceId
              const isSelected = choice.id === selected
              return (
                <button
                  key={choice.id}
                  onClick={() => choose(choice.id)}
                  disabled={answered || submitting}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors',
                    !answered && 'border-ink/10 hover:border-brand-400 hover:bg-brand-50',
                    answered && isSoundest && 'border-brand-400 bg-brand-50 text-brand-800',
                    answered && isSelected && !isSoundest && 'border-gold-500/60 bg-gold-400/10 text-ink',
                    answered && !isSelected && !isSoundest && 'border-ink/5 text-ink-faint opacity-60',
                  )}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 text-xs font-bold text-ink-faint">
                    {choice.id.toUpperCase()}
                  </span>
                  {choice.text}
                </button>
              )
            })}
          </div>

          {answered && (
            <div className="animate-fade-up mt-5 rounded-xl border border-brand-200 bg-brand-50 px-4 py-4">
              <p className="text-sm font-semibold text-brand-800">
                {chosenIsSoundest ? "That's the soundest move here." : 'Here is the more financially sound reasoning:'}
              </p>
              <p className="mt-1.5 text-sm text-ink-soft">{todaysChallenge.explanation}</p>
              <p className="mt-3 text-sm font-semibold text-brand-700">+{todaysChallenge.xp} XP earned</p>
            </div>
          )}
        </Card>

        {answered && (
          <p className="mt-6 text-center text-sm text-ink-faint">Come back tomorrow for a brand new challenge. 🔥</p>
        )}
      </div>
    </Layout>
  )
}
