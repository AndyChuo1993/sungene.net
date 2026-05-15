import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'zh', 'cn', 'fr', 'es']
// Locales we used to serve (2026-04) but are dropping in favour of redirecting
// to /en. Kept here so the middleware can issue clean 308s instead of 404s.
const droppedLocales = ['pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']

function getDefaultLocaleByHost(host: string | null) {
  return 'en'
}


function inferLegacyDestination(restPath: string): string {
  const s = restPath.toLowerCase()
  if (s.startsWith('/blog') || s.startsWith('/services') || s.startsWith('/service')) return '/sourcing'
  if (s.includes('analysis') || s.includes('report')) return '/resources'
  if (s.includes('home') || s.includes('kitchen') || s.includes('houseware')) return '/sourcing/home'
  if (s.includes('garden') || s.includes('outdoor') || s.includes('planter')) return '/sourcing/garden'
  if (s.includes('beauty') || s.includes('cosmetic') || s.includes('skincare')) return '/sourcing/beauty'
  if (s.includes('pack') || s.includes('box') || s.includes('carton') || s.includes('pouch') || s.includes('mailer')) return '/sourcing/packaging'
  return '/sourcing'
}

function plain(status: number, body: string) {
  return new NextResponse(body, {
    status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

function hasTrackingParams(searchParams: URLSearchParams) {
  for (const [k] of searchParams.entries()) {
    if (k.startsWith('utm_')) return true
  }
  // Note: omit bare `source=` - internal CTAs use it (e.g. /assessment?source=sourcing).
  const keys = [
    'gclid',
    'fbclid',
    'msclkid',
    'wbraid',
    'gbraid',
    'gclsrc',
    'gad_source',
    '_ga',
    '_gl',
    'yclid',
    'igshid',
    'mkt_tok',
    'mc_cid',
    'mc_eid',
    'icid',
    'cmpid',
    'q',
    's',
    'ref',
    'replytocom',
    'amp',
  ]
  return keys.some((k) => searchParams.has(k))
}

function isAllowedNoLocalePath(pathname: string) {
  return (
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/resources' ||
    pathname === '/sourcing'
  )
}

function should410NoLocalePath(pathname: string) {
  return (
    pathname.startsWith('/wp-') ||
    pathname.startsWith('/wp-admin') ||
    pathname.startsWith('/wp-content') ||
    pathname.startsWith('/wp-includes') ||
    pathname.startsWith('/wp-json') ||
    pathname.startsWith('/product') ||
    pathname.startsWith('/products') ||
    pathname.startsWith('/product-category') ||
    pathname.startsWith('/category') ||
    pathname.startsWith('/tag') ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/services') ||
    pathname.startsWith('/service') ||
    pathname.startsWith('/export-market-analysis') ||
    pathname.startsWith('/market-analysis') ||
    pathname.startsWith('/report') ||
    pathname.startsWith('/reports') ||
    pathname.startsWith('/cart') ||
    pathname.startsWith('/checkout') ||
    pathname.startsWith('/my-account') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/lost-password') ||
    pathname.startsWith('/feed') ||
    pathname.startsWith('/rss') ||
    pathname.startsWith('/xmlrpc.php') ||
    pathname.startsWith('/sitemap_index.xml') ||
    pathname.startsWith('/products-2') ||
    pathname.includes('__trashed')
  )
}

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const defaultLocale = getDefaultLocaleByHost(host)

  if (pathname.includes('[lang]')) {
    return plain(410, 'Gone')
  }

  if (pathname.includes('__trashed')) {
    return plain(410, 'Gone')
  }

  if (/^\/[&$]$/.test(pathname)) {
    return plain(410, 'Gone')
  }

  const legacyDotBlocklist = [
    '/xmlrpc.php',
    '/wp-login.php',
    '/wp-cron.php',
    '/sitemap_index.xml',
  ]
  const pathnameSansLang = pathname.replace(/^\/(zh|cn|en|fr|es|pt|ko|ja|ar|th|vi|de)(?=\/)/, '')
  if (
    legacyDotBlocklist.includes(pathnameSansLang) ||
    pathnameSansLang.startsWith('/wp-admin') ||
    pathnameSansLang.startsWith('/wp-content') ||
    pathnameSansLang.startsWith('/wp-includes') ||
    pathnameSansLang.startsWith('/wp-json')
  ) {
    return plain(410, 'Gone')
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/webhook') ||
    pathname.startsWith('/management') ||
    pathname.startsWith('/case-studies') ||
    pathname === '/og-image' ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  if (pathname.includes('//')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(/\/{2,}/g, '/')
    return NextResponse.redirect(url, 308)
  }

  if (/[A-Z]/.test(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.toLowerCase()
    return NextResponse.redirect(url, 308)
  }

  if (pathname.length > 1 && pathname.endsWith('/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 308)
  }

  const searchParams = request.nextUrl.searchParams
  if (
    searchParams.has('add-to-cart') ||
    searchParams.has('add_to_cart') ||
    searchParams.has('wc-ajax') ||
    searchParams.has('page_id') ||
    searchParams.has('product_id')
  ) {
    return plain(410, 'Gone')
  }

  if ((searchParams.has('post_type') || searchParams.has('p')) && pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url), 308)
  }

  // Dropped locales (pt/ko/ja/ar/th/vi/de) → 308 redirect to /en equivalent.
  // We do this early so we never run the per-page handlers for those URLs.
  const droppedLangMatch = pathname.match(/^\/(pt|ko|ja|ar|th|vi|de)(\/.*)?$/)
  if (droppedLangMatch) {
    const rest = droppedLangMatch[2] || ''
    return NextResponse.redirect(new URL(`/en${rest}`, request.url), 308)
  }

  const matchLang = pathname.match(/^\/(en|zh|cn|fr|es)(?:\/|$)/)
  const currentLang = matchLang ? matchLang[1] : defaultLocale
  const restPath = matchLang ? pathname.replace(new RegExp(`^/${currentLang}(?=/|$)`), '') || '/' : pathname
  const shouldNoindexByParams = hasTrackingParams(searchParams)

  if (!matchLang) {
    const first = pathname.match(/^\/([^/]+)(?:\/|$)/)?.[1]
    if (first && /^[a-z]{2}$/i.test(first) && !locales.includes(first.toLowerCase()) && !droppedLocales.includes(first.toLowerCase())) {
      return plain(404, 'Not Found')
    }
    if (pathname !== '/' && !isAllowedNoLocalePath(pathname)) {
      return should410NoLocalePath(pathname) ? plain(410, 'Gone') : plain(404, 'Not Found')
    }
  }

  if (restPath === '/feed' || restPath.endsWith('/feed') || restPath === '/rss' || restPath.endsWith('/rss')) {
    return plain(410, 'Gone')
  }

  if (matchLang && restPath.startsWith('/case-studies')) {
    return NextResponse.redirect(new URL(restPath, request.url), 308)
  }

  if (
    restPath === '/about-us' ||
    restPath === '/company' ||
    restPath === '/contact-us'
  ) {
    const lang = currentLang || defaultLocale
    const map: Record<string, string> = {
      '/about-us': '/about',
      '/company': '/about',
      '/contact-us': '/contact',
    }
    return NextResponse.redirect(new URL(`/${lang}${map[restPath]}`, request.url), 308)
  }

  if (
    restPath === '/markets/europe' ||
    restPath === '/markets/middle-east' ||
    restPath === '/markets/southeast-asia' ||
    restPath === '/markets/americas' ||
    restPath === '/markets/africa' ||
    restPath === '/markets/east-asia' ||
    restPath === '/markets/south-asia'
  ) {
    const lang = currentLang || defaultLocale
    return NextResponse.redirect(new URL(`/${lang}/sourcing`, request.url), 308)
  }

  if (
    restPath === '/buyer-database-building' ||
    restPath === '/linkedin-prospecting' ||
    restPath === '/cold-email-outreach' ||
    restPath === '/overseas-buyer-lists' ||
    restPath === '/distributor-list' ||
    restPath === '/qualified-b2b-leads' ||
    restPath === '/export-marketing'
  ) {
    const lang = currentLang || defaultLocale
    return NextResponse.redirect(new URL(`/${lang}/sourcing`, request.url), 308)
  }

  if (restPath === '/resources/what-to-prepare-before-machine-quote') {
    const lang = currentLang || defaultLocale
    // Target slug was never built — go straight to the resources index.
    return NextResponse.redirect(new URL(`/${lang}/resources`, request.url), 308)
  }

  if (searchParams.has('post_type') || searchParams.has('p')) {
    const lang = currentLang || defaultLocale
    return NextResponse.redirect(new URL(`/${lang}/sourcing`, request.url), 308)
  }

  if (
    restPath === '/pouch-packing-machine' ||
    restPath === '/powder-packaging-machine' ||
    restPath === '/powder-filling-machine' ||
    restPath === '/liquid-filling-machine' ||
    restPath === '/conveyor-system'
  ) {
    const lang = currentLang || defaultLocale
    return NextResponse.redirect(new URL(`/${lang}/sourcing/packaging`, request.url), 308)
  }

  // Query variants (e.g. /contact?service=…) use page-level canonical URLs without
  // search params (see generateMetadata + buildAlternates). Do not also send
  // X-Robots-Tag: noindex — that duplicates the signal and surfaces as separate
  // “Excluded by noindex” rows in Search Console while canonical already excludes duplicates.

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
    '/lost-password',
    '/products-2',
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
    const suffix = inferLegacyDestination(restPath)
    return NextResponse.redirect(new URL(`/${lang}${suffix}`, request.url), 308)
  }

  const normalizedPathname = pathname.replace(/^\/zh\/cn(?=\/|$)/, '/cn')
  if (normalizedPathname !== pathname) {
    return NextResponse.redirect(new URL(normalizedPathname, request.url), 308)
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    if (pathname === '/') {
      // Use 307 (temporary) so browsers don't cache the locale choice permanently.
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 307)
    }
    if (isAllowedNoLocalePath(pathname)) {
      return NextResponse.redirect(
        new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
        307
      )
    }
    return plain(404, 'Not Found')
  }

  const locale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const requestHeaders = new Headers(request.headers)
  if (locale) {
    requestHeaders.set('x-lang', locale)
  }

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  if (shouldNoindexByParams) {
    res.headers.set('X-Robots-Tag', 'noindex, follow')
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|ai.txt|site.webmanifest|manifest.json|.well-known|logo/|og/|banner/|partner/|photo-real/|illustrations/|templates/|grid.svg|whatsapp-qr.png|googlea3301176ef1c8c54.html|bc92b7ac1caf40b3addfb82892e2ba78.txt).*)'],
}
