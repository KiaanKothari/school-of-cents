import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { isSupabaseConfigured, supabase } from '@/lib/supabaseClient'
import { ensureProfile, fetchProfile, updateDisplayName as updateDisplayNameDb } from '@/services/db'
import type { Profile } from '@/types'

interface AuthContextValue {
  configured: boolean
  loading: boolean
  session: Session | null
  user: User | null
  profile: Profile | null
  authError: string | null
  signUp: (
    email: string,
    password: string,
    displayName: string,
  ) => Promise<{ error: string | null; needsEmailConfirmation: boolean }>
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  requestPasswordReset: (email: string) => Promise<{ error: string | null }>
  updatePassword: (newPassword: string) => Promise<{ error: string | null }>
  updateDisplayName: (name: string) => Promise<{ error: string | null }>
  refreshProfile: () => Promise<void>
  setProfile: (profile: Profile) => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfileState] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState<string | null>(null)

  const loadProfile = useCallback(async (user: User) => {
    try {
      const existing = await fetchProfile(user.id)
      setProfileState(
        existing ??
          (await ensureProfile(
            user.id,
            user.email ?? '',
            (user.user_metadata?.display_name as string | undefined) || (user.email ?? 'Friend').split('@')[0],
          )),
      )
    } catch (err) {
      console.error('Failed to load profile', err)
      setAuthError('We could not load your profile. Please try refreshing the page.')
    }
  }, [])

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false)
      return
    }

    let active = true

    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return
      setSession(data.session)
      if (data.session?.user) {
        await loadProfile(data.session.user)
      }
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession)
      if (newSession?.user) {
        await loadProfile(newSession.user)
      } else {
        setProfileState(null)
      }
    })

    return () => {
      active = false
      listener.subscription.unsubscribe()
    }
  }, [loadProfile])

  const signUp = useCallback(async (email: string, password: string, displayName: string) => {
    if (!supabase) return { error: 'Supabase is not configured yet. See SETUP.md.', needsEmailConfirmation: false }
    setAuthError(null)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } },
    })
    if (error) return { error: error.message, needsEmailConfirmation: false }
    if (data.user && data.session) {
      await ensureProfile(data.user.id, email, displayName)
    }
    const needsEmailConfirmation = Boolean(data.user && !data.session)
    return { error: null, needsEmailConfirmation }
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return { error: 'Supabase is not configured yet. See SETUP.md.' }
    setAuthError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error: error ? error.message : null }
  }, [])

  const signOut = useCallback(async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    setProfileState(null)
  }, [])

  const requestPasswordReset = useCallback(async (email: string) => {
    if (!supabase) return { error: 'Supabase is not configured yet. See SETUP.md.' }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { error: error ? error.message : null }
  }, [])

  const updatePassword = useCallback(async (newPassword: string) => {
    if (!supabase) return { error: 'Supabase is not configured yet. See SETUP.md.' }
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    return { error: error ? error.message : null }
  }, [])

  const updateDisplayName = useCallback(
    async (name: string) => {
      if (!supabase || !session?.user) return { error: 'You need to be logged in.' }
      try {
        const updated = await updateDisplayNameDb(session.user.id, name)
        setProfileState(updated)
        return { error: null }
      } catch (err) {
        return { error: err instanceof Error ? err.message : 'Could not update your name.' }
      }
    },
    [session],
  )

  const refreshProfile = useCallback(async () => {
    if (!session?.user) return
    await loadProfile(session.user)
  }, [session, loadProfile])

  const value = useMemo<AuthContextValue>(
    () => ({
      configured: isSupabaseConfigured,
      loading,
      session,
      user: session?.user ?? null,
      profile,
      authError,
      signUp,
      signIn,
      signOut,
      requestPasswordReset,
      updatePassword,
      updateDisplayName,
      refreshProfile,
      setProfile: setProfileState,
    }),
    [loading, session, profile, authError, signUp, signIn, signOut, requestPasswordReset, updatePassword, updateDisplayName, refreshProfile],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
