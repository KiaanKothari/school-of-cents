import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { LinkButton } from '@/components/ui/Button'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function About() {
  useDocumentTitle('About the Founder')

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            About the Founder
          </span>
          <div className="mt-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 font-display text-3xl font-bold text-brand-700">
              K
            </div>
          </div>
          <h1 className="mt-5 font-display text-3xl font-bold text-ink">Hi, I'm Kiaan Kothari.</h1>
          <p className="mt-2 text-sm font-medium text-ink-faint">15 · Sophomore · West Windsor, New Jersey</p>
        </div>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft">
          <p>
            I started School of Cents because of something I noticed at my own school: I take a personal finance
            course that actually teaches the basics — how credit works, why saving early matters, what an index fund
            even is — and when I talked to friends at other schools, most of them had never gotten anything like it.
            Same age, same eventual paychecks and credit cards, completely different starting point.
          </p>
          <p>
            I didn't love the alternative, either. Most financial content online is written for adults who already
            know the vocabulary, and it can feel like reading a legal contract if you don't. So I built School of
            Cents to explain this stuff the way I'd actually want it explained — plainly, without assuming you
            already know the jargon.
          </p>

          <Card className="border-brand-100 bg-brand-50/50">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-600">Coming soon</p>
            <p className="mt-2 text-base leading-relaxed text-ink">
              The feature I'm most excited to build next is <span className="font-semibold">MoneyWise</span> — a
              chat where you can ask an honestly basic-sounding question about money, no name attached, no judgment,
              and get a real answer instead of a lecture. It's still in the works, but it's the one I can't wait to
              ship.
            </p>
          </Card>

          <p>
            School of Cents is brand new, and I'm still building it. But the problem it's trying to solve is one
            I've seen up close, from both sides of it, and that's what I'm working on fixing.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-ink/[0.06] pt-10 text-center sm:flex-row">
          <LinkButton to="/signup">Start Learning — Free</LinkButton>
          <LinkButton to="/contact" variant="secondary">
            Send Feedback
          </LinkButton>
        </div>
      </div>
    </Layout>
  )
}
