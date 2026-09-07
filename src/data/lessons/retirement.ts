import type { Lesson } from '@/types'

export const retirementLessons: Lesson[] = [
  {
    id: 'retirement-1',
    categoryId: 'retirement',
    order: 1,
    title: 'Why Start Early?',
    description: 'Understand why the age you start saving for retirement matters as much as how much you save.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Time Is the Ingredient You Can\'t Buy Back',
        body: [
          'Retirement savings grow through compound growth: the returns you earn start earning their own returns. The longer money stays invested, the more time it has to snowball. This means someone who starts saving in their 20s has a structural advantage over someone who starts in their 40s, even if the later saver puts in more money each month.',
          'This isn\'t about being disciplined or lucky — it\'s math. A dollar invested at 25 has decades more time to compound than a dollar invested at 45.',
        ],
      },
      {
        heading: 'A Side-by-Side Look',
        body: [
          'Consider two savers, both aiming to retire at 65, both earning an average 7% annual return.',
          'The gap between them isn\'t about who saved more in total — it\'s entirely about how many years each dollar had to compound before retirement.',
        ],
        examples: [
          {
            label: 'Saver A: invests $300/month from age 25 to 35, then stops contributing',
            detail: 'Total contributed: $36,000 over 10 years. Estimated value at 65: roughly $340,000, thanks to 30+ extra years of growth.',
          },
          {
            label: 'Saver B: invests $300/month from age 35 to 65',
            detail: 'Total contributed: $108,000 over 30 years. Estimated value at 65: roughly $340,000 as well — similar ending balance despite contributing three times as much.',
          },
        ],
      },
      {
        heading: 'Starting Late Isn\'t a Dead End',
        body: [
          'None of this means it\'s pointless to start later — every year you delay just means compounding has less time to work, so starting now, whatever your age, is generally better than waiting for a "better" time.',
          'Retirement accounts and contribution amounts should reflect each person\'s income, expenses, and goals — this lesson only explains the general mechanics of how time affects growth.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'retirement-1-interactive',
      prompt: 'Why can an early saver end up with a similar balance to a later saver who contributes more total money?',
      choices: [
        { id: 'a', text: 'Early savers get a special bonus rate' },
        { id: 'b', text: 'Compound growth has more years to work on the early contributions' },
        { id: 'c', text: 'Later savers pay higher fees' },
        { id: 'd', text: 'It\'s not actually possible' },
      ],
      correctChoiceId: 'b',
      explanation: 'Extra years of compounding can offset a smaller total amount contributed, which is why starting early has such an outsized effect.',
    },
    quiz: [
      {
        id: 'retirement-1-q1',
        prompt: 'What is "compound growth" in the context of retirement savings?',
        choices: [
          { id: 'a', text: 'Earning returns only on your original contributions' },
          { id: 'b', text: 'Earning returns on both your contributions and the returns they\'ve already earned' },
          { id: 'c', text: 'A fee charged by retirement accounts' },
          { id: 'd', text: 'A type of tax penalty' },
        ],
        correctChoiceId: 'b',
        explanation: 'Compound growth means your earnings generate their own earnings over time, which is what makes long time horizons so powerful.',
      },
      {
        id: 'retirement-1-q2',
        prompt: 'What is the main reason starting retirement savings later is not a "dead end"?',
        choices: [
          { id: 'a', text: 'Because time still helps — starting now beats waiting even longer' },
          { id: 'b', text: 'Because interest rates always increase for older savers' },
          { id: 'c', text: 'Because retirement accounts reset every 10 years' },
          { id: 'd', text: 'Because employers only match late contributions' },
        ],
        correctChoiceId: 'a',
        explanation: 'Every year of compounding helps, regardless of when you start, so beginning now is better than waiting.',
      },
    ],
  },
  {
    id: 'retirement-2',
    categoryId: 'retirement',
    order: 2,
    title: '401(k) Basics',
    description: 'Learn what a 401(k) is, how contributions work, and why it\'s a common workplace retirement tool.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'What a 401(k) Is',
        body: [
          'A 401(k) is a retirement savings account offered through an employer. Money is typically deducted directly from your paycheck and invested in a set of funds the plan offers, often a mix of stock and bond funds.',
          'One of the main appeals is that traditional 401(k) contributions are usually made with pre-tax dollars, which lowers your taxable income for the year you contribute.',
        ],
      },
      {
        heading: 'Contribution Limits and Paycheck Mechanics',
        body: [
          'Each year, the IRS sets a maximum amount that can be contributed to a 401(k). Contributions are usually set as a percentage of your paycheck (say, 6%), and that percentage is automatically deducted every pay period, which makes saving consistent without requiring ongoing decisions.',
          'Because the deduction happens before the money ever reaches your checking account, many people find it easier to stick with than manually transferring money to savings each month.',
        ],
        examples: [
          {
            label: 'A $60,000/year salary contributing 6% to a 401(k)',
            detail: 'That\'s $3,600/year, or $150 per biweekly paycheck, deducted automatically before certain taxes are calculated.',
          },
        ],
      },
      {
        heading: 'Vesting and Portability',
        body: [
          'Your own contributions are always 100% yours. But if an employer contributes matching funds, those may be subject to a "vesting schedule" — a set period of time you must work there before the employer\'s contributions fully belong to you.',
          'If you leave a job, a 401(k) balance doesn\'t disappear — it can typically be left in place, rolled into a new employer\'s plan, or rolled into an individual retirement account (IRA).',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'retirement-2-interactive',
      prompt: 'What is a defining feature of a traditional 401(k) contribution?',
      choices: [
        { id: 'a', text: 'It is made with after-tax dollars only' },
        { id: 'b', text: 'It is typically made with pre-tax dollars, lowering taxable income that year' },
        { id: 'c', text: 'It cannot be invested in funds' },
        { id: 'd', text: 'It must be withdrawn every year' },
      ],
      correctChoiceId: 'b',
      explanation: 'Traditional 401(k) contributions are usually pre-tax, reducing the income you\'re taxed on in the year you contribute.',
    },
    quiz: [
      {
        id: 'retirement-2-q1',
        prompt: 'What does a "vesting schedule" typically apply to?',
        choices: [
          { id: 'a', text: 'Your own contributions' },
          { id: 'b', text: 'Employer matching contributions' },
          { id: 'c', text: 'Investment fund choices' },
          { id: 'd', text: 'Contribution limits' },
        ],
        correctChoiceId: 'b',
        explanation: 'Vesting schedules govern when employer-contributed matching funds fully become the employee\'s property; the employee\'s own contributions are always fully theirs.',
      },
      {
        id: 'retirement-2-q2',
        prompt: 'If you leave a job, what typically happens to your 401(k) balance?',
        choices: [
          { id: 'a', text: 'It is forfeited entirely' },
          { id: 'b', text: 'It can be left in place, rolled into a new plan, or rolled into an IRA' },
          { id: 'c', text: 'It automatically converts to cash and is mailed to you' },
          { id: 'd', text: 'It must be spent within 30 days' },
        ],
        correctChoiceId: 'b',
        explanation: '401(k) balances are portable and have several options when you change jobs — they don\'t simply disappear.',
      },
    ],
  },
  {
    id: 'retirement-3',
    categoryId: 'retirement',
    order: 3,
    title: 'Roth vs Traditional',
    description: 'Compare how Roth and Traditional retirement accounts differ in when you pay taxes.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'The Core Difference: When You Pay Tax',
        body: [
          'Both Roth and Traditional accounts (whether 401(k)s or IRAs) are designed for retirement savings, but they differ in tax timing. Traditional accounts are typically funded with pre-tax money — you get a tax break now, but pay ordinary income tax on withdrawals in retirement. Roth accounts are funded with after-tax money — no tax break now, but qualified withdrawals in retirement are typically tax-free.',
          'Both account types otherwise work similarly: money is invested in funds you choose, and it grows tax-deferred (Traditional) or tax-free (Roth) while it sits in the account.',
        ],
      },
      {
        heading: 'A Simplified Comparison',
        body: [
          'The "better" choice mathematically often comes down to whether you expect your tax rate to be higher or lower in retirement than it is today — something nobody can know for certain, since tax laws and personal circumstances change over decades.',
          'The example below shows how the same $6,000 in spending power gets treated differently by each account type at contribution time.',
        ],
        examples: [
          {
            label: 'Traditional: contribute $6,000 pre-tax today',
            detail: 'Full $6,000 goes into investments now; withdrawals in retirement are taxed as ordinary income at whatever rate applies then.',
          },
          {
            label: 'Roth: contribute $6,000 after paying tax on it today',
            detail: 'If your tax rate is 22%, you\'d need to have earned about $7,700 to net $6,000 after tax to contribute; but qualified withdrawals in retirement owe no additional tax.',
          },
        ],
      },
      {
        heading: 'Other Differences Worth Knowing',
        body: [
          'Roth accounts also have some added flexibility: contributions (though generally not earnings) can often be withdrawn without penalty before retirement age, and Roth IRAs typically don\'t force withdrawals at a certain age the way Traditional accounts can.',
          'Some people choose to split contributions between both account types to diversify their future tax exposure, since nobody can predict future tax policy with certainty. This is a general mechanic of how these accounts work, not a recommendation for any individual\'s specific plan.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'retirement-3-interactive',
      prompt: 'What is the main difference between a Roth and a Traditional retirement account?',
      choices: [
        { id: 'a', text: 'Roth accounts have no contribution limits' },
        { id: 'b', text: 'Traditional accounts are taxed going in; Roth accounts are typically taxed going in too but not coming out' },
        { id: 'c', text: 'Traditional accounts give a tax break now and tax withdrawals later; Roth accounts are funded after-tax and withdrawals are typically tax-free' },
        { id: 'd', text: 'There is no real difference' },
      ],
      correctChoiceId: 'c',
      explanation: 'The key distinction is timing: Traditional defers tax to withdrawal, while Roth pays tax upfront so qualified withdrawals later are tax-free.',
    },
    quiz: [
      {
        id: 'retirement-3-q1',
        prompt: 'A Traditional 401(k) contribution is generally made with:',
        choices: [
          { id: 'a', text: 'After-tax dollars' },
          { id: 'b', text: 'Pre-tax dollars' },
          { id: 'c', text: 'Foreign currency only' },
          { id: 'd', text: 'Employer stock only' },
        ],
        correctChoiceId: 'b',
        explanation: 'Traditional contributions reduce taxable income now because they\'re made before tax is applied.',
      },
      {
        id: 'retirement-3-q2',
        prompt: 'What factor most influences whether Roth or Traditional is more advantageous for a given person?',
        choices: [
          { id: 'a', text: 'Whether their future tax rate in retirement is higher or lower than their current rate' },
          { id: 'b', text: 'The color of the investment fund logo' },
          { id: 'c', text: 'Whether they rent or own a home' },
          { id: 'd', text: 'Their favorite bank' },
        ],
        correctChoiceId: 'a',
        explanation: 'Because the accounts differ in when tax is paid, comparing today\'s tax rate to an expected future rate is the central consideration.',
      },
    ],
  },
  {
    id: 'retirement-4',
    categoryId: 'retirement',
    order: 4,
    title: 'Employer Matching',
    description: 'Learn how employer 401(k) matching works and why it\'s often called "free money."',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'What a Match Is',
        body: [
          'An employer match is money your employer adds to your 401(k) based on how much you contribute yourself. A common structure is something like "50% match on the first 6% of pay you contribute," meaning the employer adds 50 cents for every dollar you put in, up to 6% of your salary.',
          'This match is on top of your own paycheck — it doesn\'t reduce your take-home pay at all beyond your own contribution.',
        ],
      },
      {
        heading: 'Seeing the Match in Real Numbers',
        body: [
          'Because the match is directly tied to your contribution percentage, contributing less than the match threshold means leaving part of that employer money unclaimed.',
          'It can help to think of the match threshold as a specific target percentage to reach, separate from any additional amount you might choose to contribute beyond it.',
        ],
        examples: [
          {
            label: '$60,000 salary, employer matches 50% of the first 6% contributed',
            detail: 'Contributing 6% ($3,600/year) earns a match of 3% ($1,800/year) — an instant 50% return on that portion, before any investment growth.',
          },
          {
            label: 'Same plan, but contributing only 3%',
            detail: 'Contributing 3% ($1,800/year) earns a match of only 1.5% ($900/year) — the other $900 of potential match goes unclaimed.',
          },
        ],
      },
      {
        heading: 'Match Formulas Vary Widely',
        body: [
          'Not every employer offers a match, and formulas vary a lot — some match dollar-for-dollar, some match a percentage, some have different thresholds, and some vest matched funds over several years of employment.',
          'Understanding your specific plan\'s formula (found in plan documents or your HR portal) is the only way to know exactly how much matching money is available to you.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'retirement-4-interactive',
      prompt: 'Why is an employer 401(k) match often described as valuable?',
      choices: [
        { id: 'a', text: 'It guarantees a specific investment return every year' },
        { id: 'b', text: 'It adds extra money to your retirement account based on your own contributions, at no cost to your take-home pay' },
        { id: 'c', text: 'It replaces the need for Social Security' },
        { id: 'd', text: 'It is required by law for all employers' },
      ],
      correctChoiceId: 'b',
      explanation: 'A match adds employer money on top of your contribution without reducing your paycheck further, which is why it\'s often highlighted as a valuable benefit.',
    },
    quiz: [
      {
        id: 'retirement-4-q1',
        prompt: 'If an employer matches 100% of the first 4% contributed, and you contribute only 2%, what happens?',
        choices: [
          { id: 'a', text: 'You get the full match regardless' },
          { id: 'b', text: 'You only receive a match on the 2% you contributed, leaving part of the match unclaimed' },
          { id: 'c', text: 'The employer contributes 4% regardless of what you contribute' },
          { id: 'd', text: 'Matching stops working entirely' },
        ],
        correctChoiceId: 'b',
        explanation: 'Matches are tied to your own contribution rate, so contributing below the match threshold leaves potential employer money unclaimed.',
      },
      {
        id: 'retirement-4-q2',
        prompt: 'What can affect whether employer-matched funds fully belong to you?',
        choices: [
          { id: 'a', text: 'A vesting schedule based on how long you\'ve worked there' },
          { id: 'b', text: 'The stock market\'s performance that day' },
          { id: 'c', text: 'Your age when you were hired' },
          { id: 'd', text: 'How many hours you work per week only' },
        ],
        correctChoiceId: 'a',
        explanation: 'Vesting schedules determine when employer-contributed matching funds become fully owned by the employee.',
      },
    ],
  },
  {
    id: 'retirement-5',
    categoryId: 'retirement',
    order: 5,
    title: 'Compound Growth Over Time',
    description: 'See how consistent contributions and time combine to grow retirement savings dramatically.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Growth on Growth',
        body: [
          'Compound growth means your investment returns are reinvested and start earning their own returns. Over short periods this effect looks small, but over decades it can dramatically outweigh the amount you personally contributed.',
          'This is why retirement accounts are often described as a "long game" — the earliest years of contributions have the most time to compound, even though they may feel the least significant when you make them.',
        ],
      },
      {
        heading: 'What Consistency Looks Like Over 30+ Years',
        body: [
          'Consider a consistent monthly contribution of $200, invested at an average annual return of 7% (a commonly cited long-run average for diversified stock market investments, though actual returns vary and are never guaranteed).',
          'Notice how the gap between "total contributed" and "estimated balance" widens dramatically the longer the money stays invested.',
        ],
        examples: [
          {
            label: 'After 10 years',
            detail: 'Total contributed: $24,000. Estimated balance: roughly $34,700.',
          },
          {
            label: 'After 20 years',
            detail: 'Total contributed: $48,000. Estimated balance: roughly $98,700.',
          },
          {
            label: 'After 35 years',
            detail: 'Total contributed: $84,000. Estimated balance: roughly $342,000 — over four times what was contributed.',
          },
        ],
      },
      {
        heading: 'Growth Isn\'t a Straight Line',
        body: [
          'Real markets don\'t grow smoothly — some years are up 20%, some years are down 15%, and averages only show up over long stretches of time. This volatility is a normal part of investing, not a sign that something is broken.',
          'These figures are illustrative examples of how compounding mechanics work, not a promise of future returns — actual investment performance depends on markets, fees, and the specific investments chosen.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'retirement-5-interactive',
      prompt: 'In the 35-year example above, why did the ending balance grow to roughly four times the amount contributed?',
      choices: [
        { id: 'a', text: 'Because contribution amounts secretly increased each year' },
        { id: 'b', text: 'Because compound growth caused returns to build on previous returns over a long time period' },
        { id: 'c', text: 'Because of a one-time government bonus' },
        { id: 'd', text: 'Because fees were refunded' },
      ],
      correctChoiceId: 'b',
      explanation: 'Over long time horizons, compounding returns on returns can make the growth portion of a balance far exceed the amount actually contributed.',
    },
    quiz: [
      {
        id: 'retirement-5-q1',
        prompt: 'Why do real investment returns not grow in a smooth, straight line year to year?',
        choices: [
          { id: 'a', text: 'Markets fluctuate — some years are up, some are down, and averages emerge only over long periods' },
          { id: 'b', text: 'Because interest rates are fixed by law' },
          { id: 'c', text: 'Because retirement accounts are not allowed to lose value' },
          { id: 'd', text: 'Because compounding only happens once per decade' },
        ],
        correctChoiceId: 'a',
        explanation: 'Market volatility is normal; long-run averages describe a smoothed trend, not what happens in any single year.',
      },
      {
        id: 'retirement-5-q2',
        prompt: 'What is the main takeaway about the earliest contributions to a retirement account?',
        choices: [
          { id: 'a', text: 'They matter the least since they\'re small amounts' },
          { id: 'b', text: 'They have the most time to compound, so they can end up mattering a great deal' },
          { id: 'c', text: 'They should be withdrawn as soon as possible' },
          { id: 'd', text: 'They are taxed at a higher rate than later contributions' },
        ],
        correctChoiceId: 'b',
        explanation: 'Because compounding needs time, contributions made earliest in a career have the longest runway to grow.',
      },
    ],
  },
]
