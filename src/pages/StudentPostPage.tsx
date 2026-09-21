import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { LinkButton } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { useAuth } from '@/context/AuthContext'
import { fetchPublishedPost } from '@/services/db'
import { CATEGORY_LABELS, byline, formatPostDate, readingMinutes } from '@/data/studentVoices'
import type { StudentPost } from '@/types'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function StudentPostPage() {
  const { postId } = useParams<{ postId: string }>()
  const { configured } = useAuth()
  const [post, setPost] = useState<StudentPost | null>(null)
  const [loading, setLoading] = useState(configured)
  const [error, setError] = useState<string | null>(null)
  useDocumentTitle(post ? post.title : 'Student Voices')

  useEffect(() => {
    if (!configured || !postId) return
    let active = true
    fetchPublishedPost(postId)
      .then((row) => {
        if (active) setPost(row)
      })
      .catch((err) => {
        console.error(err)
        if (active) setError('Could not load this post right now.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [configured, postId])

  // Plain text only — split on blank lines into paragraphs. No HTML is ever
  // rendered from a submission, so there's nothing a student can inject.
  const paragraphs = post ? post.body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean) : []

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
        <Link to="/blog" className="text-sm font-semibold text-brand-700 hover:underline">
          ← All Student Voices
        </Link>

        {loading ? (
          <LoadingSpinner className="mt-10" />
        ) : error ? (
          <p className="mt-10 text-center text-sm text-coral-500">{error}</p>
        ) : !post ? (
          <EmptyState
            className="mt-10"
            icon="🔍"
            title="Post not found"
            description="This post may have been removed or hasn't been published yet."
            action={<LinkButton to="/blog">Back to Student Voices</LinkButton>}
          />
        ) : (
          <article className="mt-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-600">
              <span>{CATEGORY_LABELS[post.category]}</span>
              <span className="text-ink/20">•</span>
              <span className="font-medium normal-case tracking-normal text-ink-faint">{readingMinutes(post.body)} min read</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{post.title}</h1>
            <p className="mt-3 text-sm text-ink-faint">
              By {byline(post)} · {formatPostDate(post.publishedAt)}
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i} className="whitespace-pre-line">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14 rounded-2xl border border-ink/[0.06] bg-white p-6 text-center shadow-soft">
              <p className="font-display text-lg font-bold text-ink">Have something to say about money?</p>
              <p className="mt-1 text-sm text-ink-faint">High school students can submit essays and articles to be published here.</p>
              <div className="mt-4 flex justify-center">
                <LinkButton to="/blog/submit">Submit Your Writing</LinkButton>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-ink-faint">
              Student Voices pieces are the opinions of their student authors and are not financial advice.
            </p>
          </article>
        )}
      </div>
    </Layout>
  )
}
