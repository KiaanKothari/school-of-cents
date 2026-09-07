import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function Terms() {
  useDocumentTitle('Terms of Use')
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-ink">Terms of Use</h1>
        <p className="mt-2 text-sm text-ink-faint">Last updated: draft — not yet reviewed by a lawyer.</p>

        <Card className="mt-6 border-dashed bg-gold-400/10">
          <p className="text-sm font-semibold text-ink">This page is a starting draft, not finished legal advice.</p>
          <p className="mt-1 text-sm text-ink-soft">
            Have it reviewed before treating it as a binding agreement with real users.
          </p>
        </Card>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Educational purpose only</h2>
            <p className="mt-2">
              School of Cents is an educational platform. Every lesson, scenario, daily challenge, and calculator on
              this site is provided for general educational purposes only and does not constitute financial,
              investment, tax, or legal advice, and is not a personalized recommendation for your specific situation.
              Nothing on this platform guarantees any financial outcome, return, or result. Always consider consulting
              a qualified professional before making real financial decisions.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Your account</h2>
            <p className="mt-2">
              You're responsible for keeping your password secure and for anything that happens under your account.
              XP, levels, streaks, and badges are for motivation and have no monetary value, cannot be redeemed for
              cash or prizes, and may be reset or adjusted if we find they were obtained through a bug or exploit
              rather than genuine use of the app.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Acceptable use</h2>
            <p className="mt-2">
              Please don't attempt to interfere with other users' accounts or data, attempt to manipulate the XP,
              streak, or leaderboard systems through means other than genuinely using the app, or use the platform for
              anything illegal or harmful.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">No warranty</h2>
            <p className="mt-2">
              This app is provided "as is," in active development, and may contain bugs, incorrect calculations, or
              periods of downtime. We do our best to keep the calculators and content accurate, but nothing here is
              guaranteed to be error-free.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Changes</h2>
            <p className="mt-2">
              These terms may be updated as the app changes. Continued use after an update means you accept the
              revised terms.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Reach out via the{' '}
              <a href="/contact" className="font-semibold text-brand-700 underline">Contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
