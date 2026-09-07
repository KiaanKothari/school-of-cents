import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading, configured } = useAuth()
  const location = useLocation()

  if (!configured) {
    return <Navigate to="/login" replace state={{ from: location, needsSetup: true }} />
  }

  if (loading) {
    return <LoadingSpinner label="Loading your account…" className="min-h-[60vh]" />
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <>{children}</>
}
