import { BADGES } from '@/data/badges'
import { LESSONS, lessonsForCategory } from '@/data/lessons'
import type { BadgeDef, LessonProgressRow, Profile } from '@/types'

const CATEGORY_BADGE_MAP: Record<string, string> = {
  budget_category_complete: 'budgeting',
  credit_category_complete: 'credit-debt',
  investing_category_complete: 'investing',
  taxes_category_complete: 'taxes',
  real_estate_category_complete: 'real-estate',
}

function isCategoryComplete(categoryId: string, lessonProgress: Record<string, LessonProgressRow>): boolean {
  const lessons = lessonsForCategory(categoryId)
  if (lessons.length === 0) return false
  return lessons.every((l) => lessonProgress[l.id]?.completed)
}

function allCategoriesComplete(lessonProgress: Record<string, LessonProgressRow>): boolean {
  return LESSONS.every((l) => lessonProgress[l.id]?.completed)
}

/**
 * Given the latest known progress snapshot, returns any badges the user has
 * newly qualified for but doesn't already hold. Pure function — callers are
 * responsible for persisting the result via `awardBadge`.
 */
export function evaluateNewBadges(params: {
  profile: Profile
  lessonProgress: Record<string, LessonProgressRow>
  completedLessonsCount: number
  alreadyEarned: Set<string>
}): BadgeDef[] {
  const { profile, lessonProgress, completedLessonsCount, alreadyEarned } = params
  const earned: BadgeDef[] = []

  for (const badge of BADGES) {
    if (alreadyEarned.has(badge.id)) continue
    let qualifies = false

    switch (badge.criteria) {
      case 'first_lesson':
        qualifies = completedLessonsCount >= 1
        break
      case 'streak_7':
        qualifies = profile.currentStreak >= 7
        break
      case 'streak_30':
        qualifies = profile.currentStreak >= 30
        break
      case 'xp_1000':
        qualifies = profile.xp >= 1000
        break
      case 'lessons_25':
        qualifies = completedLessonsCount >= 25
        break
      case 'all_categories_complete':
        qualifies = allCategoriesComplete(lessonProgress)
        break
      case 'budget_category_complete':
      case 'credit_category_complete':
      case 'investing_category_complete':
      case 'taxes_category_complete':
      case 'real_estate_category_complete':
        qualifies = isCategoryComplete(CATEGORY_BADGE_MAP[badge.criteria], lessonProgress)
        break
    }

    if (qualifies) earned.push(badge)
  }

  return earned
}
