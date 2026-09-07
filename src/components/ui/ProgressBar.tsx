import { cn } from '@/utils/cn'

interface ProgressBarProps {
  percent: number
  className?: string
  trackClassName?: string
  barClassName?: string
  label?: string
}

export function ProgressBar({ percent, className, trackClassName, barClassName, label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent))
  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn('h-2.5 w-full overflow-hidden rounded-full bg-paper-dim', trackClassName)}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={cn('h-full rounded-full bg-brand-500 transition-all duration-700 ease-out', barClassName)}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
