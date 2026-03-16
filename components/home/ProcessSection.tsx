import { t, Lang } from '@/lib/i18n'

export default function ProcessSection({ lang }: { lang: Lang }) {
  const steps = [
    {
      id: 1,
      title: t(lang, 'process_1_title'),
      desc: t(lang, 'process_1_desc'),
      week: lang === 'zh' ? '第 1 週' : 'Week 1',
      details: lang === 'zh' 
        ? ['我們做什麼：競爭對手與價格分析', '客戶需提供：產品型錄與目標市場', '交付內容：市場可行性評估報告'] 
        : ['We do: Competitor & Price Analysis', 'You provide: Catalog & Target Market', 'Deliverable: Market Feasibility Report'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
      )
    },
    {
      id: 2,
      title: t(lang, 'process_2_title'),
      desc: t(lang, 'process_2_desc'),
      week: lang === 'zh' ? '第 2 週' : 'Week 2',
      details: lang === 'zh' 
        ? ['我們做什麼：決策人識別與資料驗證', '客戶需提供：理想客戶條件', '交付內容：精準決策人名單（試算表）'] 
        : ['We do: Decision Maker ID & Verification', 'You provide: Ideal Customer Profile', 'Deliverable: Verified Contact List (Excel)'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    },
    {
      id: 3,
      title: t(lang, 'process_3_title'),
      desc: t(lang, 'process_3_desc'),
      week: lang === 'zh' ? '第 3-6 週' : 'Week 3-6',
      details: lang === 'zh' 
        ? ['我們做什麼：多階段開發信與商務社群接觸', '客戶需提供：產品優勢與案例素材', '交付內容：每週開發進度報告'] 
        : ['We do: Multi-touch Email & LinkedIn Outreach', 'You provide: USP & Case Studies', 'Deliverable: Weekly Progress Reports'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      id: 4,
      title: t(lang, 'process_4_title'),
      desc: t(lang, 'process_4_desc'),
      week: lang === 'zh' ? '第 6 週起' : 'Week 6+',
      details: lang === 'zh' 
        ? ['我們做什麼：詢價篩選、回覆與樣品跟進', '客戶需提供：報價與技術支援', '交付內容：高意向詢價與商務機會'] 
        : ['We do: Inquiry Screening & Follow-up', 'You provide: Quotation & Tech Support', 'Deliverable: High-intent Inquiries & Opportunities'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t(lang, 'process_title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                {lang === 'zh' ? '標準化的外銷開發週期，確保每個階段都有明確產出。' : 'Standardized export development cycle ensuring clear deliverables at every stage.'}
            </p>
        </div>
        
        <div className="relative grid md:grid-cols-4 gap-8">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
            
            {steps.map((s, idx) => (
                <div key={s.id} className="relative z-10 text-center group">
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 relative z-20">
                        {s.week}
                    </div>
                    <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400 group-hover:border-blue-600 group-hover:text-blue-600 transition duration-300 shadow-sm bg-white relative z-10">
                        {s.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 font-medium px-4 mb-4 text-sm">{s.desc}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                        {s.details.map((d, i) => (
                            <li key={i}>• {d}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}
