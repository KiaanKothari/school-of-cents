import pkg from '/home/claude/.npm-global/lib/node_modules/playwright/index.js'
const { chromium } = pkg

const BASE = 'http://localhost:4173'
const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('pageerror', (err) => errors.push(err.message))
page.on('console', (msg) => {
  if (msg.type() === 'error') {
    const t = msg.text()
    if (t.includes('ERR_TUNNEL_CONNECTION_FAILED') || t.includes('fonts.googleapis')) return
    errors.push(t)
  }
})

function log(label, ok, detail = '') {
  console.log(`${ok ? '✅' : '❌'} ${label}${detail ? ' — ' + detail : ''}`)
  if (!ok) process.exitCode = 1
}

// 1. Home sample quiz question interaction
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
await page.getByText('Lifestyle inflation is when spending quietly rises').scrollIntoViewIfNeeded().catch(() => {})
const choiceButtons = page.locator('button', { hasText: 'Spending increases to match the new income' })
await choiceButtons.first().click()
const explanationVisible = await page.getByText('Nice — that').isVisible().catch(() => false)
log('Home sample quiz reveals explanation after answering', explanationVisible)

// 2. Mobile nav toggle
await page.setViewportSize({ width: 390, height: 844 })
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
await page.getByLabel('Toggle menu').click()
const mobileLoginVisible = await page.getByRole('banner').getByRole('link', { name: 'Log In' }).isVisible()
log('Mobile menu opens and shows Log In link', mobileLoginVisible)
await page.setViewportSize({ width: 1280, height: 800 })

// 3. Real-life scenario interaction
await page.goto(`${BASE}/real-life/scenario-1`, { waitUntil: 'networkidle' })
const optionButton = page.locator('button', { hasText: 'Option A' }).first()
await optionButton.click()
const outcomeVisible = await page.getByText('What tends to happen').isVisible().catch(() => false)
log('Scenario reveals outcome/pros/cons after choosing', outcomeVisible)

// 4. Calculator interactivity
await page.goto(`${BASE}/calculators`, { waitUntil: 'networkidle' })
const initialInput = page.locator('input[type="number"]').first()
await initialInput.fill('5000')
await page.waitForTimeout(200)
const projectedTotalVisible = await page.getByText('Projected total').isVisible()
log('Compound growth calculator updates on input', projectedTotalVisible)

await page.getByText('Debt Payoff').click()
await page.waitForTimeout(200)
const payoffLabelVisible = await page.getByText(/Time to pay off|never reach zero/).isVisible()
log('Debt payoff tab renders result', payoffLabelVisible)

// 5. Signup validation (password mismatch) — button should be disabled (no backend), but form validation still runs client side before that check
await page.goto(`${BASE}/signup`, { waitUntil: 'networkidle' })
const createBtn = page.getByRole('button', { name: 'Create Account' })
const isDisabled = await createBtn.isDisabled()
log('Signup submit is disabled in demo mode (no fake auth)', isDisabled)

// 6. Protected route redirect preserves nothing broken
await page.goto(`${BASE}/dashboard`, { waitUntil: 'networkidle' })
log('Visiting /dashboard while logged out redirects to /login', page.url().endsWith('/login'))

// 7. 404 page has working link back home
await page.goto(`${BASE}/does-not-exist`, { waitUntil: 'networkidle' })
await page.getByRole('link', { name: 'Back to Home' }).click()
await page.waitForLoadState('networkidle')
log('404 page "Back to Home" link works', page.url() === `${BASE}/`)

console.log('\nConsole/page errors captured during interaction test:', errors.length === 0 ? 'none' : JSON.stringify(errors))
await browser.close()
