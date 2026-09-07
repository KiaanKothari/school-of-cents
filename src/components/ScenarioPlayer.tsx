import { useState } from 'react'
import { cn } from '@/utils/cn'
import type { Scenario } from '@/types'

interface ScenarioPlayerProps {
  scenario: Scenario
  onDecide?: (optionId: string) => void
  initialChoiceId?: string | null
}

export function ScenarioPlayer({ scenario, onDecide, initialChoiceId = null }: ScenarioPlayerProps) {
  const [chosen, setChosen] = useState<string | null>(initialChoiceId)

  function choose(optionId: string) {
    if (chosen) return
    setChosen(optionId)
    onDecide?.(optionId)
  }

  const chosenOption = scenario.options.find((o) => o.id === chosen)

  return (
    <div className="rounded-2xl border border-ink/[0.06] bg-white p-6 shadow-soft sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-3xl">{scenario.icon}</div>
        <div>
          <h1 className="font-display text-xl font-bold text-ink text-balance">{scenario.title}</h1>
          <p className="mt-1 text-sm text-ink-faint">{scenario.context}</p>
        </div>
      </div>

      <p className="mt-6 font-display text-lg font-semibold text-ink text-balance">{scenario.prompt}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {scenario.options.map((option) => {
          const isChosen = option.id === chosen
          return (
            <button
              key={option.id}
              onClick={() => choose(option.id)}
              disabled={Boolean(chosen)}
              className={cn(
                'rounded-xl border p-4 text-left text-sm font-medium transition-all',
                !chosen && 'border-ink/10 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-soft',
                isChosen && 'border-brand-500 bg-brand-50 ring-2 ring-brand-200',
                chosen && !isChosen && 'border-ink/5 text-ink-faint opacity-50',
              )}
            >
              <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-600">Option {option.id.toUpperCase()}</span>
              {option.label}
            </button>
          )
        })}
      </div>

      {chosenOption && (
        <div className="animate-fade-up mt-6 space-y-4 rounded-xl border border-ink/[0.06] bg-paper-dim/60 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-600">What tends to happen</p>
            <p className="mt-1 text-sm text-ink-soft">{chosenOption.outcome}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600">Upside</p>
              <ul className="mt-1 space-y-1 text-sm text-ink-soft">
                {chosenOption.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-500">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-coral-500">Tradeoffs</p>
              <ul className="mt-1 space-y-1 text-sm text-ink-soft">
                {chosenOption.cons.map((con, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-coral-500">–</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-ink/[0.06] pt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-ink">The honest takeaway</p>
            <p className="mt-1 text-sm text-ink-soft">{scenario.takeaway}</p>
          </div>
        </div>
      )}
    </div>
  )
}
