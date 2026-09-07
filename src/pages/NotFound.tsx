import { Layout } from '@/components/layout/Layout'
import { LinkButton } from '@/components/ui/Button'
import { useDocumentTitle } from '@/utils/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Page Not Found')
  return (
    <Layout>
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="text-5xl">🧭</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-2 text-ink-faint">The page you're looking for doesn't exist or may have moved.</p>
        <LinkButton to="/" className="mt-6">
          Back to Home
        </LinkButton>
      </div>
    </Layout>
  )
}
