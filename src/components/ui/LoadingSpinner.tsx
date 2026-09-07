import { cn } from '@/utils/cn'

export function LoadingSpinner({ className, label = 'Loading…' }: { className?: string; label?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-3 py-16 text-ink-faint', className)}>
      <svg className="h-8 w-8 animate-spin text-brand-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <p className="text-sm">{label}</p>
    </div>
  )
}

export function SkeletonBlock({ className }: { className?: string }) {
  return <div className={cn('animate-shimmer rounded-xl bg-gradient-to-r from-paper-dim via-white to-paper-dim', className)} />
}
