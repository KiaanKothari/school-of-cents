// Shared content & domain types for School of Cents.
// These mirror the shape of the Supabase tables described in /supabase/schema.sql
// so that lesson/scenario/badge content can move from static data files into a
// real content-managed database later without changing any UI code.

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export type CategoryId =
  | 'money-basics'
  | 'budgeting'
  | 'credit-debt'
  | 'investing'
  | 'banking'
  | 'taxes'
  | 'real-estate'
  | 'retirement'

export interface Category {
  id: CategoryId
  name: string
  shortName: string
  icon: string
  description: string
  accent: 'brand' | 'sky' | 'gold' | 'coral' | 'navy'
}

export interface Choice {
  id: string
  text: string
}

/** A single quiz / interactive question with one correct answer and an explanation. */
export interface QuizQuestion {
  id: string
  prompt: string
  choices: Choice[]
  correctChoiceId: string
  explanation: string
}

export interface LessonExample {
  label: string
  detail: string
}

export interface LessonSection {
  heading: string
  body: string[]
  examples?: LessonExample[]
}

export interface Lesson {
  id: string
  categoryId: CategoryId
  order: number
  title: string
  description: string
  estimatedMinutes: number
  xp: number
  difficulty: Difficulty
  published: boolean
  sections: LessonSection[]
  interactiveQuestion: QuizQuestion
  quiz: QuizQuestion[]
}

/** One possible choice within a real-life scenario, with its own honest tradeoffs. */
export interface ScenarioOption {
  id: string
  label: string
  outcome: string
  pros: string[]
  cons: string[]
}

export interface Scenario {
  id: string
  order: number
  icon: string
  title: string
  prompt: string
  context: string
  xp: number
  options: ScenarioOption[]
  takeaway: string
}

export interface DailyChallenge {
  id: string
  title: string
  prompt: string
  choices: Choice[]
  soundestChoiceId: string
  explanation: string
  xp: number
}

export type BadgeCriteriaKey =
  | 'first_lesson'
  | 'streak_7'
  | 'streak_30'
  | 'budget_category_complete'
  | 'credit_category_complete'
  | 'investing_category_complete'
  | 'taxes_category_complete'
  | 'real_estate_category_complete'
  | 'xp_1000'
  | 'lessons_25'
  | 'all_categories_complete'

export interface BadgeDef {
  id: string
  name: string
  icon: string
  description: string
  criteria: BadgeCriteriaKey
}

export interface LevelDef {
  level: number
  name: string
  minXp: number
  maxXp: number | null
}

// ---- User-owned data (persisted in Supabase; never hardcoded) ----

export interface Profile {
  id: string
  email: string
  displayName: string
  xp: number
  level: number
  currentStreak: number
  longestStreak: number
  lastActiveDate: string | null
  lastBonusClaimDate: string | null
  showOnLeaderboard: boolean
  createdAt: string
}

export interface LessonProgressRow {
  lessonId: string
  completed: boolean
  quizScore: number | null
  completedAt: string | null
}

export interface ScenarioProgressRow {
  scenarioId: string
  completed: boolean
  chosenOptionId: string | null
  completedAt: string | null
}

export interface DailyChallengeProgressRow {
  challengeDate: string
  challengeId: string
  completed: boolean
  chosenChoiceId: string | null
}

export interface BadgeEarnedRow {
  badgeId: string
  earnedAt: string
}

export interface LeaderboardEntry {
  id: string
  displayName: string
  xp: number
  isDemo: boolean
}
