import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['zh', 'en', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']

function getDefaultLocaleByHost(host: string | null) {
  return 'en'
}

function inferMachineFromLegacyPath(path: string): string | null {
  const s = path.toLowerCase()
  if (s.includes('powder') || s.includes('auger') || s.includes('spice') || s.includes('flour')) return 'powder-filling-machine'
  if (s.includes('liquid') || s.includes('piston') || s.includes('pump') || s.includes('sauce')) return 'liquid-filling-machine'
  if (s.includes('pouch') || s.includes('vffs') || s.includes('hffs') || s.includes('bag') || s.includes('sachet')) return 'pouch-packing-machine'
  if (s.includes('snack') || s.includes('fryer') || s.includes('roaster') || s.includes('chips') || s.includes('nuts')) return 'snack-processing-line'
  if (s.includes('conveyor') || s.includes('elevator') || s.includes('automation') || s.includes('bucket')) return 'conveyor-system'
  return null
}

function plain(status: number, body: string) {
  return new NextResponse(body, {
    status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
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
    return NextResponse.redirect(new URL('/en', request.url), 308)
  }

  // === 3. Detect current language from URL ===
  const matchLang = pathname.match(/^\/(zh|cn|en|fr|es|pt|ko|ja|ar|th|vi|de)(?:\/|$)/)
  const currentLang = matchLang ? matchLang[1] : defaultLocale
  const restPath = matchLang ? pathname.replace(new RegExp(`^/${currentLang}(?=/|$)`), '') || '/' : pathname

  // === 4. Handle legacy / WordPress / bot paths (avoid polluting indexing signals) ===
  const legacy410Prefixes = [
    '/wp-admin',
    '/wp-content',
    '/wp-includes',
    '/wp-json',
    '/xmlrpc.php',
    '/wp-login.php',
    '/sitemap_index.xml',
    '/feed',
    '/rss',
    '/my-account',
    '/login',
    '/cart',
    '/checkout',
  ]
  if (legacy410Prefixes.some((p) => restPath === p || restPath.startsWith(`${p}/`))) {
    return plain(410, 'Gone')
  }

  const legacyRedirectPrefixes = [
    '/products',
    '/product',
    '/product-category',
    '/category',
    '/tag',
    '/blog',
    '/services',
    '/service',
    '/export-market-analysis',
    '/market-analysis',
    '/report',
    '/reports',
  ]
  const matchedLegacy = legacyRedirectPrefixes.find((p) => restPath === p || restPath.startsWith(`${p}/`))
  if (matchedLegacy) {
    const lang = currentLang || defaultLocale
    const inferred = inferMachineFromLegacyPath(restPath)
    const targetPath = inferred
      ? `/${lang}/machines/${inferred}`
      : restPath.includes('analysis') || restPath.includes('report') || restPath.includes('service')
        ? `/${lang}/solutions`
        : `/${lang}/machinery`
    return NextResponse.redirect(new URL(targetPath, request.url), 308)
  }

  // === 6. Normalize /zh/cn → /cn ===
  const normalizedPathname = pathname.replace(/^\/zh\/cn(?=\/|$)/, '/cn')
  if (normalizedPathname !== pathname) {
    return NextResponse.redirect(new URL(normalizedPathname, request.url), 308)
  }

  // === 7. Add locale prefix if missing ===
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 308)
    }
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
      308
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
