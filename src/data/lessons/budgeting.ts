import type { Lesson } from '@/types'

export const budgetingLessons: Lesson[] = [
  {
    id: 'budgeting-1',
    categoryId: 'budgeting',
    order: 1,
    title: 'What Is a Budget?',
    description: 'A budget isn\'t a punishment — it\'s a plan that tells your money where to go instead of wondering where it went.',
    estimatedMinutes: 4,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'The real definition of a budget',
        body: [
          'A budget is simply a plan for your income: it lists what money is coming in, and assigns every dollar of it a job — rent, groceries, savings, fun — before the month starts. That\'s it. It\'s not about restriction; it\'s about intention.',
          'The alternative to budgeting isn\'t "freedom" — it\'s finding out where your money went after it\'s already gone, usually via a bank balance that\'s lower than expected. A budget flips that: you decide in advance, instead of discovering after the fact.',
        ],
        examples: [
          { label: 'Without a budget', detail: 'Paycheck of $3,200 arrives, gets spent gradually and unpredictably across the month, and by day 25 you\'re surprised to be down to $80.' },
          { label: 'With a budget', detail: 'Same $3,200 is assigned on day 1: $1,200 rent, $500 groceries/gas, $400 savings, $300 debt payment, $800 everything else — every dollar has a plan.' },
        ],
      },
      {
        heading: 'Budgets are not static',
        body: [
          'A budget isn\'t a set-it-and-forget-it document — it\'s a living plan you revisit and adjust as life changes: a raise, a new expense, a move to a cheaper apartment. Checking in monthly (or even weekly at first) is normal and expected, not a sign you\'re doing it wrong.',
          'The goal isn\'t a perfect budget on the first try. The goal is a budget that gets slightly more accurate every month as you learn your own real spending patterns.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'budgeting-1-iq',
      prompt: 'Which statement best describes the actual purpose of a budget?',
      choices: [
        { id: 'a', text: 'To eliminate all fun spending completely' },
        { id: 'b', text: 'To assign every dollar of income a planned purpose before you spend it, rather than discovering where the money went afterward' },
        { id: 'c', text: 'To track spending only for people who are already in debt' },
        { id: 'd', text: 'To guarantee you never spend more than you plan, with no flexibility ever' },
      ],
      correctChoiceId: 'b',
      explanation: 'A budget\'s core function is proactive planning — deciding where money goes in advance — not restriction for its own sake, and not a tool reserved only for people in financial trouble.',
    },
    quiz: [
      {
        id: 'budgeting-1-q1',
        prompt: 'What is the main problem with not having a budget at all?',
        choices: [
          { id: 'a', text: 'You\'ll automatically overspend on rent' },
          { id: 'b', text: 'You only find out where your money went after it\'s already spent, instead of directing it in advance' },
          { id: 'c', text: 'Banks require a budget to open an account' },
          { id: 'd', text: 'There is no real downside to skipping a budget' },
        ],
        correctChoiceId: 'b',
        explanation: 'Without a plan, spending decisions get made in the moment without a full view of competing priorities, and the only feedback comes afterward — usually a lower-than-expected bank balance.',
      },
      {
        id: 'budgeting-1-q2',
        prompt: 'How often should a budget typically be revisited?',
        choices: [
          { id: 'a', text: 'Never — once it\'s made, it should stay exactly the same forever' },
          { id: 'b', text: 'Only once, when you first create it' },
          { id: 'c', text: 'Regularly (monthly is common, weekly at first), adjusting as income and expenses change' },
          { id: 'd', text: 'Only after a financial emergency has already happened' },
        ],
        correctChoiceId: 'c',
        explanation: 'A budget is a living plan, not a one-time document — regular check-ins let it adapt to real life and get more accurate over time.',
      },
    ],
  },
  {
    id: 'budgeting-2',
    categoryId: 'budgeting',
    order: 2,
    title: 'The 50/30/20 Rule',
    description: 'A dead-simple starting framework: 50% needs, 30% wants, 20% savings and debt payoff.',
    estimatedMinutes: 4,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'The three buckets',
        body: [
          'The 50/30/20 rule (popularized by Senator Elizabeth Warren) splits your after-tax (net) income into three simple buckets: 50% for needs (rent, groceries, utilities, minimum debt payments, insurance), 30% for wants (dining out, entertainment, hobbies, subscriptions), and 20% for savings and extra debt payoff.',
          'It\'s not a rigid law — it\'s a starting template. Someone in a high cost-of-living city might need 65% for essentials; someone aggressively paying off debt might push 30% into that category instead of wants. The percentages are a benchmark to compare yourself against, not a rule to obey perfectly.',
        ],
        examples: [
          { label: 'On $4,000/month net income', detail: 'Needs: $2,000 (rent, utilities, groceries, insurance) — Wants: $1,200 (dining out, streaming, hobbies) — Savings/debt: $800 (emergency fund, retirement, extra loan payments)' },
        ],
      },
      {
        heading: 'Using it as a diagnostic tool',
        body: [
          'The real power of the 50/30/20 rule isn\'t as a strict budget to follow to the penny — it\'s as a quick health check. If your "needs" category is eating 75% of your income, that\'s a signal worth paying attention to: either income needs to grow, or fixed costs (rent especially) need to shrink.',
          'Run the numbers on your own income once, honestly, and you\'ll instantly see which bucket is out of balance.',
        ],
        examples: [
          { label: 'Warning sign', detail: 'If needs are consistently above 60-65% of net income, there\'s very little room left for savings or unexpected costs — a useful early signal to address, before an emergency forces the issue.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'budgeting-2-iq',
      prompt: 'Sofia earns $3,000/month net. Using the 50/30/20 rule, roughly how much should go toward wants (dining out, entertainment, subscriptions)?',
      choices: [
        { id: 'a', text: '$1,500' },
        { id: 'b', text: '$900' },
        { id: 'c', text: '$600' },
        { id: 'd', text: '$300' },
      ],
      correctChoiceId: 'b',
      explanation: '30% of $3,000 is $900. Needs would target 50% ($1,500) and savings/debt payoff would target 20% ($600).',
    },
    quiz: [
      {
        id: 'budgeting-2-q1',
        prompt: 'In the 50/30/20 rule, what percentage is recommended for savings and extra debt payoff?',
        choices: [
          { id: 'a', text: '50%' },
          { id: 'b', text: '30%' },
          { id: 'c', text: '20%' },
          { id: 'd', text: '10%' },
        ],
        correctChoiceId: 'c',
        explanation: 'The rule allocates 50% to needs, 30% to wants, and the remaining 20% to savings goals and paying down debt beyond minimum payments.',
      },
      {
        id: 'budgeting-2-q2',
        prompt: 'What should someone do if their needs category is consistently running at 75% of income?',
        choices: [
          { id: 'a', text: 'Ignore it — the 50/30/20 rule is only a suggestion with no real diagnostic value' },
          { id: 'b', text: 'Treat it as a warning sign worth acting on, since it leaves very little room for savings or emergencies' },
          { id: 'c', text: 'Increase spending on wants to balance it out' },
          { id: 'd', text: 'Assume the rule doesn\'t apply to real people' },
        ],
        correctChoiceId: 'b',
        explanation: 'A needs category that\'s consistently far above 50% signals real financial pressure — either income is too low relative to fixed costs or those costs (often rent) need to come down, and it\'s worth addressing before it becomes a crisis.',
      },
      {
        id: 'budgeting-2-q3',
        prompt: 'Is the 50/30/20 rule meant to be followed exactly by everyone?',
        choices: [
          { id: 'a', text: 'Yes, it\'s a strict legal requirement for personal budgets' },
          { id: 'b', text: 'No, it\'s a flexible starting template and diagnostic benchmark, not a rigid rule for every situation' },
          { id: 'c', text: 'Yes, deviating from it always leads to financial failure' },
          { id: 'd', text: 'No, it should be ignored entirely' },
        ],
        correctChoiceId: 'b',
        explanation: 'The percentages are a useful starting point and comparison tool, but individual circumstances — cost of living, debt load, income level — often justify adjusting the splits.',
      },
    ],
  },
  {
    id: 'budgeting-3',
    categoryId: 'budgeting',
    order: 3,
    title: 'Fixed vs Variable Expenses',
    description: 'Know which bills are locked in and which ones you actually have room to adjust this month.',
    estimatedMinutes: 3,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Fixed expenses: the same every month',
        body: [
          'Fixed expenses stay roughly the same amount each billing cycle, regardless of your behavior: rent or mortgage, car payments, insurance premiums, subscriptions, most loan payments. They\'re predictable, which makes them easy to budget for — but also hard to reduce quickly without a bigger change (like moving or refinancing).',
        ],
        examples: [
          { label: 'Fixed expenses', detail: 'Rent $1,400 + car payment $320 + renters insurance $18 + phone plan $60 = $1,798, same every month regardless of behavior.' },
        ],
      },
      {
        heading: 'Variable expenses: they move with your choices',
        body: [
          'Variable expenses change month to month based on your decisions and circumstances: groceries, gas, dining out, entertainment, clothing, gifts. These are where most of the flexibility in a budget actually lives — they can go up or down based on choices you make in real time.',
          'When money gets tight, variable expenses are usually the first place to cut, because they respond immediately to a decision, unlike fixed expenses which often require weeks or months of lead time (like breaking a lease) to change.',
        ],
        examples: [
          { label: 'Variable expenses', detail: 'Groceries ($250-$450 depending on the month) + gas ($80-$150) + dining out ($0-$300) — same categories, different totals depending on choices.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'budgeting-3-iq',
      prompt: 'Money is unexpectedly tight this month. Which category should you look at first for quick, immediate savings?',
      choices: [
        { id: 'a', text: 'Fixed expenses like rent, since they\'re the biggest line item' },
        { id: 'b', text: 'Variable expenses like dining out and entertainment, since they can be reduced immediately by choice' },
        { id: 'c', text: 'Insurance premiums, since those are flexible day to day' },
        { id: 'd', text: 'It doesn\'t matter — all expenses are equally easy to adjust' },
      ],
      correctChoiceId: 'b',
      explanation: 'Variable expenses respond instantly to a decision (skip the takeout tonight, cook at home instead), while fixed expenses like rent or a car payment are locked into a contract and usually take weeks or months of lead time to actually change.',
    },
    quiz: [
      {
        id: 'budgeting-3-q1',
        prompt: 'Which of these is a fixed expense?',
        choices: [
          { id: 'a', text: 'Monthly grocery bill' },
          { id: 'b', text: 'Car insurance premium' },
          { id: 'c', text: 'Dining out' },
          { id: 'd', text: 'Weekend entertainment' },
        ],
        correctChoiceId: 'b',
        explanation: 'A fixed monthly insurance premium stays the same regardless of your day-to-day choices, unlike groceries, dining, or entertainment, which fluctuate with behavior.',
      },
      {
        id: 'budgeting-3-q2',
        prompt: 'Why are variable expenses usually the first target when trying to cut spending quickly?',
        choices: [
          { id: 'a', text: 'Because they\'re always larger than fixed expenses' },
          { id: 'b', text: 'Because they respond immediately to a choice, while fixed expenses are locked into contracts that take time to change' },
          { id: 'c', text: 'Because fixed expenses can\'t legally be part of a budget' },
          { id: 'd', text: 'Because variable expenses don\'t actually matter to your budget' },
        ],
        correctChoiceId: 'b',
        explanation: 'You can decide right now to skip a restaurant meal and see the effect immediately, whereas reducing rent or a car payment typically requires a longer process like moving or refinancing.',
      },
    ],
  },
  {
    id: 'budgeting-4',
    categoryId: 'budgeting',
    order: 4,
    title: 'Avoiding Lifestyle Inflation',
    description: 'Why a raise doesn\'t automatically mean more savings — and how to make sure it actually does.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'What lifestyle inflation looks like',
        body: [
          'Lifestyle inflation (also called "lifestyle creep") happens when your spending rises to match your income every time you earn more — a raise leads to a nicer apartment, a bonus leads to a nicer car, a promotion leads to more takeout and shopping. The result: your bank balance and savings rate barely move, no matter how much more you earn.',
          'It\'s sneaky because each individual upgrade feels justified and reasonable in the moment ("I got a raise, I deserve this") — the problem only becomes visible years later, when someone earning double their starting salary realizes they\'ve saved almost nothing extra.',
        ],
        examples: [
          { label: 'Lifestyle inflation in action', detail: 'Salary grows from $50,000 to $75,000 over 5 years (a $25,000 raise), but rent, car payment, and dining out expenses also grow by roughly $2,000/month combined — leaving savings rate exactly where it started.' },
        ],
      },
      {
        heading: 'How to capture raises instead of absorbing them',
        body: [
          'The fix isn\'t to never upgrade your life — it\'s to be deliberate about how much of a raise goes to lifestyle versus savings. A common rule of thumb: when you get a raise, split it — for example, 50% to increased savings/investing, 50% available to spend or upgrade your life.',
          'Automating the savings increase the moment a raise happens (before the extra money hits your regular spending account) makes this nearly effortless, using the same "pay yourself first" logic that works for regular saving.',
        ],
        examples: [
          { label: 'Capturing a raise', detail: 'A $400/month raise: increase 401(k) contribution or automatic savings transfer by $200/month immediately, leaving the other $200/month for discretionary lifestyle spending.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'budgeting-4-iq',
      prompt: 'Marcus gets a $500/month raise and immediately upgrades his apartment for an extra $450/month in rent. What core mistake does this illustrate?',
      choices: [
        { id: 'a', text: 'No mistake — spending a raise on a nicer place is always a smart move' },
        { id: 'b', text: 'Lifestyle inflation — nearly the entire raise got absorbed into higher fixed costs instead of increasing savings' },
        { id: 'c', text: 'He should have spent the entire raise instead of just 90% of it' },
        { id: 'd', text: 'Rent increases are illegal to make voluntarily' },
      ],
      correctChoiceId: 'b',
      explanation: 'By putting $450 of a $500 raise into higher rent, Marcus captured almost none of the raise as increased savings — his financial position barely improved despite earning more, which is the defining pattern of lifestyle inflation.',
    },
    quiz: [
      {
        id: 'budgeting-4-q1',
        prompt: 'What is lifestyle inflation?',
        choices: [
          { id: 'a', text: 'When prices at stores increase due to general inflation' },
          { id: 'b', text: 'When spending rises to match income increases, leaving savings rate unchanged despite earning more' },
          { id: 'c', text: 'A government program that adjusts wages for inflation' },
          { id: 'd', text: 'When your rent increases due to your landlord raising prices' },
        ],
        correctChoiceId: 'b',
        explanation: 'Lifestyle inflation specifically describes personal spending habits expanding alongside income, not general price inflation or external cost increases imposed by others.',
      },
      {
        id: 'budgeting-4-q2',
        prompt: 'What\'s a practical way to avoid lifestyle inflation when getting a raise?',
        choices: [
          { id: 'a', text: 'Spend the entire raise immediately to enjoy the reward' },
          { id: 'b', text: 'Automatically direct a meaningful portion of the raise (e.g. 50%) into savings or investments before it becomes part of regular spending' },
          { id: 'c', text: 'Ask your employer to pay the raise directly into a spending account with no options' },
          { id: 'd', text: 'Avoid raises altogether' },
        ],
        correctChoiceId: 'b',
        explanation: 'Automatically diverting part of a raise to savings the moment it happens applies the same "pay yourself first" principle to income growth, ensuring some of every raise actually improves your financial position.',
      },
    ],
  },
  {
    id: 'budgeting-5',
    categoryId: 'budgeting',
    order: 5,
    title: 'Building a Monthly Budget',
    description: 'A step-by-step walkthrough for turning budgeting theory into an actual working budget this month.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Step 1: Know your real net income',
        body: [
          'Start with your actual take-home pay, not your salary. If your income varies (freelance, hourly, commission), use a conservative average of the last 3-6 months rather than your best month, so the budget stays realistic even in a slower month.',
        ],
        examples: [
          { label: 'Variable income example', detail: 'A freelancer earning $3,800, $4,400, and $3,200 over the last three months should budget off roughly $3,200-$3,500 — the conservative end — not the $4,400 high month.' },
        ],
      },
      {
        heading: 'Step 2: List every fixed expense',
        body: [
          'Write down every fixed, recurring bill: rent, insurance, loan payments, subscriptions, phone plan. These are your obligations that don\'t change month to month, so they\'re the easiest part of the budget to get accurate on the first try.',
        ],
        examples: [
          { label: 'Fixed expense list', detail: 'Rent $1,300, car payment $310, insurance $140, phone $55, streaming $25 = $1,830/month in fixed costs.' },
        ],
      },
      {
        heading: 'Step 3: Estimate variable expenses honestly',
        body: [
          'Look at 2-3 months of past bank/card statements to see what you actually spend on groceries, gas, dining, and shopping — not what you wish you spent. Guessing low here is the most common way a new budget fails in week one.',
        ],
        examples: [
          { label: 'Variable expense estimate', detail: 'Based on 3 months of statements: groceries $380, gas $120, dining out $220, miscellaneous $150 = $870/month.' },
        ],
      },
      {
        heading: 'Step 4: Assign the rest to savings and goals — then track and adjust',
        body: [
          'Whatever\'s left after fixed and variable expenses is what\'s available for savings, debt payoff, and financial goals. If that number is uncomfortably small or negative, that\'s valuable information — it means either expenses need to shrink or income needs to grow, and it\'s far better to learn that from a budget than from an overdraft notice.',
          'Once the budget is built, track actual spending against it for a full month. It will not be perfect the first time — that\'s expected. Adjust the categories that were unrealistic and try again next month; a budget gets better with iteration, not with getting it perfect on attempt one.',
        ],
        examples: [
          { label: 'Putting it together', detail: 'Net income $3,500 − fixed $1,830 − variable $870 = $800 left for savings, debt payoff, and goals — roughly 23% of income, close to the 20% benchmark from the 50/30/20 rule.' },
        ],
      },
    ],
    interactiveQuestion: {
      id: 'budgeting-5-iq',
      prompt: 'When building a budget for variable expenses like groceries and dining out, what\'s the best approach?',
      choices: [
        { id: 'a', text: 'Guess a low, optimistic number to motivate yourself to spend less' },
        { id: 'b', text: 'Review 2-3 months of actual bank/card statements to estimate honestly, based on real past behavior' },
        { id: 'c', text: 'Skip variable expenses entirely since they\'re unpredictable' },
        { id: 'd', text: 'Use the exact same number as your fixed expenses' },
      ],
      correctChoiceId: 'b',
      explanation: 'Guessing low on variable expenses is one of the most common reasons a new budget falls apart within the first few weeks — real past data gives a far more realistic and workable starting estimate.',
    },
    quiz: [
      {
        id: 'budgeting-5-q1',
        prompt: 'If someone has variable freelance income, what\'s the safest way to set the income figure in their budget?',
        choices: [
          { id: 'a', text: 'Use their single best month ever as the baseline' },
          { id: 'b', text: 'Use a conservative average based on several recent months, not the best month' },
          { id: 'c', text: 'Guess a number that feels motivating' },
          { id: 'd', text: 'Use their annual income divided by 12, regardless of actual monthly variation' },
        ],
        correctChoiceId: 'b',
        explanation: 'Budgeting off a conservative average protects against the risk of overcommitting spending or savings goals in months that come in below the best-case scenario.',
      },
      {
        id: 'budgeting-5-q2',
        prompt: 'What should you do if, after listing fixed and variable expenses, very little or nothing is left for savings?',
        choices: [
          { id: 'a', text: 'Ignore it and hope the numbers work out next month' },
          { id: 'b', text: 'Treat it as useful information showing that expenses need to shrink or income needs to grow, and adjust the plan accordingly' },
          { id: 'c', text: 'Stop budgeting since it clearly doesn\'t work for your situation' },
          { id: 'd', text: 'Immediately take on new debt to cover the gap' },
        ],
        correctChoiceId: 'b',
        explanation: 'A budget that reveals a tight or negative gap is doing its job — surfacing a real problem while there\'s still time to address it deliberately, rather than discovering it through an overdraft or missed payment.',
      },
      {
        id: 'budgeting-5-q3',
        prompt: 'Is it normal for a first-attempt budget to be inaccurate?',
        choices: [
          { id: 'a', text: 'No, a budget must be perfect on the first try or it has failed completely' },
          { id: 'b', text: 'Yes, budgets are living plans that get refined through tracking and adjustment over several months' },
          { id: 'c', text: 'No, only professional accountants can build accurate budgets' },
          { id: 'd', text: 'Yes, but only for people with irregular income' },
        ],
        correctChoiceId: 'b',
        explanation: 'A budget is meant to be tested against real spending and refined — treating the first version as a rough draft rather than a final answer is exactly how a realistic, workable budget gets built.',
      },
    ],
  },
]
