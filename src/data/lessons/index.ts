import type { Lesson } from '@/types'
import { moneyBasicsLessons } from './money-basics'
import { budgetingLessons } from './budgeting'
import { creditDebtLessons } from './credit-debt'
import { investingLessons } from './investing'
import { taxesLessons } from './taxes'
import { realEstateLessons } from './real-estate'
import { retirementLessons } from './retirement'

export const LESSONS: Lesson[] = [
  ...moneyBasicsLessons,
  ...budgetingLessons,
  ...creditDebtLessons,
  ...investingLessons,
  ...taxesLessons,
  ...realEstateLessons,
  ...retirementLessons,
]

export function lessonsForCategory(categoryId: string): Lesson[] {
  return LESSONS.filter((l) => l.categoryId === categoryId).sort((a, b) => a.order - b.order)
}

export function lessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id)
}
