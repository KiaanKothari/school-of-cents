import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  padded?: boolean
}

export function Card({ children, className, padded = true, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-ink/[0.06] bg-white shadow-soft',
        padded && 'p-5 sm:p-6',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
