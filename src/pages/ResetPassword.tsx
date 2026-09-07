import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthShell, FieldLabel, FormError, inputClass } from '@/components/auth/AuthShell'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

// Supabase redirects the user here (see requestPasswordReset's redirectTo)
// with a recovery session already active, so we just need to collect a new
// password and call updateUser.
export default function ResetPassword() {
  const { updatePassword } = useAuth()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  useDocumentTitle('Choose a New Password')

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
    const { error: err } = await updatePassword(password)
    setLoading(false)
    if (err) {
      setError(err)
      return
    }
    setDone(true)
    setTimeout(() => navigate('/dashboard'), 1500)
  }

  if (done) {
    return (
      <AuthShell title="Password updated ✅" subtitle="Taking you to your dashboard…">
        <p className="text-sm text-ink-soft">You're all set.</p>
      </AuthShell>
    )
  }

  return (
    <AuthShell title="Choose a new password" subtitle="Make it something you'll remember.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <FieldLabel htmlFor="reset-password">New password</FieldLabel>
          <input
            id="reset-password"
            type="password"
            required
            className={inputClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <div>
          <FieldLabel htmlFor="reset-confirm">Confirm new password</FieldLabel>
          <input
            id="reset-confirm"
            type="password"
            required
            className={inputClass}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <FormError message={error} />
        <Button type="submit" className="w-full" loading={loading}>
          Update password
        </Button>
      </form>
    </AuthShell>
  )
}
