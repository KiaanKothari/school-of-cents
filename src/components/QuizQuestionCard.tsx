import { useState } from 'react'
import { cn } from '@/utils/cn'
import type { QuizQuestion } from '@/types'

interface QuizQuestionCardProps {
  question: QuizQuestion
  onAnswered?: (correct: boolean) => void
  questionNumber?: number
  totalQuestions?: number
}

export function QuizQuestionCard({ question, onAnswered, questionNumber, totalQuestions }: QuizQuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null)

  function choose(choiceId: string) {
    if (selected) return
    setSelected(choiceId)
    onAnswered?.(choiceId === question.correctChoiceId)
  }

  const isAnswered = selected !== null

  return (
    <div className="rounded-2xl border border-ink/[0.06] bg-white p-5 shadow-soft sm:p-6">
      {questionNumber && totalQuestions && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
          Question {questionNumber} of {totalQuestions}
        </p>
      )}
      <h3 className="font-display text-lg font-bold text-ink text-balance">{question.prompt}</h3>

      <div className="mt-4 flex flex-col gap-2.5">
        {question.choices.map((choice) => {
          const isCorrect = choice.id === question.correctChoiceId
          const isSelected = choice.id === selected
          return (
            <button
              key={choice.id}
              onClick={() => choose(choice.id)}
              disabled={isAnswered}
              className={cn(
                'flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors',
                !isAnswered && 'border-ink/10 hover:border-brand-400 hover:bg-brand-50',
                isAnswered && isCorrect && 'border-brand-400 bg-brand-50 text-brand-800',
                isAnswered && isSelected && !isCorrect && 'border-coral-400 bg-coral-400/10 text-coral-500',
                isAnswered && !isSelected && !isCorrect && 'border-ink/5 text-ink-faint opacity-60',
              )}
            >
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold',
                  isAnswered && isCorrect ? 'border-brand-500 bg-brand-500 text-white' : 'border-ink/20 text-ink-faint',
                  isAnswered && isSelected && !isCorrect && 'border-coral-500 bg-coral-500 text-white',
                )}
              >
                {isAnswered && isCorrect ? '✓' : isAnswered && isSelected ? '✕' : choice.id.toUpperCase()}
              </span>
              {choice.text}
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div
          className={cn(
            'animate-fade-up mt-4 rounded-xl border px-4 py-3 text-sm',
            selected === question.correctChoiceId ? 'border-brand-200 bg-brand-50 text-brand-800' : 'border-gold-400/40 bg-gold-400/10 text-ink-soft',
          )}
        >
          <p className="font-semibold">{selected === question.correctChoiceId ? 'Nice — that’s right!' : 'Not quite — here’s why:'}</p>
          <p className="mt-1 text-ink-soft">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
