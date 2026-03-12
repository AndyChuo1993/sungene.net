import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function ServicesPreview({ lang }: { lang: Lang }) {
  const services = [
    {
      id: 1,
      title: t(lang, 'home_service_1_title'),
      desc: t(lang, 'home_service_1_desc'),
      items: lang === 'zh' ? ['目標市場分析', '買家名單建立', '聯絡人資料'] : ['Market Analysis', 'Buyer List', 'Contact Info'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    },
    {
      id: 2,
      title: t(lang, 'home_service_2_title'),
      desc: t(lang, 'home_service_2_desc'),
      items: lang === 'zh' ? ['開發信撰寫', 'LinkedIn 開發', '自動化流程'] : ['Email Outreach', 'LinkedIn', 'Automation'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      id: 3,
      title: t(lang, 'home_service_3_title'),
      desc: t(lang, 'home_service_3_desc'),
      items: lang === 'zh' ? ['詢盤回覆', '報價跟進', '長期維護'] : ['Inquiry Handling', 'Follow-up', 'Long-term Support'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t(lang, 'service_title')}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{lang === 'zh' ? '我們提供從名單到成交的全流程外貿解決方案' : 'End-to-end export solutions from prospecting to closing deals'}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.id} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{s.title}</h3>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-6">{s.desc}</p>
              <ul className="space-y-3 mb-8">
                {s.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {item}
                    </li>
                ))}
              </ul>
              <Link href={`/${lang}/services`} className="text-gray-900 font-bold border-b-2 border-transparent group-hover:border-blue-600 transition inline-block pb-0.5">
                {lang === 'zh' ? '了解更多' : 'Learn More'} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
