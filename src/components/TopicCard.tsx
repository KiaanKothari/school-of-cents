import { Link } from 'react-router-dom'
import type { Category } from '@/types'
import { cn } from '@/utils/cn'

const ACCENT_BG: Record<Category['accent'], string> = {
  brand: 'bg-brand-100 text-brand-700',
  sky: 'bg-sky-400/15 text-sky-500',
  gold: 'bg-gold-400/20 text-gold-500',
  coral: 'bg-coral-400/15 text-coral-500',
  navy: 'bg-navy/10 text-navy',
}

export function TopicCard({ category, percent }: { category: Category; percent?: number }) {
  return (
    <Link
      to={`/learn/${category.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-ink/[0.06] bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl text-2xl', ACCENT_BG[category.accent])}>
        {category.icon}
      </div>
      <div>
        <h3 className="font-display text-base font-bold text-ink group-hover:text-brand-700">{category.name}</h3>
        <p className="mt-1 text-sm text-ink-faint">{category.description}</p>
      </div>
      {typeof percent === 'number' && (
        <div className="mt-1">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-dim">
            <div className="h-full rounded-full bg-brand-500" style={{ width: `${percent}%` }} />
          </div>
          <p className="mt-1 text-xs font-medium text-ink-faint">{percent}% complete</p>
        </div>
      )}
    </Link>
  )
}
