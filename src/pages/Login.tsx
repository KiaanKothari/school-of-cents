import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthShell, FieldLabel, FormError, SetupNotice, inputClass } from '@/components/auth/AuthShell'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { useDocumentTitle } from '@/utils/useDocumentTitle'
import { trackEvent } from '@/services/analytics'

export default function Login() {
  const { signIn, user, configured } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  useDocumentTitle('Log In')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  if (user) return <Navigate to="/dashboard" replace />

  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname ?? '/dashboard'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error: err } = await signIn(email, password)
    setLoading(false)
    if (err) {
      setError(err)
      return
    }
    trackEvent('login', { method: 'email' })
    navigate(from, { replace: true })
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to keep your streak alive."
      footer={
        <>
          New to School of Cents?{' '}
          <Link to="/signup" className="font-semibold text-brand-700 underline">
            Create a free account
          </Link>
        </>
      }
    >
      {!configured && <SetupNotice />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <FieldLabel htmlFor="login-email">Email</FieldLabel>
          <input
            id="login-email"
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
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="login-password">Password</FieldLabel>
            <Link to="/forgot-password" className="mb-1.5 text-xs font-semibold text-brand-700 hover:underline">
              Forgot password?
            </Link>
          </div>
          <input
            id="login-password"
            type="password"
            required
            className={inputClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <FormError message={error} />
        <Button type="submit" className="w-full" loading={loading} disabled={!configured}>
          Log In
        </Button>
      </form>
    </AuthShell>
  )
}
