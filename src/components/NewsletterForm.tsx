import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/services/analytics'

// Structured so a real provider (Resend, Mailchimp, ConvertKit, etc.) can be
// dropped in later: swap the body of `subscribe()` for a fetch() to your
// email provider's API/edge function. Today it validates input and simulates
// a network call — it never claims to have actually sent anything.
async function subscribe(_email: string, _firstName: string): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 700))
  return { ok: true }
}

export function NewsletterForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const dark = variant === 'dark'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      await subscribe(email, firstName)
      setStatus('done')
      trackEvent('newsletter_signup')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className={dark ? 'text-white' : 'text-ink'}>
        <p className="text-lg font-bold">You're on the list! 🎉</p>
        <p className={cnMuted(dark)}>Look out for your first Money Minute soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-2">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name (optional)"
          aria-label="First name (optional)"
          className={cnInput(dark)}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          aria-invalid={status === 'error'}
          className={cnInput(dark)}
        />
        <Button type="submit" loading={status === 'loading'} className="shrink-0">
          Subscribe
        </Button>
      </div>
      {status === 'error' && (
        <p role="alert" className={`mt-2 text-sm font-medium ${dark ? 'text-coral-300' : 'text-coral-500'}`}>
          Please enter a valid email address.
        </p>
      )}
    </form>
  )
}

function cnInput(dark: boolean) {
  return dark
    ? 'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-brand-300 focus:outline-none'
    : 'w-full rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-brand-400 focus:outline-none'
}

function cnMuted(dark: boolean) {
  return dark ? 'text-sm text-white/70' : 'text-sm text-ink-faint'
}
