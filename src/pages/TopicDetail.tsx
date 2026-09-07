import { Link, Navigate, useParams } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { LinkButton } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { categoryById } from '@/data/categories'
import { lessonsForCategory } from '@/data/lessons'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { cn } from '@/utils/cn'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function TopicDetail() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = categoryById(categoryId ?? '')
  const { user } = useAuth()
  const { lessonProgress, isLessonUnlocked, categoryProgressPercent } = useProgress()
  useDocumentTitle(category?.name)

  if (!category) return <Navigate to="/learn" replace />

  const lessons = lessonsForCategory(category.id)
  const percent = user ? categoryProgressPercent(category.id) : 0

  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <Link to="/learn" className="text-sm font-medium text-ink-faint hover:text-brand-700">
          ← All topics
        </Link>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-3xl">{category.icon}</div>
          <div>
            <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">{category.name}</h1>
            <p className="text-sm text-ink-faint">{category.description}</p>
          </div>
        </div>

        {user && lessons.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-ink">Overall progress</span>
              <span className="text-ink-faint">{percent}%</span>
            </div>
            <ProgressBar percent={percent} className="mt-1.5" />
          </div>
        )}

        <div className="mt-8 space-y-3">
          {lessons.length === 0 && (
            <EmptyState icon="🚧" title="Coming soon" description="We're building this topic out next — check back soon!" />
          )}

          {lessons.map((lesson, i) => {
            const progress = lessonProgress[lesson.id]
            const unlocked = user ? isLessonUnlocked(lesson) : i === 0
            const completed = Boolean(progress?.completed)
            return (
              <Card
                key={lesson.id}
                className={cn('flex items-center justify-between gap-4', !unlocked && 'opacity-60')}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      'flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold',
                      completed ? 'bg-brand-500 text-white' : unlocked ? 'bg-brand-50 text-brand-700' : 'bg-paper-dim text-ink-faint',
                    )}
                  >
                    {completed ? '✓' : unlocked ? i + 1 : '🔒'}
                  </div>
                  <div>
                    <p className="font-display font-bold text-ink">{lesson.title}</p>
                    <p className="text-sm text-ink-faint">
                      {lesson.estimatedMinutes} min · {lesson.xp} XP · {lesson.difficulty}
                    </p>
                  </div>
                </div>
                {unlocked ? (
                  <LinkButton to={`/lesson/${lesson.id}`} size="sm" variant={completed ? 'secondary' : 'primary'}>
                    {completed ? 'Review' : 'Start'}
                  </LinkButton>
                ) : (
                  <span className="text-xs font-medium text-ink-faint">Locked</span>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
