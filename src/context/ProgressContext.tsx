import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useToast } from '@/context/ToastContext'
import * as db from '@/services/db'
import { LESSONS, lessonsForCategory } from '@/data/lessons'
import { DAILY_CHALLENGES } from '@/data/dailyChallenges'
import { evaluateNewBadges } from '@/utils/badgeEngine'
import { trackEvent } from '@/services/analytics'
import { dayOfYear, lastNDays, todayISO } from '@/utils/date'
import type {
  BadgeDef,
  DailyChallenge,
  DailyChallengeProgressRow,
  Lesson,
  LessonProgressRow,
  Scenario,
  ScenarioProgressRow,
} from '@/types'

interface ProgressContextValue {
  ready: boolean
  lessonProgress: Record<string, LessonProgressRow>
  scenarioProgress: Record<string, ScenarioProgressRow>
  badgesEarned: Set<string>
  todaysChallenge: DailyChallenge
  todaysChallengeProgress: DailyChallengeProgressRow | null
  streakDates: Set<string>
  completedLessonsCount: number
  completedScenariosCount: number
  isLessonUnlocked: (lesson: Lesson) => boolean
  categoryProgressPercent: (categoryId: string) => number
  continueLesson: () => Lesson | null
  completeLesson: (lesson: Lesson, quizScore: number) => Promise<{ newBadges: BadgeDef[] }>
  completeScenario: (scenario: Scenario, chosenOptionId: string) => Promise<void>
  completeDailyChallenge: (chosenChoiceId: string) => Promise<{ xpEarned: number; correct: boolean }>
  awardBonusXp: (xp: number, reason: string) => Promise<void>
}

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined)

const todaysChallenge = DAILY_CHALLENGES[dayOfYear() % DAILY_CHALLENGES.length]

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user, profile, setProfile } = useAuth()
  const { push } = useToast()

  const [ready, setReady] = useState(false)
  const [lessonProgress, setLessonProgress] = useState<Record<string, LessonProgressRow>>({})
  const [scenarioProgress, setScenarioProgress] = useState<Record<string, ScenarioProgressRow>>({})
  const [badgesEarned, setBadgesEarned] = useState<Set<string>>(new Set())
  const [todaysChallengeProgress, setTodaysChallengeProgress] = useState<DailyChallengeProgressRow | null>(null)
  const [streakDates, setStreakDates] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (!user) {
      setReady(false)
      setLessonProgress({})
      setScenarioProgress({})
      setBadgesEarned(new Set())
      setTodaysChallengeProgress(null)
      setStreakDates(new Set())
      return
    }
    let active = true
    setReady(false)
    const since = lastNDays(60)[0]
    Promise.all([
      db.fetchLessonProgress(user.id),
      db.fetchScenarioProgress(user.id),
      db.fetchBadgesEarned(user.id),
      db.fetchDailyChallengeProgress(user.id, todayISO()),
      db.fetchStreakLog(user.id, since),
    ])
      .then(([lp, sp, badges, challenge, streakLog]) => {
        if (!active) return
        setLessonProgress(lp)
        setScenarioProgress(sp)
        setBadgesEarned(new Set(badges.map((b) => b.badgeId)))
        setTodaysChallengeProgress(challenge)
        setStreakDates(new Set(streakLog))
      })
      .catch((err) => console.error('Failed to load progress', err))
      .finally(() => {
        if (active) setReady(true)
      })
    return () => {
      active = false
    }
  }, [user])

  const completedLessonsCount = useMemo(
    () => Object.values(lessonProgress).filter((l) => l.completed).length,
    [lessonProgress],
  )
  const completedScenariosCount = useMemo(
    () => Object.values(scenarioProgress).filter((s) => s.completed).length,
    [scenarioProgress],
  )

  const isLessonUnlocked = useCallback(
    (lesson: Lesson) => {
      const siblings = lessonsForCategory(lesson.categoryId)
      const index = siblings.findIndex((l) => l.id === lesson.id)
      if (index <= 0) return true
      const previous = siblings[index - 1]
      return Boolean(lessonProgress[previous.id]?.completed)
    },
    [lessonProgress],
  )

  const categoryProgressPercent = useCallback(
    (categoryId: string) => {
      const lessons = lessonsForCategory(categoryId)
      if (lessons.length === 0) return 0
      const done = lessons.filter((l) => lessonProgress[l.id]?.completed).length
      return Math.round((done / lessons.length) * 100)
    },
    [lessonProgress],
  )

  const continueLesson = useCallback((): Lesson | null => {
    const inProgressOrNext = LESSONS.find((l) => !lessonProgress[l.id]?.completed && isLessonUnlocked(l))
    return inProgressOrNext ?? null
  }, [lessonProgress, isLessonUnlocked])

  const applyProfileUpdate = useCallback(
    async (xp: number) => {
      const updated = await db.recordActivity(xp)
      setProfile(updated)
      setStreakDates((prev) => new Set([...prev, todayISO()]))
      return updated
    },
    [setProfile],
  )

  const checkAndAwardBadges = useCallback(
    async (nextLessonProgress: Record<string, LessonProgressRow>, latestProfile: { xp: number; currentStreak: number }) => {
      if (!user) return [] as BadgeDef[]
      const doneCount = Object.values(nextLessonProgress).filter((l) => l.completed).length
      const newBadges = evaluateNewBadges({
        profile: { ...profile!, xp: latestProfile.xp, currentStreak: latestProfile.currentStreak },
        lessonProgress: nextLessonProgress,
        completedLessonsCount: doneCount,
        alreadyEarned: badgesEarned,
      })
      if (newBadges.length > 0) {
        await Promise.all(newBadges.map((b) => db.awardBadge(user.id, b.id)))
        setBadgesEarned((prev) => new Set([...prev, ...newBadges.map((b) => b.id)]))
        newBadges.forEach((b) => {
          push({ kind: 'badge', icon: b.icon, title: `Badge unlocked: ${b.name}`, detail: b.description })
          trackEvent('achievement_unlocked', { badge_id: b.id })
        })
      }
      return newBadges
    },
    [user, profile, badgesEarned, push],
  )

  const completeLesson = useCallback(
    async (lesson: Lesson, quizScore: number) => {
      if (!user) return { newBadges: [] }
      // A lesson can be revisited any time (the UI explicitly invites this —
      // "reviewing won't re-award XP"), but XP and badge re-checks below only
      // happen the FIRST time it's completed. Without this guard, replaying
      // the same lesson's quiz over and over granted its XP every single
      // time — an easy, unlimited way to inflate XP, level, and the
      // leaderboard with no real learning happening.
      const alreadyCompleted = Boolean(lessonProgress[lesson.id]?.completed)
      await db.upsertLessonProgress(user.id, lesson.id, { completed: true, quizScore })
      const nextProgress = {
        ...lessonProgress,
        [lesson.id]: { lessonId: lesson.id, completed: true, quizScore, completedAt: new Date().toISOString() },
      }
      setLessonProgress(nextProgress)
      if (alreadyCompleted) {
        return { newBadges: [] }
      }
      const updatedProfile = await applyProfileUpdate(lesson.xp)
      push({ kind: 'xp', icon: '⚡', title: `+${lesson.xp} XP`, detail: `${lesson.title} complete!` })
      const newBadges = await checkAndAwardBadges(nextProgress, updatedProfile)
      return { newBadges }
    },
    [user, lessonProgress, applyProfileUpdate, checkAndAwardBadges, push],
  )

  const completeScenario = useCallback(
    async (scenario: Scenario, chosenOptionId: string) => {
      if (!user) return
      await db.upsertScenarioProgress(user.id, scenario.id, chosenOptionId)
      setScenarioProgress((prev) => ({
        ...prev,
        [scenario.id]: {
          scenarioId: scenario.id,
          completed: true,
          chosenOptionId,
          completedAt: new Date().toISOString(),
        },
      }))
      await applyProfileUpdate(scenario.xp)
      push({ kind: 'xp', icon: '💡', title: `+${scenario.xp} XP`, detail: `${scenario.title} decided!` })
    },
    [user, applyProfileUpdate, push],
  )

  const completeDailyChallenge = useCallback(
    async (chosenChoiceId: string) => {
      if (!user) return { xpEarned: 0, correct: false }
      const correct = chosenChoiceId === todaysChallenge.soundestChoiceId
      await db.upsertDailyChallengeProgress(user.id, todayISO(), todaysChallenge.id, chosenChoiceId)
      setTodaysChallengeProgress({
        challengeDate: todayISO(),
        challengeId: todaysChallenge.id,
        completed: true,
        chosenChoiceId,
      })
      await applyProfileUpdate(todaysChallenge.xp)
      push({ kind: 'streak', icon: '🔥', title: `+${todaysChallenge.xp} XP`, detail: "Today's challenge complete!" })
      return { xpEarned: todaysChallenge.xp, correct }
    },
    [user, applyProfileUpdate, push],
  )

  const awardBonusXp = useCallback(
    async (xp: number, reason: string) => {
      if (!user) return
      // Backed by claim_daily_bonus (server-side idempotent per calendar day)
      // rather than the generic record_activity RPC — the Dashboard's
      // "claimed today" state only lives in React, so without a server-side
      // check a page refresh would let the same bonus be claimed repeatedly.
      const updated = await db.claimDailyBonus(xp)
      setProfile(updated)
      push({ kind: 'xp', icon: '🎁', title: `+${xp} bonus XP`, detail: reason })
    },
    [user, setProfile, push],
  )

  const value: ProgressContextValue = {
    ready,
    lessonProgress,
    scenarioProgress,
    badgesEarned,
    todaysChallenge,
    todaysChallengeProgress,
    streakDates,
    completedLessonsCount,
    completedScenariosCount,
    isLessonUnlocked,
    categoryProgressPercent,
    continueLesson,
    completeLesson,
    completeScenario,
    completeDailyChallenge,
    awardBonusXp,
  }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
