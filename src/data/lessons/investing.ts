import type { Lesson } from '@/types'

// Educational content only — not personalized financial or investment advice.
// All growth figures are illustrative math or long-run historical averages,
// never predictions or guarantees. Investing involves risk, including the
// possible loss of the money you put in.

export const investingLessons: Lesson[] = [
  {
    id: 'investing-1',
    categoryId: 'investing',
    order: 1,
    title: 'Saving vs Investing',
    description: 'Two different tools for two different jobs — learn when to use each one.',
    estimatedMinutes: 4,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Same goal, different tools',
        body: [
          "Saving and investing both mean setting money aside instead of spending it now. The difference is what you do with that money while you're waiting to use it.",
          'Saving usually means putting cash somewhere safe and easy to access, like a savings account. Investing means using that money to buy something — like a piece of a company or a loan to a government — with the hope it grows in value over time.',
          "Neither one is 'better' across the board. They're built for different jobs, and mixing them up can cause real problems.",
        ],
      },
      {
        heading: 'Match the tool to the timeline',
        body: [
          'A good rule of thumb: money you need within the next few years belongs in savings, not investments. That includes your emergency fund, next month\'s rent, or a vacation you\'re booking this summer.',
          "Why? Because investments can lose value in the short term. If you invest your rent money and the market dips right when rent is due, you could be forced to sell at a loss just to cover a bill.",
          'Money you don\'t need for 5, 10, or more years — like retirement savings — has time to ride out those short-term ups and downs, which is where investing tends to make more sense.',
        ],
        examples: [
          {
            label: 'Emergency fund',
            detail: 'Keep this in a savings account, not invested — you need to be able to grab it instantly, without worrying about whether the market happened to be down that week.',
          },
          {
            label: 'Retirement money you won\'t touch for 30 years',
            detail: 'Historically, long time horizons have given investments more room to recover from downturns — though past patterns never guarantee future results.',
          },
        ],
      },
      {
        heading: 'The tradeoff: safety vs growth potential',
        body: [
          'Savings accounts are about as safe as money gets, but that safety has a cost: the interest they pay often barely keeps up with inflation, meaning your money\'s buying power can quietly shrink even while the account balance grows.',
          'Investments carry the possibility of losing value, including the amount you originally put in — that risk is real and never fully goes away. In exchange, many investors accept that risk because, over long historical periods, markets have tended to grow faster than savings account interest.',
          "There's no version of this where you get high growth potential with zero risk. Understanding that tradeoff honestly is step one of investing.",
        ],
      },
    ],
    interactiveQuestion: {
      id: 'investing-1-interactive',
      prompt: 'You\'re setting aside money for a car down payment you plan to make in 4 months. What\'s generally the more appropriate place for it?',
      choices: [
        { id: 'a', text: 'A savings account' },
        { id: 'b', text: 'Individual stocks' },
        { id: 'c', text: 'Whatever has the highest potential return' },
        { id: 'd', text: 'It doesn\'t matter, since 4 months is a long time' },
      ],
      correctChoiceId: 'a',
      explanation: 'With only 4 months until you need the money, you can\'t afford for it to lose value right before the purchase. A savings account keeps it stable and accessible.',
    },
    quiz: [
      {
        id: 'investing-1-q1',
        prompt: 'What is the main risk of keeping long-term retirement money entirely in a regular savings account?',
        choices: [
          { id: 'a', text: 'The bank could refuse to give it back' },
          { id: 'b', text: 'Inflation can erode its buying power faster than the interest grows it' },
          { id: 'c', text: 'Savings accounts are not insured' },
          { id: 'd', text: 'It would count as taxable income immediately' },
        ],
        correctChoiceId: 'b',
        explanation: 'Savings account interest rates often trail inflation, so money parked there for decades can lose real purchasing power even as the balance technically increases.',
      },
      {
        id: 'investing-1-q2',
        prompt: 'Which best describes the core tradeoff between saving and investing?',
        choices: [
          { id: 'a', text: 'Saving is for rich people, investing is for everyone else' },
          { id: 'b', text: 'Investing guarantees higher returns than saving' },
          { id: 'c', text: 'Saving offers stability with lower growth potential; investing offers growth potential with the risk of loss' },
          { id: 'd', text: 'There is no meaningful difference between the two' },
        ],
        correctChoiceId: 'c',
        explanation: 'Saving trades away growth potential for stability and easy access. Investing trades away some of that stability for a chance — never a guarantee — at greater long-term growth.',
      },
      {
        id: 'investing-1-q3',
        prompt: 'Why is a short time horizon (needing the money soon) a reason to favor saving over investing?',
        choices: [
          { id: 'a', text: 'Investments are illegal to sell quickly' },
          { id: 'b', text: 'A short-term dip in value could force you to sell at a loss right when you need the cash' },
          { id: 'c', text: 'Savings accounts always pay more than investments over any period' },
          { id: 'd', text: 'Short-term investments are always scams' },
        ],
        correctChoiceId: 'b',
        explanation: 'Investments can lose value over short periods. If you need the money on a fixed date, you might be forced to cash out during a downturn instead of waiting for a recovery.',
      },
    ],
  },
  {
    id: 'investing-2',
    categoryId: 'investing',
    order: 2,
    title: 'What Is a Stock?',
    description: 'Owning a stock means owning a tiny slice of a real company — here\'s what that actually means.',
    estimatedMinutes: 4,
    xp: 15,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'A stock is a piece of ownership',
        body: [
          'When a company sells "shares" of stock, it\'s selling small pieces of ownership in itself. If you buy one share, you literally own a tiny fraction of that company — its buildings, its brand, its future profits (and losses).',
          'Companies do this to raise money — cash they can use to grow the business — without having to take out a loan. In exchange, they give up a slice of ownership to whoever buys the shares.',
          "As an owner, however small, you generally get a vote on major company decisions (proportional to how many shares you hold) and a claim on the company's value.",
        ],
      },
      {
        heading: 'Why stock prices move',
        body: [
          'A stock\'s price is simply what someone else is currently willing to pay for a share. That price moves constantly based on supply and demand — how many people want to buy versus sell at any given moment.',
          'Prices tend to react to things like company earnings reports, industry news, interest rate changes, or just overall investor mood. None of these are perfectly predictable, which is why short-term stock prices can swing sharply in either direction.',
          'This is a key point: owning a stock means accepting that its value can go up or down, sometimes a lot, and there is no guarantee it will recover.',
        ],
        examples: [
          {
            label: 'Two ways a stock can reward — or not reward — an owner',
            detail: 'Some companies pay out a portion of profits directly to shareholders as "dividends." Others reinvest profits to grow, hoping the share price rises instead. Either way, both the dividend and the share price can fall, not just rise.',
          },
        ],
      },
      {
        heading: 'Single stocks carry concentrated risk',
        body: [
          'Buying shares in one individual company means your investment\'s fate is tied closely to that one company\'s fortunes. If it thrives, your shares may become more valuable; if it struggles or fails, your shares can lose significant value or become worthless.',
          'This lesson is purely educational — it describes how stocks work in general, not a recommendation to buy any particular company\'s shares. Later lessons cover ways investors spread this risk across many companies at once.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'investing-2-interactive',
      prompt: 'When you buy one share of a publicly traded company, what have you actually purchased?',
      choices: [
        { id: 'a', text: 'A loan you\'ve made to the company that it must repay with interest' },
        { id: 'b', text: 'A small ownership stake in that company' },
        { id: 'c', text: 'A guaranteed fixed payment every year' },
        { id: 'd', text: 'A coupon for the company\'s products' },
      ],
      correctChoiceId: 'b',
      explanation: 'A share of stock represents partial ownership of the company — not a loan, and not a guaranteed payment. Its value rises and falls with the market\'s view of the company.',
    },
    quiz: [
      {
        id: 'investing-2-q1',
        prompt: 'Why do companies sell shares of stock in the first place?',
        choices: [
          { id: 'a', text: 'To raise money for the business without taking on debt' },
          { id: 'b', text: 'Because it\'s legally required for all businesses' },
          { id: 'c', text: 'To guarantee employees a fixed salary' },
          { id: 'd', text: 'To avoid ever paying taxes' },
        ],
        correctChoiceId: 'a',
        explanation: 'Selling shares lets a company raise cash to grow by giving up partial ownership, instead of borrowing money it would have to repay with interest.',
      },
      {
        id: 'investing-2-q2',
        prompt: 'What mainly causes a stock\'s price to change day to day?',
        choices: [
          { id: 'a', text: 'A fixed schedule set by the government' },
          { id: 'b', text: 'The company\'s founding date' },
          { id: 'c', text: 'Shifting supply and demand from buyers and sellers reacting to news and expectations' },
          { id: 'd', text: 'The size of the company\'s office building' },
        ],
        correctChoiceId: 'c',
        explanation: 'Stock prices reflect what buyers and sellers currently agree a share is worth, which shifts constantly based on news, earnings, and overall sentiment.',
      },
      {
        id: 'investing-2-q3',
        prompt: 'What is a key risk of putting a large portion of your money into a single company\'s stock?',
        choices: [
          { id: 'a', text: 'There is no risk if the company is well known' },
          { id: 'b', text: 'Your investment\'s outcome is tightly tied to that one company\'s performance' },
          { id: 'c', text: 'Single stocks are not allowed to lose value' },
          { id: 'd', text: 'It automatically becomes a bond after five years' },
        ],
        correctChoiceId: 'b',
        explanation: 'When your money is concentrated in one company, that company\'s specific problems — even ones unrelated to the broader economy — can significantly hurt your investment.',
      },
    ],
  },
  {
    id: 'investing-3',
    categoryId: 'investing',
    order: 3,
    title: 'What Is a Bond?',
    description: 'Bonds are essentially IOUs — you lend money and collect interest until it\'s paid back.',
    estimatedMinutes: 4,
    xp: 18,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Lending money instead of owning a company',
        body: [
          'A bond is essentially a loan you make to an organization — a government, a city, or a company — that agrees to pay you back, with interest, by a set date.',
          'When you buy a stock, you become a part-owner. When you buy a bond, you become a lender. That distinction matters: lenders generally get paid before owners if a company runs into serious trouble, which is part of why bonds are often viewed as comparatively less risky than stocks — though "less risky" does not mean risk-free.',
          'The organization that issues the bond is called the "issuer." They set the interest rate (sometimes called the "coupon"), how often they\'ll pay it, and when they\'ll return your original amount (the "principal" or "face value").',
        ],
      },
      {
        heading: 'How a simple bond works, in numbers',
        body: [
          'Say you buy a $1,000 bond with a 4% annual interest rate ("coupon") and a 10-year term. Typically, you\'d receive $40 a year in interest payments for 10 years, then get your original $1,000 back at the end.',
          'That predictability — knowing roughly what you\'ll receive and when — is a big part of why bonds appeal to investors who want steadier, more predictable income than stocks typically offer.',
        ],
        examples: [
          {
            label: '$1,000 bond, 4% annual coupon, 10-year term',
            detail: 'Interest: $40/year × 10 years = $400 total interest. Plus the original $1,000 returned at maturity = $1,400 total received, assuming the issuer pays as promised.',
          },
        ],
      },
      {
        heading: 'Bonds aren\'t risk-free',
        body: [
          'The biggest risk with any bond is that the issuer fails to pay you back — this is called "default risk." A well-established government is generally considered a very reliable payer; a struggling company is not.',
          'Bonds also carry "interest rate risk": if you want to sell a bond before it matures and interest rates have risen since you bought it, your bond may be worth less to a buyer, because newer bonds are now paying more.',
          'And like any investment, a bond\'s fixed interest payment can lose real value to inflation over time if prices rise faster than the interest you\'re earning.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'investing-3-interactive',
      prompt: 'What is the main difference between owning a stock and owning a bond?',
      choices: [
        { id: 'a', text: 'A stock makes you a part-owner; a bond makes you a lender' },
        { id: 'b', text: 'There is no real difference — they behave identically' },
        { id: 'c', text: 'Bonds can only be issued by individual people' },
        { id: 'd', text: 'Stocks always pay a fixed interest rate' },
      ],
      correctChoiceId: 'a',
      explanation: 'A stock gives you partial ownership of a company. A bond makes you a lender to an issuer, who owes you interest plus your original amount back.',
    },
    quiz: [
      {
        id: 'investing-3-q1',
        prompt: 'You buy a $2,000 bond with a 5% annual coupon. How much interest should you expect to receive in one typical year, assuming the issuer pays as promised?',
        choices: [
          { id: 'a', text: '$5' },
          { id: 'b', text: '$50' },
          { id: 'c', text: '$100' },
          { id: 'd', text: '$200' },
        ],
        correctChoiceId: 'c',
        explanation: '5% of $2,000 is $100. That\'s the annual interest payment you\'d typically expect for that year, in addition to eventually getting the $2,000 principal back.',
      },
      {
        id: 'investing-3-q2',
        prompt: 'What is "default risk" when it comes to bonds?',
        choices: [
          { id: 'a', text: 'The risk that the stock market closes permanently' },
          { id: 'b', text: 'The risk that the bond issuer fails to make its promised payments' },
          { id: 'c', text: 'The risk that bond prices never change' },
          { id: 'd', text: 'The risk of paying too much in taxes on interest' },
        ],
        correctChoiceId: 'b',
        explanation: 'Default risk is the possibility that whoever issued the bond can\'t or won\'t pay back the interest or principal they promised.',
      },
      {
        id: 'investing-3-q3',
        prompt: 'Why are bonds often described as generally less risky than stocks, on average?',
        choices: [
          { id: 'a', text: 'Bonds can never lose value under any circumstances' },
          { id: 'b', text: 'Bondholders are typically paid before stockholders if a company runs into serious trouble, and payments tend to be more predictable' },
          { id: 'c', text: 'Bonds are insured by the stock market' },
          { id: 'd', text: 'Bonds are not real financial products' },
        ],
        correctChoiceId: 'b',
        explanation: 'Lenders (bondholders) generally have a higher claim on a struggling company\'s assets than owners (stockholders), and bond payments are typically more predictable — though bonds still carry real risks like default and interest rate risk.',
      },
    ],
  },
  {
    id: 'investing-4',
    categoryId: 'investing',
    order: 4,
    title: 'What Is an ETF?',
    description: 'One purchase, hundreds of companies — see how exchange-traded funds bundle investments together.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'A basket of investments in one purchase',
        body: [
          'An ETF (exchange-traded fund) is a single investment that holds a basket of many other investments inside it — often dozens, hundreds, or even thousands of different stocks or bonds.',
          'When you buy one share of an ETF, you\'re effectively buying a tiny slice of everything that ETF holds, all in one transaction. It trades on the stock market throughout the day, just like an individual stock.',
          'This structure exists to solve a real problem: buying dozens of individual stocks yourself would take a lot of money and a lot of research. An ETF lets you spread your money across many companies at once, in a single purchase.',
        ],
      },
      {
        heading: 'What an ETF might hold',
        body: [
          'Some ETFs try to track a broad market benchmark — for example, one designed to mirror the performance of large U.S. companies overall, rather than betting on any single one.',
          'Others are more targeted: focused on a specific industry (like technology or healthcare), a region of the world, or a type of bond. The mix inside is defined upfront and is publicly disclosed, so you can see exactly what you\'d own.',
        ],
        examples: [
          {
            label: 'Illustrative example only, not a recommendation',
            detail: 'A "broad market" stock ETF might hold small slices of 500 different companies. If ten of them have a rough year but the rest perform well, the overall impact on your ETF shares is cushioned — compared to owning just those ten stocks directly.',
          },
        ],
      },
      {
        heading: 'ETFs still carry risk',
        body: [
          'Bundling many investments together reduces the impact of any single company doing badly, but it does not eliminate risk. If the entire market or sector an ETF tracks declines, the ETF\'s value declines too.',
          'ETFs also typically charge a small ongoing fee, called an "expense ratio," for the fund\'s management — worth checking, since fees compound over time just like returns do.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'investing-4-interactive',
      prompt: 'What is the main advantage of buying one share of a broad-market ETF instead of one share of a single company?',
      choices: [
        { id: 'a', text: 'It guarantees you\'ll never lose money' },
        { id: 'b', text: 'It spreads your money across many companies in a single purchase' },
        { id: 'c', text: 'It pays a higher interest rate than a bond' },
        { id: 'd', text: 'It cannot be bought or sold during market hours' },
      ],
      correctChoiceId: 'b',
      explanation: 'An ETF bundles many underlying investments into one share, so a single purchase spreads your exposure across all of them rather than concentrating it in one company.',
    },
    quiz: [
      {
        id: 'investing-4-q1',
        prompt: 'What does ETF stand for, and how does it trade?',
        choices: [
          { id: 'a', text: 'Exchange-traded fund, which trades on the stock market throughout the day like a stock' },
          { id: 'b', text: 'Extra tax fund, which only trades once a year' },
          { id: 'c', text: 'Estimated total finance, which never changes in price' },
          { id: 'd', text: 'Equity transfer form, a legal document rather than an investment' },
        ],
        correctChoiceId: 'a',
        explanation: 'ETF stands for exchange-traded fund. Like an individual stock, it can be bought and sold on an exchange throughout the trading day.',
      },
      {
        id: 'investing-4-q2',
        prompt: 'Does buying an ETF that tracks the broad market eliminate all investment risk?',
        choices: [
          { id: 'a', text: 'Yes, ETFs are guaranteed not to lose value' },
          { id: 'b', text: 'No — if the overall market or sector it tracks declines, the ETF\'s value can decline too' },
          { id: 'c', text: 'Yes, because it holds bonds instead of stocks' },
          { id: 'd', text: 'No, because ETFs are not real investments' },
        ],
        correctChoiceId: 'b',
        explanation: 'Diversification within an ETF reduces the impact of any single holding doing poorly, but it can\'t protect against a decline across the whole market or sector it tracks.',
      },
      {
        id: 'investing-4-q3',
        prompt: 'What is an "expense ratio" in the context of an ETF?',
        choices: [
          { id: 'a', text: 'A one-time tax paid only when you sell' },
          { id: 'b', text: 'A small ongoing fee charged for managing the fund' },
          { id: 'c', text: 'The minimum number of shares you must buy' },
          { id: 'd', text: 'A penalty for selling within one year' },
        ],
        correctChoiceId: 'b',
        explanation: 'The expense ratio is an ongoing management fee, expressed as a percentage of your investment, that\'s deducted over time — worth comparing across funds since it affects long-term returns.',
      },
    ],
  },
  {
    id: 'investing-5',
    categoryId: 'investing',
    order: 5,
    title: 'Index Funds Explained',
    description: 'Instead of picking winners, index funds just try to match the whole market.',
    estimatedMinutes: 4,
    xp: 20,
    difficulty: 'beginner',
    published: true,
    sections: [
      {
        heading: 'Matching the market instead of beating it',
        body: [
          'An "index" is simply a list that tracks the overall performance of a group of investments — for example, an index that follows a broad set of large publicly traded companies. It\'s a measuring stick, not something you can buy directly.',
          'An index fund is a fund built to hold roughly the same investments, in roughly the same proportions, as one of these indexes — with the goal of matching that index\'s performance rather than trying to beat it.',
          'This is a very different philosophy from trying to hand-pick individual "winning" stocks. Instead of betting on specific companies, an index fund essentially bets on the overall long-term trajectory of an entire market or segment of it.',
        ],
      },
      {
        heading: 'Why "just matching the market" appeals to many investors',
        body: [
          'Consistently picking individual stocks that outperform the broader market over long periods has historically proven very difficult — even for many professional fund managers, according to long-running industry studies.',
          'Because index funds aren\'t paying analysts to research and pick individual stocks, they typically charge lower fees than actively managed funds. Lower fees mean more of any gains stay with you rather than going toward management costs.',
          'None of this means index funds are risk-free or guaranteed to grow — they rise and fall along with whatever index they track, including during broad market downturns.',
        ],
        examples: [
          {
            label: 'Illustrative math on fees, not a return projection',
            detail: 'On a $10,000 investment, a 0.03% annual fee costs about $3 a year, while a 1% annual fee costs about $100 a year. Over many years, that fee difference compounds and can meaningfully affect your ending balance.',
          },
        ],
      },
      {
        heading: 'Diversification built in, but not diversification across everything',
        body: [
          'Because an index fund holds many companies at once, it offers some built-in diversification compared to owning just one or two stocks.',
          'That said, an index fund only diversifies across whatever its specific index covers. A fund tracking one country\'s large companies, for instance, still leaves you exposed to that entire country\'s economic conditions.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'investing-5-interactive',
      prompt: 'What is the primary goal of an index fund?',
      choices: [
        { id: 'a', text: 'To identify and buy only the single best-performing stock' },
        { id: 'b', text: 'To closely match the performance of a specific market index' },
        { id: 'c', text: 'To guarantee a fixed annual return' },
        { id: 'd', text: 'To avoid holding any stocks at all' },
      ],
      correctChoiceId: 'b',
      explanation: 'An index fund is built to mirror a chosen index\'s holdings and performance, rather than trying to pick individual winners or beat the market.',
    },
    quiz: [
      {
        id: 'investing-5-q1',
        prompt: 'Why do index funds typically have lower fees than actively managed funds?',
        choices: [
          { id: 'a', text: 'They are required by law to charge no fees' },
          { id: 'b', text: 'They don\'t pay analysts to actively research and select individual stocks' },
          { id: 'c', text: 'They only exist for one year at a time' },
          { id: 'd', text: 'They are not allowed to hold more than one stock' },
        ],
        correctChoiceId: 'b',
        explanation: 'Because index funds simply track an index rather than paying for active stock-picking research, their operating costs — and the fees passed on to investors — tend to be lower.',
      },
      {
        id: 'investing-5-q2',
        prompt: 'Does investing in an index fund mean you are guaranteed not to lose money?',
        choices: [
          { id: 'a', text: 'Yes, index funds cannot decline in value' },
          { id: 'b', text: 'No, an index fund can still lose value if the index it tracks declines' },
          { id: 'c', text: 'Yes, because they are government-insured' },
          { id: 'd', text: 'No, because index funds only hold cash' },
        ],
        correctChoiceId: 'b',
        explanation: 'An index fund moves with its underlying index. If that index falls — as happens during market downturns — the fund\'s value falls too. There is no guarantee against loss.',
      },
      {
        id: 'investing-5-q3',
        prompt: 'A small difference in annual fees between two funds is often described as important mainly because:',
        choices: [
          { id: 'a', text: 'Fees are illegal above a certain amount' },
          { id: 'b', text: 'Fees compound over time and can meaningfully reduce long-term returns' },
          { id: 'c', text: 'Fees are refunded automatically after ten years' },
          { id: 'd', text: 'Fees only apply to bonds, not stocks' },
        ],
        correctChoiceId: 'b',
        explanation: 'A seemingly small annual fee, charged year after year on a growing balance, can add up to a substantial amount over decades — which is why comparing fund fees matters.',
      },
    ],
  },
  {
    id: 'investing-6',
    categoryId: 'investing',
    order: 6,
    title: 'Risk vs Return',
    description: 'Higher potential reward almost always comes bundled with higher potential risk — never a free lunch.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'intermediate',
    published: true,
    sections: [
      {
        heading: 'There is no reward without some risk',
        body: [
          'One of the most consistent patterns in investing is that assets offering the potential for higher returns tend to also carry higher potential for loss. This relationship is often called the risk-return tradeoff.',
          'This isn\'t a rule enforced by anyone — it emerges naturally, because investors generally demand to be compensated for taking on extra uncertainty. If a very safe investment offered enormous potential returns with no added risk, everyone would rush to buy it, which would drive its price up until the extra return disappeared.',
          'Understanding this tradeoff helps explain why a savings account pays modest interest, government bonds typically pay somewhat more, and stocks have historically offered higher long-term average returns alongside much larger short-term swings — in both directions.',
        ],
      },
      {
        heading: 'Volatility is the price of admission',
        body: [
          '"Volatility" describes how much and how often an investment\'s value swings up and down. A highly volatile investment might jump 10% one month and drop 15% the next; a low-volatility one moves in smaller, steadier increments.',
          'Historically, investments with higher long-term average returns have often also shown higher volatility along the way. Investors who want that higher average return have generally had to be willing to tolerate larger temporary drops without panic-selling.',
          'None of this predicts what any specific investment will do next. It describes a historical pattern and a logical relationship — not a formula that guarantees any particular outcome.',
        ],
        examples: [
          {
            label: 'Comparing two hypothetical, illustrative portfolios',
            detail: 'Portfolio A might historically average smaller year-to-year swings with lower average growth. Portfolio B might historically average larger swings — including some sharply negative years — alongside higher average long-term growth. Neither outcome is guaranteed going forward.',
          },
        ],
      },
      {
        heading: 'Matching risk to your own situation',
        body: [
          'How much risk makes sense for a given person depends on things like their time horizon, how they\'d react emotionally to a sudden drop, and whether they might need the money on short notice.',
          'This is deeply personal, which is exactly why this lesson describes the general concept rather than telling you what level of risk is right for you — that depends on your own circumstances and, ideally, your own judgment or a qualified professional\'s guidance.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'investing-6-interactive',
      prompt: 'In general, why do riskier investments tend to offer the potential for higher returns?',
      choices: [
        { id: 'a', text: 'Because the government sets fixed returns for every risk level' },
        { id: 'b', text: 'Investors generally need to be compensated for accepting greater uncertainty' },
        { id: 'c', text: 'Riskier investments are illegal to sell at a loss' },
        { id: 'd', text: 'There is no real connection between risk and return' },
      ],
      correctChoiceId: 'b',
      explanation: 'If a safer option offered the same expected return as a riskier one, few people would choose the riskier one — so riskier investments tend to need the potential for greater reward to attract investors at all.',
    },
    quiz: [
      {
        id: 'investing-6-q1',
        prompt: 'What does "volatility" refer to in investing?',
        choices: [
          { id: 'a', text: 'The total amount of money in an account' },
          { id: 'b', text: 'How much and how often an investment\'s value fluctuates' },
          { id: 'c', text: 'The interest rate set by a bond issuer' },
          { id: 'd', text: 'The tax rate applied to investment gains' },
        ],
        correctChoiceId: 'b',
        explanation: 'Volatility measures the size and frequency of an investment\'s price swings — higher volatility means larger, more frequent ups and downs.',
      },
      {
        id: 'investing-6-q2',
        prompt: 'Does a historically higher average return mean an investment is guaranteed to grow?',
        choices: [
          { id: 'a', text: 'Yes, higher historical averages guarantee future growth' },
          { id: 'b', text: 'No — historical averages describe the past and never guarantee future results' },
          { id: 'c', text: 'Yes, but only for government bonds' },
          { id: 'd', text: 'No, because averages are always miscalculated' },
        ],
        correctChoiceId: 'b',
        explanation: 'Past average returns are historical data, not a promise. Any investment carrying the potential for higher returns also carries real risk, including the risk of loss.',
      },
      {
        id: 'investing-6-q3',
        prompt: 'Why might someone with a very short time horizon (needing money soon) generally prefer to take on less risk?',
        choices: [
          { id: 'a', text: 'Short time horizons legally require low-risk investments' },
          { id: 'b', text: 'They may have less time to recover from a downturn before needing the money' },
          { id: 'c', text: 'Low-risk investments always outperform over any period' },
          { id: 'd', text: 'Risk only applies to investments held for more than 10 years' },
        ],
        correctChoiceId: 'b',
        explanation: 'A longer time horizon gives an investment more opportunity to recover from a downturn before you need to cash out. A shorter horizon means less cushion for that recovery to happen.',
      },
    ],
  },
  {
    id: 'investing-7',
    categoryId: 'investing',
    order: 7,
    title: 'Compound Growth',
    description: 'Earning returns on your returns — the quiet math behind long-term investing.',
    estimatedMinutes: 5,
    xp: 25,
    difficulty: 'advanced',
    published: true,
    sections: [
      {
        heading: 'Growth building on growth',
        body: [
          'Compound growth happens when the returns an investment earns are left in place and start generating their own returns, on top of the original amount. Over time, this can cause growth to accelerate rather than stay flat.',
          'Contrast this with simple growth, where you\'d only ever earn a return on your original amount, never on the returns that accumulated along the way. Compounding is what makes the difference between the two grow more dramatic the longer money stays invested.',
          'Compounding isn\'t unique to investing — it\'s also exactly how compounding debt (like credit card interest) works against you. Same math, opposite direction.',
        ],
      },
      {
        heading: 'The math, worked out with real numbers',
        body: [
          'Imagine $5,000 growing at a hypothetical, purely illustrative 7% average annual rate. This is not a prediction of any real investment\'s future performance — actual returns vary and can be negative in any given year.',
          'After year 1, you\'d have about $5,350. After year 10, roughly $9,836. After year 20, roughly $19,349 — nearly quadrupling the original $5,000, purely from that hypothetical rate compounding year after year, assuming no additional deposits.',
          'Notice the growth isn\'t a straight line: the dollar amount added each year gets larger over time, because each year\'s return is calculated on a growing balance, not just the original $5,000.',
        ],
        examples: [
          {
            label: '$5,000 at a hypothetical 7% average annual return, no additional deposits',
            detail: 'Year 1: ~$5,350. Year 10: ~$9,836. Year 20: ~$19,349. Year 30: ~$38,061. (Illustrative math only — real returns fluctuate and are never guaranteed.)',
          },
          {
            label: 'Why starting earlier matters, illustratively',
            detail: 'Investing the same $5,000 at the same hypothetical 7% rate for 30 years versus 20 years results in roughly double the ending amount — not because you added more money, but because compounding had 10 extra years to work.',
          },
        ],
      },
      {
        heading: 'Time is the ingredient you can\'t buy back',
        body: [
          'The most powerful variable in these examples isn\'t the rate of return — it\'s time. A longer time horizon gives compounding far more opportunities to build on itself.',
          'This is exactly why many long-term investors emphasize starting as early as reasonably possible and staying invested through market ups and downs, rather than trying to perfectly time when to buy or sell — though everyone\'s circumstances and risk tolerance differ.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'investing-7-interactive',
      prompt: 'What is the key difference between compound growth and simple growth?',
      choices: [
        { id: 'a', text: 'Compound growth only applies to bonds, never stocks' },
        { id: 'b', text: 'Compound growth generates returns on both the original amount and prior returns; simple growth only ever returns on the original amount' },
        { id: 'c', text: 'Simple growth always produces a larger final amount' },
        { id: 'd', text: 'There is no mathematical difference between them' },
      ],
      correctChoiceId: 'b',
      explanation: 'Compounding means each period\'s return is calculated on the new, larger balance — including past returns — which is why growth tends to accelerate the longer money stays invested.',
    },
    quiz: [
      {
        id: 'investing-7-q1',
        prompt: 'In the lesson\'s illustrative example, why did the dollar amount of growth in year 20 exceed the growth in year 1, even though the hypothetical rate stayed the same at 7%?',
        choices: [
          { id: 'a', text: 'The interest rate secretly increased over time' },
          { id: 'b', text: '7% of a larger balance is a larger dollar amount than 7% of a smaller balance' },
          { id: 'c', text: 'Extra money was deposited every year' },
          { id: 'd', text: 'The example made a calculation error' },
        ],
        correctChoiceId: 'b',
        explanation: 'As the balance grows from prior years\' returns, applying the same percentage rate to that larger balance produces a larger dollar amount of growth — this is the essence of compounding.',
      },
      {
        id: 'investing-7-q2',
        prompt: 'Why do many long-term investors emphasize starting to invest early, even with small amounts?',
        choices: [
          { id: 'a', text: 'Because early investors are guaranteed higher returns than late investors' },
          { id: 'b', text: 'Because more time allows more opportunities for growth to compound on itself' },
          { id: 'c', text: 'Because it is illegal to start investing after age 30' },
          { id: 'd', text: 'Because early investments are exempt from all risk' },
        ],
        correctChoiceId: 'b',
        explanation: 'Time is what compounding needs to do its work. A longer runway gives past growth more opportunities to generate additional growth — though outcomes are never guaranteed.',
      },
      {
        id: 'investing-7-q3',
        prompt: 'Is a 7% annual return a promise of what any real investment will earn?',
        choices: [
          { id: 'a', text: 'Yes, 7% is a legally guaranteed minimum for all investments' },
          { id: 'b', text: 'No — it was used purely as a hypothetical, illustrative number to demonstrate how compounding math works' },
          { id: 'c', text: 'Yes, because it matches inflation exactly every year' },
          { id: 'd', text: 'No, because compounding does not apply to real investments' },
        ],
        correctChoiceId: 'b',
        explanation: 'The 7% figure was chosen only to make the compounding math concrete and easy to follow. Real investment returns vary year to year, can be negative, and are never guaranteed.',
      },
    ],
  },
  {
    id: 'investing-8',
    categoryId: 'investing',
    order: 8,
    title: 'Diversification',
    description: 'Don\'t put all your eggs in one basket — the oldest investing wisdom is also some of the soundest.',
    estimatedMinutes: 5,
    xp: 30,
    difficulty: 'advanced',
    published: true,
    sections: [
      {
        heading: 'Spreading risk across many different things',
        body: [
          'Diversification means spreading your money across a variety of different investments — different companies, industries, regions, and even types of assets (like stocks and bonds together) — rather than concentrating it in just one or two places.',
          'The logic is straightforward: different investments often don\'t rise and fall in exact sync with each other. When one part of a diversified mix is doing poorly, another part may be holding steady or doing well, which can smooth out the overall ride.',
          'Diversification does not prevent losses — a well-diversified portfolio can still lose value, especially during periods when many types of investments decline at once. What it aims to reduce is the damage from any single investment or sector going badly wrong.',
        ],
      },
      {
        heading: 'Diversification happens on multiple levels',
        body: [
          'Within stocks alone, you can diversify across company size, industry, and geography — for example, not putting everything into a single industry that could face an unexpected downturn together.',
          'Beyond stocks, many investors also diversify across asset classes entirely, such as holding both stocks and bonds. These often (though not always) respond differently to the same economic conditions.',
          'ETFs and index funds, covered in earlier lessons, are common tools for achieving broad diversification without having to individually research and buy dozens of separate investments yourself.',
        ],
        examples: [
          {
            label: 'Illustrative comparison, not investment advice',
            detail: 'An investor holding shares in just one company faces that company\'s specific risks directly. An investor holding a broad-market fund of hundreds of companies across many industries has spread that specific risk much more thinly — though market-wide risk still remains for both.',
          },
        ],
      },
      {
        heading: 'What diversification can\'t do',
        body: [
          'Diversification is often called the closest thing investing has to a "free lunch," because it can reduce risk without necessarily reducing expected long-term returns. But it\'s not magic — it can\'t eliminate risk altogether.',
          'A globally diversified portfolio can still decline during a broad economic downturn that affects most markets at once. Diversification manages a specific kind of risk (over-concentration); it doesn\'t erase the general possibility of loss that comes with investing at all.',
        ],
      },
    ],
    interactiveQuestion: {
      id: 'investing-8-interactive',
      prompt: 'What is the main purpose of diversification?',
      choices: [
        { id: 'a', text: 'To guarantee a profit every year' },
        { id: 'b', text: 'To reduce the impact of any single investment or sector performing badly' },
        { id: 'c', text: 'To eliminate all investment risk entirely' },
        { id: 'd', text: 'To avoid ever paying taxes on gains' },
      ],
      correctChoiceId: 'b',
      explanation: 'Diversification spreads money across different investments so that a poor outcome in any one of them has a smaller effect on the overall portfolio — it reduces concentration risk, not risk in general.',
    },
    quiz: [
      {
        id: 'investing-8-q1',
        prompt: 'Why might holding both stocks and bonds together be more diversified than holding either alone?',
        choices: [
          { id: 'a', text: 'Stocks and bonds are legally required to be held together' },
          { id: 'b', text: 'They often respond differently to the same economic conditions, which can smooth out overall swings' },
          { id: 'c', text: 'Bonds always go up when stocks go up' },
          { id: 'd', text: 'It guarantees a specific combined return' },
        ],
        correctChoiceId: 'b',
        explanation: 'Different asset classes often (though not always) react differently to the same economic events, so combining them can reduce how much a portfolio swings overall — without any guarantee of a specific return.',
      },
      {
        id: 'investing-8-q2',
        prompt: 'Can a well-diversified portfolio still lose value?',
        choices: [
          { id: 'a', text: 'No, diversification makes losses impossible' },
          { id: 'b', text: 'Yes — diversification reduces concentration risk, but broad market-wide downturns can still cause losses' },
          { id: 'c', text: 'No, because diversified portfolios only contain cash' },
          { id: 'd', text: 'Yes, but only if it contains fewer than 3 investments' },
        ],
        correctChoiceId: 'b',
        explanation: 'Diversification protects against the risk of any single holding causing outsized damage, but it can\'t protect against widespread declines that affect most investments at once.',
      },
      {
        id: 'investing-8-q3',
        prompt: 'Why is diversification sometimes called "the closest thing to a free lunch" in investing?',
        choices: [
          { id: 'a', text: 'Because it is a literal financial product you can purchase' },
          { id: 'b', text: 'Because it can reduce risk from over-concentration without necessarily sacrificing expected long-term returns' },
          { id: 'c', text: 'Because it guarantees returns above the market average' },
          { id: 'd', text: 'Because it removes the need to ever check your investments' },
        ],
        correctChoiceId: 'b',
        explanation: 'Unlike most tradeoffs in investing, spreading risk across many holdings can lower concentration risk without inherently giving up expected return — though it does not eliminate risk altogether.',
      },
    ],
  },
]
