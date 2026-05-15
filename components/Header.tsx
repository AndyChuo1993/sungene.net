import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { t, Lang } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export default function Header({ lang }: { lang: Lang }) {
  const sourcingScopeLabel = ({
    en: 'What we source',
    zh: '採購品類',
    cn: '采购品类',
    fr: 'Catégories',
    es: 'Categorías',
  } as Record<string, string>)[lang] || 'What we source'

  const howWeWorkLabel = ({
    en: 'How we work',
    zh: '合作方式',
    cn: '合作方式',
    fr: 'Notre méthode',
    es: 'Cómo trabajamos',
  } as Record<string, string>)[lang] || 'How we work'

  // Trimmed nav focused on 4 sourcing categories.
  // and Assessment from main nav (Assessment is still the orange CTA button).
  // /sourcing covers both "how we work" and "what we source" under the new positioning.
  const links = [
    { href: `/${lang}`, label: t(lang, 'nav_home') },
    { href: `/${lang}/sourcing`, label: howWeWorkLabel },
    { href: `/${lang}/resources`, label: t(lang, 'nav_resources') },
    { href: `/${lang}/about`, label: t(lang, 'nav_about') },
    { href: `/${lang}/contact`, label: t(lang, 'nav_contact') },
  ]

  // Mobile menu category links.
  const serviceLinks = [
    { href: `/${lang}/sourcing#packaging`, label: ({ en: 'Packaging', zh: '包裝', cn: '包装', fr: 'Emballage', es: 'Empaque' } as Record<string, string>)[lang] || 'Packaging' },
    { href: `/${lang}/sourcing#home`, label: ({ en: 'Home goods', zh: '家居用品', cn: '家居用品', fr: 'Maison', es: 'Hogar' } as Record<string, string>)[lang] || 'Home goods' },
    { href: `/${lang}/sourcing#garden`, label: ({ en: 'Garden & outdoor', zh: '園藝戶外', cn: '园艺户外', fr: 'Jardin & extérieur', es: 'Jardín y exterior' } as Record<string, string>)[lang] || 'Garden & outdoor' },
    { href: `/${lang}/sourcing#beauty`, label: ({ en: 'Beauty containers', zh: '美容容器', cn: '美容容器', fr: 'Flaconnage', es: 'Envase cosmético' } as Record<string, string>)[lang] || 'Beauty containers' },
  ]

  return (
    <>
      <a href="#page-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-950 focus:px-4 focus:py-2 focus:text-white">
        {({en: 'Skip to content', cn: '跳到主要内容', zh: '跳到主要內容', fr: 'Aller au contenu', es: 'Ir al contenido', pt: 'Pular para o conteúdo', ko: '본문으로 건너뛰기', ja: 'コンテンツにスキップ', ar: 'انتقل إلى المحتوى', th: 'ข้ามไปยังเนื้อหา', vi: 'Chuyển đến nội dung', de: 'Zum Inhalt springen' } as Record<string,string>)[lang] || 'Skip to content'}
      </a>

      {/* Top bar */}
      <div className="hidden bg-brand-950 text-gray-300 lg:block">
        <Container className="flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              contact@sungene.net
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              +886 4-3703-2705
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>{({en: 'Taichung, Taiwan', cn: '台湾台中', zh: '台灣台中', fr: 'Taichung, Taïwan', es: 'Taichung, Taiwán', pt: 'Taichung, Taiwan', ko: '타이중, 대만', ja: '台中、台湾', ar: 'تايتشونغ، تايوان', th: 'ไทจง, ไต้หวัน', vi: 'Đài Trung, Đài Loan', de: 'Taichung, Taiwan' } as Record<string,string>)[lang] || 'Taichung, Taiwan'}</span>
            <span>|</span>
            <span>{({en: 'Mon-Fri 9:00-18:00', cn: '周一至周五 9:00-18:00', zh: '週一至週五 9:00-18:00', fr: 'Lun-Ven 9h00-18h00', es: 'Lun-Vie 9:00-18:00', pt: 'Seg-Sex 9:00-18:00', ko: '월-금 9:00-18:00', ja: '月〜金 9:00-18:00', ar: 'الإثنين-الجمعة 9:00-18:00', th: 'จันทร์-ศุกร์ 9:00-18:00', vi: 'Thứ 2-6 9:00-18:00', de: 'Mo-Fr 9:00-18:00' } as Record<string,string>)[lang] || 'Mon-Fri 9:00-18:00'}</span>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-brand-800/40 bg-white/95 shadow-elev-1 backdrop-blur">
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <Image src="/logo/sungene.png" alt="SunGene" width={36} height={36} className="h-9 w-auto" priority />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-brand-950 leading-tight">SunGene</span>
              <span className="hidden text-[10px] font-medium uppercase tracking-widest text-gray-400 xl:block">Taichung · Xiamen</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-brand-950 whitespace-nowrap">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Suspense fallback={<div className="h-9 w-28 rounded-lg bg-gray-100 animate-pulse" />}>
              <LanguageSwitcher lang={lang} />
            </Suspense>
            <ButtonLink href={`/${lang}/contact`} size="sm" className="bg-accent-600 text-white shadow-md shadow-accent-700/25 hover:bg-accent-700">
              {t(lang, 'nav_free_analysis')}
            </ButtonLink>
          </div>

          <MobileMenu
            lang={lang}
            links={links}
            serviceLinks={serviceLinks}
            ctaLabel={t(lang, 'nav_free_analysis')}
            categoryLabel={sourcingScopeLabel}
          />
        </Container>
      </header>
    </>
  )
}
