import Link from 'next/link'
import Image from 'next/image'
import { t, Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function Footer({ lang }: { lang: Lang }) {
  const machineryLinks = [
    { href: `/${lang}/machinery/packaging`, label: t(lang, 'nav_machinery_packaging') },
    { href: `/${lang}/machinery/food-processing`, label: t(lang, 'nav_machinery_food') },
    { href: `/${lang}/machinery/filling-sealing`, label: t(lang, 'nav_machinery_filling') },
    { href: `/${lang}/machinery/conveying-automation`, label: t(lang, 'nav_machinery_conveying') },
    { href: `/${lang}/machinery/custom`, label: t(lang, 'nav_machinery_custom') },
  ]

  const solutionLinks = [
    { href: `/${lang}/solutions#single`, label: t(lang, 'nav_sol_single') },
    { href: `/${lang}/solutions#semi`, label: t(lang, 'nav_sol_semi') },
    { href: `/${lang}/solutions#line`, label: t(lang, 'nav_sol_line') },
    { href: `/${lang}/solutions#export`, label: t(lang, 'nav_sol_export') },
  ]

  return (
    <footer className="bg-brand-950 text-white">
      {/* Main footer */}
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-3">
              <Image src="/logo/sungene.png" alt="SunGene Logo" width={32} height={32} className="h-8 w-auto brightness-200" />
              <div>
                <span className="text-xl font-bold">SunGene</span>
                <span className="ml-2 text-xs font-medium uppercase tracking-widest text-gray-400">Machinery</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              {lang === 'en'
                ? 'Leading manufacturer and exporter of packaging machinery, food processing equipment, and industrial automation systems from Taiwan.'
                : lang === 'cn'
                ? '台湾领先的包装机械、食品加工设备和工业自动化系统制造商与出口商。'
                : '台灣領先的包裝機械、食品加工設備和工業自動化系統製造商與出口商。'}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300">CE</div>
              <div className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300">ISO</div>
              <div className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300">SUS304</div>
            </div>
          </div>

          {/* Machinery */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{t(lang, 'nav_machinery')}</h4>
            <ul className="space-y-3">
              {machineryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{t(lang, 'nav_solutions')}</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{lang === 'en' ? 'Company' : '公司'}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${lang}/about`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_about')}</Link></li>
              <li><Link href={`/${lang}/resources`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_resources')}</Link></li>
              <li><Link href={`/${lang}/industries`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_industries')}</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{t(lang, 'nav_contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                contact@sungene.net
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                +886 4-3703-2705
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                Taichung, Taiwan
              </li>
              <li className="pt-2">
                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 rounded-lg border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-400 transition hover:bg-accent-500/20">
                  {lang === 'en' ? 'Get a Quote' : (lang === 'cn' ? '获取报价' : '取得報價')}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">{t(lang, 'footer_copyright')}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Alibaba: momas.en.alibaba.com</span>
            <span>|</span>
            <span>LinkedIn: SunGene Co., LTD.</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
