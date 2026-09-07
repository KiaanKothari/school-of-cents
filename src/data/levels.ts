import type { LevelDef } from '@/types'

export const LEVELS: LevelDef[] = [
  { level: 1, name: 'Money Beginner', minXp: 0, maxXp: 199 },
  { level: 2, name: 'Money Learner', minXp: 200, maxXp: 499 },
  { level: 3, name: 'Money Explorer', minXp: 500, maxXp: 999 },
  { level: 4, name: 'Money Builder', minXp: 1000, maxXp: 1999 },
  { level: 5, name: 'Money Smart', minXp: 2000, maxXp: 3499 },
  { level: 6, name: 'Financial Thinker', minXp: 3500, maxXp: 4999 },
  { level: 7, name: 'Money Master', minXp: 5000, maxXp: null },
]

export function levelForXp(xp: number): LevelDef {
  const found = [...LEVELS].reverse().find((l) => xp >= l.minXp)
  return found ?? LEVELS[0]
}

export function nextLevel(xp: number): LevelDef | null {
  const current = levelForXp(xp)
  return LEVELS.find((l) => l.level === current.level + 1) ?? null
}

/** Returns 0-100 progress toward the next level, or 100 if at the top level. */
export function levelProgressPercent(xp: number): number {
  const current = levelForXp(xp)
  const next = nextLevel(xp)
  if (!next) return 100
  const span = next.minXp - current.minXp
  const into = xp - current.minXp
  return Math.max(0, Math.min(100, Math.round((into / span) * 100)))
}
