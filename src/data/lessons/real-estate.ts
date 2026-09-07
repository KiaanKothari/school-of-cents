import type { Lesson } from '@/types'

export const realEstateLessons: Lesson[] = [
  {
    id: 'real-estate-1',
    categoryId: 'real-estate',
    order: 1,
    title: 'Renting vs Buying',
    description: 'Compare the real costs and tradeoffs of renting an apartment versus buying a home.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Two Very Different Deals',
        body: [
          'Renting means you pay a landlord for the right to live somewhere, and when the lease ends, you can leave without owing anything else. Buying means you take on a loan, build (or lose) equity as the home\'s value changes, and you\'re responsible for everything that breaks.',
          'Neither one is automatically the smarter move. It depends on how long you plan to stay, what housing costs in your area, and how much flexibility you want in your life.',
        ],
      },
      {
        heading: 'The Hidden Costs on Both Sides',
        body: [
          'Renters often think buying is "throwing money away" and owners often think renting is "wasting money on someone else\'s mortgage." Both framings skip details. Renters avoid property taxes, maintenance, and insurance spikes, but get no equity. Owners build equity over time, but pay closing costs, repairs, and interest that can dwarf a rent check for years.',
          'A common rule of thumb is that buying tends to make more financial sense if you plan to stay put for at least five years, because upfront closing costs need time to be offset by building equity.',
        ],
        examples: [
          {
            label: 'Renting a $1,800/month apartment for 3 years',
            detail: 'Total paid: about $64,800, with $0 in equity — but no repair bills, no property tax, and easy to move.',
          },
          {
            label: 'Buying a $300,000 home with 10% down',
            detail: 'Roughly $8,000–$12,000 in closing costs upfront, plus ongoing property tax, insurance, and maintenance (often 1–2% of home value per year, so $3,000–$6,000/year).',
          },
        ],
      },
      {
        heading: 'Flexibility Has a Price Tag Too',
        body: [
          'Selling a home usually costs 6–10% of the sale price in agent commissions and closing costs. If your job or life circumstances might change in the next few years, that cost can erase any equity gains you made.',
          'Renting trades long-term wealth-building for short-term flexibility. Buying trades flexibility for the chance to build equity and lock in a stable housing payment over time.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'real-estate-1-interactive',
      prompt: 'Which factor most commonly tips the renting-vs-buying decision toward buying?',
      choices: [
        { id: 'a', text: 'Planning to live in the area for many years' },
        { id: 'b', text: 'Wanting maximum flexibility to relocate' },
        { id: 'c', text: 'Not having savings for a down payment' },
        { id: 'd', text: 'Disliking yard work' },
      ],
      correctChoiceId: 'a',
      explanation: 'The longer you stay, the more time you have to offset upfront buying costs like closing fees, which is why long-term plans tend to favor buying.',
    },
    quiz: [
      {
        id: 'real-estate-1-q1',
        prompt: 'What is a cost that renters typically avoid but homeowners must budget for?',
        choices: [
          { id: 'a', text: 'Rent increases' },
          { id: 'b', text: 'Property taxes and maintenance' },
          { id: 'c', text: 'Security deposits' },
          { id: 'd', text: 'Utility bills' },
        ],
        correctChoiceId: 'b',
        explanation: 'Homeowners are directly responsible for property taxes, insurance, and repairs — costs a landlord typically covers for renters.',
      },
      {
        id: 'real-estate-1-q2',
        prompt: 'Roughly how much does selling a home typically cost in commissions and fees?',
        choices: [
          { id: 'a', text: '0-1% of the sale price' },
          { id: 'b', text: '6-10% of the sale price' },
          { id: 'c', text: '25% of the sale price' },
          { id: 'd', text: 'There is no cost to sell' },
        ],
        correctChoiceId: 'b',
        explanation: 'Agent commissions and closing costs typically add up to 6-10% of a home\'s sale price, which is why short ownership periods can erase equity gains.',
      },
    ],
  },
  {
    id: 'real-estate-2',
    categoryId: 'real-estate',
    order: 2,
    title: 'Down Payments',
    description: 'Understand what a down payment is, why it matters, and how its size changes your loan.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'What a Down Payment Actually Does',
        body: [
          'A down payment is the chunk of a home\'s price you pay upfront in cash, with the rest covered by a mortgage loan. If a home costs $300,000 and you put down $30,000, you\'re borrowing the remaining $270,000.',
          'A bigger down payment means a smaller loan, which means smaller monthly payments and less interest paid over the life of the loan.',
        ],
      },
      {
        heading: 'The 20% Myth',
        body: [
          'Many people believe you must put down 20% to buy a home, but that\'s not a hard rule. Some loan programs allow down payments as low as 3-5%. The tradeoff is that putting down less than 20% usually triggers private mortgage insurance (PMI), an extra monthly cost that protects the lender, not you, in case you default.',
          'PMI typically costs 0.5-1.5% of the loan amount per year until you\'ve built up enough equity, at which point it can usually be removed.',
        ],
        examples: [
          {
            label: '20% down on a $300,000 home',
            detail: '$60,000 down, $240,000 loan, no PMI required.',
          },
          {
            label: '5% down on a $300,000 home',
            detail: '$15,000 down, $285,000 loan, plus PMI of roughly $120-$300/month until enough equity builds up.',
          },
        ],
      },
      {
        heading: 'Saving Up vs Buying Sooner',
        body: [
          'Waiting to save a bigger down payment reduces monthly costs and avoids PMI, but home prices and rents may rise while you wait. Buying sooner with a smaller down payment gets you into a home faster but means higher monthly costs and more interest paid overall.',
          'There\'s no universally right answer here — it depends on local market conditions, how stable your income is, and how much cash cushion you want to keep for emergencies after moving in.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'real-estate-2-interactive',
      prompt: 'What typically happens if you put down less than 20% on a conventional home loan?',
      choices: [
        { id: 'a', text: 'The loan is automatically denied' },
        { id: 'b', text: 'You usually have to pay for private mortgage insurance (PMI)' },
        { id: 'c', text: 'Your interest rate is guaranteed to be lower' },
        { id: 'd', text: 'Property taxes double' },
      ],
      correctChoiceId: 'b',
      explanation: 'Putting down less than 20% usually requires PMI, an added monthly cost that protects the lender until you build enough equity.',
    },
    quiz: [
      {
        id: 'real-estate-2-q1',
        prompt: 'If a home costs $250,000 and you put down $25,000, how much are you borrowing?',
        choices: [
          { id: 'a', text: '$225,000' },
          { id: 'b', text: '$250,000' },
          { id: 'c', text: '$25,000' },
          { id: 'd', text: '$275,000' },
        ],
        correctChoiceId: 'a',
        explanation: '$250,000 minus the $25,000 down payment leaves a $225,000 loan.',
      },
      {
        id: 'real-estate-2-q2',
        prompt: 'What is one benefit of making a larger down payment?',
        choices: [
          { id: 'a', text: 'It guarantees the home will increase in value' },
          { id: 'b', text: 'It reduces your loan size and typically lowers monthly payments' },
          { id: 'c', text: 'It eliminates the need for homeowners insurance' },
          { id: 'd', text: 'It removes property taxes' },
        ],
        correctChoiceId: 'b',
        explanation: 'A larger down payment shrinks the amount you borrow, which lowers both the monthly payment and the total interest paid.',
      },
    ],
  },
  {
    id: 'real-estate-3',
    categoryId: 'real-estate',
    order: 3,
    title: 'Mortgages',
    description: 'Learn how mortgage loans are structured and what shapes your monthly payment.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'The Basic Building Blocks',
        body: [
          'A mortgage is a loan used to buy real estate, where the home itself serves as collateral. Your monthly payment is usually made up of four parts, often remembered by the acronym PITI: Principal, Interest, Taxes, and Insurance.',
          'Principal is the amount you originally borrowed. Interest is the cost of borrowing it. Taxes and insurance are often bundled into the payment and held in an account called escrow, which the lender uses to pay your property tax and homeowners insurance bills on your behalf.',
        ],
      },
      {
        heading: '15-Year vs 30-Year Loans',
        body: [
          'The most common mortgage terms are 15 and 30 years. A 30-year mortgage spreads payments out longer, so each monthly payment is lower, but you pay more total interest over the life of the loan. A 15-year mortgage has higher monthly payments but usually a lower interest rate and far less interest paid overall.',
          'Neither term is universally "better" — a 30-year loan can free up monthly cash flow for other goals, while a 15-year loan trades that flexibility for a faster payoff and lower lifetime cost.',
        ],
        examples: [
          {
            label: '$250,000 loan at 6.5% over 30 years',
            detail: 'Monthly principal & interest payment: about $1,580. Total interest paid over the loan: roughly $319,000.',
          },
          {
            label: 'Same $250,000 loan at 6% over 15 years',
            detail: 'Monthly principal & interest payment: about $2,110. Total interest paid over the loan: roughly $130,000.',
          },
        ],
      },
      {
        heading: 'How Payments Are Front-Loaded',
        body: [
          'Early in a mortgage, most of your monthly payment goes toward interest rather than principal. Over time, that balance shifts, and more of each payment chips away at what you actually owe. This is called amortization.',
          'This is why paying even a small amount extra toward principal in the early years of a mortgage can meaningfully shorten the loan and reduce total interest paid.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'real-estate-3-interactive',
      prompt: 'What does the "PITI" in a mortgage payment stand for?',
      choices: [
        { id: 'a', text: 'Principal, Interest, Taxes, Insurance' },
        { id: 'b', text: 'Payment, Income, Term, Interest' },
        { id: 'c', text: 'Property, Inspection, Title, Insurance' },
        { id: 'd', text: 'Principal, Income, Taxes, Installment' },
      ],
      correctChoiceId: 'a',
      explanation: 'PITI breaks a typical mortgage payment into Principal, Interest, Taxes, and Insurance.',
    },
    quiz: [
      {
        id: 'real-estate-3-q1',
        prompt: 'Compared to a 30-year mortgage, a 15-year mortgage typically has:',
        choices: [
          { id: 'a', text: 'Lower monthly payments and more total interest' },
          { id: 'b', text: 'Higher monthly payments and less total interest' },
          { id: 'c', text: 'The same monthly payment and same total interest' },
          { id: 'd', text: 'No interest at all' },
        ],
        correctChoiceId: 'b',
        explanation: 'Compressing the loan into fewer years raises the monthly payment but sharply cuts the total interest paid.',
      },
      {
        id: 'real-estate-3-q2',
        prompt: 'Early in a mortgage\'s life, most of each payment goes toward:',
        choices: [
          { id: 'a', text: 'Principal' },
          { id: 'b', text: 'Interest' },
          { id: 'c', text: 'Property taxes' },
          { id: 'd', text: 'Home insurance only' },
        ],
        correctChoiceId: 'b',
        explanation: 'Amortization schedules front-load interest, so early payments barely dent the principal balance.',
      },
    ],
  },
  {
    id: 'real-estate-4',
    categoryId: 'real-estate',
    order: 4,
    title: 'Interest Rates',
    description: 'See how mortgage interest rates are set and how small rate changes affect your payment.',
    estimatedMinutes: 4,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'Where Mortgage Rates Come From',
        body: [
          'Mortgage interest rates move with the broader economy — things like inflation, the Federal Reserve\'s policy rate, and investor demand for mortgage-backed bonds all play a role. On top of that broad rate, lenders adjust your personal rate based on your credit score, down payment size, loan type, and debt levels.',
          'A higher credit score generally earns a lower rate because it signals lower risk to the lender. This is one of many reasons a strong credit history matters well before you ever apply for a mortgage.',
        ],
      },
      {
        heading: 'Fixed vs Adjustable Rates',
        body: [
          'A fixed-rate mortgage locks in the same interest rate for the entire loan term, so your principal-and-interest payment never changes. An adjustable-rate mortgage (ARM) starts with a lower introductory rate for a set period, then adjusts periodically based on market conditions — which can rise or fall.',
          'Fixed rates offer predictability. ARMs can save money if rates stay low or you sell/refinance before the adjustment period, but they carry the risk of higher payments later if rates rise.',
        ],
      },
      {
        heading: 'Why "Just 1%" Matters So Much',
        body: [
          'Because mortgages are large and long, even a small rate difference compounds into a big dollar difference over time.',
          'This is why comparing rates across a few lenders, and understanding what\'s pushing your personal rate up or down, can be worth the effort before committing to a loan.',
        ],
        examples: [
          {
            label: '$300,000 loan at 6% over 30 years',
            detail: 'Monthly payment: about $1,799. Total interest: roughly $347,500.',
          },
          {
            label: 'Same $300,000 loan at 7% over 30 years',
            detail: 'Monthly payment: about $1,996. Total interest: roughly $418,500 — about $71,000 more, just from a 1-point rate difference.',
          },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'real-estate-4-interactive',
      prompt: 'What is a key difference between a fixed-rate and an adjustable-rate mortgage (ARM)?',
      choices: [
        { id: 'a', text: 'A fixed rate can change every year; an ARM never changes' },
        { id: 'b', text: 'A fixed rate stays the same for the loan term; an ARM can adjust after an introductory period' },
        { id: 'c', text: 'ARMs are only available to first-time buyers' },
        { id: 'd', text: 'There is no difference' },
      ],
      correctChoiceId: 'b',
      explanation: 'Fixed-rate loans hold the same rate for the full term, while ARMs start lower but can adjust up or down after an introductory period.',
    },
    quiz: [
      {
        id: 'real-estate-4-q1',
        prompt: 'Which factor can help a borrower qualify for a lower mortgage interest rate?',
        choices: [
          { id: 'a', text: 'A lower credit score' },
          { id: 'b', text: 'A higher credit score' },
          { id: 'c', text: 'A smaller down payment' },
          { id: 'd', text: 'More existing debt' },
        ],
        correctChoiceId: 'b',
        explanation: 'Lenders reward lower perceived risk, and a higher credit score is one of the clearest signals of that.',
      },
      {
        id: 'real-estate-4-q2',
        prompt: 'Why does even a 1% difference in mortgage rate matter so much over 30 years?',
        choices: [
          { id: 'a', text: 'It doesn\'t matter — rates only affect the first year' },
          { id: 'b', text: 'Interest compounds over a large loan balance and a long term, so small rate gaps add up to large dollar amounts' },
          { id: 'c', text: 'It only changes the down payment' },
          { id: 'd', text: 'Property taxes automatically adjust to match' },
        ],
        correctChoiceId: 'b',
        explanation: 'Because mortgages involve large balances over many years, even a small rate change can shift total interest paid by tens of thousands of dollars.',
      },
    ],
  },
  {
    id: 'real-estate-5',
    categoryId: 'real-estate',
    order: 5,
    title: 'Homeownership Costs',
    description: 'Look beyond the mortgage payment at the full cost of owning and maintaining a home.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'The Payment Is Not the Whole Story',
        body: [
          'A mortgage payment covers principal, interest, and often taxes and insurance — but owning a home comes with plenty of costs that never show up on that monthly statement. Repairs, maintenance, utilities, and HOA fees (if applicable) all add up.',
          'A commonly used guideline is to budget 1-2% of your home\'s value per year for maintenance and repairs. On a $300,000 home, that\'s $3,000-$6,000 annually — separate from your mortgage payment.',
        ],
      },
      {
        heading: 'Predictable and Unpredictable Costs',
        body: [
          'Some homeownership costs are predictable and recurring: property taxes, homeowners insurance, utilities, lawn care, HOA dues. Others are unpredictable and can be large: a broken water heater, a roof replacement, a failed furnace in winter.',
          'Budgeting for the predictable costs is straightforward once you know the numbers, but it\'s the unpredictable ones that catch new homeowners off guard, which is why having a repair-specific cushion on top of a mortgage payment matters.',
        ],
        examples: [
          {
            label: 'Typical recurring costs on a mid-size home',
            detail: 'Property tax: $3,000-$6,000/year. Homeowners insurance: $1,200-$2,000/year. Utilities: $2,000-$3,600/year.',
          },
          {
            label: 'Common unexpected repair costs',
            detail: 'Water heater replacement: $1,000-$2,000. Roof replacement: $8,000-$16,000. HVAC system: $5,000-$10,000.',
          },
        ],
      },
      {
        heading: 'Why an Emergency Fund Matters More as a Homeowner',
        body: [
          'Renters can usually call a landlord when something breaks. Homeowners are on the hook themselves, which is why many financial educators suggest keeping a dedicated home-repair cushion in addition to a general emergency fund.',
          'Thinking through these costs before buying — not just qualifying for a mortgage — helps avoid the common surprise of being "house poor," where all your income goes toward the home and little is left over.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'real-estate-5-interactive',
      prompt: 'A commonly used guideline suggests budgeting how much per year for home maintenance?',
      choices: [
        { id: 'a', text: '1-2% of the home\'s value' },
        { id: 'b', text: '10-20% of the home\'s value' },
        { id: 'c', text: 'A fixed $100 per year' },
        { id: 'd', text: 'Nothing — maintenance is optional' },
      ],
      correctChoiceId: 'a',
      explanation: 'The 1-2% guideline gives homeowners a rough annual budget for the repairs and upkeep that inevitably come up.',
    },
    quiz: [
      {
        id: 'real-estate-5-q1',
        prompt: 'What does it mean to be "house poor"?',
        choices: [
          { id: 'a', text: 'Owning multiple houses' },
          { id: 'b', text: 'Spending so much income on housing costs that little is left for anything else' },
          { id: 'c', text: 'Renting instead of owning' },
          { id: 'd', text: 'Having no mortgage at all' },
        ],
        correctChoiceId: 'b',
        explanation: '"House poor" describes a situation where housing costs consume so much of a budget that other financial goals suffer.',
      },
      {
        id: 'real-estate-5-q2',
        prompt: 'Which of these is an unpredictable homeownership cost rather than a recurring one?',
        choices: [
          { id: 'a', text: 'Property taxes' },
          { id: 'b', text: 'Homeowners insurance premium' },
          { id: 'c', text: 'A furnace replacement' },
          { id: 'd', text: 'Monthly mortgage principal' },
        ],
        correctChoiceId: 'c',
        explanation: 'A furnace replacement is a large, irregular repair cost, unlike the predictable recurring costs of taxes or insurance premiums.',
      },
    ],
  },
]
