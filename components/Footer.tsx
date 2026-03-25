import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  const machineryLinks = [
    { href: `/${lang}/machinery/packaging`, label: t(lang, 'nav_machinery_packaging') },
    { href: `/${lang}/machinery/food-processing`, label: t(lang, 'nav_machinery_food') },
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
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              SunGene
            </h3>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              {lang === 'en' 
                ? 'SunGene provides machinery solutions for packaging, food processing, and industrial applications, helping global buyers move from requirement discussion to export delivery with clearer direction.' 
                : (lang === 'cn' 
                  ? 'SunGene 为全球买家提供包装、食品加工与工业应用机械解决方案，协助客户从需求讨论到出口交付获得更清晰的方向。' 
                  : 'SunGene 為全球買家提供包裝、食品加工與工業應用機械解決方案，協助客戶從需求討論到出口交付獲得更清晰的方向。')}
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t(lang, 'nav_machinery')}</h4>
            <ul className="space-y-3 text-gray-400">
              {machineryLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t(lang, 'nav_solutions')}</h4>
            <ul className="space-y-3 text-gray-400">
              {solutionLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">{lang === 'en' ? 'Company' : (lang === 'cn' ? '公司' : '公司')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href={`/${lang}/about`} className="transition hover:text-white">{t(lang, 'nav_about')}</Link></li>
              <li><Link href={`/${lang}/resources`} className="transition hover:text-white">{t(lang, 'nav_resources')}</Link></li>
              <li><Link href={`/${lang}/contact`} className="transition hover:text-white">{t(lang, 'nav_contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t(lang, 'nav_contact')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Email: contact@sungene.net</li>
              <li>WhatsApp: +886 43703 2705</li>
              <li>Location: Taiwan / Xiamen</li>
              <li className="pt-2"><Link href={`/${lang}/contact`} className="inline-block border border-gray-700 rounded px-3 py-1 hover:bg-gray-800 transition">{lang === 'en' ? 'Inquiry Form' : (lang === 'cn' ? '询价表单' : '詢價表單')}</Link></li>
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
