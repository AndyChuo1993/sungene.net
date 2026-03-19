import { t, Lang } from '@/lib/i18n'

export default function ProcessSection({ lang }: { lang: Lang }) {
  const isChinese = lang !== 'en'
  const steps = [
    {
      id: 1,
      title: lang === 'en' ? 'Market & Target List' : lang === 'cn' ? '市场分析与首批名单' : '市場分析與首批名單',
      desc: lang === 'en' ? 'Complete market analysis and build initial procurement list.' : lang === 'cn' ? '完成目标市场分析与首批采购名单建立。' : '完成目標市場分析與首批採購名單建立。',
      week: lang === 'en' ? 'Week 1-2' : (lang === 'cn' ? '第 1-2 週' : '第 1-2 週'),
      details: isChinese 
        ? ['鎖定目標市場與競爭對手', '建立首批精準採購與決策人名單', '確認開發策略與切入點'] 
        : ['Target market & competitor analysis', 'Build initial procurement & decision-maker lists', 'Confirm outreach strategy'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
      )
    },
    {
      id: 2,
      title: lang === 'en' ? 'Outreach & Replies' : lang === 'cn' ? '开始接触并取得回复' : '開始接觸並取得回覆',
      desc: lang === 'en' ? 'Initiate outreach campaigns and start generating replies.' : lang === 'cn' ? '启动多渠道开发并开始取得买家回复。' : '啟動多管道開發並開始取得買家回覆。',
      week: lang === 'en' ? 'Week 3-4' : (lang === 'cn' ? '第 3-4 週' : '第 3-4 週'),
      details: isChinese 
        ? ['發送客製化開發信', '商務社群接觸與跟進', '取得初步回覆與意向'] 
        : ['Send customized cold emails', 'Social selling outreach', 'Generate initial replies and intent'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    },
    {
      id: 3,
      title: lang === 'en' ? 'Filter & Quote' : lang === 'cn' ? '筛选询价与进入报价' : '篩選詢價與進入報價',
      desc: lang === 'en' ? 'Filter valid inquiries and move them to the quoting stage.' : lang === 'cn' ? '筛选有效询价并推进至实际报价阶段。' : '篩選有效詢價並推進至實際報價階段。',
      week: lang === 'en' ? 'Week 5-6' : (lang === 'cn' ? '第 5-6 週' : '第 5-6 週'),
      details: isChinese 
        ? ['過濾無效與低意向回覆', '確認買家具體需求與規格', '協助準備與發送報價單'] 
        : ['Filter low-intent replies', 'Confirm specific needs and specs', 'Assist in sending quotes'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      id: 4,
      title: lang === 'en' ? 'Samples & Closing' : lang === 'cn' ? '样品与合作推进' : '樣品與合作推進',
      desc: lang === 'en' ? 'Continuous follow-up on samples, negotiations, and closing.' : lang === 'cn' ? '持续推进样品测试、商务谈判与最终成交。' : '持續推進樣品測試、商務談判與最終成交。',
      week: lang === 'en' ? 'Week 6+' : (lang === 'cn' ? '第 6 週起' : '第 6 週起'),
      details: isChinese 
        ? ['安排樣品寄送與測試跟進', '商務條件與合約談判', '協助最終成交與下單'] 
        : ['Arrange samples and follow-up', 'Negotiate terms and contracts', 'Assist in final closing and orders'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {lang === 'en' ? 'The Progress You Will See' : lang === 'cn' ? '你会看到的实际进展' : '你會看到的實際進展'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                {lang === 'en' ? 'Standardized export development cycle ensuring clear deliverables at every stage.' : (lang === 'cn' ? '标准化的外贸開發周期，確保每個階段都有明確產出。' : '標準化的外銷開發週期，確保每個階段都有明確產出。')}
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
