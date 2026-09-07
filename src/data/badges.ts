import type { BadgeDef } from '@/types'

export const BADGES: BadgeDef[] = [
  { id: 'first-lesson', name: 'First Lesson', icon: '🏆', description: 'Complete your very first lesson.', criteria: 'first_lesson' },
  { id: 'streak-7', name: '7-Day Streak', icon: '🔥', description: 'Learn something 7 days in a row.', criteria: 'streak_7' },
  { id: 'streak-30', name: '30-Day Streak', icon: '🔥', description: 'Learn something 30 days in a row.', criteria: 'streak_30' },
  { id: 'budget-beginner', name: 'Budget Beginner', icon: '💵', description: 'Finish every lesson in Budgeting.', criteria: 'budget_category_complete' },
  { id: 'credit-smart', name: 'Credit Smart', icon: '💳', description: 'Finish every lesson in Credit & Debt.', criteria: 'credit_category_complete' },
  { id: 'investing-explorer', name: 'Investing Explorer', icon: '📈', description: 'Finish every lesson in Investing.', criteria: 'investing_category_complete' },
  { id: 'tax-basics', name: 'Tax Basics', icon: '🧾', description: 'Finish every lesson in Taxes.', criteria: 'taxes_category_complete' },
  { id: 'real-estate-ready', name: 'Real Estate Ready', icon: '🏠', description: 'Finish every lesson in Real Estate.', criteria: 'real_estate_category_complete' },
  { id: 'xp-1000', name: '1,000 XP', icon: '🎯', description: 'Earn a total of 1,000 XP.', criteria: 'xp_1000' },
  { id: 'lessons-25', name: '25 Lessons Completed', icon: '🧠', description: 'Complete 25 lessons across any topics.', criteria: 'lessons_25' },
  { id: 'schoolofcents-graduate', name: 'School of Cents Graduate', icon: '🎓', description: 'Complete every lesson in every category.', criteria: 'all_categories_complete' },
]
