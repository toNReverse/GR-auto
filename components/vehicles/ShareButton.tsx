'use client'

import { useState } from 'react'
import { Share2, Check } from 'lucide-react'

export function ShareButton({
  title,
  text,
}: {
  title: string
  text?: string
}) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    const data: ShareData = { title, text: text ?? title, url }
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(data)
        return
      } catch {
        // user cancelled or share failed: fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard not available
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 rounded-md border border-ink-200 bg-white px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-ink-900"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
          Link copiato
        </>
      ) : (
        <>
          <Share2 className="h-3.5 w-3.5" aria-hidden />
          Condividi
        </>
      )}
    </button>
  )
}
