import pkg from '/home/claude/.npm-global/lib/node_modules/playwright/index.js'
const { chromium } = pkg

const BASE = 'http://localhost:4173'
const browser = await chromium.launch()

const shots = [
  { path: '/', name: 'home', width: 1440, height: 900, full: true },
  { path: '/', name: 'home-mobile', width: 390, height: 844, full: true },
  { path: '/learn', name: 'learn', width: 1440, height: 900, full: true },
  { path: '/learn/budgeting', name: 'topic-detail', width: 1440, height: 900, full: true },
  { path: '/real-life/scenario-6', name: 'scenario', width: 1440, height: 900, full: false },
  { path: '/calculators', name: 'calculators', width: 1440, height: 900, full: false },
  { path: '/signup', name: 'signup', width: 1440, height: 900, full: false },
]

for (const shot of shots) {
  const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height } })
  await page.goto(`${BASE}${shot.path}`, { waitUntil: 'networkidle' })
  if (shot.name === 'scenario') {
    await page.locator('button', { hasText: 'Option A' }).first().click().catch(() => {})
    await page.waitForTimeout(200)
  }
  if (shot.name === 'calculators') {
    await page.getByText('Debt Payoff').click().catch(() => {})
    await page.waitForTimeout(200)
  }
  await page.screenshot({ path: `/tmp/screenshots/${shot.name}.png`, fullPage: shot.full })
  await page.close()
}

await browser.close()
console.log('done')
