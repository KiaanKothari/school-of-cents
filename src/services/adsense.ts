// Google AdSense loader.
//
// Display ads are entirely optional and OFF by default. Nothing here runs,
// and no ad space is reserved anywhere in the UI, until you set
// VITE_ADSENSE_CLIENT_ID (see SETUP.md for the full sign-up walkthrough).
// Once your AdSense account is approved for this domain and that variable is
// set in your host's environment variables, ads start rendering automatically
// wherever an <AdSlot> is placed — no other code needs to change.

export const ADSENSE_CLIENT_ID = import.meta.env.VITE_ADSENSE_CLIENT_ID as string | undefined

export const isAdSenseConfigured = Boolean(ADSENSE_CLIENT_ID)

let scriptRequested = false

/** Injects Google's AdSense loader script once. Safe to call more than once. */
export function loadAdSenseScript() {
  if (!isAdSenseConfigured || scriptRequested || typeof document === 'undefined') return
  scriptRequested = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`
  script.crossOrigin = 'anonymous'
  document.head.appendChild(script)
}
