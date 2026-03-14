import Image from 'next/image'
import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ lang }: { lang: Lang }) {
  const links = [
    { href: `/${lang}/about`, label: t(lang, 'nav_about') },
    { href: `/${lang}/industries`, label: t(lang, 'nav_industries') },
    { href: `/${lang}/markets`, label: t(lang, 'nav_markets') },
    { href: `/${lang}/case-studies`, label: t(lang, 'nav_cases') },
    { href: `/${lang}/resources`, label: lang === 'zh' ? '外貿資源' : 'Export Resources' },
    { href: `/${lang}/blog`, label: lang === 'zh' ? '部落格' : 'Blog' },
    { href: `/${lang}/contact`, label: t(lang, 'nav_contact') },
  ]

  const serviceLinks = [
    {
      href: `/${lang}/services/export-lead-generation`,
      label: lang === 'zh' ? '外貿客戶開發' : 'Export Lead Generation',
    },
    {
      href: `/${lang}/services/distributor-development`,
      label: lang === 'zh' ? '經銷商開發' : 'Distributor Development',
    },
    {
      href: `/${lang}/services/export-sales-outsourcing`,
      label: lang === 'zh' ? '外貿業務外包' : 'Export Sales Outsourcing',
    },
  ]

  return (
    <>
      <a href="#page-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-blue-900 focus:px-4 focus:py-2 focus:text-white">
        {lang === 'zh' ? '跳到主要內容' : 'Skip to content'}
      </a>
      <header className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href={`/${lang}`} className="flex items-center gap-3 text-2xl font-bold text-black">
          <Image src="/logo/sungene.png" alt="SunGene Logo" width={32} height={32} className="h-8 w-auto" priority />
          <span className="tracking-tight text-blue-900">SunGene</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div className="group relative">
            <Link href={`/${lang}/services`} className="text-sm font-medium uppercase tracking-wide text-gray-600 transition hover:text-blue-900">
              {t(lang, 'nav_services')}
            </Link>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-80 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                {serviceLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-blue-900"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium uppercase tracking-wide text-gray-600 transition hover:text-blue-900">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher lang={lang} />
          <Link href={`/${lang}/export-market-analysis`} className="inline-flex rounded-sm bg-blue-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800">
            {t(lang, 'nav_free_analysis')}
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-3 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:text-blue-900">
            <span>{lang === 'zh' ? '選單' : 'Menu'}</span>
            <span className="text-xs text-gray-400 transition group-open:rotate-180">▾</span>
          </summary>
          <div className="absolute right-0 mt-3 w-[min(22rem,calc(100vw-3rem))] rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
              <LanguageSwitcher lang={lang} />
              <Link href={`/${lang}/export-market-analysis`} className="inline-flex rounded-sm bg-blue-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
                {t(lang, 'nav_free_analysis')}
              </Link>
            </div>

            <div className="space-y-2">
              <Link href={`/${lang}/services`} className="block rounded-md px-3 py-2 font-semibold text-gray-900 transition hover:bg-gray-50 hover:text-blue-900">
                {t(lang, 'nav_services')}
              </Link>
              <div className="grid gap-2 rounded-lg bg-gray-50 p-3">
                {serviceLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-white hover:text-blue-900">
                    {l.label}
                  </Link>
                ))}
              </div>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-md px-3 py-2 text-gray-700 transition hover:bg-gray-50 hover:text-blue-900">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
    </>
  )
}
