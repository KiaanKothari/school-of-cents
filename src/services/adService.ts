// Rewarded-ad abstraction.
//
// The rest of the app never talks to an ad SDK directly — it calls
// `rewardedAdProvider.show()` and reacts to the result. Today that provider is
// `DevRewardedAdProvider`, a clearly-labeled development placeholder. To wire
// up a real network (AdMob, Google Ad Manager, IronSource, etc.) later,
// implement `RewardedAdProvider` against that SDK and swap the export at the
// bottom of this file — nothing else in the app needs to change.

export type RewardedAdOutcome = { granted: true } | { granted: false; reason: 'skipped' | 'failed' }

export interface RewardedAdProvider {
  /** Human-readable name shown in dev tooling / logs. */
  readonly name: string
  /** Resolve true if an ad is ready to show right now. */
  isReady(): Promise<boolean>
  /** Show the rewarded ad experience; resolves once the viewer has finished (or skipped) it. */
  show(): Promise<RewardedAdOutcome>
}

/**
 * Development placeholder. Simulates the "watch a short ad" flow with a timed
 * delay so the UI (progress ring, disabled buttons, etc.) can be built and
 * tested honestly, without ever claiming a real ad played. Swap this out for
 * a real provider before shipping ads to production.
 */
class DevRewardedAdProvider implements RewardedAdProvider {
  readonly name = 'Development Placeholder'

  async isReady(): Promise<boolean> {
    return true
  }

  async show(): Promise<RewardedAdOutcome> {
    // A real provider would open the ad network's rewarded unit here and
    // resolve based on its completion callback. This placeholder never
    // pretends a real ad played — the UI explicitly labels it as a dev stub.
    await new Promise((resolve) => setTimeout(resolve, 1800))
    return { granted: true }
  }
}

export const rewardedAdProvider: RewardedAdProvider = new DevRewardedAdProvider()

export type RewardKind = 'bonus_lesson' | 'extra_challenge' | 'hint' | 'bonus_xp' | 'second_attempt' | 'special_scenario'

export const REWARD_LABELS: Record<RewardKind, string> = {
  bonus_lesson: 'Bonus Lesson',
  extra_challenge: 'Extra Challenge',
  hint: 'One Hint',
  bonus_xp: 'Bonus XP',
  second_attempt: 'Second Attempt',
  special_scenario: 'Special Scenario',
}
