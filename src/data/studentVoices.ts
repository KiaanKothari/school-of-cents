import type { StudentGrade, StudentPost, StudentPostCategory } from '@/types'

export const CATEGORY_LABELS: Record<StudentPostCategory, string> = {
  essay: 'Essay',
  article: 'Article',
  opinion: 'Opinion',
  story: 'Personal Story',
}

export const GRADE_LABELS: Record<StudentGrade, string> = {
  '9': '9th grade',
  '10': '10th grade',
  '11': '11th grade',
  '12': '12th grade',
  other: 'Student',
}

export const MIN_WORDS = 150
export const MAX_CHARS = 20000

export function wordCount(text: string): number {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

export function excerpt(text: string, max = 180): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, max).replace(/\s+\S*$/, '')}…`
}

export function readingMinutes(text: string): number {
  return Math.max(1, Math.round(wordCount(text) / 200))
}

/** "Maya R. · 11th grade · Lincoln High" — only the parts the student chose to share. */
export function byline(post: Pick<StudentPost, 'authorName' | 'grade' | 'school'>): string {
  return [post.authorName, post.grade ? GRADE_LABELS[post.grade] : null, post.school].filter(Boolean).join(' · ')
}

export function formatPostDate(iso: string | null): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
