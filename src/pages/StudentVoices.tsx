import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { LinkButton } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { useAuth } from '@/context/AuthContext'
import { fetchPublishedPosts } from '@/services/db'
import { CATEGORY_LABELS, MIN_WORDS, byline, excerpt, formatPostDate, readingMinutes } from '@/data/studentVoices'
import type { StudentPost } from '@/types'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function StudentVoices() {
  useDocumentTitle('Student Voices')
  const { configured } = useAuth()
  const [posts, setPosts] = useState<StudentPost[]>([])
  const [loading, setLoading] = useState(configured)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!configured) return
    let active = true
    fetchPublishedPosts()
      .then((rows) => {
        if (active) setPosts(rows)
      })
      .catch((err) => {
        console.error(err)
        if (active) setError('Could not load posts right now. Please try again in a moment.')
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
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-200">
            ✍️ The School of Cents blog
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Student Voices</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Essays and articles about money, written by high school students. Got something to say about saving,
            spending, work, or the economy? Get published here.
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton to="/blog/submit" size="lg">
              Submit Your Writing
            </LinkButton>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        {loading ? (
          <LoadingSpinner className="mt-4" />
        ) : error ? (
          <p className="text-center text-sm text-coral-500">{error}</p>
        ) : posts.length === 0 ? (
          <EmptyState
            icon="📝"
            title="Be the first student published"
            description="We're just getting started. Send in an essay or article about money and it could be the very first post here."
            action={<LinkButton to="/blog/submit">Submit Your Writing</LinkButton>}
          />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex flex-col rounded-2xl border border-ink/[0.06] bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-600">
                  <span>{CATEGORY_LABELS[post.category]}</span>
                  <span className="text-ink/20">•</span>
                  <span className="font-medium normal-case tracking-normal text-ink-faint">{readingMinutes(post.body)} min read</span>
                </div>
                <h2 className="mt-2 font-display text-xl font-bold text-ink group-hover:text-brand-700">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{excerpt(post.body)}</p>
                <p className="mt-4 text-xs text-ink-faint">
                  {byline(post)} · {formatPostDate(post.publishedAt)}
                </p>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 rounded-2xl border border-ink/[0.06] bg-white p-6 shadow-soft sm:p-8">
          <h2 className="font-display text-xl font-bold text-ink">How to get published</h2>
          <ol className="mt-4 space-y-3 text-sm text-ink-soft">
            <li>
              <span className="font-semibold text-ink">1. Write about money.</span> Personal finance, saving, first jobs,
              investing, the economy, entrepreneurship — anything connected to money and real life.
            </li>
            <li>
              <span className="font-semibold text-ink">2. Submit it.</span> Create a free account and paste your piece
              into the submission form. At least {MIN_WORDS} words.
            </li>
            <li>
              <span className="font-semibold text-ink">3. We review it.</span> Every piece is read before it goes live.
              If it's approved, it's published here with the name you choose.
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  )
}
