import { dayOfYear } from '@/utils/date'

export interface MoneyMinute {
  emoji: string
  tip: string
}

/**
 * A rotating pool of bite-sized money facts shown on the homepage.
 * Everyone sees the same tip on a given calendar day, and it changes
 * automatically at midnight (local time) as the day-of-year advances.
 */
export const MONEY_MINUTES: MoneyMinute[] = [
  {
    emoji: '💳',
    tip: 'Paying only the minimum on a credit card can mean paying 2–3x the sticker price in interest over time.',
  },
  {
    emoji: '🏦',
    tip: 'Money sitting in a regular checking account often earns close to 0% interest — a high-yield savings account can pay meaningfully more for the same safety.',
  },
  {
    emoji: '📈',
    tip: 'Starting to invest even 10 years earlier can roughly double what you end up with at retirement — same contributions, just more time for compounding to work.',
  },
  {
    emoji: '🎯',
    tip: "The 50/30/20 rule (50% needs, 30% wants, 20% savings) isn't perfect, but it's a solid starting split for any budget.",
  },
  {
    emoji: '🧾',
    tip: 'Your credit score can affect more than loans — some landlords, insurers, and utility companies check it too.',
  },
  {
    emoji: '💰',
    tip: 'Even a small emergency fund of a few hundred dollars can stop one bad week from turning into debt.',
  },
  {
    emoji: '📉',
    tip: 'Lifestyle inflation is when every raise quietly gets absorbed by nicer spending instead of building savings.',
  },
  {
    emoji: '🛍️',
    tip: 'Waiting 24 hours before a non-essential purchase gives impulse spending time to fade.',
  },
  {
    emoji: '💵',
    tip: "Compound interest cuts both ways — it grows your savings, but it also grows debt you don't pay off.",
  },
  {
    emoji: '🎓',
    tip: 'Student loans are one of the few debts that usually survive bankruptcy — worth borrowing carefully.',
  },
  {
    emoji: '📱',
    tip: 'A yearly subscription audit — canceling the ones you forgot about — is one of the easiest ways to free up cash.',
  },
  {
    emoji: '💳',
    tip: 'Keeping your credit card balance under 30% of your limit, and paying it off monthly, helps build a strong credit score.',
  },
  {
    emoji: '📊',
    tip: 'Most actively managed funds underperform simple low-cost index funds over 15+ years — boring can beat exciting.',
  },
  {
    emoji: '🎁',
    tip: "'Buy now, pay later' is still debt — missed payments can hurt your credit just like a late credit card bill.",
  },
  {
    emoji: '💼',
    tip: "Skipping your employer's 401(k) match is like turning down free money that's part of your compensation.",
  },
  {
    emoji: '🏧',
    tip: "Out-of-network ATM fees are one of the easiest bank fees to avoid entirely — just stick to your own bank's network.",
  },
  {
    emoji: '📅',
    tip: "Paying bills a few days before they're due, instead of right on the deadline, protects you if anything goes wrong.",
  },
  {
    emoji: '💡',
    tip: 'Net worth — what you own minus what you owe — matters more long-term than how much you earn.',
  },
  {
    emoji: '🚗',
    tip: 'A new car can lose around 20% of its value in the first year alone. Buying lightly used often means a much better deal.',
  },
  {
    emoji: '🧮',
    tip: 'The Rule of 72: divide 72 by an interest rate to estimate how many years it takes money to double.',
  },
  {
    emoji: '🏦',
    tip: 'FDIC insurance covers up to $250,000 per depositor, per bank — money in an insured account is safer than it feels.',
  },
  {
    emoji: '📉',
    tip: 'A discount only actually saves you money on something you were already planning to buy.',
  },
  {
    emoji: '🧾',
    tip: "Filing taxes late has its own penalty separate from paying late — even if you owe nothing, it's worth filing on time.",
  },
  {
    emoji: '💰',
    tip: "'Paying yourself first' — moving money into savings the moment you're paid — tends to work better than saving whatever's left over.",
  },
]

/** Deterministic pick so every visitor sees the same tip on a given calendar day. */
export function getTodaysMoneyMinute(d: Date = new Date()): MoneyMinute {
  const index = dayOfYear(d) % MONEY_MINUTES.length
  return MONEY_MINUTES[index]
}
