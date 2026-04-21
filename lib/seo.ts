import type { Metadata } from 'next'
import { ALL_LANGS, Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'

export const LANG_META: Record<Lang, { htmlLang: string; hrefLang: string; ogLocale: string; dir: 'ltr' | 'rtl' }> = {
  en: { htmlLang: 'en', hrefLang: 'en', ogLocale: 'en_US', dir: 'ltr' },
  zh: { htmlLang: 'zh-Hant', hrefLang: 'zh-TW', ogLocale: 'zh_TW', dir: 'ltr' },
  cn: { htmlLang: 'zh-Hans', hrefLang: 'zh-CN', ogLocale: 'zh_CN', dir: 'ltr' },
  fr: { htmlLang: 'fr', hrefLang: 'fr', ogLocale: 'fr_FR', dir: 'ltr' },
  es: { htmlLang: 'es', hrefLang: 'es', ogLocale: 'es_ES', dir: 'ltr' },
  pt: { htmlLang: 'pt', hrefLang: 'pt', ogLocale: 'pt_PT', dir: 'ltr' },
  ko: { htmlLang: 'ko', hrefLang: 'ko', ogLocale: 'ko_KR', dir: 'ltr' },
  ja: { htmlLang: 'ja', hrefLang: 'ja', ogLocale: 'ja_JP', dir: 'ltr' },
  ar: { htmlLang: 'ar', hrefLang: 'ar', ogLocale: 'ar_AR', dir: 'rtl' },
  th: { htmlLang: 'th', hrefLang: 'th', ogLocale: 'th_TH', dir: 'ltr' },
  vi: { htmlLang: 'vi', hrefLang: 'vi', ogLocale: 'vi_VN', dir: 'ltr' },
  de: { htmlLang: 'de', hrefLang: 'de', ogLocale: 'de_DE', dir: 'ltr' },
}

export const BREADCRUMB_LABELS: Record<Lang, { home: string; machinery: string }> = {
  en: { home: 'Home', machinery: 'Sourcing Scope' },
  zh: { home: '首頁', machinery: '採購範圍' },
  cn: { home: '首页', machinery: '采购范围' },
  fr: { home: 'Accueil', machinery: 'Périmètre sourcing' },
  es: { home: 'Inicio', machinery: 'Alcance de abastecimiento' },
  pt: { home: 'Início', machinery: 'Escopo de sourcing' },
  ko: { home: '홈', machinery: '소싱 범위' },
  ja: { home: 'ホーム', machinery: '調達範囲' },
  ar: { home: 'الرئيسية', machinery: 'نطاق التوريد' },
  th: { home: 'หน้าแรก', machinery: 'ขอบเขตการจัดหา' },
  vi: { home: 'Trang chủ', machinery: 'Phạm vi sourcing' },
  de: { home: 'Startseite', machinery: 'Sourcing-Bereich' },
}

export function normalizeLang(raw: string | undefined | null): Lang {
  if (!raw) return 'en'
  return (ALL_LANGS.includes(raw as Lang) ? raw : 'en') as Lang
}

function normalizePath(pathname: string) {
  if (!pathname) return '/'
  if (pathname === '/') return '/'
  return pathname.startsWith('/') ? pathname : `/${pathname}`
}

export function pageUrl(lang: Lang, pathname: string) {
  const p = normalizePath(pathname)
  if (p === '/') return `${SITE_URL}/${lang}`
  return `${SITE_URL}/${lang}${p}`
}

export function buildAlternates(lang: Lang, pathname: string): NonNullable<Metadata['alternates']> {
  const p = normalizePath(pathname)
  const languages = Object.fromEntries(
    ALL_LANGS.map((lg) => [LANG_META[lg].hrefLang, pageUrl(lg, p)])
  ) as Record<string, string>
  languages['x-default'] = pageUrl('en', p)

  return {
    canonical: pageUrl(lang, p),
    languages,
  }
}

export function buildOpenGraph(opts: {
  lang: Lang
  title: string
  description: string
  pathname: string
  type?: 'website' | 'article'
  imageUrl?: string
}) {
  const imageUrl = opts.imageUrl ?? buildOgImageUrl({ lang: opts.lang, title: opts.title, description: opts.description, pathname: opts.pathname })
  return {
    title: opts.title,
    description: opts.description,
    url: pageUrl(opts.lang, opts.pathname),
    siteName: 'SunGene',
    images: [{ url: imageUrl, width: 1200, height: 630 }],
    type: opts.type ?? 'website',
    locale: LANG_META[opts.lang].ogLocale,
    alternateLocale: ALL_LANGS.filter(l => l !== opts.lang).map(l => LANG_META[l].ogLocale),
  } satisfies NonNullable<Metadata['openGraph']>
}

export function buildTwitter(opts: { lang: Lang; title: string; description: string; pathname: string; imageUrl?: string }) {
  const imageUrl = opts.imageUrl ?? buildOgImageUrl({ lang: opts.lang, title: opts.title, description: opts.description, pathname: opts.pathname })
  return {
    card: 'summary_large_image',
    title: opts.title,
    description: opts.description,
    images: [imageUrl],
  } satisfies NonNullable<Metadata['twitter']>
}

function buildOgImageUrl(opts: { lang: Lang; title: string; description: string; pathname: string }) {
  const u = new URL(`${SITE_URL}/og-image`)
  u.searchParams.set('lang', opts.lang)
  u.searchParams.set('title', (opts.title || '').slice(0, 90))
  u.searchParams.set('desc', (opts.description || '').slice(0, 180))
  u.searchParams.set('path', (opts.pathname || '').slice(0, 120))
  return u.toString()
}

export function buildRobots() {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  } satisfies NonNullable<Metadata['robots']>
}

export function buildPageMetadata(opts: {
  lang: Lang
  title: string
  description: string
  pathname: string
  keywords?: string[]
  type?: 'website' | 'article'
  imageUrl?: string
}): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: buildAlternates(opts.lang, opts.pathname),
    openGraph: buildOpenGraph({
      lang: opts.lang,
      title: opts.title,
      description: opts.description,
      pathname: opts.pathname,
      type: opts.type,
      imageUrl: opts.imageUrl,
    }),
    twitter: buildTwitter({ lang: opts.lang, title: opts.title, description: opts.description, pathname: opts.pathname, imageUrl: opts.imageUrl }),
    robots: buildRobots(),
  }
}
