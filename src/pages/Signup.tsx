import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthShell, FieldLabel, FormError, SetupNotice, inputClass } from '@/components/auth/AuthShell'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { useDocumentTitle } from '@/utils/useDocumentTitle'
import { trackEvent } from '@/services/analytics'

export default function Signup() {
  const { signUp, user, configured } = useAuth()
  const navigate = useNavigate()
  useDocumentTitle('Create Your Free Account')
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [checkEmail, setCheckEmail] = useState(false)

  if (user) return <Navigate to="/dashboard" replace />

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    const { error: err, needsEmailConfirmation } = await signUp(email, password, displayName.trim() || email.split('@')[0])
    setLoading(false)
    if (err) {
      setError(err)
      return
    }
    trackEvent('signup', { method: 'email' })
    if (needsEmailConfirmation) {
      setCheckEmail(true)
    } else {
      navigate('/dashboard')
    }
  }

  if (checkEmail) {
    return (
      <AuthShell title="Check your inbox 📬" subtitle="We sent you a confirmation link.">
        <p className="text-sm text-ink-soft">
          Click the link we sent to <span className="font-semibold text-ink">{email}</span> to activate your account,
          then come back and log in.
        </p>
        <Link to="/login" className="mt-6 inline-block text-sm font-semibold text-brand-700 underline">
          Back to log in
        </Link>
      </AuthShell>
    )
  }

  return (
    <AuthShell
      title="Create your free account"
      subtitle="Save your progress, earn XP, and pick up right where you left off."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-brand-700 underline">
            Log in
          </Link>
        </>
      }
    >
      {!configured && <SetupNotice />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <FieldLabel htmlFor="signup-name">Display name</FieldLabel>
          <input
            id="signup-name"
            className={inputClass}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Alex"
            autoComplete="name"
          />
        </div>
        <div>
          <FieldLabel htmlFor="signup-email">Email</FieldLabel>
          <input
            id="signup-email"
            type="email"
            required
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <div>
          <FieldLabel htmlFor="signup-password">Password</FieldLabel>
          <input
            id="signup-password"
            type="password"
            required
            className={inputClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            autoComplete="new-password"
          />
        </div>
        <div>
          <FieldLabel htmlFor="signup-confirm">Confirm password</FieldLabel>
          <input
            id="signup-confirm"
            type="password"
            required
            className={inputClass}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <FormError message={error} />
        <Button type="submit" className="w-full" loading={loading} disabled={!configured}>
          Create Account
        </Button>
        <p className="text-center text-xs text-ink-faint">
          By signing up you agree that School of Cents provides educational content only, not financial advice.
        </p>
      </form>
    </AuthShell>
  )
}
