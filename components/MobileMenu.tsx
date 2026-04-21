'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { ButtonLink } from './ui/Button'
import { Lang } from '@/lib/i18n'

export default function MobileMenu({
  lang,
  links,
  serviceLinks,
  ctaLabel,
  machineryLabel,
}: {
  lang: Lang
  links: { href: string; label: string }[]
  serviceLinks: { href: string; label: string }[]
  ctaLabel: string
  machineryLabel: string
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false)
  }, [pathname])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative lg:hidden" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Open navigation menu"
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 p-2.5 text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-[min(22rem,calc(100vw-3rem))] rounded-2xl border border-gray-200 bg-white p-4 shadow-elev-2 z-50">
          <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
            <Suspense fallback={<div className="h-9 w-28 rounded-lg bg-gray-100 animate-pulse" />}>
              <LanguageSwitcher lang={lang} />
            </Suspense>
            <ButtonLink href={`/${lang}/assessment`} size="sm" onClick={() => setOpen(false)}>
              {ctaLabel}
            </ButtonLink>
          </div>

          <div className="space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-gray-700 transition hover:bg-gray-50 hover:text-brand-950"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-1 rounded-xl bg-gray-50 p-3">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-400">{machineryLabel}</div>
              {serviceLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-white hover:text-brand-950"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
