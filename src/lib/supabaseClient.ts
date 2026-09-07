import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const isSupabaseConfigured = Boolean(url && anonKey && !url.includes('your-project-ref'))

// When the project hasn't been connected to Supabase yet we still want the
// rest of the app (marketing pages, lesson content, calculators) to render
// normally — we just gate anything that touches auth or the database behind
// `isSupabaseConfigured` and show a clear "connect your backend" state instead
// of silently pretending accounts work. See SETUP.md.
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null
