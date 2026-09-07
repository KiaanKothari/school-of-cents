import { Link } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { TopicCard } from '@/components/TopicCard'
import { CATEGORIES } from '@/data/categories'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { lessonsForCategory } from '@/data/lessons'
import { AdSlot } from '@/components/ads/AdSlot'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function Learn() {
  const { user } = useAuth()
  const { categoryProgressPercent } = useProgress()
  useDocumentTitle('Learn')

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Explore Topics</h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-faint">
            Seven skill paths, each built from short, focused lessons you can finish on a coffee break.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => {
            const hasLessons = lessonsForCategory(category.id).length > 0
            return (
              <TopicCard
                key={category.id}
                category={category}
                percent={user && hasLessons ? categoryProgressPercent(category.id) : undefined}
              />
            )
          })}
        </div>
        {!user && (
          <p className="mt-10 text-center text-sm text-ink-faint">
            <Link to="/signup" className="font-semibold text-brand-700 underline">
              Create a free account
            </Link>{' '}
            to save your progress across topics.
          </p>
        )}
        <div className="mt-12">
          <AdSlot slot="0000000001" />
        </div>
      </div>
    </Layout>
  )
}
