import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  const serviceLinks = [
    { href: `/${lang}/services/export-lead-generation`, label: lang === 'en' ? 'Export Lead Generation' : (lang === 'cn' ? '外贸客戶開發' : '外銷客戶開發') },
    { href: `/${lang}/services/distributor-development`, label: lang === 'en' ? 'Distributor Development' : (lang === 'cn' ? '经销商開發' : '經銷商開發') },
    { href: `/${lang}/services/export-sales-outsourcing`, label: lang === 'en' ? 'Export Sales Outsourcing' : (lang === 'cn' ? '外贸業務外包服务' : '外銷業務外包服務') },
  ]

  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              {/* If you have an image logo, uncomment below and remove text SunGene */}
              {/* <Image src="/logo/sungene.png" alt="SunGene" width={120} height={40} /> */}
              SunGene
            </h3>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              {t(lang, 'about_desc')}
            </p>
            <div className="text-gray-400 text-sm space-y-2">
               <div>contact@sungenelite.com</div>
               <div>+886 43703 2705</div>
               <div>{lang === 'en' ? 'LINE ID: @sungene' : (lang === 'cn' ? '即時通訊帳號：@sungene' : '即時通訊帳號：@sungene')}</div>
               <div>{lang === 'en' ? 'No. 201, Guangfu Rd., Taichung City, Taiwan' : (lang === 'cn' ? '台中市中區光復路201號' : '台中市中區光復路201號')}</div>
               <div>{lang === 'en' ? 'Tax ID: 94111922' : (lang === 'cn' ? '統一編號：94111922' : '統一編號：94111922')}</div>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">{lang === 'en' ? 'Quick Links' : (lang === 'cn' ? '快速链接' : '快速連結')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href={`/${lang}/services`} className="transition hover:text-white">{t(lang, 'nav_services')}</Link></li>
              <li><Link href={`/${lang}/how-it-works`} className="transition hover:text-white">{t(lang, 'nav_process')}</Link></li>
              <li><Link href={`/${lang}/case-studies`} className="transition hover:text-white">{t(lang, 'nav_cases')}</Link></li>
              <li><Link href={`/${lang}/resources`} className="transition hover:text-white">{lang === 'en' ? 'Resources' : (lang === 'cn' ? '資源中心' : '資源中心')}</Link></li>
              <li><Link href={`/${lang}/about`} className="transition hover:text-white">{t(lang, 'nav_about')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">{lang === 'en' ? 'Core Services' : (lang === 'cn' ? '核心服务' : '核心服務')}</h4>
            <ul className="space-y-3 text-gray-400">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">{link.label}</Link>
                </li>
              ))}
              <li><Link href={`/${lang}/contact`} className="transition hover:text-white">{t(lang, 'nav_contact')}</Link></li>
              <li><Link href={`/${lang}/export-market-analysis`} className="transition hover:text-white">{t(lang, 'nav_free_analysis')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          {t(lang, 'footer_copyright')}
        </div>
      </div>
    </footer>
  )
}
