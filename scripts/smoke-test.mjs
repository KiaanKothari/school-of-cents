import pkg from '/home/claude/.npm-global/lib/node_modules/playwright/index.js'
const { chromium } = pkg

const BASE = 'http://localhost:4173'
const routes = [
  '/',
  '/learn',
  '/learn/money-basics',
  '/learn/budgeting',
  '/learn/credit-debt',
  '/learn/investing',
  '/learn/taxes',
  '/learn/real-estate',
  '/learn/retirement',
  '/learn/banking',
  '/real-life',
  '/real-life/scenario-1',
  '/calculators',
  '/leaderboard',
  '/login',
  '/signup',
  '/forgot-password',
  '/reset-password',
  '/dashboard', // should redirect to /login (protected)
  '/nonexistent-page', // 404
]

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium/chrome-linux/chrome' }).catch(async () => {
  return chromium.launch()
})
const page = await browser.newPage()

const errors = []
page.on('pageerror', (err) => errors.push({ type: 'pageerror', message: err.message }))
page.on('console', (msg) => {
  if (msg.type() === 'error') {
    const text = msg.text()
    // Sandbox has no outbound access to fonts.googleapis.com; that fetch
    // failure is an artifact of this offline test environment, not a real
    // app bug (a normal deployment has internet access). Ignore it here.
    if (text.includes('ERR_TUNNEL_CONNECTION_FAILED') || text.includes('fonts.googleapis')) return
    errors.push({ type: 'console.error', message: text })
  }
})

let failures = 0
for (const route of routes) {
  errors.length = 0
  const res = await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(300)
  const status = res ? res.status() : 'no-response'
  const title = await page.title()
  const h1 = await page.evaluate(() => document.querySelector('h1')?.innerText ?? '(no h1)')
  const url = page.url()
  const hasErrors = errors.length > 0
  if (hasErrors) failures++
  console.log(`\n[${route}] -> ${url.replace(BASE, '')} status=${status} title="${title}"`)
  console.log(`  h1: ${JSON.stringify(h1)}`)
  if (hasErrors) {
    console.log('  ERRORS:', JSON.stringify(errors))
  }
}

await browser.close()
console.log(`\n${failures === 0 ? 'ALL CLEAR' : `${failures} route(s) had console/page errors`}`)
process.exit(failures === 0 ? 0 : 1)
