import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['zh', 'en', 'cn']

function getDefaultLocaleByHost(host: string | null) {
  const hostname = (host || '').toLowerCase()

  if (hostname.includes('sungene.net')) {
    return 'en'
  }

  if (hostname.includes('sungenelite.com')) {
    return 'en'
  }

  return 'en'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const defaultLocale = getDefaultLocaleByHost(host)

  // 處理舊站 410 Gone (移除舊包裝盒網站殘留頁面)
  const gonePatterns = ['/products', '/product', '/cooperation', '/news', '/category', '/tag', '/author']
  if (gonePatterns.some(pattern => pathname.startsWith(pattern))) {
    return new NextResponse(null, { status: 410 })
  }

  // 處理舊站 301 Redirect
  if (pathname.startsWith('/about-us')) {
    return NextResponse.redirect(new URL(`/${defaultLocale}/about`, request.url), 301)
  }
  if (pathname.startsWith('/contact-us')) {
    return NextResponse.redirect(new URL(`/${defaultLocale}/contact`, request.url), 301)
  }

  // 合併與收斂頁面的 301 Redirect
  const matchLang = pathname.match(/^\/(zh|cn|en)\//)
  const currentLang = matchLang ? matchLang[1] : defaultLocale

  const oldPages = [
    '/buyer-database-building', '/buyers-list', '/distributor-network', '/linkedin-prospecting', 
    '/market-entry-strategy', '/cold-email-outreach', '/distributor-list', '/export-marketing', 
    '/overseas-buyer-lists', '/qualified-b2b-leads', '/services', '/case-studies', '/markets', 
    '/pricing', '/partners', '/faq', '/how-it-works', '/export-market-analysis', '/free-market-analysis', '/blog'
  ]

  if (oldPages.some(page => pathname.includes(page))) {
    return NextResponse.redirect(new URL(`/${currentLang}`, request.url), 301)
  }

  const normalizedPathname = pathname.replace(/^\/zh\/cn(?=\/|$)/, '/cn')
  if (normalizedPathname !== pathname) {
    return NextResponse.redirect(new URL(normalizedPathname, request.url))
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url))
    }

    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }

  const locale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const requestHeaders = new Headers(request.headers)
  if (locale) {
    requestHeaders.set('x-lang', locale)
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
