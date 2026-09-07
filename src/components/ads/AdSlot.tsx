import { useEffect, useRef } from 'react'
import { ADSENSE_CLIENT_ID, isAdSenseConfigured, loadAdSenseScript } from '@/services/adsense'

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[]
  }
}

/**
 * A single Google AdSense display unit.
 *
 * Renders nothing — not even empty space — until VITE_ADSENSE_CLIENT_ID is
 * set, so an unconfigured deployment never shows a broken ad box. Once
 * you're approved, create a "Display ad" unit in your AdSense dashboard, copy
 * its slot ID, and pass it here. See SETUP.md for the full walkthrough.
 */
export function AdSlot({ slot, className }: { slot: string; className?: string }) {
  const pushed = useRef(false)

  useEffect(() => {
    if (!isAdSenseConfigured || pushed.current) return
    loadAdSenseScript()
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
      pushed.current = true
    } catch {
      // AdSense script not ready yet, or blocked by an ad blocker — fail silently.
    }
  }, [])

  if (!isAdSenseConfigured) return null

  return (
    <div className={className}>
      <p className="mb-1.5 text-center text-[10px] font-medium uppercase tracking-wide text-ink-faint/50">Advertisement</p>
      <ins
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
