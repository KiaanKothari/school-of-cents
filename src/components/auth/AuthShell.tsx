import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function AuthShell({ title, subtitle, children, footer }: { title: string; subtitle?: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2 font-display text-xl font-extrabold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">¢</span>
          School of Cents
        </Link>
        <div className="rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-card sm:p-8">
          <h1 className="font-display text-2xl font-bold text-ink">{title}</h1>
          {subtitle && <p className="mt-1.5 text-sm text-ink-faint">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </div>
        {footer && <div className="mt-6 text-center text-sm text-ink-faint">{footer}</div>}
      </div>
    </div>
  )
}

export function FieldLabel({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
      {children}
    </label>
  )
}

export const inputClass =
  'w-full rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint/70 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100'

export function FormError({ message }: { message: string | null }) {
  if (!message) return null
  return <p className="mt-3 rounded-lg bg-coral-400/10 px-3 py-2 text-sm text-coral-500">{message}</p>
}

export function SetupNotice() {
  return (
    <div className="mb-5 rounded-xl border border-dashed border-gold-500/50 bg-gold-400/10 px-4 py-3 text-sm text-ink-soft">
      <p className="font-semibold text-ink">Backend not connected yet</p>
      <p className="mt-1">
        This deployment doesn't have Supabase credentials configured, so accounts can't be created or saved. See{' '}
        <code className="rounded bg-white/70 px-1 py-0.5 text-xs">SETUP.md</code> in the project for the two-minute setup.
      </p>
    </div>
  )
}
