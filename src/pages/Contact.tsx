import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

// Deliberately a static mailto link rather than a contact form: there's no
// backend or email service wired up to receive form submissions yet (same
// honesty principle as the newsletter form — see NewsletterForm.tsx), and a
// form that silently goes nowhere is worse than no form at all.
const SUPPORT_EMAIL = 'hello@schoolofcents.com'

export default function Contact() {
  useDocumentTitle('Contact')
  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-ink">Contact</h1>
        <p className="mt-3 text-ink-faint">
          Questions, feedback, a privacy request, or something not working right — reach out any time.
        </p>

        <Card className="mt-8 border-dashed bg-gold-400/10">
          <p className="text-sm font-semibold text-ink">Placeholder email address</p>
          <p className="mt-1 text-sm text-ink-soft">
            <code className="rounded bg-white/70 px-1 py-0.5">{SUPPORT_EMAIL}</code> is a placeholder built from the
            domain name — set up a real inbox at that address (or swap in whichever address you'll actually monitor)
            before launch, in <code className="rounded bg-white/70 px-1 py-0.5">src/pages/Contact.tsx</code>.
          </p>
        </Card>

        <Card className="mt-6">
          <p className="text-sm text-ink-soft">
            Email{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-brand-700 underline">
              {SUPPORT_EMAIL}
            </a>
            . For a parent or guardian asking about a minor's account, or a request to delete an account and its
            data, mention that directly in your message.
          </p>
        </Card>
      </div>
    </Layout>
  )
}
