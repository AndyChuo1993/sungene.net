import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ lang }: { lang: Lang }) {
  const links = [
    { href: `/${lang}`, label: t(lang, 'nav_home') },
    { href: `/${lang}/how-it-works`, label: t(lang, 'nav_process') },
    { href: `/${lang}/case-studies`, label: t(lang, 'nav_cases') },
    { href: `/${lang}/about`, label: t(lang, 'nav_about') },
    { href: `/${lang}/resources`, label: lang === 'zh' ? '外貿資源' : 'Export Resources' },
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
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/95 border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-black font-bold text-2xl flex items-center gap-2">
          <img src="/logo/sungene.png" alt="SunGene Logo" className="h-8 w-auto" />
          <span className="tracking-tight text-blue-900">SunGene</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <Link href={`/${lang}/services`} className="text-gray-600 font-medium hover:text-blue-900 transition text-sm uppercase tracking-wide">
              {t(lang, 'nav_services')}
            </Link>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full pt-3">
              <div className="w-80 rounded-lg border border-gray-200 bg-white shadow-lg p-2">
                {serviceLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-gray-600 font-medium hover:text-blue-900 transition text-sm uppercase tracking-wide">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} />
          <Link href={`/${lang}/free-market-analysis`} className="hidden md:inline-flex rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition shadow-sm">
            {t(lang, 'nav_free_analysis')}
          </Link>
        </div>
      </div>
    </header>
  )
}
