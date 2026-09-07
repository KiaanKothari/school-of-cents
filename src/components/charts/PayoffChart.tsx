interface PayoffChartProps {
  schedule: { month: number; balance: number }[]
}

/** Simple line chart of remaining balance over time. No chart library needed. */
export function PayoffChart({ schedule }: PayoffChartProps) {
  if (schedule.length <= 1) return null
  const max = Math.max(...schedule.map((s) => s.balance), 1)
  const width = 640
  const height = 220
  const padding = 20

  const points = schedule.map((s, i) => {
    const x = padding + (i / (schedule.length - 1)) * (width - padding * 2)
    const y = padding + (1 - s.balance / max) * (height - padding * 2)
    return `${x},${y}`
  })

  const last = schedule[schedule.length - 1]

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[420px]" role="img" aria-label="Debt balance over time">
        <polyline points={points.join(' ')} fill="none" stroke="var(--color-coral-500)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <polygon
          points={`${padding},${height - padding} ${points.join(' ')} ${width - padding},${height - padding}`}
          fill="var(--color-coral-400)"
          opacity={0.08}
        />
      </svg>
      <p className="mt-1 text-center text-xs text-ink-faint">
        Balance reaches $0 around month {last.month} ({(last.month / 12).toFixed(1)} years).
      </p>
    </div>
  )
}
