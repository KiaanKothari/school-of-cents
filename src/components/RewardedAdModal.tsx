import { useState } from 'react'
import { rewardedAdProvider, REWARD_LABELS, type RewardKind } from '@/services/adService'
import { Button } from '@/components/ui/Button'

interface RewardedAdModalProps {
  open: boolean
  reward: RewardKind
  onClose: () => void
  onGranted: () => void
}

export function RewardedAdModal({ open, reward, onClose, onGranted }: RewardedAdModalProps) {
  const [status, setStatus] = useState<'idle' | 'playing' | 'granted'>('idle')

  if (!open) return null

  async function handleWatch() {
    setStatus('playing')
    const result = await rewardedAdProvider.show()
    if (result.granted) {
      setStatus('granted')
      onGranted()
    } else {
      setStatus('idle')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="animate-pop w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-lift">
        {status !== 'granted' && (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/20 text-3xl">🔒</div>
            <h3 className="font-display text-lg font-bold text-ink">Unlock {REWARD_LABELS[reward]}</h3>
            <p className="mt-2 text-sm text-ink-faint">
              Watch a short ad to unlock this bonus. Core lessons and quizzes are always free — this is optional extra content.
            </p>

            <div className="mt-4 rounded-xl border border-dashed border-brand-300 bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
              Rewarded Ad Placeholder — development mode. No real ad network is connected yet.
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <Button onClick={handleWatch} loading={status === 'playing'} className="w-full">
                {status === 'playing' ? 'Playing placeholder ad…' : 'Watch Ad'}
              </Button>
              <Button variant="ghost" onClick={onClose} className="w-full" disabled={status === 'playing'}>
                Not now
              </Button>
            </div>
          </>
        )}
        {status === 'granted' && (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-3xl">✅</div>
            <h3 className="font-display text-lg font-bold text-ink">Unlocked!</h3>
            <p className="mt-2 text-sm text-ink-faint">Enjoy your {REWARD_LABELS[reward].toLowerCase()}.</p>
            <Button onClick={onClose} className="mt-5 w-full">
              Continue
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
