import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('School of Cents crashed:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
          <span className="text-4xl">⚠️</span>
          <h1 className="mt-4 font-display text-xl font-bold text-ink">Something went wrong</h1>
          <p className="mt-2 max-w-sm text-sm text-ink-faint">
            An unexpected error stopped this page from loading. Try refreshing — if it keeps happening, let us know what
            you were doing.
          </p>
          <button
            onClick={() => window.location.assign('/')}
            className="mt-6 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Back to Home
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
