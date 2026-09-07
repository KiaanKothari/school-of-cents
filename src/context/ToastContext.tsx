import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

export interface ToastItem {
  id: number
  kind: 'xp' | 'badge' | 'streak' | 'info' | 'error'
  title: string
  detail?: string
  icon?: string
}

interface ToastContextValue {
  toasts: ToastItem[]
  push: (toast: Omit<ToastItem, 'id'>) => void
  dismiss: (id: number) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

let nextId = 1

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const push = useCallback(
    (toast: Omit<ToastItem, 'id'>) => {
      const id = nextId++
      setToasts((prev) => [...prev, { ...toast, id }])
      setTimeout(() => dismiss(id), 4200)
    },
    [dismiss],
  )

  return (
    <ToastContext.Provider value={{ toasts, push, dismiss }}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-2 px-4 sm:top-6">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="animate-pop pointer-events-auto flex items-center gap-3 rounded-2xl border border-brand-100 bg-white px-4 py-3 shadow-lift"
            role="status"
          >
            <span className="text-2xl leading-none">{t.icon ?? '🎉'}</span>
            <div>
              <p className="text-sm font-semibold text-ink">{t.title}</p>
              {t.detail && <p className="text-xs text-ink-faint">{t.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
