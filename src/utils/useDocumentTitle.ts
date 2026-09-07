import { useEffect } from 'react'

const SITE_NAME = 'School of Cents'

/**
 * Sets the browser tab title for the page that calls it, and restores the
 * previous title on unmount. Without this every route shared the single
 * title from index.html, so a search result or a browser tab for
 * "/leaderboard" looked identical to the homepage. No routing library
 * dependency needed for something this small.
 */
export function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    const previous = document.title
    document.title = pageTitle ? `${pageTitle} — ${SITE_NAME}` : `${SITE_NAME} — Learn money. Make better decisions.`
    return () => {
      document.title = previous
    }
  }, [pageTitle])
}
