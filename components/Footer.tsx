import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
               <div>LINE ID: @sungene</div>
               <div>{lang === 'zh' ? '台中市中區光復路201號' : 'No. 201, Guangfu Rd., Taichung City, Taiwan'}</div>
               <div>{lang === 'zh' ? '統一編號：94111922' : 'Tax ID: 94111922'}</div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">{lang === 'zh' ? '快速連結' : 'Quick Links'}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href={`/${lang}/services`} className="hover:text-white transition">{t(lang, 'nav_services')}</Link></li>
              <li><Link href={`/${lang}/how-it-works`} className="hover:text-white transition">{t(lang, 'nav_process')}</Link></li>
              <li><Link href={`/${lang}/case-studies`} className="hover:text-white transition">{t(lang, 'nav_cases')}</Link></li>
              <li><Link href={`/${lang}/resources`} className="hover:text-white transition">{lang === 'zh' ? '外貿資源' : 'Export Resources'}</Link></li>
              <li><Link href={`/${lang}/about`} className="hover:text-white transition">{t(lang, 'nav_about')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">{t(lang, 'contact_title')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href={`/${lang}/contact`} className="hover:text-white transition">{t(lang, 'nav_contact')}</Link></li>
              <li><Link href={`/${lang}/free-market-analysis`} className="hover:text-white transition">{t(lang, 'nav_free_analysis')}</Link></li>
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
