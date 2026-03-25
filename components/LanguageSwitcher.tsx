'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Lang } from '@/lib/i18n'

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '繁體中文', flag: '🇹🇼' },
  { code: 'cn', label: '简体中文', flag: '🇨🇳' },
] as const

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find(l => l.code === lang) || languages[0]

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const switchLang = (targetLang: string) => {
    if (!pathname) return
    const segments = pathname.split('/').filter(Boolean)
    const knownLangs = ['en', 'zh', 'cn']
    let newPath = pathname
    if (knownLangs.includes(segments[0])) {
      segments[0] = targetLang
      newPath = '/' + segments.join('/')
    } else {
      newPath = `/${targetLang}${pathname}`
    }
    const query = searchParams?.toString()
    router.push(query ? `${newPath}?${query}` : newPath)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span>{current.label}</span>
        <svg className={`h-3 w-3 text-gray-400 transition ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 rounded-xl border border-gray-200 bg-white py-1 shadow-elev-2" role="listbox">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLang(l.code)}
              role="option"
              aria-selected={l.code === lang}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition hover:bg-gray-50 ${l.code === lang ? 'bg-brand-50 font-semibold text-brand-900' : 'text-gray-700'}`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
              {l.code === lang && (
                <svg className="ml-auto h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
