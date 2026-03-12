import { t, Lang } from '@/lib/i18n'

export default function WhyUs({ lang }: { lang: Lang }) {
  const reasons = [
    {
      id: 1,
      title: t(lang, 'why_1'),
      desc: lang === 'zh' ? '不使用公版名單，我們為每個客戶量身建立精準的採購商與決策人資料庫。' : 'No generic lists. We build custom databases of verified buyers and decision-makers for each client.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      )
    },
    {
      id: 2,
      title: t(lang, 'why_2'),
      desc: lang === 'zh' ? '主動出擊而非被動等待。透過開發信與 LinkedIn 多管道觸達，直接將產品推送到買家面前。' : 'Proactive outreach, not passive waiting. We put your products directly in front of buyers via Email and LinkedIn.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      id: 3,
      title: t(lang, 'why_3'),
      desc: lang === 'zh' ? '從詢盤篩選、樣品寄送、報價談判到訂單成交，我們是您最專業的外貿業務夥伴。' : 'From inquiry screening to negotiation and closing, we act as your professional export sales partner.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    {t(lang, 'why_title')}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {lang === 'zh' 
                        ? 'SunGene 專注於 B2B 外貿開發，我們不賣軟體工具，而是提供真實的訂單機會與市場拓展服務。' 
                        : 'SunGene focuses on B2B export growth. We don\'t sell software; we deliver real business opportunities and market expansion services.'}
                </p>
                <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
            </div>
            
            <div className="space-y-12">
                {reasons.map(r => (
                    <div key={r.id} className="flex gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center shadow-sm">
                            {r.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{r.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{r.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
