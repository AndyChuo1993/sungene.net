import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ lang }: { lang: Lang }) {
  const links = [
    { href: `/${lang}`, label: t(lang, 'nav_home') },
    { href: `/${lang}/services`, label: t(lang, 'nav_services') },
    { href: `/${lang}/industries`, label: t(lang, 'nav_industries') },
    { href: `/${lang}/markets`, label: t(lang, 'nav_markets') },
    { href: `/${lang}/how-it-works`, label: t(lang, 'nav_process') },
    { href: `/${lang}/case-studies`, label: t(lang, 'nav_cases') },
    { href: `/${lang}/about`, label: t(lang, 'nav_about') },
    { href: `/${lang}/resources`, label: lang === 'zh' ? '資源中心' : 'Resources' },
    { href: `/${lang}/blog`, label: t(lang, 'nav_blog') },
    { href: `/${lang}/contact`, label: t(lang, 'nav_contact') },
  ]
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/95 border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-black font-bold text-2xl flex items-center gap-2">
          {/* Logo Placeholder - The user asked to put logo before SunGene */}
          <img src="/logo/sungene.png" alt="SunGene Logo" className="h-8 w-auto" />
          <span className="tracking-tight text-blue-900">SunGene</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
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
