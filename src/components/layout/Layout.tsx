import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useAuth } from '@/context/AuthContext'
import { Link } from 'react-router-dom'

export function Layout({ children }: { children: ReactNode }) {
  const { configured } = useAuth()
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      {!configured && (
        <div className="bg-gold-400/20 px-4 py-2 text-center text-xs font-medium text-ink-soft">
          Demo mode: this deployment isn't connected to a database yet, so sign-up, login, and saved progress are
          disabled. <Link to="/login" className="underline">Learn more</Link>
        </div>
      )}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
