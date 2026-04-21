'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function CopyBlock({
  title,
  text,
  copiedLabel = 'Copied',
  copyLabel = 'Copy',
}: {
  title: string
  text: string
  copiedLabel?: string
  copyLabel?: string
}) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle')

  const canCopy = useMemo(() => typeof navigator !== 'undefined' && !!navigator.clipboard?.writeText, [])

  async function onCopy() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard not available')
      await navigator.clipboard.writeText(text)
      setState('copied')
      window.setTimeout(() => setState('idle'), 1600)
    } catch {
      setState('error')
      window.setTimeout(() => setState('idle'), 1600)
    }
  }

  return (
    <div className="not-prose rounded-2xl border border-gray-200 bg-gray-50 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm font-bold text-gray-950">{title}</div>
        <Button
          type="button"
          size="sm"
          variant="secondary"
          onClick={onCopy}
          disabled={!canCopy || state === 'copied'}
        >
          {state === 'copied' ? copiedLabel : copyLabel}
        </Button>
      </div>
      <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-gray-950 p-4 text-[12px] leading-relaxed text-white/85">
        {text}
      </pre>
      {state === 'error' ? (
        <div className="mt-3 text-xs font-semibold text-red-700">
          {typeof navigator !== 'undefined' ? 'Copy failed. Please select and copy manually.' : 'Copy is unavailable.'}
        </div>
      ) : null}
    </div>
  )
}

