import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthShell, FieldLabel, FormError, SetupNotice, inputClass } from '@/components/auth/AuthShell'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function ForgotPassword() {
  const { requestPasswordReset, configured } = useAuth()
  useDocumentTitle('Reset Your Password')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error: err } = await requestPasswordReset(email)
    setLoading(false)
    if (err) {
      setError(err)
      return
    }
    setSent(true)
  }

  if (sent) {
    return (
      <AuthShell title="Check your email 📬" subtitle="Password reset instructions are on the way.">
        <p className="text-sm text-ink-soft">
          If an account exists for <span className="font-semibold text-ink">{email}</span>, you'll get a link to reset
          your password.
        </p>
        <Link to="/login" className="mt-6 inline-block text-sm font-semibold text-brand-700 underline">
          Back to log in
        </Link>
      </AuthShell>
    )
  }

  return (
    <AuthShell
      title="Reset your password"
      subtitle="We'll email you a link to set a new one."
      footer={
        <Link to="/login" className="font-semibold text-brand-700 underline">
          Back to log in
        </Link>
      }
    >
      {!configured && <SetupNotice />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <FieldLabel htmlFor="forgot-email">Email</FieldLabel>
          <input
            id="forgot-email"
            type="email"
            required
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <FormError message={error} />
        <Button type="submit" className="w-full" loading={loading} disabled={!configured}>
          Send reset link
        </Button>
      </form>
    </AuthShell>
  )
}
