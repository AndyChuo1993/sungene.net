import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['zh', 'en', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']

function getDefaultLocaleByHost(host: string | null) {
  return 'en'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const defaultLocale = getDefaultLocaleByHost(host)

  // === 1. Static files, API, webhook — pass through immediately ===
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/webhook') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // === 2. Old WordPress query strings (/?post_type=product&p=X) → homepage ===
  const searchParams = request.nextUrl.searchParams
  if ((searchParams.has('post_type') || searchParams.has('p')) && pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url), 301)
  }

  // === 3. Detect current language from URL ===
  const matchLang = pathname.match(/^\/(zh|cn|en|fr|es|pt|ko|ja|ar|th|vi|de)(?:\/|$)/)
  const currentLang = matchLang ? matchLang[1] : defaultLocale

  // === 6. Normalize /zh/cn → /cn ===
  const normalizedPathname = pathname.replace(/^\/zh\/cn(?=\/|$)/, '/cn')
  if (normalizedPathname !== pathname) {
    return NextResponse.redirect(new URL(normalizedPathname, request.url))
  }

  // === 7. Add locale prefix if missing ===
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

  // === 8. Set x-lang header ===
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
