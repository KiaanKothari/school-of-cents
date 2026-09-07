import { useEffect, useMemo, useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { GrowthChart } from '@/components/charts/GrowthChart'
import { PayoffChart } from '@/components/charts/PayoffChart'
import { compoundGrowth, budgetBreakdown, debtPayoff, formatCurrency } from '@/utils/calculators'
import { cn } from '@/utils/cn'
import { useDocumentTitle } from '@/utils/useDocumentTitle'
import { trackEvent } from '@/services/analytics'

type Tab = 'growth' | 'budget' | 'debt'

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'growth', label: 'Compound Growth', icon: '📈' },
  { id: 'budget', label: 'Budget', icon: '📊' },
  { id: 'debt', label: 'Debt Payoff', icon: '💳' },
]

function NumberField({ label, value, onChange, prefix, suffix, step = 1 }: { label: string; value: number; onChange: (v: number) => void; prefix?: string; suffix?: string; step?: number }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <div className="flex items-center rounded-xl border border-ink/10 bg-white px-3 focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100">
        {prefix && <span className="text-sm text-ink-faint">{prefix}</span>}
        <input
          type="number"
          value={value}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent py-2.5 text-sm text-ink outline-none"
        />
        {suffix && <span className="text-sm text-ink-faint">{suffix}</span>}
      </div>
    </label>
  )
}

export default function Calculators() {
  const [tab, setTab] = useState<Tab>('growth')
  useDocumentTitle('Financial Calculators')

  // Fires for the default tab on load and again on every switch — each is a
  // genuine instance of "this calculator was used."
  useEffect(() => {
    trackEvent('calculator_used', { calculator: tab })
  }, [tab])

  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Financial Calculators</h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-faint">
            Quick, educational estimates to help you understand the math behind common money decisions.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-2 rounded-2xl bg-paper-dim p-1.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                'flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors',
                tab === t.id ? 'bg-white text-brand-700 shadow-soft' : 'text-ink-faint hover:text-ink',
              )}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === 'growth' && <GrowthCalculator />}
          {tab === 'budget' && <BudgetCalculator />}
          {tab === 'debt' && <DebtCalculator />}
        </div>

        <p className="mt-8 text-center text-xs text-ink-faint">
          These calculators provide general educational estimates only and don't account for taxes, fees, inflation, or
          your full financial picture. They are not financial, investment, or tax advice.
        </p>
      </div>
    </Layout>
  )
}

function GrowthCalculator() {
  const [initial, setInitial] = useState(1000)
  const [monthly, setMonthly] = useState(150)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(20)

  const result = useMemo(() => compoundGrowth(initial, monthly, rate, years), [initial, monthly, rate, years])

  return (
    <Card>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Initial amount" value={initial} onChange={setInitial} prefix="$" />
        <NumberField label="Monthly contribution" value={monthly} onChange={setMonthly} prefix="$" />
        <NumberField label="Estimated annual return" value={rate} onChange={setRate} suffix="%" step={0.5} />
        <NumberField label="Years" value={years} onChange={setYears} />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-xl bg-paper-dim p-3">
          <p className="text-xs text-ink-faint">Contributed</p>
          <p className="mt-1 font-display font-bold text-ink">{formatCurrency(result.totalContributed)}</p>
        </div>
        <div className="rounded-xl bg-brand-50 p-3">
          <p className="text-xs text-ink-faint">Growth</p>
          <p className="mt-1 font-display font-bold text-brand-700">{formatCurrency(result.totalGrowth)}</p>
        </div>
        <div className="rounded-xl bg-navy p-3">
          <p className="text-xs text-white/70">Projected total</p>
          <p className="mt-1 font-display font-bold text-white">{formatCurrency(result.totalBalance)}</p>
        </div>
      </div>

      <div className="mt-6">
        <GrowthChart data={result.years} />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Illustrative only — assumes a steady {rate}% annual return, which real markets never actually deliver in a straight
        line. Investing involves risk, including possible loss of principal.
      </p>
    </Card>
  )
}

function BudgetCalculator() {
  const [income, setIncome] = useState(4500)
  const [expenses, setExpenses] = useState(3000)
  const [savings, setSavings] = useState(500)

  const result = useMemo(() => budgetBreakdown(income, expenses, savings), [income, expenses, savings])

  return (
    <Card>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Income" value={income} onChange={setIncome} prefix="$" />
        <NumberField label="Expenses" value={expenses} onChange={setExpenses} prefix="$" />
        <NumberField label="Savings" value={savings} onChange={setSavings} prefix="$" />
      </div>

      <div className={cn('mt-6 rounded-xl p-4 text-center', result.remaining < 0 ? 'bg-coral-400/10' : 'bg-brand-50')}>
        <p className="text-xs text-ink-faint">Remaining</p>
        <p className={cn('mt-1 font-display text-2xl font-bold', result.remaining < 0 ? 'text-coral-500' : 'text-brand-700')}>
          {formatCurrency(result.remaining)}
        </p>
        {result.remaining < 0 && <p className="mt-1 text-xs text-coral-500">You're planning to spend more than you bring in.</p>}
      </div>

      <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-paper-dim">
        <div className="flex h-full">
          <div className="h-full bg-navy-700" style={{ width: `${Math.min(100, result.spentPercent)}%` }} />
          <div className="h-full bg-brand-500" style={{ width: `${Math.min(100 - result.spentPercent, result.savedPercent)}%` }} />
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-5 text-xs text-ink-faint">
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-navy-700" /> Expenses ({result.spentPercent}%)</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-brand-500" /> Savings ({result.savedPercent}%)</span>
      </div>
    </Card>
  )
}

function DebtCalculator() {
  const [balance, setBalance] = useState(4000)
  const [apr, setApr] = useState(22)
  const [payment, setPayment] = useState(200)

  const result = useMemo(() => debtPayoff(balance, apr, payment), [balance, apr, payment])

  return (
    <Card>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Balance" value={balance} onChange={setBalance} prefix="$" />
        <NumberField label="APR" value={apr} onChange={setApr} suffix="%" step={0.5} />
        <NumberField label="Monthly payment" value={payment} onChange={setPayment} prefix="$" />
      </div>

      {!result.possible ? (
        <div className="mt-6 rounded-xl bg-coral-400/10 p-4 text-sm text-coral-500">
          At this payment, interest is growing at least as fast as you're paying it down — the balance will never reach
          zero. Try a higher monthly payment.
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-paper-dim p-3">
              <p className="text-xs text-ink-faint">Time to pay off</p>
              <p className="mt-1 font-display font-bold text-ink">{result.months} mo</p>
            </div>
            <div className="rounded-xl bg-coral-400/10 p-3">
              <p className="text-xs text-ink-faint">Interest paid</p>
              <p className="mt-1 font-display font-bold text-coral-500">{formatCurrency(result.totalInterest)}</p>
            </div>
            <div className="rounded-xl bg-navy p-3">
              <p className="text-xs text-white/70">Total paid</p>
              <p className="mt-1 font-display font-bold text-white">{formatCurrency(result.totalPaid)}</p>
            </div>
          </div>
          <div className="mt-6">
            <PayoffChart schedule={result.schedule} />
          </div>
        </>
      )}
    </Card>
  )
}
