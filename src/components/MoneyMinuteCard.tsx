import { Link } from 'react-router-dom'
import { getTodaysMoneyMinute } from '@/data/moneyMinutes'
import { formatFriendlyDate, todayISO } from '@/utils/date'

/** A live, rotating daily money fact — shown to every visitor, no account needed. */
export function MoneyMinuteCard() {
  const { emoji, tip } = getTodaysMoneyMinute()

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-ink/[0.06] bg-white p-6 text-left shadow-soft sm:p-8">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-600">
        <span>{emoji}</span>
        <span>Today's Money Minute · {formatFriendlyDate(todayISO())}</span>
      </div>
      <p className="mt-3 text-lg font-medium text-ink sm:text-xl">{tip}</p>
      <p className="mt-4 text-sm text-ink-faint">
        New one every day.{' '}
        <Link to="/signup" className="font-semibold text-brand-700 underline">
          Create a free account
        </Link>{' '}
        to save your progress and never miss one.
      </p>
    </div>
  )
}
