import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackEvent } from '@/services/analytics'

/**
 * Fires a GA4 page_view on every client-side route change. Mounted once near
 * the top of the app, inside <BrowserRouter>. This is necessary because GA's
 * own automatic pageview only ever sees the URL the script first loaded on —
 * without this, every navigation in this single-page app would look like a
 * single pageview to analytics. Entirely inert when analytics isn't
 * configured (see src/services/analytics.ts).
 */
export function AnalyticsPageView() {
  const location = useLocation()
  useEffect(() => {
    trackEvent('page_view', { page_path: location.pathname })
  }, [location.pathname])
  return null
}
