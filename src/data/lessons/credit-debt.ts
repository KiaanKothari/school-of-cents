import type { Lesson } from '@/types'

export const creditDebtLessons: Lesson[] = [
  {
    id: 'credit-debt-1',
    categoryId: 'credit-debt',
    order: 1,
    title: 'What Is a Credit Score?',
    description: 'A three-digit number that quietly affects your rent, your loan rates, and sometimes even your job offers.',
    estimatedMinutes: 4,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'What the number actually represents',
        body: [
          'A credit score is a three-digit number (typically 300-850 under the common FICO and VantageScore models) that estimates how likely you are to repay borrowed money based on your past borrowing behavior. Lenders use it to decide whether to approve you for a loan or credit card, and what interest rate to charge you.',
          'It\'s not just for loans anymore — landlords often check it before approving a rental application, some employers check it (with your permission) as part of hiring, and insurers can even use it to help set premiums in some states.',
        ],
        examples: [
          { label: 'Score ranges (FICO)', detail: 'Poor: 300-579, Fair: 580-669, Good: 670-739, Very Good: 740-799, Exceptional: 800-850' },
        ],
      },
      {
        heading: 'The five factors that make up your score',
        body: [
          'Payment history (about 35%) — do you pay on time, every time? This is the single biggest factor. Amounts owed / credit utilization (about 30%) — how much of your available credit are you using? Length of credit history (about 15%) — how long have your accounts been open? Credit mix (about 10%) — do you have a healthy variety, like credit cards and installment loans? New credit (about 10%) — how many new accounts and hard inquiries have you had recently?',
          'Payment history and utilization together make up nearly two-thirds of your score — meaning the two most powerful things you control are simple: pay on time, and don\'t max out your available credit.',
        ],
        examples: [
          { label: 'Utilization example', detail: 'A $10,000 total credit limit across all cards, with $2,000 currently owed, is a 20% utilization rate — generally considered healthy. Owing $8,000 on that same limit (80% utilization) would hurt the score significantly, even if paid on time.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'credit-debt-1-iq',
      prompt: 'Which single factor makes up the largest share of a typical credit score calculation?',
      choices: [
        { id: 'a', text: 'Length of credit history' },
        { id: 'b', text: 'Payment history — whether you pay on time' },
        { id: 'c', text: 'The mix of different credit account types you have' },
        { id: 'd', text: 'How many new accounts you\'ve opened recently' },
      ],
      correctChoiceId: 'b',
      explanation: 'Payment history is roughly 35% of a FICO score — the largest single factor — because reliably paying on time is the clearest signal of how likely you are to repay future debt.',
    },
    quiz: [
      {
        id: 'credit-debt-1-q1',
        prompt: 'Besides lenders, who else might check your credit score?',
        choices: [
          { id: 'a', text: 'No one else has any legitimate reason to check it' },
          { id: 'b', text: 'Landlords, and sometimes employers or insurers' },
          { id: 'c', text: 'Only the government, for tax purposes' },
          { id: 'd', text: 'Only credit card companies you\'ve never applied to' },
        ],
        correctChoiceId: 'b',
        explanation: 'Credit scores are used more broadly than just loan approval — landlords commonly check them for rental applications, and employers or insurers sometimes use them too, within legal limits.',
      },
      {
        id: 'credit-debt-1-q2',
        prompt: 'What is "credit utilization"?',
        choices: [
          { id: 'a', text: 'The number of credit cards you own' },
          { id: 'b', text: 'How much of your available credit limit you are currently using' },
          { id: 'c', text: 'How often you use a credit card to make purchases' },
          { id: 'd', text: 'The interest rate charged on your credit card' },
        ],
        correctChoiceId: 'b',
        explanation: 'Utilization compares your current balance to your total available credit limit — a lower percentage generally signals lower risk to lenders and helps your score.',
      },
      {
        id: 'credit-debt-1-q3',
        prompt: 'If someone wants to improve their credit score with the highest-impact changes, what should they focus on first?',
        choices: [
          { id: 'a', text: 'Opening as many new credit cards as possible at once' },
          { id: 'b', text: 'Paying every bill on time and keeping credit utilization low' },
          { id: 'c', text: 'Closing all older credit accounts immediately' },
          { id: 'd', text: 'Only using cash and avoiding credit accounts entirely' },
        ],
        correctChoiceId: 'b',
        explanation: 'Since payment history and utilization together account for roughly 65% of the score, consistently paying on time and keeping balances low relative to limits delivers the biggest improvement for the effort involved.',
      },
    ],
  },
  {
    id: 'credit-debt-2',
    categoryId: 'credit-debt',
    order: 2,
    title: 'How Credit Cards Work',
    description: 'The grace period, the statement balance, and the one habit that determines whether a card helps or hurts you.',
    estimatedMinutes: 4,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'The basic mechanics',
        body: [
          'A credit card is a line of credit — you\'re borrowing money from the card issuer every time you make a purchase, and you owe it back. Each month, the issuer generates a statement showing everything you charged during that billing cycle and the total you owe (the statement balance).',
          'You then get a grace period (typically 21-25 days) after the statement closes to pay that balance in full without being charged any interest at all. This grace period is the entire reason credit cards can be used for free, interest-free short-term borrowing — but only if you pay the full statement balance every time.',
        ],
        examples: [
          { label: 'Billing cycle example', detail: 'Statement closes on the 1st showing $850 owed. Due date is the 25th. Pay the full $850 by the 25th → $0 interest charged, regardless of the card\'s stated interest rate.' },
        ],
      },
      {
        heading: 'What happens if you don\'t pay in full',
        body: [
          'If you pay less than the full statement balance, the grace period disappears — not just on the unpaid amount, but often on new purchases too, depending on the card\'s terms. Interest then starts accruing daily on the remaining balance at the card\'s APR (often 20-29% for average cards), which is why carrying a balance gets expensive fast.',
          'Paying only the "minimum payment" listed on your statement keeps the account in good standing and avoids late fees, but it is specifically designed to be a small amount so that most of your balance keeps accruing interest for months or years.',
        ],
        examples: [
          { label: 'Carrying a balance', detail: 'A $2,000 balance at 24% APR, paying only a $60/month minimum, would take over 4 years to pay off and cost more than $1,100 in interest — more than half the original balance.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'credit-debt-2-iq',
      prompt: 'Elena\'s statement balance is $600. She pays $600 in full by the due date, every single month, without exception. How much interest will she be charged?',
      choices: [
        { id: 'a', text: 'A small amount, since credit cards always charge some interest' },
        { id: 'b', text: '$0 — paying the full statement balance by the due date keeps the interest-free grace period intact' },
        { id: 'c', text: 'The full APR applied to $600, regardless of when she pays' },
        { id: 'd', text: 'Interest is only avoided if you never use the card at all' },
      ],
      correctChoiceId: 'b',
      explanation: 'Paying the statement balance in full every cycle, before the due date, keeps you inside the grace period — interest never accrues on purchases when this is done consistently, which is what allows credit cards to function as free short-term credit.',
    },
    quiz: [
      {
        id: 'credit-debt-2-q1',
        prompt: 'What is the "grace period" on a credit card?',
        choices: [
          { id: 'a', text: 'The time you have to sign up for a card without a credit check' },
          { id: 'b', text: 'A window after the statement closes during which you can pay the balance in full without being charged interest' },
          { id: 'c', text: 'A period where the interest rate is temporarily reduced but not eliminated' },
          { id: 'd', text: 'The time before your first payment is due after opening the account' },
        ],
        correctChoiceId: 'b',
        explanation: 'The grace period is specifically the window after a statement closes where paying the full balance avoids all interest — it\'s the mechanism that makes interest-free credit card use possible.',
      },
      {
        id: 'credit-debt-2-q2',
        prompt: 'Why is paying only the minimum payment each month risky?',
        choices: [
          { id: 'a', text: 'It causes an immediate late fee even though it\'s technically on time' },
          { id: 'b', text: 'It\'s designed to be small, so most of the balance keeps accruing interest for a long time, often costing far more than the original purchase' },
          { id: 'c', text: 'Minimum payments are illegal in most states' },
          { id: 'd', text: 'It has no real downside as long as it\'s paid on time' },
        ],
        correctChoiceId: 'b',
        explanation: 'Minimum payments are intentionally set low by card issuers, meaning a balance can take years to pay off and accrue interest that sometimes exceeds the original amount charged.',
      },
    ],
  },
  {
    id: 'credit-debt-3',
    categoryId: 'credit-debt',
    order: 3,
    title: 'APR Explained',
    description: 'What that percentage on your statement actually means for your wallet — and why compounding makes it worse than it looks.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'APR is the annualized cost of borrowing',
        body: [
          'APR stands for Annual Percentage Rate — it\'s the yearly cost of borrowing money, expressed as a percentage, including (for loans) most fees baked into a single comparable number. For credit cards, APR is usually just the interest rate, quoted annually even though interest is calculated and charged monthly (or even daily).',
          'A key distinction: APR is different from the interest rate on a mortgage or loan when fees are involved — APR is meant to be the "true" cost including fees, which is why it\'s often slightly higher than the advertised interest rate on loans, though for most credit cards the two are the same number.',
        ],
        examples: [
          { label: 'Loan APR vs interest rate', detail: 'A mortgage advertised at 6.5% interest with $3,000 in closing costs might have an APR of 6.68% — the higher number reflects the true cost once fees are factored in.' },
        ],
      },
      {
        heading: 'How APR translates into daily interest charges',
        body: [
          'Credit card issuers convert the APR into a daily periodic rate (APR ÷ 365) and apply it to your balance every single day, then add that interest to what you owe. This means credit card debt actually compounds daily, not just monthly — a detail that makes carrying a balance more expensive than a simple "APR ÷ 12" estimate would suggest.',
        ],
        examples: [
          { label: 'Daily periodic rate', detail: 'A 24% APR ÷ 365 days = about 0.0658% charged per day. On a $3,000 balance, that\'s roughly $1.97 in interest on day one alone — and the next day\'s interest is calculated on the new, slightly higher balance.' },
        ],
      },
      {
        heading: 'Why comparing APR matters when choosing credit',
        body: [
          'When comparing two credit cards or loans, APR is the single most useful number for an apples-to-apples comparison of true borrowing cost — more useful than the advertised interest rate alone, and more useful than monthly payment size (which can be manipulated by stretching out the loan term).',
          'A lower APR isn\'t always obviously better if terms differ wildly (e.g., a much longer loan term), but for otherwise similar products, the lower APR is the cheaper way to borrow.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'credit-debt-3-iq',
      prompt: 'Two credit cards have identical rewards and fees. Card A has a 19.99% APR, Card B has a 27.99% APR. If you sometimes carry a balance, which card costs less in interest?',
      choices: [
        { id: 'a', text: 'Card B, because a higher APR means more rewards' },
        { id: 'b', text: 'Card A, because a lower APR means less interest charged on any balance you carry' },
        { id: 'c', text: 'They cost the same, since APR only matters if you never pay it off' },
        { id: 'd', text: 'It\'s impossible to know without checking the credit limit' },
      ],
      correctChoiceId: 'b',
      explanation: 'With identical fees and rewards, the only factor that changes the cost of carrying a balance is the APR — Card A\'s lower rate charges less interest per dollar carried per day than Card B\'s higher rate.',
    },
    quiz: [
      {
        id: 'credit-debt-3-q1',
        prompt: 'What does APR stand for and represent?',
        choices: [
          { id: 'a', text: 'Annual Percentage Rate — the yearly cost of borrowing, expressed as a percentage' },
          { id: 'b', text: 'Average Payment Requirement — the typical minimum payment on a loan' },
          { id: 'c', text: 'Annual Payoff Ratio — how much of a loan is paid off each year' },
          { id: 'd', text: 'Applied Principal Rate — the rate charged only on the original principal' },
        ],
        correctChoiceId: 'a',
        explanation: 'APR is specifically the annualized cost of borrowing, allowing different credit products to be compared on a standardized yearly basis.',
      },
      {
        id: 'credit-debt-3-q2',
        prompt: 'Why does credit card interest often end up costing more than a simple "APR divided by 12" monthly estimate would suggest?',
        choices: [
          { id: 'a', text: 'Because credit card companies charge interest twice per month' },
          { id: 'b', text: 'Because interest is typically calculated using a daily periodic rate and compounds daily, not just once a month' },
          { id: 'c', text: 'Because APR only applies to the minimum payment amount' },
          { id: 'd', text: 'It doesn\'t — the simple monthly estimate is always exactly correct' },
        ],
        correctChoiceId: 'b',
        explanation: 'Daily compounding means each day\'s interest is added to the balance before the next day\'s interest is calculated, producing a slightly higher total cost than a flat monthly division of the APR would predict.',
      },
      {
        id: 'credit-debt-3-q3',
        prompt: 'When is APR most useful for comparison shopping?',
        choices: [
          { id: 'a', text: 'When comparing loans or cards with similar terms, since it standardizes the true annual cost of borrowing' },
          { id: 'b', text: 'APR is never useful for comparisons' },
          { id: 'c', text: 'Only when comparing checking accounts' },
          { id: 'd', text: 'Only for people who plan to never carry a balance' },
        ],
        correctChoiceId: 'a',
        explanation: 'APR gives a standardized annual cost figure that makes it possible to compare the true cost of different credit products, especially when terms and fees are otherwise similar.',
      },
    ],
  },
  {
    id: 'credit-debt-4',
    categoryId: 'credit-debt',
    order: 4,
    title: 'Good Debt vs Bad Debt',
    description: 'Not all borrowing is equal — some debt builds your future, some just drains it.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'What makes debt "good"',
        body: [
          'Debt tends to be called "good" when it\'s used to acquire something that grows in value or increases your earning potential, and typically comes with a relatively low interest rate: a mortgage on a home in a stable market, student loans for a degree that meaningfully raises earning potential, or a reasonable business loan for a venture with real prospects.',
          'Good debt isn\'t automatically risk-free — a mortgage can still be a bad decision if the home is unaffordable, and student loans can be bad debt if the degree doesn\'t lead to enough income to justify the cost. "Good" describes the debt\'s typical structure and purpose, not a guarantee.',
        ],
        examples: [
          { label: 'Good debt example', detail: 'A $250,000 mortgage at 6.5% on a home that\'s affordable relative to income, building equity over time instead of paying rent indefinitely.' },
        ],
      },
      {
        heading: 'What makes debt "bad"',
        body: [
          'Debt tends to be called "bad" when it\'s used for things that lose value immediately or provide no lasting benefit, and often comes with high interest rates: credit card balances carried on everyday purchases, payday loans, or financing a depreciating item (like a boat or the latest electronics) that you can\'t actually afford.',
          'The clearest sign of bad debt: if you\'re still paying interest on something long after the thing you bought has lost most of its value or been consumed entirely (like a vacation or a meal), that\'s a strong signal it was bad debt.',
        ],
        examples: [
          { label: 'Bad debt example', detail: 'A $3,000 vacation put on a credit card at 24% APR, paid off slowly over 2 years — by the time it\'s paid off, the memory has faded but the interest cost (potentially $700+) is still being paid.' },
        ],
      },
      {
        heading: 'The nuance: even "good" debt has limits',
        body: [
          'The good/bad framework is a useful mental shortcut, but it\'s not absolute. Taking on $150,000 in student loans for a degree with poor job prospects is arguably worse than a small, quickly-paid-off credit card balance for a genuine emergency. Amount, interest rate, and your ability to repay always matter more than the category alone.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'credit-debt-4-iq',
      prompt: 'Which of these is the best example of "bad" debt?',
      choices: [
        { id: 'a', text: 'A mortgage at 6% on an affordable home' },
        { id: 'b', text: 'A student loan for a nursing degree with strong local job demand' },
        { id: 'c', text: 'A $4,000 credit card balance from a vacation, carried at 26% APR for over a year' },
        { id: 'd', text: 'A small business loan at 8% for a venture with a solid business plan' },
      ],
      correctChoiceId: 'c',
      explanation: 'The vacation debt is a classic example of bad debt: it financed something with no lasting value (a consumed experience) at a high interest rate, meaning the borrower pays for it long after the benefit is gone.',
    },
    quiz: [
      {
        id: 'credit-debt-4-q1',
        prompt: 'What generally characterizes "good" debt?',
        choices: [
          { id: 'a', text: 'Any debt with a fixed monthly payment' },
          { id: 'b', text: 'Debt used to acquire something that grows in value or increases earning potential, often at a relatively lower interest rate' },
          { id: 'c', text: 'Debt that never needs to be repaid' },
          { id: 'd', text: 'Any debt under $10,000' },
        ],
        correctChoiceId: 'b',
        explanation: 'The defining trait of good debt is what it\'s used for (an appreciating asset or increased earning power) combined with typically lower borrowing costs, not simply the payment structure or amount.',
      },
      {
        id: 'credit-debt-4-q2',
        prompt: 'Why can even "good" debt types like student loans sometimes turn out badly?',
        choices: [
          { id: 'a', text: 'Student loans are always bad debt no matter what' },
          { id: 'b', text: 'If the amount borrowed isn\'t justified by the resulting increase in earning potential, the category label doesn\'t protect against a poor financial outcome' },
          { id: 'c', text: 'Because interest rates on student loans are always higher than credit cards' },
          { id: 'd', text: 'They can\'t — student loans are always a good financial decision' },
        ],
        correctChoiceId: 'b',
        explanation: 'The good/bad framework is a helpful starting heuristic, but amount borrowed, resulting income, and ability to repay ultimately matter more than which general category the debt falls into.',
      },
    ],
  },
  {
    id: 'credit-debt-5',
    categoryId: 'credit-debt',
    order: 5,
    title: 'Paying Down Debt',
    description: 'Snowball or avalanche — two proven strategies for getting out of debt, and how to pick the right one for you.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'The debt avalanche method',
        body: [
          'The avalanche method has you list all debts and pay minimums on everything, then put every extra dollar toward the debt with the HIGHEST interest rate first. Once that\'s paid off, roll that payment amount into the next-highest-rate debt, and repeat.',
          'This method is mathematically optimal — it minimizes the total interest paid over time, since you\'re always attacking the debt that\'s costing you the most, the fastest.',
        ],
        examples: [
          { label: 'Avalanche order example', detail: 'Credit card A at 26% APR ($2,000), Credit card B at 19% APR ($1,500), car loan at 6% APR ($8,000) → avalanche order: pay extra toward Card A first, then Card B, then the car loan.' },
        ],
      },
      {
        heading: 'The debt snowball method',
        body: [
          'The snowball method has you pay minimums on everything, then put every extra dollar toward the debt with the SMALLEST balance first, regardless of interest rate. Once it\'s paid off, roll that payment into the next-smallest balance.',
          'This method isn\'t mathematically optimal (it usually costs slightly more in total interest than avalanche), but it\'s psychologically powerful: each small debt eliminated quickly provides a real win that builds motivation to keep going, which matters a lot for people who\'ve struggled to stick with a debt payoff plan before.',
        ],
        examples: [
          { label: 'Snowball order example', detail: 'Same three debts — snowball order: pay extra toward Card B\'s $1,500 balance first (smallest), then Card A\'s $2,000, then the $8,000 car loan — even though Card A has the higher interest rate.' },
        ],
      },
      {
        heading: 'Which one should you actually use?',
        body: [
          'If you\'re confident in your discipline and want to minimize total cost, avalanche is the better math. If you\'ve tried to pay off debt before and lost motivation partway through, snowball\'s quick wins often lead to actually finishing the plan — and a plan you finish beats a mathematically perfect plan you abandon.',
          'Either way, the two most important actions are the same regardless of method: stop adding new debt while paying off the old, and pay more than the minimum whenever possible — the minimum payment alone can keep you in debt for years or decades.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'credit-debt-5-iq',
      prompt: 'Using the debt avalanche method, which debt should get extra payments first: Card A ($5,000 at 22% APR) or Card B ($1,000 at 15% APR)?',
      choices: [
        { id: 'a', text: 'Card B, because it\'s the smaller balance' },
        { id: 'b', text: 'Card A, because it has the higher interest rate, regardless of balance size' },
        { id: 'c', text: 'Split extra payments evenly between both' },
        { id: 'd', text: 'Neither — pay only minimums on both under the avalanche method' },
      ],
      correctChoiceId: 'b',
      explanation: 'The avalanche method targets the highest interest rate first because that\'s the debt costing the most money over time — Card A\'s 22% rate makes it the priority even though Card B has the smaller balance.',
    },
    quiz: [
      {
        id: 'credit-debt-5-q1',
        prompt: 'Which debt payoff method minimizes total interest paid?',
        choices: [
          { id: 'a', text: 'The debt snowball method' },
          { id: 'b', text: 'The debt avalanche method' },
          { id: 'c', text: 'Both methods cost exactly the same in total interest' },
          { id: 'd', text: 'Paying only minimum payments on all debts' },
        ],
        correctChoiceId: 'b',
        explanation: 'By always targeting the highest-interest debt first, the avalanche method reduces the amount of time high-cost interest has to accrue, minimizing total interest paid across all debts.',
      },
      {
        id: 'credit-debt-5-q2',
        prompt: 'Why might someone choose the snowball method even though it usually costs more in total interest?',
        choices: [
          { id: 'a', text: 'Because it\'s actually cheaper in every situation' },
          { id: 'b', text: 'Because quickly eliminating small balances provides motivating wins that help someone stick with the plan long enough to finish it' },
          { id: 'c', text: 'Because interest rates don\'t matter when paying off debt' },
          { id: 'd', text: 'Because the snowball method is required by law for certain debts' },
        ],
        correctChoiceId: 'b',
        explanation: 'The psychological momentum from quick wins can be the deciding factor in whether someone actually completes a debt payoff plan — a completed snowball plan beats an abandoned avalanche plan.',
      },
      {
        id: 'credit-debt-5-q3',
        prompt: 'Regardless of which payoff method is used, what two actions matter most?',
        choices: [
          { id: 'a', text: 'Opening new credit cards to increase available credit, and paying only minimums' },
          { id: 'b', text: 'Stopping new debt from being added, and paying more than the minimum whenever possible' },
          { id: 'c', text: 'Closing all bank accounts and paying in cash only' },
          { id: 'd', text: 'Switching methods every month to see which works best' },
        ],
        correctChoiceId: 'b',
        explanation: 'No payoff strategy works if new debt keeps piling on top of it, and paying only the minimum extends repayment for years — avoiding new debt and paying above the minimum are the foundation both methods depend on.',
      },
    ],
  },
]
