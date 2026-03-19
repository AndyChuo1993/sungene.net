import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  const serviceLinks = [
    { href: `/${lang}/services/export-lead-generation`, label: lang === 'en' ? 'Export Lead Generation' : (lang === 'cn' ? '外贸客户开发' : '外銷客戶開發') },
    { href: `/${lang}/services/distributor-development`, label: lang === 'en' ? 'Distributor Development' : (lang === 'cn' ? '经销商开发' : '經銷商開發') },
    { href: `/${lang}/services/export-sales-outsourcing`, label: lang === 'en' ? 'Export Sales Outsourcing' : (lang === 'cn' ? '外贸业务外包服务' : '外銷業務外包服務') },
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
              {lang === 'en' 
                ? 'SunGene is the export service brand of SunGene Co., Ltd. Our teams in Taiwan and overseas jointly support your market development.' 
                : (lang === 'cn' 
                  ? 'SunGene 为上瑾铼有限公司之外贸服务品牌。台湾与海外团队共同支持您的市场开发。' 
                  : 'SunGene 為上瑾錸有限公司之外銷服務品牌。台灣與海外團隊共同支援市場開發。')}
            </p>
            <div className="text-gray-400 text-sm space-y-2">
              {lang === 'en' ? (
                <>
                  <div className="font-bold text-white">SunGene Co., Ltd.</div>
                  <div>Tax ID: 94111922</div>
                  <div>No. 201, Guangfu Rd., Central Dist., Taichung City, Taiwan</div>
                  <div>Phone: +886 43703 2705</div>
                  <div>LINE: @sungene</div>
                  <div>Email: contact@sungenelite.com</div>
                  
                  <div className="pt-2 font-bold text-white">Xiamen SunGene Trading Co., Ltd.</div>
                  <div>Unit 1001-2, Building A1, Yincheng Zhigu, No. 6788-1 Binhai West Avenue, Tongan District, Xiamen City</div>
                  <div>Phone: 18144132078 (WeChat included)</div>
                </>
              ) : lang === 'cn' ? (
                <>
                  <div className="font-bold text-white">上瑾铼有限公司</div>
                  <div>统一编号：94111922</div>
                  <div>台中市中区光复路201号</div>
                  <div>+886 43703 2705</div>
                  <div>LINE账号：@sungene</div>
                  <div>电子邮箱：contact@sungenelite.com</div>
                  
                  <div className="pt-2 font-bold text-white">厦门上瑾铼贸易有限公司</div>
                  <div>厦门市同安区滨海西大道6788-1号银城智谷A1栋1001单元之二</div>
                  <div>电话：18144132078 (微信同号)</div>
                </>
              ) : (
                <>
                  <div className="font-bold text-white">上瑾錸有限公司</div>
                  <div>統一編號：94111922</div>
                  <div>台中市中區光復路201號</div>
                  <div>+886 43703 2705</div>
                  <div>LINE帳號：@sungene</div>
                  <div>電子信箱：contact@sungenelite.com</div>
                  
                  <div className="pt-2 font-bold text-white">厦门上瑾铼贸易有限公司</div>
                  <div>厦门市同安区滨海西大道6788-1号银城智谷A1栋1001单元之二</div>
                  <div>电话：18144132078 (微信同號)</div>
                </>
              )}
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">{lang === 'en' ? 'Quick Links' : (lang === 'cn' ? '快速链接' : '快速連結')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href={`/${lang}/services`} className="transition hover:text-white">{t(lang, 'nav_services')}</Link></li>
              <li><Link href={`/${lang}/how-it-works`} className="transition hover:text-white">{t(lang, 'nav_process')}</Link></li>
              <li><Link href={`/${lang}/case-studies`} className="transition hover:text-white">{t(lang, 'nav_cases')}</Link></li>
              <li><Link href={`/${lang}/resources`} className="transition hover:text-white">{lang === 'en' ? 'Resources' : (lang === 'cn' ? '资源中心' : '資源中心')}</Link></li>
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
