// Pure math for the educational calculators. No API calls, no persistence —
// these are illustrative estimates, clearly labeled as such in the UI.

export interface CompoundGrowthYear {
  year: number
  contributions: number
  balance: number
}

export interface CompoundGrowthResult {
  years: CompoundGrowthYear[]
  totalContributed: number
  totalBalance: number
  totalGrowth: number
}

export function compoundGrowth(
  initial: number,
  monthlyContribution: number,
  annualReturnPercent: number,
  years: number,
): CompoundGrowthResult {
  const monthlyRate = annualReturnPercent / 100 / 12
  let balance = initial
  let contributed = initial
  const yearRows: CompoundGrowthYear[] = [{ year: 0, contributions: contributed, balance }]

  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution
      contributed += monthlyContribution
    }
    yearRows.push({ year: y, contributions: contributed, balance })
  }

  return {
    years: yearRows,
    totalContributed: contributed,
    totalBalance: balance,
    totalGrowth: balance - contributed,
  }
}

export interface BudgetResult {
  remaining: number
  spentPercent: number
  savedPercent: number
}

export function budgetBreakdown(income: number, expenses: number, savings: number): BudgetResult {
  const remaining = income - expenses - savings
  const spentPercent = income > 0 ? Math.round((expenses / income) * 100) : 0
  const savedPercent = income > 0 ? Math.round((savings / income) * 100) : 0
  return { remaining, spentPercent, savedPercent }
}

export interface DebtPayoffResult {
  possible: boolean
  months: number
  totalInterest: number
  totalPaid: number
  schedule: { month: number; balance: number }[]
}

export function debtPayoff(balance: number, aprPercent: number, monthlyPayment: number): DebtPayoffResult {
  const monthlyRate = aprPercent / 100 / 12
  const firstInterest = balance * monthlyRate
  if (monthlyPayment <= firstInterest) {
    return { possible: false, months: 0, totalInterest: 0, totalPaid: 0, schedule: [] }
  }

  let remaining = balance
  let month = 0
  let totalInterest = 0
  const schedule: { month: number; balance: number }[] = [{ month: 0, balance: remaining }]

  while (remaining > 0 && month < 1200) {
    const interest = remaining * monthlyRate
    totalInterest += interest
    remaining = remaining + interest - monthlyPayment
    month += 1
    if (remaining < 0) remaining = 0
    schedule.push({ month, balance: remaining })
  }

  return {
    possible: true,
    months: month,
    totalInterest,
    totalPaid: balance + totalInterest,
    schedule,
  }
}

export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}
