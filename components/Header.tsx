import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { t, Lang } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export default function Header({ lang }: { lang: Lang }) {
  const links = [
    { href: `/${lang}`, label: t(lang, 'nav_home') },
    { href: `/${lang}/machinery`, label: t(lang, 'nav_machinery') },
    { href: `/${lang}/industries`, label: t(lang, 'nav_industries') },
    { href: `/${lang}/solutions`, label: t(lang, 'nav_solutions') },
    { href: `/${lang}/resources`, label: t(lang, 'nav_resources') },
    { href: `/${lang}/about`, label: t(lang, 'nav_about') },
    { href: `/${lang}/contact`, label: t(lang, 'nav_contact') },
  ]

  const serviceLinks = [
    {
      href: `/${lang}/machinery/packaging`,
      label: t(lang, 'nav_machinery_packaging'),
    },
    {
      href: `/${lang}/machinery/food-processing`,
      label: t(lang, 'nav_machinery_food'),
    },
    {
      href: `/${lang}/machinery/filling-sealing`,
      label: t(lang, 'nav_machinery_filling'),
    },
    {
      href: `/${lang}/machinery/conveying-automation`,
      label: t(lang, 'nav_machinery_conveying'),
    },
    {
      href: `/${lang}/machinery/custom`,
      label: t(lang, 'nav_machinery_custom'),
    },
  ]

  return (
    <>
      <a href="#page-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-950 focus:px-4 focus:py-2 focus:text-white">
        {lang === 'en' ? 'Skip to content' : (lang === 'cn' ? '跳到主要内容' : '跳到主要內容')}
      </a>
      <header className="fixed top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 shadow-elev-1 backdrop-blur">
        <Container className="flex h-20 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-3 text-2xl font-bold text-black">
            <Image src="/logo/sungene.png" alt="SunGene Logo" width={32} height={32} className="h-8 w-auto" priority />
            <span className="tracking-tight text-brand-950">SunGene</span>
          </Link>

          <nav className="hidden items-center gap-4 xl:gap-8 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 transition hover:text-brand-950 whitespace-nowrap">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Suspense fallback={<span className="text-sm font-medium text-gray-600">{lang === 'en' ? '繁中' : '英'}</span>}>
              <LanguageSwitcher lang={lang} />
            </Suspense>
            <ButtonLink href={`/${lang}/contact`} size="sm">
              {t(lang, 'nav_free_analysis')}
            </ButtonLink>
          </div>

          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-3 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:text-brand-950">
              <span>{lang === 'en' ? 'Menu' : (lang === 'cn' ? '菜单' : '選單')}</span>
              <span className="text-xs text-gray-400 transition group-open:rotate-180">▾</span>
            </summary>
            <div className="absolute right-0 mt-3 w-[min(22rem,calc(100vw-3rem))] rounded-2xl border border-gray-200 bg-white p-4 shadow-elev-2">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <Suspense fallback={<span className="text-sm font-medium text-gray-600">{lang === 'en' ? '繁中' : '英'}</span>}>
                  <LanguageSwitcher lang={lang} />
                </Suspense>
                <ButtonLink href={`/${lang}/contact`} size="sm">
                  {t(lang, 'nav_free_analysis')}
                </ButtonLink>
              </div>

              <div className="space-y-2">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="block rounded-md px-3 py-2 text-gray-700 transition hover:bg-gray-50 hover:text-brand-950">
                    {l.label}
                  </Link>
                ))}
                <div className="mt-3 grid gap-2 rounded-lg bg-gray-50 p-3">
                  {serviceLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-white hover:text-brand-950">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </Container>
      </header>
    </>
  )
}
