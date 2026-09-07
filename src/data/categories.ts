import type { Category } from '@/types'

export const CATEGORIES: Category[] = [
  {
    id: 'money-basics',
    name: 'Money Basics',
    shortName: 'Basics',
    icon: '💵',
    description: 'The foundational habits and vocabulary every money journey starts with.',
    accent: 'brand',
  },
  {
    id: 'budgeting',
    name: 'Budgeting',
    shortName: 'Budgeting',
    icon: '📊',
    description: 'Plan your spending so your money goes where you actually want it to.',
    accent: 'sky',
  },
  {
    id: 'credit-debt',
    name: 'Credit & Debt',
    shortName: 'Credit',
    icon: '💳',
    description: 'How borrowing really works, and how to use it without it using you.',
    accent: 'coral',
  },
  {
    id: 'investing',
    name: 'Investing',
    shortName: 'Investing',
    icon: '📈',
    description: 'Put your money to work — the honest, unglamorous version.',
    accent: 'gold',
  },
  {
    id: 'banking',
    name: 'Banking',
    shortName: 'Banking',
    icon: '🏦',
    description: 'How checking, savings, and banks actually work under the hood. Coming soon.',
    accent: 'sky',
  },
  {
    id: 'taxes',
    name: 'Taxes',
    shortName: 'Taxes',
    icon: '🧾',
    description: 'Demystify the system that touches every paycheck you earn.',
    accent: 'navy',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    icon: '🏠',
    description: 'Renting, buying, and everything that comes with a set of keys.',
    accent: 'brand',
  },
  {
    id: 'retirement',
    name: 'Retirement',
    shortName: 'Retirement',
    icon: '👴',
    description: 'Future-you is counting on decisions made by today-you.',
    accent: 'sky',
  },
]

export function categoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id)
}
