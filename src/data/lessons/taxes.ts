import type { Lesson } from '@/types'

// Educational content only — general tax concepts explained for learning purposes,
// not personalized tax advice. Rules, brackets, and account limits change over time
// and vary by individual situation; always confirm current details with official
// sources or a qualified tax professional before making decisions.

export const taxesLessons: Lesson[] = [
  {
    id: 'taxes-1',
    categoryId: 'taxes',
    order: 1,
    title: 'Why Do We Pay Taxes?',
    description: 'Taxes fund the shared stuff none of us could easily build alone.',
    estimatedMinutes: 3,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Taxes pay for shared things',
        body: [
          'Taxes are money that individuals and businesses pay to governments — federal, state, and local — to fund things that benefit the public broadly, rather than any one person directly.',
          'Think of roads, public schools, the military, national parks, emergency services, and programs like Social Security and Medicare. These are expensive to build and maintain, and it would be impractical for each person to pay for their own private version of them.',
          'Taxes are essentially a way of pooling resources so a society can fund large shared projects and safety nets that most people benefit from, directly or indirectly, over their lifetime.',
        ],
      },
      {
        heading: 'Several layers of taxes touch your paycheck',
        body: [
          'In the U.S., you typically encounter multiple types of taxes: federal income tax, often state and sometimes local income tax, and payroll taxes for Social Security and Medicare (sometimes called FICA taxes).',
          'Beyond your paycheck, you also encounter taxes elsewhere — sales tax on purchases, property tax if you own real estate, and others. Each funds different things and is collected differently.',
          'This lesson focuses mainly on income-related taxes, since that\'s what shows up most directly on a typical paycheck.',
        ],
        examples: [
          {
            label: 'A simplified paycheck breakdown',
            detail: 'A $1,000 gross paycheck might have federal income tax, state income tax, Social Security tax, and Medicare tax each withheld separately, resulting in a smaller "net" or "take-home" amount actually deposited into your bank account.',
          },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'taxes-1-interactive',
      prompt: 'What is the general purpose of taxes collected by governments?',
      choices: [
        { id: 'a', text: 'To fund shared public goods and services like roads, schools, and safety-net programs' },
        { id: 'b', text: 'To directly pay back the exact amount you contribute, only to you' },
        { id: 'c', text: 'They serve no functional purpose' },
        { id: 'd', text: 'To only fund the military and nothing else' },
      ],
      correctChoiceId: 'a',
      explanation: 'Taxes pool money to fund public goods and services that benefit society broadly — infrastructure, education, defense, and safety-net programs among them — not a direct one-to-one payback to each individual payer.',
    },
    quiz: [
      {
        id: 'taxes-1-q1',
        prompt: 'Which of these is an example of something commonly funded by taxes?',
        choices: [
          { id: 'a', text: 'Your personal grocery bill' },
          { id: 'b', text: 'Public roads and schools' },
          { id: 'c', text: 'A private streaming subscription' },
          { id: 'd', text: 'Your individual retirement savings account' },
        ],
        correctChoiceId: 'b',
        explanation: 'Public infrastructure like roads and schools benefits the community broadly and is typically funded through taxes, unlike personal expenses or private accounts.',
      },
      {
        id: 'taxes-1-q2',
        prompt: 'What is commonly withheld from a typical U.S. paycheck, in addition to federal income tax?',
        choices: [
          { id: 'a', text: 'Nothing else is ever withheld' },
          { id: 'b', text: 'Often state/local income tax and payroll taxes for Social Security and Medicare' },
          { id: 'c', text: 'Only sales tax' },
          { id: 'd', text: 'Only property tax' },
        ],
        correctChoiceId: 'b',
        explanation: 'A typical paycheck often has multiple types of taxes withheld: federal income tax, possibly state or local income tax, and payroll taxes (Social Security and Medicare, sometimes called FICA).',
      },
    ],
  },
  {
    id: 'taxes-2',
    categoryId: 'taxes',
    order: 2,
    title: 'Tax Brackets Explained',
    description: 'Moving into a higher tax bracket doesn\'t mean all your income suddenly gets taxed more.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'A progressive system, not an all-or-nothing one',
        body: [
          'The U.S. federal income tax uses a "progressive" system with multiple brackets, each taxed at a different rate. Higher portions of income are taxed at higher rates — but here\'s the key part many people misunderstand: only the income within each bracket is taxed at that bracket\'s rate, not your entire income.',
          'This is often called your "marginal tax rate" — the rate applied to your last, highest dollar of income — as opposed to your "effective tax rate," which is the average rate you actually pay across all your income combined.',
          'A common myth is that earning more money and crossing into a higher bracket could somehow leave you with less take-home pay overall. Because only the income above each threshold is taxed at the higher rate, that\'s not how it works — you never lose money overall by earning more.',
        ],
      },
      {
        heading: 'Working through the marginal math',
        body: [
          'Imagine a simplified, illustrative bracket structure (not necessarily matching any current real-world rates): 10% on the first $10,000 of taxable income, 12% on the next $30,000, and 22% on the next $50,000.',
          'If someone has $45,000 in taxable income, they don\'t pay 12% (their "top" bracket here) on the whole $45,000. They pay 10% on the first $10,000, and 12% on the remaining $35,000.',
          'Their total tax owed and their effective (average) rate end up notably lower than their marginal rate — which is the norm under a progressive system, not an exception.',
        ],
        examples: [
          {
            label: '$45,000 in taxable income, illustrative simplified brackets',
            detail: '10% × $10,000 = $1,000. 12% × $35,000 (the portion from $10,000 to $45,000) = $4,200. Total tax = $5,200. Effective rate = $5,200 ÷ $45,000 ≈ 11.6% — well below the 12% marginal rate on that last dollar.',
          },
        ],
      },
      {
        heading: 'Real brackets change over time',
        body: [
          'Actual tax brackets, income thresholds, and rates are set by law and adjusted periodically (often for inflation), and they differ depending on filing status (single, married filing jointly, etc.).',
          'This lesson uses simplified numbers purely to illustrate how the marginal-rate math works. For your actual tax situation, always check current official figures or consult a qualified tax professional.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'taxes-2-interactive',
      prompt: 'Under a progressive tax system, if you earn enough to move into a higher tax bracket, what actually happens?',
      choices: [
        { id: 'a', text: 'Your entire income gets taxed at the new, higher rate' },
        { id: 'b', text: 'Only the portion of income within that higher bracket gets taxed at the higher rate' },
        { id: 'c', text: 'You automatically owe a penalty for earning more' },
        { id: 'd', text: 'Your take-home pay always decreases when you cross into a new bracket' },
      ],
      correctChoiceId: 'b',
      explanation: 'Progressive tax brackets apply higher rates only to the income earned within that bracket\'s range, not to your entire income — so earning more never reduces your overall take-home pay.',
    },
    quiz: [
      {
        id: 'taxes-2-q1',
        prompt: 'What is the difference between your "marginal" tax rate and your "effective" tax rate?',
        choices: [
          { id: 'a', text: 'They always refer to the exact same number' },
          { id: 'b', text: 'Marginal is the rate on your last dollar of income; effective is your average rate across all income' },
          { id: 'c', text: 'Marginal only applies to state taxes; effective only applies to federal taxes' },
          { id: 'd', text: 'Effective rate is always higher than marginal rate' },
        ],
        correctChoiceId: 'b',
        explanation: 'Your marginal rate is what applies to your highest bracket of income; your effective rate is your total tax divided by your total income, which is typically lower than your marginal rate under a progressive system.',
      },
      {
        id: 'taxes-2-q2',
        prompt: 'Using the lesson\'s illustrative brackets (10% up to $10,000, 12% on the next $30,000), what is the tax owed on $20,000 of taxable income?',
        choices: [
          { id: 'a', text: '$2,400 (12% of the full $20,000)' },
          { id: 'b', text: '$2,000 (10% of the full $20,000)' },
          { id: 'c', text: '$2,200 (10% on the first $10,000, plus 12% on the next $10,000)' },
          { id: 'd', text: '$0, because $20,000 is below the top bracket' },
        ],
        correctChoiceId: 'c',
        explanation: 'The first $10,000 is taxed at 10% = $1,000. The remaining $10,000 (from $10,000 to $20,000) falls in the 12% bracket = $1,200. Total = $2,200, not a flat rate applied to the whole amount.',
      },
      {
        id: 'taxes-2-q3',
        prompt: 'Why is the common belief "earning more could leave me with less money overall by pushing me into a higher bracket" a myth?',
        choices: [
          { id: 'a', text: 'Because tax brackets don\'t actually exist' },
          { id: 'b', text: 'Because only the additional income above a threshold is taxed at the higher rate — your other income keeps its original, lower rate' },
          { id: 'c', text: 'Because tax brackets only apply to businesses, not individuals' },
          { id: 'd', text: 'Because effective tax rates are always 0%' },
        ],
        correctChoiceId: 'b',
        explanation: 'Since higher rates apply only to the income within that specific bracket, earning an additional dollar only ever costs you tax on that dollar — it never reduces the take-home value of income you already had.',
      },
    ],
  },
  {
    id: 'taxes-3',
    categoryId: 'taxes',
    order: 3,
    title: 'Withholding vs Tax Liability',
    description: 'What your employer takes out of each paycheck is an estimate — not the final bill.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'Two different numbers, often confused',
        body: [
          'Your "tax liability" is the actual amount of tax you owe for the year, calculated once your full income and other details are known — this is determined when you file your tax return.',
          '"Withholding" is the estimated amount your employer takes out of each paycheck throughout the year and sends to the government on your behalf, based on the information you provided (like on a W-4 form in the U.S.).',
          'These two numbers are rarely exactly equal. Withholding is a running estimate; tax liability is the final calculation. The gap between them is settled when you file.',
        ],
      },
      {
        heading: 'Refunds and balances due, explained',
        body: [
          'If your withholding throughout the year turns out to be more than your actual tax liability, you typically get the difference back as a "refund" when you file.',
          'If your withholding turns out to be less than your actual liability, you typically owe the difference — a "balance due" — when you file.',
          'A large refund is often described as essentially an interest-free loan you gave the government during the year, since it means too much was withheld from each paycheck relative to what you actually owed.',
        ],
        examples: [
          {
            label: 'Illustrative example',
            detail: 'If $6,000 was withheld from your paychecks over the year, and your actual calculated tax liability turns out to be $5,200, you\'d typically receive an $800 refund. If your liability had instead been $6,500, you\'d typically owe an additional $500.',
          },
        ],
      },
      {
        heading: 'Why this matters for planning',
        body: [
          'Some people intentionally adjust their withholding (for example, via a W-4 form) to more closely match their expected liability — aiming to neither overpay all year nor face a large unexpected bill at filing time.',
          'This lesson explains the general mechanics only. How to adjust your own withholding depends on your personal income, deductions, and filing status, and is worth reviewing with current official guidance or a tax professional.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'taxes-3-interactive',
      prompt: 'If more was withheld from your paychecks over the year than your actual tax liability, what typically happens when you file?',
      choices: [
        { id: 'a', text: 'You owe an additional balance' },
        { id: 'b', text: 'You typically receive a refund for the difference' },
        { id: 'c', text: 'Nothing changes — withholding and liability are always identical' },
        { id: 'd', text: 'The extra amount is automatically donated to charity' },
      ],
      correctChoiceId: 'b',
      explanation: 'Withholding is only an estimate made throughout the year. When it exceeds your actual calculated liability, the excess is typically returned to you as a refund.',
    },
    quiz: [
      {
        id: 'taxes-3-q1',
        prompt: 'What is "tax liability"?',
        choices: [
          { id: 'a', text: 'The amount withheld from your very first paycheck of the year' },
          { id: 'b', text: 'The actual total amount of tax you owe for the year, determined when you file' },
          { id: 'c', text: 'A penalty for filing your taxes late' },
          { id: 'd', text: 'The amount your employer keeps as a fee' },
        ],
        correctChoiceId: 'b',
        explanation: 'Tax liability is the final, actual amount you owe for the year based on your complete financial picture — separate from the running estimate withheld from each paycheck.',
      },
      {
        id: 'taxes-3-q2',
        prompt: 'Why is a very large tax refund sometimes described as not necessarily a great outcome?',
        choices: [
          { id: 'a', text: 'Because refunds are always taxed at a higher rate' },
          { id: 'b', text: 'Because it suggests too much money was withheld throughout the year that could have been available to you sooner' },
          { id: 'c', text: 'Because refunds are illegal in most states' },
          { id: 'd', text: 'Because it means you underpaid your taxes' },
        ],
        correctChoiceId: 'b',
        explanation: 'A large refund generally means you had more withheld from each paycheck than necessary — essentially giving the government an interest-free loan of your own money during the year instead of having access to it sooner.',
      },
      {
        id: 'taxes-3-q3',
        prompt: 'What tool do U.S. employees typically use to tell their employer how much to withhold from each paycheck?',
        choices: [
          { id: 'a', text: 'A W-4 form' },
          { id: 'b', text: 'A grocery receipt' },
          { id: 'c', text: 'Their driver\'s license' },
          { id: 'd', text: 'A savings account statement' },
        ],
        correctChoiceId: 'a',
        explanation: 'In the U.S., the W-4 form is what employees submit to their employer to indicate information used to calculate how much tax to withhold from each paycheck.',
      },
    ],
  },
  {
    id: 'taxes-4',
    categoryId: 'taxes',
    order: 4,
    title: 'Capital Gains',
    description: 'Selling an investment for more than you paid triggers its own special kind of tax.',
    estimatedMinutes: 4,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'What counts as a capital gain',
        body: [
          'A capital gain is the profit you make when you sell an investment (like a stock, bond, or piece of real estate) for more than you originally paid for it. If you sell it for less than you paid, that\'s a "capital loss" instead.',
          'Importantly, a gain generally isn\'t taxed until you actually sell the investment and "realize" that gain — simply watching an investment\'s paper value grow while you continue holding it typically isn\'t a taxable event by itself.',
          'This is different from regular income tax on wages, which is generally taxed as it\'s earned, paycheck by paycheck.',
        ],
      },
      {
        heading: 'Short-term vs long-term matters a lot',
        body: [
          'In the U.S., how long you held an investment before selling it changes how the gain is taxed. A "short-term" capital gain (generally, held one year or less) is typically taxed at the same rates as your regular income.',
          'A "long-term" capital gain (generally, held more than one year) is often taxed at lower specific rates than ordinary income tax rates — a distinction that exists, in part, to encourage longer-term holding.',
          'This difference can be substantial, which is one reason the holding period before selling is worth being aware of — though it\'s only one of many factors in any decision, not the only one.',
        ],
        examples: [
          {
            label: 'Illustrative comparison, not current tax rates',
            detail: 'Selling an investment for a $2,000 profit after holding it 11 months might be taxed at your regular income tax rate. Selling that same $2,000 profit after holding it 13 months might qualify for a lower long-term capital gains rate — resulting in less tax owed on the identical dollar amount of profit.',
          },
        ],
      },
      {
        heading: 'A quick note on losses',
        body: [
          'Capital losses can often be used to offset capital gains for tax purposes, which can reduce the total amount of gain you owe tax on in a given year. Specific rules govern how much loss can offset gains and what happens with any excess.',
          'The exact rates, holding-period thresholds, and loss rules change over time and depend on your overall income and filing status — always verify current details with official sources or a tax professional rather than relying on any single number as fixed.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'taxes-4-interactive',
      prompt: 'Generally speaking, when does a capital gain typically become taxable?',
      choices: [
        { id: 'a', text: 'The moment the investment\'s market value increases, even if you keep holding it' },
        { id: 'b', text: 'When you actually sell the investment and realize the gain' },
        { id: 'c', text: 'It is never taxable under any circumstances' },
        { id: 'd', text: 'Only if the investment is a bond, never a stock' },
      ],
      correctChoiceId: 'b',
      explanation: 'A capital gain is generally only "realized" — and therefore potentially taxable — once you sell the investment. An unrealized increase in value while you still hold it typically isn\'t a taxable event by itself.',
    },
    quiz: [
      {
        id: 'taxes-4-q1',
        prompt: 'What generally distinguishes a "short-term" capital gain from a "long-term" one in the U.S.?',
        choices: [
          { id: 'a', text: 'Whether the investment was a stock or a bond' },
          { id: 'b', text: 'Generally, whether you held the investment for one year or less versus more than one year before selling' },
          { id: 'c', text: 'Whether the gain was more or less than $1,000' },
          { id: 'd', text: 'There is no such distinction' },
        ],
        correctChoiceId: 'b',
        explanation: 'The holding period — generally one year or less for short-term, more than one year for long-term — determines which tax treatment applies, with long-term gains often taxed at lower rates.',
      },
      {
        id: 'taxes-4-q2',
        prompt: 'Why might a long-term capital gain often result in less tax owed than a short-term one on the same dollar amount of profit?',
        choices: [
          { id: 'a', text: 'Long-term gains are typically taxed at lower specific rates than ordinary income, while short-term gains are typically taxed like ordinary income' },
          { id: 'b', text: 'Long-term gains are never reported to the government' },
          { id: 'c', text: 'Short-term gains are always doubled for tax purposes' },
          { id: 'd', text: 'There is no difference — both are always taxed identically' },
        ],
        correctChoiceId: 'a',
        explanation: 'Long-term capital gains often benefit from lower tax rates than the ordinary income rates applied to short-term gains, which is part of why holding period matters for tax purposes.',
      },
      {
        id: 'taxes-4-q3',
        prompt: 'What can a capital loss generally be used for, tax-wise?',
        choices: [
          { id: 'a', text: 'It can often offset capital gains, potentially reducing the total taxable gain' },
          { id: 'b', text: 'It has no tax purpose whatsoever' },
          { id: 'c', text: 'It automatically converts into a tax-free gift' },
          { id: 'd', text: 'It can only be used to reduce sales tax' },
        ],
        correctChoiceId: 'a',
        explanation: 'Capital losses can generally be used to offset capital gains, which can lower the amount of gain subject to tax in a given year, subject to specific rules.',
      },
    ],
  },
  {
    id: 'taxes-5',
    categoryId: 'taxes',
    order: 5,
    title: 'Retirement Accounts',
    description: 'Tax-advantaged accounts give your retirement savings a structural head start.',
    estimatedMinutes: 5,
    xp: 30,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'Why these accounts exist',
        body: [
          'Retirement accounts like a 401(k) or an IRA (Individual Retirement Account) in the U.S. offer tax advantages specifically designed to encourage long-term saving for retirement.',
          'These aren\'t investments themselves — they\'re a special type of account you hold investments (like stocks, bonds, or funds) inside of. The tax benefit comes from the account structure, not from any particular investment you choose to put in it.',
          'Because of these tax advantages, money inside these accounts generally faces restrictions on when you can withdraw it without a penalty — usually tied to reaching a certain retirement age, with some exceptions.',
        ],
      },
      {
        heading: 'Two common tax structures',
        body: [
          '"Traditional" accounts (like a Traditional 401(k) or Traditional IRA) generally let you contribute money before it\'s taxed, reducing your taxable income now. Later, in retirement, withdrawals are generally taxed as ordinary income.',
          '"Roth" accounts (like a Roth 401(k) or Roth IRA) generally work the opposite way: you contribute money that\'s already been taxed, but qualified withdrawals in retirement are generally tax-free, including any growth the investments earned over the years.',
          'Which structure makes more sense for a given person often depends on questions like whether they expect their tax rate to be higher or lower in retirement than it is now — a judgment call that depends on personal circumstances and isn\'t something this lesson can answer for you.',
        ],
        examples: [
          {
            label: 'Simplified, illustrative comparison',
            detail: 'Contributing $6,000 to a Traditional account might reduce your taxable income by $6,000 this year, with taxes paid later on withdrawal. Contributing $6,000 to a Roth account gives no tax break today, but qualified withdrawals of that $6,000 plus any growth are generally tax-free later.',
          },
        ],
      },
      {
        heading: 'Employer matching and other details worth knowing about',
        body: [
          'Many employer-sponsored plans (like a 401(k)) offer "matching" contributions, where the employer adds money to your account based on how much you contribute yourself, up to a limit. This is generally considered valuable because it\'s essentially additional compensation tied to participating in the plan.',
          'Retirement accounts typically have annual contribution limits set by law, and early withdrawals (before a set retirement age) often trigger penalties in addition to any regular tax owed, with some specific exceptions.',
          'This lesson describes general mechanics only. Specific contribution limits, income eligibility rules, and penalty exceptions change over time — always check current official rules or a qualified professional before making retirement account decisions.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'taxes-5-interactive',
      prompt: 'What is the general difference between a Traditional retirement account and a Roth retirement account?',
      choices: [
        { id: 'a', text: 'Traditional accounts are taxed before contribution and tax-free at withdrawal; Roth accounts are the reverse' },
        { id: 'b', text: 'Roth accounts are taxed before contribution (already-taxed money in), with qualified withdrawals generally tax-free; Traditional accounts reduce taxable income now, with withdrawals generally taxed later' },
        { id: 'c', text: 'There is no meaningful tax difference between the two' },
        { id: 'd', text: 'Only Traditional accounts are legal for individuals to open' },
      ],
      correctChoiceId: 'b',
      explanation: 'Traditional accounts generally give a tax break on contributions now and tax the withdrawals later. Roth accounts generally take already-taxed contributions but let qualified withdrawals, including growth, come out tax-free.',
    },
    quiz: [
      {
        id: 'taxes-5-q1',
        prompt: 'Is a 401(k) or IRA itself an investment?',
        choices: [
          { id: 'a', text: 'Yes, they are a specific type of stock' },
          { id: 'b', text: 'No — they are tax-advantaged account types that hold investments like stocks, bonds, or funds inside them' },
          { id: 'c', text: 'Yes, they guarantee a fixed annual return' },
          { id: 'd', text: 'No, they can only ever hold cash' },
        ],
        correctChoiceId: 'b',
        explanation: 'Accounts like a 401(k) or IRA are containers with special tax treatment — the actual investments (stocks, bonds, funds, etc.) are chosen and held within the account.',
      },
      {
        id: 'taxes-5-q2',
        prompt: 'What is an employer "match" in a 401(k) plan?',
        choices: [
          { id: 'a', text: 'A penalty charged for contributing too much' },
          { id: 'b', text: 'Additional money the employer contributes based on the employee\'s own contributions, up to a limit' },
          { id: 'c', text: 'A tax the employer pays on your behalf to the IRS' },
          { id: 'd', text: 'A requirement that you match your prior year\'s contribution exactly' },
        ],
        correctChoiceId: 'b',
        explanation: 'An employer match adds extra money to your retirement account based on your own contribution level, generally viewed as valuable additional compensation for participating in the plan.',
      },
      {
        id: 'taxes-5-q3',
        prompt: 'Why do retirement accounts typically restrict penalty-free withdrawals until a certain age?',
        choices: [
          { id: 'a', text: 'Because the money technically belongs to the government until then' },
          { id: 'b', text: 'Because the tax advantages are designed specifically to encourage saving for retirement rather than short-term use' },
          { id: 'c', text: 'Because withdrawals are always illegal at any age' },
          { id: 'd', text: 'Because the accounts stop earning any returns after a withdrawal' },
        ],
        correctChoiceId: 'b',
        explanation: 'The tax benefits are structured as an incentive for long-term retirement saving, which is why early withdrawals generally trigger penalties on top of any regular tax owed, with certain specific exceptions.',
      },
    ],
  },
]
