'use client'
import { useEffect, useMemo } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

function guessPageType(pathname: string) {
  if (pathname === '/' || pathname === '/en' || pathname === '/zh' || pathname === '/cn') return 'home'
  if (pathname.includes('/quote')) return 'quote'
  if (pathname.includes('/sourcing')) return 'sourcing'
  if (pathname.includes('/resources')) return 'resource'
  if (pathname.includes('/machines')) return 'machine'
  if (pathname.includes('/assessment')) return 'recommend'
  if (pathname.includes('/contact')) return 'contact'
  return 'page'
}

export default function PageViewTracker({ lang }: { lang: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const fullPath = useMemo(() => {
    const q = searchParams?.toString()
    return q ? `${pathname}?${q}` : pathname
  }, [pathname, searchParams])

  useEffect(() => {
    if (!pathname) return
    trackPageView({ page_type: guessPageType(pathname), lang })
  }, [fullPath, pathname, lang])

  return null
}
