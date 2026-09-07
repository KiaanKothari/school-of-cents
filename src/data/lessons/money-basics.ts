import type { Lesson } from '@/types'

export const moneyBasicsLessons: Lesson[] = [
  {
    id: 'money-basics-1',
    categoryId: 'money-basics',
    order: 1,
    title: 'Needs vs Wants',
    description: 'Learn the one skill that makes every other money decision easier: telling needs apart from wants.',
    estimatedMinutes: 4,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Why this distinction matters',
        body: [
          "Almost every money problem comes back to the same mix-up: treating a want like it's a need. Your brain is really good at making a want feel urgent — a new phone, a nicer car, food delivery instead of cooking — and that urgency is exactly what gets budgets blown.",
          'A need is something you require to live and function: shelter, basic food, utilities, transportation to work, essential medicine. A want is something that improves your life but isn\'t required: the upgraded version, the brand name, the extra subscription.',
          "This isn't about never buying wants. It's about being honest with yourself about which is which, so you spend on wants on purpose instead of by accident.",
        ],
        examples: [
          { label: 'Need', detail: 'A $60/month basic phone plan that lets you call, text, and use maps for work.' },
          { label: 'Want', detail: 'A $200/month plan with unlimited premium data and the newest phone financed on top.' },
        ],
      },
      {
        heading: 'The gray area',
        body: [
          'Some things are part need, part want, and that\'s where people get tripped up. You need a car to get to work, but you don\'t need the $55,000 truck when a reliable $18,000 used sedan does the same job.',
          'A useful test: ask "what is the cheapest version of this that still solves the actual problem?" The gap between that cheapest version and what you actually bought is the "want" portion — and it\'s fine to spend there, as long as you know you\'re doing it.',
        ],
        examples: [
          { label: 'Gray area', detail: 'You need groceries ($400/month), but $150 of that could be name-brand snacks and takeout add-ons — that slice is the want.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'money-basics-1-iq',
      prompt: 'Maria pays $45/month for a basic gym membership near her apartment because her doctor recommended more exercise for her health. Is this a need or a want?',
      choices: [
        { id: 'a', text: 'A want — nobody needs a gym membership' },
        { id: 'b', text: 'A need, because it directly supports a health requirement her doctor identified' },
        { id: 'c', text: 'Neither — it doesn\'t count as either category' },
        { id: 'd', text: 'A need, because all fitness spending is automatically a need' },
      ],
      correctChoiceId: 'b',
      explanation: 'Context matters. A gym membership is usually a want, but when it\'s tied to a real medical need and there\'s no free alternative that solves it (like running outside), it shifts toward being a need. The category isn\'t fixed — the reason behind the purchase is what you\'re evaluating.',
    },
    quiz: [
      {
        id: 'money-basics-1-q1',
        prompt: 'Which of these is the clearest example of a need?',
        choices: [
          { id: 'a', text: 'Streaming service bundle with 4 platforms' },
          { id: 'b', text: 'Rent on your apartment' },
          { id: 'c', text: 'Concert tickets' },
          { id: 'd', text: 'A second pair of designer sneakers' },
        ],
        correctChoiceId: 'b',
        explanation: 'Rent keeps a roof over your head — it\'s required for survival and stability, unlike entertainment or extra clothing, which improve life but aren\'t required for it.',
      },
      {
        id: 'money-basics-1-q2',
        prompt: 'What\'s the best strategy for handling "gray area" purchases that mix need and want?',
        choices: [
          { id: 'a', text: 'Always buy the cheapest option with no exceptions' },
          { id: 'b', text: 'Ignore the distinction since it\'s too hard to separate' },
          { id: 'c', text: 'Identify the cheapest option that solves the real problem, then decide consciously if the extra cost for upgrades is worth it to you' },
          { id: 'd', text: 'Only worry about needs vs wants for purchases over $1,000' },
        ],
        correctChoiceId: 'c',
        explanation: 'The goal isn\'t deprivation — it\'s awareness. Finding the baseline cost of meeting the need shows you exactly how much of your spending is the "want" upgrade, so you can choose that intentionally instead of by default.',
      },
      {
        id: 'money-basics-1-q3',
        prompt: 'Why does confusing wants for needs cause financial trouble?',
        choices: [
          { id: 'a', text: 'It doesn\'t — spending is spending regardless of category' },
          { id: 'b', text: 'It makes you feel like optional spending is mandatory, so you never question or cut it, even under financial pressure' },
          { id: 'c', text: 'It only affects people who are already in debt' },
          { id: 'd', text: 'Wants are always more expensive than needs' },
        ],
        correctChoiceId: 'b',
        explanation: 'When a want feels like a need, it becomes untouchable in your mind — you stop questioning it even when money is tight, which crowds out savings and true essentials.',
      },
    ],
  },
  {
    id: 'money-basics-2',
    categoryId: 'money-basics',
    order: 2,
    title: 'Understanding Income',
    description: 'Gross vs net, active vs passive — know what actually lands in your pocket before you plan around it.',
    estimatedMinutes: 4,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Gross income vs net income',
        body: [
          'Your gross income is the total amount you earn before anything is taken out — the number often quoted as your "salary." Your net income (also called take-home pay) is what actually hits your bank account after taxes, insurance premiums, and retirement contributions are deducted.',
          'The gap between the two surprises a lot of people the first time they see a real paycheck. Budgeting off your gross income instead of your net income is one of the most common ways people accidentally overspend.',
        ],
        examples: [
          { label: 'Gross', detail: '$50,000/year salary, or about $4,167/month before deductions.' },
          { label: 'Net', detail: 'After federal/state taxes, Social Security, Medicare, and a 5% 401(k) contribution, take-home might land around $3,300/month — roughly 20% less than gross.' },
        ],
      },
      {
        heading: 'Active vs passive income',
        body: [
          'Active income requires you to keep showing up: your salary, hourly wages, freelance fees. Stop working, and it stops coming.',
          'Passive income keeps arriving with little ongoing effort, once it\'s set up: interest from savings, dividends from investments, rental income from a property. Most people start with 100% active income and gradually build passive income over years — it\'s a long game, not a shortcut.',
        ],
        examples: [
          { label: 'Active', detail: 'A $22/hour retail job — income depends entirely on hours worked.' },
          { label: 'Passive', detail: '$3,000 invested in a savings account earning 4% APY generates about $120/year without any extra work.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'money-basics-2-iq',
      prompt: 'Devon\'s salary is $60,000/year, but after taxes and benefits deductions his paychecks add up to $46,000/year. If he builds a budget assuming he has $5,000/month to spend, what mistake is he making?',
      choices: [
        { id: 'a', text: 'No mistake — $60,000/year is $5,000/month, that math is correct' },
        { id: 'b', text: 'He\'s budgeting off gross income instead of net income, so he\'ll overestimate his real spending power by about $1,167/month' },
        { id: 'c', text: 'He should be budgeting off passive income instead' },
        { id: 'd', text: 'The mistake is that $60,000 is too low to budget at all' },
      ],
      correctChoiceId: 'b',
      explanation: '$46,000/year net is about $3,833/month — over $1,000 less than the $5,000 he assumed. Budgeting off gross pay is one of the fastest ways to end up short every month.',
    },
    quiz: [
      {
        id: 'money-basics-2-q1',
        prompt: 'Which figure should you build your monthly budget around?',
        choices: [
          { id: 'a', text: 'Gross income' },
          { id: 'b', text: 'Net (take-home) income' },
          { id: 'c', text: 'Whichever number is higher' },
          { id: 'd', text: 'Your employer\'s advertised salary figure' },
        ],
        correctChoiceId: 'b',
        explanation: 'Net income is what\'s actually available to spend, save, or invest — gross income includes money you\'ll never see because it\'s deducted before your paycheck arrives.',
      },
      {
        id: 'money-basics-2-q2',
        prompt: 'Which of these is an example of passive income?',
        choices: [
          { id: 'a', text: 'Hourly wages from a part-time job' },
          { id: 'b', text: 'A freelance graphic design fee for a finished project' },
          { id: 'c', text: 'Dividend payments from stock you own' },
          { id: 'd', text: 'A yearly bonus tied to hours worked overtime' },
        ],
        correctChoiceId: 'c',
        explanation: 'Dividends arrive because you own the asset, not because you\'re actively trading time for money that day — that\'s the defining trait of passive income.',
      },
    ],
  },
  {
    id: 'money-basics-3',
    categoryId: 'money-basics',
    order: 3,
    title: 'Building an Emergency Fund',
    description: 'A cash cushion is what stands between a car breakdown and a spiral into high-interest debt.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'What an emergency fund actually does',
        body: [
          'An emergency fund is cash set aside specifically for the unexpected: a job loss, a medical bill, a car repair, a broken appliance. It\'s not for planned expenses — vacations, holiday gifts, or things you knew were coming.',
          'Without one, an unexpected $800 repair often gets put on a credit card at 20%+ interest, turning a one-time problem into a recurring monthly payment. With one, that same $800 repair is just... paid, and life moves on.',
          'The standard target is 3–6 months of essential expenses (not your full income — just rent, food, utilities, insurance, minimum debt payments). People with less stable income or job security often aim toward 6 months; dual-income stable households sometimes land closer to 3.',
        ],
        examples: [
          { label: 'Essential monthly expenses', detail: 'Rent $1,200 + groceries $350 + utilities $150 + car payment $250 + insurance $100 = $2,050/month' },
          { label: 'Target fund size', detail: 'At 4 months of coverage: $2,050 × 4 = $8,200' },
        ],
      },
      {
        heading: 'Where to keep it',
        body: [
          'An emergency fund needs to be liquid (accessible within a day or two) and safe (not invested in stocks, where it could lose value right when you need it). A high-yield savings account is the standard choice — separate from your everyday checking account so you\'re not tempted to dip into it for non-emergencies.',
          'It should NOT be in your checking account (too easy to spend accidentally), and it should NOT be invested in the stock market (too risky for money you might need on short notice).',
        ],
        examples: [
          { label: 'Good home for it', detail: 'A high-yield savings account earning ~4% APY, separate from checking, at a different bank if that helps with discipline.' },
        ],
      },
      {
        heading: 'Building it when you\'re starting from zero',
        body: [
          'The 3–6 month goal can feel impossible from $0, so most people start with a smaller milestone — often $500 or $1,000 — as a "starter" emergency fund that covers the most common small emergencies, then build toward the full target over time.',
          'Automating a fixed transfer right after each paycheck (even $50) turns this into a habit instead of a decision you have to make and re-make every month.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'money-basics-3-iq',
      prompt: 'Priya has $6,000 in a brokerage account invested in stock index funds, and calls this her emergency fund. What\'s the problem with this setup?',
      choices: [
        { id: 'a', text: 'There\'s no problem — $6,000 is $6,000 regardless of where it\'s held' },
        { id: 'b', text: 'Stock investments can lose value suddenly, so if she needs the money during a market downturn, she may have to sell at a loss right when she needs it most' },
        { id: 'c', text: '$6,000 is too much money for an emergency fund' },
        { id: 'd', text: 'Brokerage accounts are illegal to use for savings' },
      ],
      correctChoiceId: 'b',
      explanation: 'Emergencies don\'t wait for good market timing. An emergency fund invested in stocks might be worth 20-30% less exactly when a recession also causes a job loss — the worst possible time to be forced to sell at a loss.',
    },
    quiz: [
      {
        id: 'money-basics-3-q1',
        prompt: 'What is the standard recommended size for a full emergency fund?',
        choices: [
          { id: 'a', text: '1-2 weeks of expenses' },
          { id: 'b', text: '3-6 months of essential expenses' },
          { id: 'c', text: '1 full year of your gross salary' },
          { id: 'd', text: 'Exactly $10,000 for everyone' },
        ],
        correctChoiceId: 'b',
        explanation: '3-6 months of essential expenses is enough to cover most job losses or major emergencies without going into debt, while not tying up excessive cash that could otherwise be invested for growth.',
      },
      {
        id: 'money-basics-3-q2',
        prompt: 'Why is a high-yield savings account usually recommended over a checking account for an emergency fund?',
        choices: [
          { id: 'a', text: 'Checking accounts don\'t allow withdrawals' },
          { id: 'b', text: 'It earns some interest while staying liquid, and being separate reduces the temptation to spend it on non-emergencies' },
          { id: 'c', text: 'High-yield savings accounts have no benefits over checking' },
          { id: 'd', text: 'Savings accounts are required by law for emergency funds' },
        ],
        correctChoiceId: 'b',
        explanation: 'A separate high-yield savings account keeps the money out of sight from day-to-day spending decisions while still earning meaningful interest and remaining accessible within a day or two.',
      },
      {
        id: 'money-basics-3-q3',
        prompt: 'Why do many people starting from $0 aim for a $500-$1,000 "starter" fund first?',
        choices: [
          { id: 'a', text: 'Because $500-$1,000 is the legal minimum required by banks' },
          { id: 'b', text: 'Because a full 3-6 month goal can feel unreachable, and a smaller milestone still covers many common small emergencies while building momentum' },
          { id: 'c', text: 'Because emergency funds larger than $1,000 are not allowed' },
          { id: 'd', text: 'Because $1,000 always fully covers a job loss' },
        ],
        correctChoiceId: 'b',
        explanation: 'A smaller first milestone makes the goal achievable in weeks or months rather than years, which keeps motivation up while still providing real protection against everyday emergencies like a car repair.',
      },
    ],
  },
  {
    id: 'money-basics-4',
    categoryId: 'money-basics',
    order: 4,
    title: 'Saving Your First $1,000',
    description: 'The exact tactics that turn "I should save more" into an actual $1,000 sitting in the bank.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Pay yourself first',
        body: [
          'The single most effective savings habit is flipping the usual order of operations. Most people spend first and save whatever\'s left over — which is usually nothing. "Paying yourself first" means moving money to savings the moment you\'re paid, before it has a chance to get spent on anything else.',
          'This works because it removes willpower from the equation. You\'re not resisting temptation 30 times a month; you\'re making one decision (the automatic transfer) and then never touching that money again.',
        ],
        examples: [
          { label: 'Old order', detail: 'Paycheck arrives → spend all month → save whatever\'s left (usually $0)' },
          { label: 'Pay-yourself-first order', detail: 'Paycheck arrives → $100 auto-transfers to savings same day → spend the rest' },
        ],
      },
      {
        heading: 'Finding the money',
        body: [
          'Most people don\'t have an income problem when it comes to finding their first $1,000 — they have a visibility problem. Recurring subscriptions, forgotten memberships, and small daily habits (coffee, delivery fees, impulse buys) add up fast when you actually track them.',
          'A simple approach: for one month, write down literally everything you spend. Most people find $100-$300/month they didn\'t realize was leaking out — that alone can get you to $1,000 in well under a year.',
        ],
        examples: [
          { label: 'Found money example', detail: 'Cancel 2 unused streaming subscriptions ($25/month) + cook 3 more meals at home per week (saves ~$120/month) = $145/month = $1,000 in under 7 months' },
        ],
      },
      {
        heading: 'Make it automatic and specific',
        body: [
          'A vague goal like "save more" rarely works. A specific goal like "$50 every payday into a separate savings account, automatically" is something you can actually track and stick to.',
          'Round-up apps, automatic transfers, and separate named savings accounts ("Emergency Fund" instead of just "Savings") all make the goal feel more real and less likely to get raided for a spontaneous purchase.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'money-basics-4-iq',
      prompt: 'Jamal wants to save $1,000 in 10 months. He sets up an automatic transfer of $100 from checking to savings on the day his paycheck lands, before he does any other spending. Why is this more effective than planning to "save whatever\'s left" at the end of the month?',
      choices: [
        { id: 'a', text: 'It isn\'t more effective — both approaches save the same amount' },
        { id: 'b', text: 'It removes the need for daily willpower by making the decision once and automatically, instead of relying on discipline every single day' },
        { id: 'c', text: 'Automatic transfers earn extra interest that manual transfers don\'t' },
        { id: 'd', text: 'Banks require automatic transfers for savings accounts' },
      ],
      correctChoiceId: 'b',
      explanation: '"Whatever\'s left" is almost always $0 because spending naturally expands to use available money. Automating the transfer on payday guarantees the saving happens before spending gets the chance to eat it.',
    },
    quiz: [
      {
        id: 'money-basics-4-q1',
        prompt: 'What does "pay yourself first" mean?',
        choices: [
          { id: 'a', text: 'Buy something for yourself before paying any bills' },
          { id: 'b', text: 'Transfer money to savings immediately when you\'re paid, before spending on anything else' },
          { id: 'c', text: 'Pay off your highest bill first each month' },
          { id: 'd', text: 'Give yourself a bonus from your business profits' },
        ],
        correctChoiceId: 'b',
        explanation: 'The phrase describes prioritizing your own savings goal ahead of discretionary spending, by moving the money out of reach the moment income arrives.',
      },
      {
        id: 'money-basics-4-q2',
        prompt: 'Why does tracking every expense for a month often reveal "found money" for savings?',
        choices: [
          { id: 'a', text: 'Because tracking apps deposit bonus cash automatically' },
          { id: 'b', text: 'Because small recurring costs like unused subscriptions and daily habits are easy to lose track of, and add up significantly when totaled' },
          { id: 'c', text: 'Because your income increases when you track spending' },
          { id: 'd', text: 'It doesn\'t — tracking never reveals anything useful' },
        ],
        correctChoiceId: 'b',
        explanation: 'Small, forgettable charges (a $12 subscription here, $8 delivery fee there) rarely feel significant individually but often total $100-$300/month once you see them all listed together.',
      },
    ],
  },
  {
    id: 'money-basics-5',
    categoryId: 'money-basics',
    order: 5,
    title: 'Simple vs Compound Interest',
    description: 'The math behind why starting early beats almost everything else in personal finance.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'Simple interest: the basics',
        body: [
          'Simple interest is calculated only on the original amount (the "principal") — it never changes, no matter how many years pass. The formula is: Interest = Principal × Rate × Time.',
          'Simple interest shows up in some loans (like certain auto loans or short-term personal loans), but it\'s relatively rare in savings and investing, where compound interest is the norm.',
        ],
        examples: [
          { label: 'Simple interest example', detail: '$1,000 at 5% simple interest for 3 years = $1,000 × 0.05 × 3 = $150 total interest, regardless of compounding.' },
        ],
      },
      {
        heading: 'Compound interest: interest on interest',
        body: [
          'Compound interest is calculated on the principal PLUS all interest already earned. Each period, the interest you earned gets added to your balance, and next period\'s interest is calculated on that new, larger balance. This is why it\'s often called "interest on interest."',
          'The effect looks small in year one but becomes dramatic over long time periods — which is exactly why starting to invest or save early, even with small amounts, tends to beat starting later with larger amounts.',
        ],
        examples: [
          { label: 'Compound interest example', detail: '$1,000 at 5% compounded annually for 3 years: Year 1: $1,050. Year 2: $1,050 × 1.05 = $1,102.50. Year 3: $1,102.50 × 1.05 = $1,157.63 — that\'s $157.63 in interest, $7.63 more than simple interest, and the gap keeps widening every year.' },
        ],
      },
      {
        heading: 'Why time matters more than almost anything',
        body: [
          'Because compound growth accelerates over time, the biggest lever most people have isn\'t the interest rate — it\'s how many years their money gets to compound. Someone who invests for 30 years at a moderate rate often ends up far ahead of someone who invests for 10 years at a much higher rate.',
          'This is also why compound interest works against you in debt: credit card balances compound too, which is exactly why carrying a balance can spiral so fast.',
        ],
        examples: [
          { label: 'Time beats a late start', detail: 'Investing $200/month starting at age 25 vs. starting at age 35 (both at 7% annual return, stopping contributions at 65): the 25-year-old ends up with roughly double the final balance of the 35-year-old, despite contributing only 43% more total.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'money-basics-5-iq',
      prompt: 'You put $2,000 into an account earning 6% compounded annually and don\'t touch it for 2 years. Which calculation gives you the correct ending balance?',
      choices: [
        { id: 'a', text: '$2,000 + ($2,000 × 0.06 × 2) = $2,240 (simple interest formula)' },
        { id: 'b', text: 'Year 1: $2,000 × 1.06 = $2,120. Year 2: $2,120 × 1.06 = $2,247.20' },
        { id: 'c', text: '$2,000 × 0.06 = $120, done' },
        { id: 'd', text: '$2,000 stays exactly $2,000 unless you add more money' },
      ],
      correctChoiceId: 'b',
      explanation: 'Compound interest recalculates each year based on the new, larger balance (including last year\'s interest), which is why the correct answer ($2,247.20) is higher than the simple-interest calculation ($2,240) — the extra $7.20 is "interest on interest."',
    },
    quiz: [
      {
        id: 'money-basics-5-q1',
        prompt: 'What is the key difference between simple and compound interest?',
        choices: [
          { id: 'a', text: 'Simple interest only applies to loans, compound only applies to savings' },
          { id: 'b', text: 'Simple interest is calculated only on the original principal; compound interest is calculated on the principal plus previously earned interest' },
          { id: 'c', text: 'There is no real difference in the final amount' },
          { id: 'd', text: 'Compound interest is always a lower rate than simple interest' },
        ],
        correctChoiceId: 'b',
        explanation: 'The defining feature of compounding is that each period\'s interest is calculated on a growing balance that already includes prior interest, which is what makes it grow faster over time than simple interest on a fixed principal.',
      },
      {
        id: 'money-basics-5-q2',
        prompt: 'Why does starting to invest at age 25 instead of 35 make such a large difference in the end, even with the same monthly contribution and rate of return?',
        choices: [
          { id: 'a', text: 'It doesn\'t make a meaningful difference' },
          { id: 'b', text: 'Because the earlier money has more years to compound, and each extra year of growth builds on an already larger balance' },
          { id: 'c', text: 'Because interest rates are always higher for younger investors' },
          { id: 'd', text: 'Because banks charge fees to investors who start later' },
        ],
        correctChoiceId: 'b',
        explanation: 'Compounding accelerates with time — the extra 10 years of growth at the start of the timeline has decades to snowball, which is worth more than an equivalent 10 years added at the end.',
      },
      {
        id: 'money-basics-5-q3',
        prompt: 'Why is compound interest described as working "against you" in credit card debt?',
        choices: [
          { id: 'a', text: 'Credit card interest is always simple interest, which is worse' },
          { id: 'b', text: 'Unpaid interest gets added to your balance, so future interest is charged on that larger balance too, making debt grow faster the longer it\'s carried' },
          { id: 'c', text: 'Compound interest only applies to savings accounts, not debt' },
          { id: 'd', text: 'It doesn\'t apply to credit cards at all' },
        ],
        correctChoiceId: 'b',
        explanation: 'The same mechanism that grows savings accelerates debt when interest compounds on unpaid balances — each month\'s unpaid interest becomes part of the balance that next month\'s interest is calculated on.',
      },
    ],
  },
]
