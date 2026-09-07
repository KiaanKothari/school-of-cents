import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.06] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">¢</span>
              School of Cents
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ink-faint">Learn money. Make better decisions.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink-faint">
              <li><Link to="/learn" className="hover:text-brand-700">Learn</Link></li>
              <li><Link to="/real-life" className="hover:text-brand-700">Real Life Scenarios</Link></li>
              <li><Link to="/calculators" className="hover:text-brand-700">Calculators</Link></li>
              <li><Link to="/leaderboard" className="hover:text-brand-700">Leaderboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">Account</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink-faint">
              <li><Link to="/signup" className="hover:text-brand-700">Start Free</Link></li>
              <li><Link to="/login" className="hover:text-brand-700">Log In</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">The Money Minute</h4>
            <p className="mt-3 text-sm text-ink-faint">One useful financial concept. A few minutes. Every week.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink-faint">
              <li><Link to="/privacy" className="hover:text-brand-700">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-700">Terms of Use</Link></li>
              <li><Link to="/contact" className="hover:text-brand-700">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-ink/[0.06] pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-ink-faint">
            School of Cents is an educational platform. Content is provided for general educational purposes and does not
            constitute financial, investment, tax, or legal advice. Always consider consulting a qualified professional
            about your specific situation.
          </p>
          <p className="mt-3 text-xs text-ink-faint/70">© {new Date().getFullYear()} School of Cents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
