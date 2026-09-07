import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Button, LinkButton } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

const LOGGED_OUT_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/learn', label: 'Learn' },
  { to: '/real-life', label: 'Real Life' },
  { to: '/calculators', label: 'Calculators' },
]

const LOGGED_IN_LINKS = [
  { to: '/dashboard', label: 'Home' },
  { to: '/learn', label: 'Learn' },
  { to: '/challenges', label: 'Challenges' },
  { to: '/calculators', label: 'Calculators' },
  { to: '/progress', label: 'Progress' },
  { to: '/leaderboard', label: 'Leaderboard' },
]

export function Navbar() {
  const { user, profile, signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const links = user ? LOGGED_IN_LINKS : LOGGED_OUT_LINKS

  async function handleLogOut() {
    setOpen(false)
    await signOut()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.06] bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">¢</span>
          School of Cents
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-soft hover:bg-paper-dim hover:text-ink',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              {profile && (
                <div className="flex items-center gap-2 rounded-full bg-paper-dim px-3 py-1.5 text-sm font-semibold text-ink-soft">
                  <span>🔥 {profile.currentStreak}</span>
                  <span className="text-ink/15">|</span>
                  <span>⚡ {profile.xp.toLocaleString()}</span>
                </div>
              )}
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  cn('rounded-lg px-3 py-2 text-sm font-medium', isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-soft hover:bg-paper-dim')
                }
              >
                Profile
              </NavLink>
              <Button variant="ghost" size="sm" onClick={handleLogOut}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <LinkButton to="/login" variant="ghost" size="sm">
                Log In
              </LinkButton>
              <LinkButton to="/signup" size="sm">
                Start Free
              </LinkButton>
            </>
          )}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-paper-dim md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/[0.06] bg-paper px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn('rounded-lg px-3 py-2.5 text-sm font-medium', isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-soft hover:bg-paper-dim')
                }
              >
                {link.label}
              </NavLink>
            ))}
            {user && (
              <NavLink
                to="/profile"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn('rounded-lg px-3 py-2.5 text-sm font-medium', isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-soft hover:bg-paper-dim')
                }
              >
                Profile
              </NavLink>
            )}
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-ink/[0.06] pt-3">
            {user ? (
              <Button variant="secondary" onClick={handleLogOut}>
                Log Out
              </Button>
            ) : (
              <>
                <LinkButton to="/login" variant="secondary">
                  Log In
                </LinkButton>
                <LinkButton to="/signup">Start Free</LinkButton>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
