import type { CompoundGrowthYear } from '@/utils/calculators'
import { formatCurrency } from '@/utils/calculators'

interface GrowthChartProps {
  data: CompoundGrowthYear[]
}

/** Simple accessible stacked bar chart: contributions vs. growth, per year. No chart library needed. */
export function GrowthChart({ data }: GrowthChartProps) {
  if (data.length <= 1) return null
  const rows = data.filter((_, i) => i > 0)
  const max = Math.max(...rows.map((r) => r.balance), 1)
  const width = 640
  const height = 260
  const padding = { top: 10, right: 10, bottom: 28, left: 10 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom
  const barGap = 6
  const barWidth = Math.max(4, chartWidth / rows.length - barGap)

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[420px]" role="img" aria-label="Projected growth by year">
        {rows.map((row, i) => {
          const x = padding.left + i * (barWidth + barGap)
          const contribH = (row.contributions / max) * chartHeight
          const totalH = (row.balance / max) * chartHeight
          const growthH = Math.max(0, totalH - contribH)
          const yTotalTop = padding.top + chartHeight - totalH
          const yContribTop = padding.top + chartHeight - contribH
          return (
            <g key={row.year}>
              <rect x={x} y={yTotalTop} width={barWidth} height={growthH} fill="var(--color-brand-400)" rx={2} />
              <rect x={x} y={yContribTop} width={barWidth} height={contribH} fill="var(--color-navy-700)" rx={2} />
              {(i + 1) % Math.ceil(rows.length / 8 || 1) === 0 && (
                <text x={x + barWidth / 2} y={height - 8} fontSize="10" textAnchor="middle" fill="var(--color-ink-faint)">
                  Yr {row.year}
                </text>
              )}
            </g>
          )
        })}
      </svg>
      <div className="mt-2 flex items-center justify-center gap-5 text-xs text-ink-faint">
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-navy-700" /> Contributions</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-brand-400" /> Growth</span>
      </div>
      <p className="mt-1 text-center text-xs text-ink-faint">Final projected balance: {formatCurrency(data[data.length - 1].balance)}</p>
    </div>
  )
}
