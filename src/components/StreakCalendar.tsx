import { lastNDays, todayISO } from '@/utils/date'
import { cn } from '@/utils/cn'

export function StreakCalendar({ streakDates, days = 35 }: { streakDates: Set<string>; days?: number }) {
  const range = lastNDays(days)
  const today = todayISO()

  return (
    <div>
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
        {range.map((date) => {
          const done = streakDates.has(date)
          const isToday = date === today
          const dayNum = Number(date.slice(-2))
          return (
            <div
              key={date}
              title={date}
              className={cn(
                'flex aspect-square items-center justify-center rounded-lg text-[11px] font-semibold',
                done ? 'bg-brand-500 text-white' : 'bg-paper-dim text-ink-faint',
                isToday && !done && 'ring-2 ring-brand-400',
                isToday && done && 'ring-2 ring-brand-700',
              )}
            >
              {done ? '🔥' : dayNum}
            </div>
          )
        })}
      </div>
      <div className="mt-3 flex items-center gap-4 text-xs text-ink-faint">
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-brand-500" /> Learned</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-paper-dim" /> No activity</span>
      </div>
    </div>
  )
}
