import type { ReactNode } from 'react'

import { cn } from '@/utils/cn'

interface EmptyStateProps {
  icon?: string
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ icon = '🗂️', title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink/10 bg-white/60 px-6 py-14 text-center', className)}>
      <span className="text-4xl">{icon}</span>
      <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
      {description && <p className="mt-1 max-w-sm text-sm text-ink-faint">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
