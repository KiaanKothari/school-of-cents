import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { LinkButton } from '@/components/ui/Button'
import { MoneyMinuteCard } from '@/components/MoneyMinuteCard'
import { NewsletterForm } from '@/components/NewsletterForm'
import { MONEY_MINUTES } from '@/data/moneyMinutes'
import { dayOfYear } from '@/utils/date'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function MoneyMinute() {
  useDocumentTitle('Money Minute')

  const todayIndex = dayOfYear() % MONEY_MINUTES.length
  const upcoming = Array.from(
    { length: 6 },
    (_, i) => MONEY_MINUTES[(todayIndex + i + 1) % MONEY_MINUTES.length],
  )

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-ink">The Money Minute</h1>
          <p className="mt-2 text-ink-faint">One useful money fact, every single day.</p>
        </div>

        <div className="mt-8">
          <MoneyMinuteCard />
        </div>

        <div className="mt-14">
          <h2 className="font-display text-lg font-bold text-ink">More Money Minutes</h2>
          <div className="mt-4 space-y-3">
            {upcoming.map((m, i) => (
              <Card key={i} className="flex items-start gap-3">
                <span className="shrink-0 text-xl">{m.emoji}</span>
                <p className="text-sm text-ink-soft">{m.tip}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-ink-faint">Want a new one delivered to your inbox too?</p>
          <div className="mt-3 flex justify-center">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-ink/[0.06] bg-white p-6 text-center shadow-soft">
          <p className="text-sm font-semibold text-ink">Want the full picture, not just one fact a day?</p>
          <p className="mt-1 text-sm text-ink-faint">38 short lessons, real-life scenarios, and XP to keep you going — all free.</p>
          <div className="mt-4 flex justify-center">
            <LinkButton to="/signup">Start Learning — Free</LinkButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}
