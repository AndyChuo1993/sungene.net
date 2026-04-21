import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['zh', 'en', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']

function getDefaultLocaleByHost(host: string | null) {
  return 'en'
}

function inferMachineFromLegacyPath(path: string): string | null {
  const s = path.toLowerCase()
  if (s.includes('powder') || s.includes('auger') || s.includes('spice') || s.includes('flour') || s.includes('detergent')) return 'powder-filling-machine'
  if (s.includes('liquid') || s.includes('piston') || s.includes('pump') || s.includes('sauce') || s.includes('bottle') || s.includes('jar')) return 'liquid-filling-machine'
  if (
    s.includes('pouch') ||
    s.includes('vffs') ||
    s.includes('hffs') ||
    s.includes('flow-wrapper') ||
    s.includes('flowwrapper') ||
    s.includes('stick') ||
    s.includes('bag') ||
    s.includes('sachet')
  ) {
    return 'pouch-packing-machine'
  }
  if (s.includes('snack') || s.includes('fryer') || s.includes('roaster') || s.includes('chips') || s.includes('nuts') || s.includes('seasoning')) return 'snack-processing-line'
  if (s.includes('conveyor') || s.includes('elevator') || s.includes('automation') || s.includes('bucket') || s.includes('pallet')) return 'conveyor-system'
  return null
}

function inferLegacyDestination(restPath: string): string {
  const s = restPath.toLowerCase()
  const m = inferMachineFromLegacyPath(s)
  if (m) return `/machines/${m}`
  if (s.startsWith('/blog') || s.startsWith('/services') || s.startsWith('/service')) return '/sourcing'
  if (s.includes('analysis') || s.includes('report')) return '/resources'
  if (s.includes('service')) return '/sourcing'
  if (s.includes('custom') || s.includes('oem') || s.includes('odm')) return '/machinery/custom'
  if (s.includes('convey') || s.includes('automation') || s.includes('plc')) return '/machinery/conveying-automation'
  if (s.includes('food') || s.includes('processing') || s.includes('fryer') || s.includes('roaster')) return '/machinery/food-processing'
  if (s.includes('fill') || s.includes('sealing') || s.includes('cap') || s.includes('capping')) return '/machinery/filling-sealing'
  if (s.includes('pack') || s.includes('wrap') || s.includes('shrink') || s.includes('carton')) return '/machinery/packaging'
  return '/machinery'
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
    'source',
    'replytocom',
    'amp',
  ]
  return keys.some((k) => searchParams.has(k))
}

function isAllowedNoLocalePath(pathname: string) {
  return (
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/assessment' ||
    pathname === '/resources' ||
    pathname === '/markets' ||
    pathname === '/machinery' ||
    pathname === '/industries' ||
    pathname === '/solutions' ||
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

export function proxy(request: NextRequest) {
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

  const matchLang = pathname.match(/^\/(zh|cn|en|fr|es|pt|ko|ja|ar|th|vi|de)(?:\/|$)/)
  const currentLang = matchLang ? matchLang[1] : defaultLocale
  const restPath = matchLang ? pathname.replace(new RegExp(`^/${currentLang}(?=/|$)`), '') || '/' : pathname
  const shouldNoindexByParams = hasTrackingParams(searchParams)

  if (!matchLang) {
    const first = pathname.match(/^\/([^/]+)(?:\/|$)/)?.[1]
    if (first && /^[a-z]{2}$/i.test(first) && !locales.includes(first.toLowerCase())) {
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
    return NextResponse.redirect(new URL(`/${lang}/markets`, request.url), 308)
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
    return NextResponse.redirect(new URL(`/${lang}/resources/what-to-prepare-before-sourcing-assessment`, request.url), 308)
  }

  if (searchParams.has('post_type') || searchParams.has('p')) {
    const lang = currentLang || defaultLocale
    return NextResponse.redirect(new URL(`/${lang}/machinery`, request.url), 308)
  }

  if (
    restPath === '/pouch-packing-machine' ||
    restPath === '/powder-packaging-machine' ||
    restPath === '/powder-filling-machine' ||
    restPath === '/liquid-filling-machine' ||
    restPath === '/conveyor-system'
  ) {
    const lang = currentLang || defaultLocale
    const map: Record<string, string> = {
      '/pouch-packing-machine': '/machines/pouch-packing-machine',
      '/powder-packaging-machine': '/machines/powder-filling-machine',
      '/powder-filling-machine': '/machines/powder-filling-machine',
      '/liquid-filling-machine': '/machines/liquid-filling-machine',
      '/conveyor-system': '/machines/conveyor-system',
    }
    return NextResponse.redirect(new URL(`/${lang}${map[restPath]}`, request.url), 308)
  }

  if (
    (restPath === '/assessment' || restPath === '/contact') &&
    (searchParams.has('machine') || searchParams.has('product'))
  ) {
    const res = NextResponse.next()
    res.headers.set('X-Robots-Tag', 'noindex, follow')
    return res
  }

  if (
    (restPath === '/resources' && (searchParams.has('tab') || searchParams.has('category'))) ||
    (restPath === '/contact' && (searchParams.has('service') || searchParams.has('type')))
  ) {
    const res = NextResponse.next()
    res.headers.set('X-Robots-Tag', 'noindex, follow')
    return res
  }

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
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 308)
    }
    if (isAllowedNoLocalePath(pathname)) {
      return NextResponse.redirect(
        new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
        308
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
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
