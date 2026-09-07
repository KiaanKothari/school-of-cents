import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function Privacy() {
  useDocumentTitle('Privacy Policy')
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-faint">Last updated: draft — not yet reviewed by a lawyer.</p>

        <Card className="mt-6 border-dashed bg-gold-400/10">
          <p className="text-sm font-semibold text-ink">This page is a starting draft, not finished legal advice.</p>
          <p className="mt-1 text-sm text-ink-soft">
            It accurately describes what this codebase actually does today, but you (or a legal advisor) should review
            and adapt it — especially the contact details — before this app is genuinely public, and update it again
            any time what the app collects or does changes.
          </p>
        </Card>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-lg font-bold text-ink">What we collect</h2>
            <p className="mt-2">
              Creating an account collects your email address, a display name you choose, and your password (handled
              entirely by Supabase Auth — this app never sees or stores your password itself). Using the app also
              stores your learning progress: which lessons and scenarios you've completed, your XP, streak, and any
              badges you've earned. That's the complete list — School of Cents does not collect your real name, date
              of birth, address, phone number, or any financial account information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">How we use it</h2>
            <p className="mt-2">
              Your email is used only to manage your account (login, password resets) and, if you separately opt in,
              to send the "Money Minute" newsletter. Your display name and XP are shown to other users only if you
              turn on leaderboard visibility in your profile — your email is never shown to other users under any
              circumstance. If analytics is enabled (see SETUP.md), anonymous usage events like "a lesson was
              completed" are recorded, but never alongside your email or display name.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Who can see your data</h2>
            <p className="mt-2">
              Your progress, XP, streaks, and badges are private to your account by default and protected at the
              database level — no other user or visitor can read them. The only exception is the leaderboard, which
              shows just your display name and XP, and only if you've explicitly turned that on.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Minors</h2>
            <p className="mt-2">
              This app is built for students, some of whom may be minors. We intentionally collect the minimum
              information needed to run the app (see above) and do not knowingly collect anything beyond that. If
              you're a parent or guardian with questions about a minor's account, contact us using the details on the{' '}
              <a href="/contact" className="font-semibold text-brand-700 underline">Contact page</a>.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Third parties</h2>
            <p className="mt-2">
              Account data and progress are stored with Supabase, our database and authentication provider. If you
              enable Google AdSense or Google Analytics (both off by default — see SETUP.md), those services receive
              standard advertising/analytics data under Google's own privacy policies. We do not sell your data to
              anyone.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Your choices</h2>
            <p className="mt-2">
              You can change your display name or turn leaderboard visibility on or off any time from your Profile
              page. There is currently no self-service "delete my account" button in the app itself — to request your
              account and all associated data be deleted, contact us using the details on the{' '}
              <a href="/contact" className="font-semibold text-brand-700 underline">Contact page</a>. [Placeholder:
              consider adding a genuine in-app deletion flow before a wider public launch.]
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
