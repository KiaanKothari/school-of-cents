import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 active:bg-brand-800 disabled:bg-brand-300',
  secondary:
    'bg-white text-ink border border-ink/10 shadow-soft hover:border-brand-300 hover:text-brand-700 disabled:text-ink-faint',
  ghost: 'text-ink-soft hover:bg-paper-dim disabled:text-ink-faint',
  danger: 'bg-coral-500 text-white hover:bg-coral-500/90 disabled:bg-coral-400/50',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-base rounded-xl',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  loading?: boolean
  icon?: ReactNode
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
  }

interface LinkButtonProps extends CommonProps {
  to: string
  external?: boolean
}

export function Button({ variant = 'primary', size = 'md', className, children, loading, icon, disabled, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Spinner /> : icon}
      {children}
    </button>
  )
}

export function LinkButton({ variant = 'primary', size = 'md', className, children, to, external, icon }: LinkButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )
  if (external) {
    return (
      <a href={to} className={classes} target="_blank" rel="noreferrer">
        {icon}
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {icon}
      {children}
    </Link>
  )
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  )
}
