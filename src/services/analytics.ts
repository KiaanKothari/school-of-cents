// Google Analytics 4 (GA4) loader and event helper.
//
// Entirely optional and OFF by default, same pattern as src/services/adsense.ts:
// nothing loads or sends anything until VITE_GA_MEASUREMENT_ID is set (see
// SETUP.md), so a deployment without it behaves exactly as it did before this
// file existed — no network calls, no cookies, no console noise.
//
// IMPORTANT: never pass personal information (email, display name, full
// profile objects) into `trackEvent`'s params. Every call site in this app
// passes only non-identifying context (a lesson id, a category, a boolean) —
// keep it that way. GA4 already receives a client-generated device id on its
// own; we don't need to and must not add anything more identifying,
// especially given some users here may be minors.

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
export const isAnalyticsConfigured = Boolean(GA_MEASUREMENT_ID)

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let scriptRequested = false

function ensureLoaded() {
  if (!isAnalyticsConfigured || scriptRequested || typeof document === 'undefined') return
  scriptRequested = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  // send_page_view is handled by our own page_view calls (see AnalyticsPageView),
  // since this is a client-side-routed SPA and GA's automatic pageview on
  // script load would only ever see the very first URL.
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
}

/** The full set of events this app knows how to send. Keep in sync with SETUP.md. */
export type AnalyticsEvent =
  | 'page_view'
  | 'signup'
  | 'login'
  | 'lesson_started'
  | 'lesson_completed'
  | 'challenge_started'
  | 'challenge_completed'
  | 'calculator_used'
  | 'achievement_unlocked'
  | 'newsletter_signup'
  | 'premium_clicked'

/**
 * Sends a GA4 event. A no-op (not even a console warning) when analytics
 * isn't configured, so every call site can fire-and-forget without checking
 * `isAnalyticsConfigured` itself.
 */
export function trackEvent(name: AnalyticsEvent, params: Record<string, string | number | boolean> = {}) {
  if (!isAnalyticsConfigured) return
  ensureLoaded()
  window.gtag?.('event', name, params)
}
