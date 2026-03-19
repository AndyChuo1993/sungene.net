import { t, Lang } from '@/lib/i18n'

export default function WhyUs({ lang }: { lang: Lang }) {
  const isChinese = lang !== 'en'
  const reasons = [
    {
      id: 1,
      title: lang === 'en' ? 'Not selling lists' : lang === 'cn' ? '不是卖名单' : '不是賣名單',
      desc: lang === 'en' ? 'We rebuild procurement and decision-maker data from scratch for every project.' : (lang === 'cn' ? '每个案子重新建立采购与决策人资料，不使用公版旧名单。' : '每個案子重新建立採購與決策人資料，不使用公版舊名單。'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      )
    },
    {
      id: 2,
      title: lang === 'en' ? 'Not just sending emails' : lang === 'cn' ? '不是只寄开发信' : '不是只寄開發信',
      desc: lang === 'en' ? 'Multi-channel, multi-touch follow-ups to significantly boost reply rates.' : (lang === 'cn' ? '多渠道、多轮跟进，大幅提高真实买家的回复率。' : '多渠道、多輪跟進，大幅提高真實買家的回覆率。'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      id: 3,
      title: lang === 'en' ? 'Not just delivering inquiries' : lang === 'cn' ? '不是只交询盘' : '不是只交詢盤',
      desc: lang === 'en' ? 'We organize replies into actionable opportunities and define the next steps for closing.' : (lang === 'cn' ? '整理成可推进的商机与下一步，目标是协助你成交。' : '整理成可推進的商機與下一步，目標是協助你成交。'),
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
                    {lang === 'en' ? 'How we differ from typical lead gen agencies' : lang === 'cn' ? '我们和一般外贸开发最大的不同' : '我們和一般外貿開發最大的不同'}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {isChinese 
                        ? 'SunGene 專注於企業外銷開發。我們重視的是可執行的流程：從名單、開發、跟進到詢問交付，建立一套可持續運作的系統。' 
                        : 'SunGene focuses on B2B export growth for companies. We do not sell tool hype. We build a repeatable system for list building, outreach, follow-ups, and inquiry delivery.'}
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
