import { Link } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { LinkButton } from '@/components/ui/Button'
import { TopicCard } from '@/components/TopicCard'
import { QuizQuestionCard } from '@/components/QuizQuestionCard'
import { NewsletterForm } from '@/components/NewsletterForm'
import { AdSlot } from '@/components/ads/AdSlot'
import { CATEGORIES } from '@/data/categories'
import { useAuth } from '@/context/AuthContext'
import { Navigate } from 'react-router-dom'

const STEPS = [
  { icon: '📖', title: 'Learn', body: 'Short lessons that take 3–5 minutes — no fluff, no fifty-page textbooks.' },
  { icon: '🧭', title: 'Decide', body: 'Make real-world financial decisions in realistic, no-stakes scenarios.' },
  { icon: '⚡', title: 'Earn', body: 'Gain XP, unlock badges, and build a streak you actually want to protect.' },
  { icon: '🌱', title: 'Grow', body: 'Build financial knowledge one skill at a time, at your own pace.' },
]

const JOURNEY = ['Money Basics', 'Saving', 'Credit', 'Investing', 'Taxes', 'Wealth Building']

const SAMPLE_QUESTION = {
  id: 'sample',
  prompt: 'You get a raise and now bring home an extra $300/month. What best describes "lifestyle inflation"?',
  choices: [
    { id: 'a', text: 'Spending increases to match the new income, so nothing extra actually gets saved' },
    { id: 'b', text: 'Prices going up because you make more money' },
    { id: 'c', text: 'Your bank automatically raising your interest rate' },
    { id: 'd', text: 'A type of tax bracket' },
  ],
  correctChoiceId: 'a',
  explanation:
    'Lifestyle inflation is when spending quietly rises to swallow every raise — nicer takeout, a bigger apartment, more subscriptions — so your savings rate never actually improves no matter how much you earn.',
}

export default function Home() {
  const { user } = useAuth()
  if (user) return <Navigate to="/dashboard" replace />

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-grain text-white" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-200">
            💰 A friendlier way to learn about money
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-6xl">
            School of Cents
          </h1>
          <p className="mt-3 font-display text-xl font-semibold text-brand-200 sm:text-2xl">
            Learn money. Make better decisions.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            Master the financial skills you actually need — through short lessons, real-life scenarios, and interactive
            challenges.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton to="/signup" size="lg">
              Start Learning — Free
            </LinkButton>
            <LinkButton to="/learn" size="lg" variant="secondary">
              Explore Topics
            </LinkButton>
          </div>
          <p className="mt-5 text-sm text-white/50">Free account. Save your progress. Learn at your own pace.</p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink">How School of Cents Works</h2>
          <p className="mt-2 text-ink-faint">Four simple steps, every single day.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="animate-fade-up relative rounded-2xl border border-ink/[0.06] bg-white p-6 shadow-soft" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">{step.icon}</div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-600">Step {i + 1}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm text-ink-faint">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-ink">Pick a topic, any topic</h2>
            <p className="mt-2 text-ink-faint">Every path starts with the basics and builds from there.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <TopicCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad slot — see SETUP.md to turn this on */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AdSlot slot="0000000000" />
      </div>

      {/* Sample interactive question */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink">Try one right now</h2>
          <p className="mt-2 text-ink-faint">This is exactly what a lesson question looks like. No account needed.</p>
        </div>
        <div className="mt-10">
          <QuizQuestionCard question={SAMPLE_QUESTION} />
        </div>
      </section>

      {/* Journey */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Your Financial Journey</h2>
          <p className="mt-2 text-white/60">One connected path, from your first dollar to lasting wealth.</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {JOURNEY.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brand-200">{step}</span>
                {i < JOURNEY.length - 1 && <span className="text-white/30">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink">The Money Minute</h2>
        <p className="mt-2 text-ink-faint">One useful money lesson in your inbox.</p>
        <div className="mt-6 flex justify-center">
          <NewsletterForm />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-xs text-ink-faint">
          School of Cents provides educational information and is not financial, tax, or investment advice.
        </p>
      </section>

      <section className="border-t border-ink/[0.06] bg-paper-dim/40 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-ink-faint">
            Ready to get started? <Link to="/signup" className="font-semibold text-brand-700 underline">Create your free account</Link> —
            it takes less than a minute.
          </p>
        </div>
      </section>
    </Layout>
  )
}
