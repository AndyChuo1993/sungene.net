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

  // === 2. Old site 410 Gone (legacy product pages) ===
  const gonePatterns = ['/products', '/product', '/cooperation', '/news', '/category', '/tag', '/author']
  if (gonePatterns.some(pattern => pathname.startsWith(pattern))) {
    return new NextResponse(null, { status: 410 })
  }

  // === 3. Detect current language from URL ===
  const matchLang = pathname.match(/^\/(zh|cn|en|fr|es|pt|ko|ja|ar|th|vi|de)(?:\/|$)/)
  const currentLang = matchLang ? matchLang[1] : defaultLocale

  // === 4. 301 Redirects: ALL old non-machinery URLs → machinery homepage ===
  const redirectToHome = [
    '/buyer-database-building', '/buyers-list', '/distributor-network', '/linkedin-prospecting',
    '/market-entry-strategy', '/cold-email-outreach', '/distributor-list', '/export-marketing',
    '/overseas-buyer-lists', '/qualified-b2b-leads', '/case-studies', '/markets',
    '/pricing', '/partners', '/how-it-works', '/export-market-analysis', '/free-market-analysis',
    '/blog', '/faq',
  ]
  if (redirectToHome.some(page => pathname.includes(page))) {
    return NextResponse.redirect(new URL(`/${currentLang}`, request.url), 301)
  }

  // === 5. 301 Redirects: Old service pages → specific machinery pages ===
  const serviceRedirects: Record<string, string> = {
    '/services': '/machinery',
    '/services/export-lead-generation': '/machinery',
    '/services/distributor-development': '/machinery',
    '/services/export-sales-outsourcing': '/machinery',
    '/export-lead-generation': '/machinery',
    '/distributor-development': '/machinery',
    '/export-sales-outsourcing': '/machinery',
    '/b2b-lead-generation': '/machinery',
    '/sales-outsourcing': '/machinery',
    '/export-outsourcing': '/machinery',
    '/services/lead-generation': '/machinery',
    '/services/cold-outreach': '/machinery',
    '/services/sales-outsourcing': '/machinery',
    // Old generic → specific machinery pages
    '/export': '/machinery',
    '/packaging': '/machinery/packaging',
    '/solution': '/solutions',
    '/about-us': '/about',
    '/contact-us': '/contact',
  }

  // Check with and without lang prefix
  for (const [oldPath, newPath] of Object.entries(serviceRedirects)) {
    if (pathname === oldPath || pathname === `/${currentLang}${oldPath}`) {
      return NextResponse.redirect(new URL(`/${currentLang}${newPath}`, request.url), 301)
    }
  }

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
