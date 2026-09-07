import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { Button, LinkButton } from '@/components/ui/Button'
import { QuizQuestionCard } from '@/components/QuizQuestionCard'
import { lessonById, lessonsForCategory } from '@/data/lessons'
import { categoryById } from '@/data/categories'
import { useProgress } from '@/context/ProgressContext'
import { useDocumentTitle } from '@/utils/useDocumentTitle'
import { trackEvent } from '@/services/analytics'
import type { BadgeDef } from '@/types'

export default function Lesson() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const navigate = useNavigate()
  const lesson = lessonById(lessonId ?? '')
  const { isLessonUnlocked, completeLesson, lessonProgress } = useProgress()
  useDocumentTitle(lesson?.title)

  const [stage, setStage] = useState<'content' | 'quiz' | 'done'>('content')
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [newBadges, setNewBadges] = useState<BadgeDef[]>([])
  const [saving, setSaving] = useState(false)
  // Captured at submit time, before completeLesson() flips lessonProgress to
  // completed — the reactive `alreadyCompleted` below updates immediately on
  // every submission, so the "done" screen needs its own frozen snapshot of
  // whether XP was actually (re-)awarded for this attempt.
  const [wasAlreadyCompleted, setWasAlreadyCompleted] = useState(false)

  const category = lesson ? categoryById(lesson.categoryId) : null
  const siblings = useMemo(() => (lesson ? lessonsForCategory(lesson.categoryId) : []), [lesson])
  const nextLesson = useMemo(() => {
    if (!lesson) return null
    const idx = siblings.findIndex((l) => l.id === lesson.id)
    return siblings[idx + 1] ?? null
  }, [lesson, siblings])

  // Keyed on lesson?.id so this only fires once per lesson visit, not on
  // every internal stage change (content -> quiz -> done).
  useEffect(() => {
    if (!lesson) return
    trackEvent('lesson_started', { lesson_id: lesson.id, category: lesson.categoryId })
  }, [lesson])

  if (!lesson || !category) return <Navigate to="/learn" replace />
  if (!isLessonUnlocked(lesson)) return <Navigate to={`/learn/${lesson.categoryId}`} replace />

  const alreadyCompleted = Boolean(lessonProgress[lesson.id]?.completed)
  const allAnswered = lesson.quiz.every((q) => q.id in answers)
  const correctCount = Object.values(answers).filter(Boolean).length

  async function handleFinish() {
    if (!lesson) return
    setSaving(true)
    setWasAlreadyCompleted(alreadyCompleted)
    const score = Math.round((correctCount / lesson.quiz.length) * 100)
    const { newBadges: earned } = await completeLesson(lesson, score)
    setSaving(false)
    setNewBadges(earned)
    setStage('done')
    if (!alreadyCompleted) {
      trackEvent('lesson_completed', { lesson_id: lesson.id, category: lesson.categoryId, score })
    }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <Link to={`/learn/${category.id}`} className="text-sm font-medium text-ink-faint hover:text-brand-700">
          ← {category.name}
        </Link>

        {stage !== 'done' && (
          <>
            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
                {category.icon} {category.name} · {lesson.estimatedMinutes} min · {lesson.xp} XP
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">{lesson.title}</h1>
              <p className="mt-1 text-ink-faint">{lesson.description}</p>
              {alreadyCompleted && (
                <p className="mt-2 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  ✓ You've completed this lesson before — reviewing won't re-award XP.
                </p>
              )}
            </div>

            {stage === 'content' && (
              <div className="mt-8 space-y-6">
                {lesson.sections.map((section) => (
                  <Card key={section.heading}>
                    <h2 className="font-display text-lg font-bold text-ink">{section.heading}</h2>
                    <div className="mt-2 space-y-3 text-sm leading-relaxed text-ink-soft">
                      {section.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {section.examples && section.examples.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {section.examples.map((ex) => (
                          <div key={ex.label} className="rounded-xl bg-brand-50 px-4 py-3">
                            <p className="text-xs font-bold uppercase tracking-wide text-brand-700">{ex.label}</p>
                            <p className="mt-0.5 text-sm text-ink-soft">{ex.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand-600">Quick check</p>
                  <QuizQuestionCard question={lesson.interactiveQuestion} />
                </div>

                <Button className="w-full" size="lg" onClick={() => setStage('quiz')}>
                  Start Quiz ({lesson.quiz.length} question{lesson.quiz.length === 1 ? '' : 's'})
                </Button>
              </div>
            )}

            {stage === 'quiz' && (
              <div className="mt-8 space-y-6">
                {lesson.quiz.map((q, i) => (
                  <QuizQuestionCard
                    key={q.id}
                    question={q}
                    questionNumber={i + 1}
                    totalQuestions={lesson.quiz.length}
                    onAnswered={(correct) => setAnswers((prev) => ({ ...prev, [q.id]: correct }))}
                  />
                ))}
                <Button className="w-full" size="lg" onClick={handleFinish} disabled={!allAnswered} loading={saving}>
                  Finish Lesson
                </Button>
              </div>
            )}
          </>
        )}

        {stage === 'done' && (
          <div className="animate-pop mt-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-4xl">🎉</div>
            <h1 className="mt-4 font-display text-2xl font-bold text-ink">
              {wasAlreadyCompleted ? 'Nice review!' : 'Lesson complete!'}
            </h1>
            <p className="mt-2 text-ink-faint">
              {wasAlreadyCompleted
                ? `You got ${correctCount} of ${lesson.quiz.length} quiz questions right. You already earned ${lesson.xp} XP for this lesson the first time through, so it isn't awarded again.`
                : `You got ${correctCount} of ${lesson.quiz.length} quiz questions right and earned ${lesson.xp} XP.`}
            </p>

            {newBadges.length > 0 && (
              <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-brand-200 bg-brand-50 p-4">
                <p className="text-sm font-semibold text-brand-800">New badge{newBadges.length > 1 ? 's' : ''} unlocked!</p>
                <div className="mt-2 flex justify-center gap-3">
                  {newBadges.map((b) => (
                    <div key={b.id} className="flex flex-col items-center gap-1">
                      <span className="text-3xl">{b.icon}</span>
                      <span className="text-xs font-medium text-ink">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {nextLesson ? (
                <Button size="lg" onClick={() => navigate(`/lesson/${nextLesson.id}`)}>
                  Next Lesson →
                </Button>
              ) : (
                <LinkButton size="lg" to="/dashboard">
                  Back to Dashboard
                </LinkButton>
              )}
              <LinkButton size="lg" variant="secondary" to={`/learn/${category.id}`}>
                Back to {category.name}
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
