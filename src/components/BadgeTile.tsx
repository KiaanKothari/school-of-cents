import { cn } from '@/utils/cn'
import type { BadgeDef } from '@/types'

export function BadgeTile({ badge, earned }: { badge: BadgeDef; earned: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-transform hover:-translate-y-0.5',
        earned ? 'border-brand-200 bg-brand-50 shadow-soft' : 'border-ink/[0.06] bg-paper-dim/60 opacity-60',
      )}
      title={badge.description}
    >
      <div className={cn('flex h-14 w-14 items-center justify-center rounded-full text-2xl', earned ? 'bg-white shadow-soft' : 'bg-white/50 grayscale')}>
        {earned ? badge.icon : '🔒'}
      </div>
      <p className="text-xs font-semibold leading-tight text-ink">{badge.name}</p>
      <p className="text-[11px] leading-snug text-ink-faint">{badge.description}</p>
    </div>
  )
}
