import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'
import { Check, Database, Send, Briefcase } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = 'https://sungene.net'
  
  const title = isChinese ? '合作方案｜SunGene' : 'Pricing | SunGene'
  const description = isChinese
    ? '透明的合作方案：市場驗證方案、客戶開發方案、外銷外包方案。選擇最適合的合作模式，建立可持續成交的海外開發系統。'
    : 'Transparent plans for export companies: market validation, prospect outreach, and export sales outsourcing.'
  return {
    title,
    description,
    keywords: isChinese
      ? '外銷服務方案, 海外客戶開發, 外銷業務外包服務, 市場驗證方案'
      : 'pricing, market validation, export lead generation, export sales outsourcing',
    alternates: { 
      canonical: `${baseUrl}/${lang}/pricing`, 
      languages: { 
        'zh-CN': 'https://sungene.net/cn/pricing', 
        'zh-TW': 'https://sungene.net/zh/pricing', 
        'en': 'https://sungene.net/en/pricing', 
        'x-default': 'https://sungene.net/cn/pricing' 
      } 
    },
    
    openGraph: { 
      title, 
      description, 
      url: `${baseUrl}/${lang}/pricing`,
      type: 'website' 
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'

  const plans = [
    {
      title: { cn: '市场验证方案', zh: '市場驗證方案', en: 'Market Validation Plan' },
      icon: <Database className="w-8 h-8 text-blue-600" />,
      color: 'blue',
      description: { cn: '适合想先测试市场、确认切入方向的外贸企业。', zh: '適合想先測試市場、確認切入方向的外銷企業。', en: 'Best for testing markets and confirming entry directions.' },
      price: { cn: '资料建置费用', zh: '資料建置費用', en: 'Data Buildout Fee' },
      features: [
        { cn: '定义 ICP 与买家角色', zh: '定義 ICP 與買家角色', en: 'Define ICP & Buyer Roles' },
        { cn: '前期开发资料建置', zh: '前期開發資料建置', en: 'Initial Prospect Data Buildout' },
        { cn: '决策人验证与开发准备', zh: '決策人驗證與開發準備', en: 'Decision-Maker Validation' },
        { cn: '试算表档案交付', zh: '試算表檔案交付', en: 'Excel / CSV Delivery' },
        { cn: '无最低合约期限', zh: '無最低合約期限', en: 'No Minimum Contract' },
      ],
      cta: { cn: '申请合作评估', zh: '申請合作評估', en: 'Request Evaluation' },
      link: `/${lang}/contact?service=data-buildout`
    },
    {
      title: { cn: '客户开发方案', zh: '客戶開發方案', en: 'Client Development Plan' },
      icon: <Send className="w-8 h-8 text-green-600" />,
      color: 'green',
      description: { cn: '适合想直接开发海外采购与决策人的企业。', zh: '適合想直接開發海外採購與決策人的企業。', en: 'Best for companies looking to directly develop overseas procurement.' },
      price: { cn: '专案费用', zh: '專案費用', en: 'Project Fee' },
      features: [
        { cn: '多渠道主动开发跟进', zh: '多渠道主動開發跟進', en: 'Multi-channel Active Outreach' },
        { cn: '专属发信域名设定', zh: '專屬發信域名設定', en: 'Dedicated Domain Setup' },
        { cn: '筛选有效询盘', zh: '篩選有效詢盤', en: 'Filter Qualified Inquiries' },
        { cn: '每周进展数据报告', zh: '每週進展資料報告', en: 'Weekly Progress Reports' },
        { cn: '协助推进至商务沟通', zh: '協助推進至商務溝通', en: 'Advance to Business Negotiation' },
      ],
      cta: { cn: '取得市场切入建议', zh: '取得市場切入建議', en: 'Get Market Entry Advice' },
      link: `/${lang}/contact?service=client-development`
    },
    {
      title: { cn: '外贸外包方案', zh: '外銷外包方案', en: 'Export Outsourcing Plan' },
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      color: 'indigo',
      description: { cn: '适合没有完整外贸团队、需要外部团队推进成交的企业。', zh: '適合沒有完整外銷團隊、需要外部團隊推進成交的企業。', en: 'Best for companies without a full team, needing external help to close deals.' },
      price: { cn: '底薪 + 佣金', zh: '底薪 + 佣金', en: 'Retainer + Commission' },
      features: [
        { cn: '持续海外客户开发', zh: '持續海外客戶開發', en: 'Continuous Overseas Prospecting' },
        { cn: '询价回复与需求整理', zh: '詢價回覆與需求整理', en: 'Inquiry Reply & Needs Triage' },
        { cn: '协助报价与商务沟通', zh: '協助報價與商務溝通', en: 'Assist in Quoting & Negotiation' },
        { cn: '持续推进至成交与下单', zh: '持續推進至成交與下單', en: 'Push Through to Closing & Orders' },
        { cn: '定期市场回馈会议', zh: '定期市場回饋會議', en: 'Regular Market Feedback Meetings' },
      ],
      cta: { cn: '预约策略通话', zh: '預約策略通話', en: 'Book Strategy Call' },
      link: `/${lang}/contact?service=sales-outsourcing`
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <div className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
             {lang === 'en' ? 'Pricing Plans' : (lang === 'cn' ? '價格方案' : '價格方案')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'en' ? 'Transparent & Flexible Models' : (lang === 'cn' ? '透明、靈活的合作模式' : '透明、靈活的合作模式')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {isChinese 
              ? '無論您處於外銷發展的哪個階段，我們都有適合您的解決方案。' 
              : 'Whatever stage of export growth you are in, we have a solution for you.'}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                        <div className={`p-8 border-b border-gray-100 bg-${plan.color}-50/30`}>
                            <div className="mb-4">{plan.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {isChinese ? plan.title.zh : plan.title.en}
                            </h3>
                            <p className="text-gray-600 text-sm min-h-[40px]">
                                {isChinese ? plan.description.zh : plan.description.en}
                            </p>
                        </div>
                        <div className="p-8 flex-grow">
                            <div className="mb-8">
                                <span className="text-3xl font-bold text-gray-900">
                                    {isChinese ? plan.price.zh : plan.price.en}
                                </span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <Check className={`w-5 h-5 text-${plan.color}-600 mr-3 flex-shrink-0 mt-0.5`} />
                                        <span className="text-gray-600 text-sm">
                                            {isChinese ? feature.zh : feature.en}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 pt-0 mt-auto">
                            <Link 
                                href={plan.link} 
                                className={`block w-full py-3 px-6 text-center font-bold rounded-sm transition-colors
                                    ${index === 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}
                                    ${index === 1 ? 'bg-green-600 hover:bg-green-700 text-white' : ''}
                                    ${index === 2 ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : ''}
                                `}
                            >
                                {isChinese ? plan.cta.zh : plan.cta.en}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Solution */}
            <div className="mt-16 text-center">
                <p className="text-gray-600 mb-4">
                    {lang === 'en' ? 'Not sure which plan is right for you?' : (lang === 'cn' ? '不確定哪種方案適合您？' : '不確定哪種方案適合您？')}
                </p>
                <Link href={`/${lang}/contact`} className="text-blue-600 font-bold hover:underline">
                    {lang === 'en' ? 'Contact us for a custom solution →' : (lang === 'cn' ? '聯繫我們討論客製化方案 →' : '聯繫我們討論客製化方案 →')}
                </Link>
            </div>
        </div>
      </section>
    </main>
  )
}
