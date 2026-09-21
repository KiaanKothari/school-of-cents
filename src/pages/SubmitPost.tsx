import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { FieldLabel, FormError, inputClass } from '@/components/auth/AuthShell'
import { Button, LinkButton } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAuth } from '@/context/AuthContext'
import { fetchMySubmissions, submitStudentPost } from '@/services/db'
import { CATEGORY_LABELS, GRADE_LABELS, MAX_CHARS, MIN_WORDS, formatPostDate, wordCount } from '@/data/studentVoices'
import type { StudentGrade, StudentPost, StudentPostCategory } from '@/types'
import { cn } from '@/utils/cn'
import { useDocumentTitle } from '@/utils/useDocumentTitle'
import { trackEvent } from '@/services/analytics'

const STATUS_STYLES: Record<StudentPost['status'], { label: string; className: string }> = {
  pending: { label: 'In review', className: 'bg-gold-400/20 text-gold-500' },
  approved: { label: 'Published', className: 'bg-brand-50 text-brand-700' },
  rejected: { label: 'Not published', className: 'bg-ink/5 text-ink-faint' },
}

export default function SubmitPost() {
  useDocumentTitle('Submit to Student Voices')
  const { user, profile } = useAuth()

  const [authorName, setAuthorName] = useState(profile?.displayName ?? '')
  const [school, setSchool] = useState('')
  const [grade, setGrade] = useState<StudentGrade | ''>('')
  const [category, setCategory] = useState<StudentPostCategory>('essay')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [original, setOriginal] = useState(false)
  const [consent, setConsent] = useState(false)

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [mine, setMine] = useState<StudentPost[]>([])

  const loadMine = useCallback(async () => {
    if (!user) return
    try {
      setMine(await fetchMySubmissions(user.id))
    } catch (err) {
      console.error(err)
    }
  }, [user])

  useEffect(() => {
    if (!user) return
    let active = true
    fetchMySubmissions(user.id)
      .then((rows) => {
        if (active) setMine(rows)
      })
      .catch((err) => console.error(err))
    return () => {
      active = false
    }
  }, [user])

  const words = wordCount(body)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    if (authorName.trim().length < 2) return setError('Please enter the name you want shown on your piece.')
    if (title.trim().length < 5) return setError('Your title needs to be at least 5 characters.')
    if (words < MIN_WORDS) return setError(`Your piece needs at least ${MIN_WORDS} words (it's ${words} right now).`)
    if (body.length > MAX_CHARS) return setError('Your piece is too long — please keep it under about 3,000 words.')
    if (!original || !consent) return setError('Please check both boxes before submitting.')

    setSubmitting(true)
    try {
      await submitStudentPost({
        authorName: authorName.trim(),
        school: school.trim() || null,
        grade: grade || null,
        category,
        title: title.trim(),
        body: body.trim(),
      })
      trackEvent('student_post_submitted', { category })
      setSubmitted(true)
      setTitle('')
      setBody('')
      setOriginal(false)
      setConsent(false)
      await loadMine()
    } catch (err) {
      const message = err instanceof Error ? err.message : ''
      setError(
        message.includes('waiting for review')
          ? message
          : 'Something went wrong sending your piece. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/blog" className="text-sm font-semibold text-brand-700 hover:underline">
          ← Student Voices
        </Link>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink">Submit your writing</h1>
        <p className="mt-2 max-w-2xl text-ink-faint">
          Write something about money and get published on School of Cents. Every piece is reviewed before it goes live.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            {submitted && (
              <Card className="mb-6 border-brand-100 bg-brand-50/60">
                <p className="font-semibold text-ink">🎉 Got it — your piece is in review.</p>
                <p className="mt-1 text-sm text-ink-soft">
                  You'll see its status under "Your submissions." If it's approved, it'll be published on Student Voices.
                </p>
              </Card>
            )}

            <Card>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="sv-name">Name to show on your piece</FieldLabel>
                    <input
                      id="sv-name"
                      className={inputClass}
                      value={authorName}
                      maxLength={60}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Maya R."
                    />
                    <p className="mt-1 text-xs text-ink-faint">First name + last initial is a good choice.</p>
                  </div>
                  <div>
                    <FieldLabel htmlFor="sv-school">School (optional)</FieldLabel>
                    <input
                      id="sv-school"
                      className={inputClass}
                      value={school}
                      maxLength={100}
                      onChange={(e) => setSchool(e.target.value)}
                      placeholder="e.g. Lincoln High School"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="sv-grade">Grade (optional)</FieldLabel>
                    <select id="sv-grade" className={inputClass} value={grade} onChange={(e) => setGrade(e.target.value as StudentGrade | '')}>
                      <option value="">Prefer not to say</option>
                      {(Object.keys(GRADE_LABELS) as StudentGrade[]).map((g) => (
                        <option key={g} value={g}>
                          {g === 'other' ? 'Other' : GRADE_LABELS[g]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <FieldLabel htmlFor="sv-category">Type of piece</FieldLabel>
                    <select
                      id="sv-category"
                      className={inputClass}
                      value={category}
                      onChange={(e) => setCategory(e.target.value as StudentPostCategory)}
                    >
                      {(Object.keys(CATEGORY_LABELS) as StudentPostCategory[]).map((c) => (
                        <option key={c} value={c}>
                          {CATEGORY_LABELS[c]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <FieldLabel htmlFor="sv-title">Title</FieldLabel>
                  <input
                    id="sv-title"
                    className={inputClass}
                    value={title}
                    maxLength={120}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. What my first paycheck taught me"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="sv-body">Your piece</FieldLabel>
                  <textarea
                    id="sv-body"
                    className={cn(inputClass, 'min-h-[320px] leading-relaxed')}
                    value={body}
                    maxLength={MAX_CHARS}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Paste or write your essay or article here. Leave a blank line between paragraphs."
                  />
                  <p className={cn('mt-1 text-xs', words >= MIN_WORDS ? 'text-brand-700' : 'text-ink-faint')}>
                    {words.toLocaleString()} words {words < MIN_WORDS && `· at least ${MIN_WORDS} needed`}
                  </p>
                </div>

                <div className="space-y-3 rounded-xl bg-paper-dim/60 p-4">
                  <label className="flex items-start gap-3 text-sm text-ink-soft">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 accent-brand-600" checked={original} onChange={(e) => setOriginal(e.target.checked)} />
                    <span>This is my own original writing, and I didn't copy it from anywhere else.</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm text-ink-soft">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 accent-brand-600" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                    <span>
                      I'm okay with School of Cents publishing this publicly with the name above (and school/grade if I
                      added them). If I'm under 18, a parent or guardian knows I'm submitting.
                    </span>
                  </label>
                </div>

                <FormError message={error} />
                <Button type="submit" loading={submitting} className="w-full sm:w-auto">
                  Submit for review
                </Button>
              </form>
            </Card>
          </div>

          <aside className="space-y-6">
            <Card>
              <h2 className="font-display text-base font-bold text-ink">What we're looking for</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>💡 Anything connected to money — saving, spending, jobs, investing, the economy, starting a business.</li>
                <li>🙋 Your own experience and opinions. Real stories beat textbook summaries.</li>
                <li>📏 {MIN_WORDS}–3,000 words. Essays for class are welcome if they fit the topic.</li>
                <li>🚫 No personal info like phone numbers or addresses, and nothing hateful or copied.</li>
              </ul>
            </Card>

            <Card>
              <h2 className="font-display text-base font-bold text-ink">Your submissions</h2>
              {mine.length === 0 ? (
                <p className="mt-3 text-sm text-ink-faint">Nothing yet — your first piece will show up here.</p>
              ) : (
                <ul className="mt-3 space-y-3">
                  {mine.map((p) => (
                    <li key={p.id} className="text-sm">
                      <div className="flex items-start justify-between gap-2">
                        {p.status === 'approved' ? (
                          <Link to={`/blog/${p.id}`} className="font-semibold text-ink hover:text-brand-700">
                            {p.title}
                          </Link>
                        ) : (
                          <span className="font-semibold text-ink">{p.title}</span>
                        )}
                        <span className={cn('shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold', STATUS_STYLES[p.status].className)}>
                          {STATUS_STYLES[p.status].label}
                        </span>
                      </div>
                      <p className="text-xs text-ink-faint">Sent {formatPostDate(p.createdAt)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </Card>

            <LinkButton to="/blog" variant="secondary" className="w-full">
              Read Student Voices
            </LinkButton>
          </aside>
        </div>
      </div>
    </Layout>
  )
}
