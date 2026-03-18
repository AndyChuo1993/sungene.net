import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'
import { Check, Database, Send, Briefcase } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = lang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'
  
  const title = isChinese ? '服務價格｜SunGene' : 'Pricing | SunGene'
  const description = isChinese
    ? '透明的服務方案：名單交付、專案開發、外銷業務外包服務。選擇最適合的合作模式，低成本啟動海外市場開發。'
    : 'Transparent plans for manufacturers: buyer lists, outreach projects, and export sales outsourcing.'
  return {
    title,
    description,
    keywords: isChinese
      ? '外銷服務價格, 買家名單費用, 外銷業務外包服務收費, 海外客戶開發'
      : 'pricing, buyer list cost, export lead generation, export sales outsourcing',
    alternates: { 
      canonical: `${baseUrl}/${lang}/pricing`, 
      languages: { 
        'zh-CN': 'https://sungene.net/cn/pricing', 
        'zh-TW': 'https://sungenelite.com/zh/pricing', 
        'en': 'https://sungene.net/en/pricing', 
        'x-default': 'https://sungene.net/en/pricing' 
      } 
    },
    robots: { index: false, follow: true },
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
      title: { cn: '名單買斷模式', zh: '名單買斷模式', en: 'Buyer List Model' },
      icon: <Database className="w-8 h-8 text-blue-600" />,
      color: 'blue',
      description: { cn: '適合已有業務團隊，需要高品質潛在客戶名單的企業。', zh: '適合已有業務團隊，需要高品質潛在客戶名單的企業。', en: 'Best for companies with sales teams needing high-quality leads.' },
      price: { cn: '依筆數計費', zh: '依筆數計費', en: 'Pay Per Lead' },
      features: [
        { cn: '精準決策人電子郵件', zh: '精準決策人電子郵件', en: 'Targeted Decision Maker Emails' },
        { cn: '95% 有效性保證', zh: '95% 有效性保證', en: '95% Validity Guarantee' },
        { cn: '包含商務社群連結', zh: '包含商務社群連結', en: 'Includes LinkedIn URLs' },
        { cn: '試算表檔案交付', zh: '試算表檔案交付', en: 'Excel / CSV Delivery' },
        { cn: '無最低合約期限', zh: '無最低合約期限', en: 'No Minimum Contract' },
      ],
      cta: { cn: '索取名單報價', zh: '索取名單報價', en: 'Get a Quote' },
      link: `/${lang}/contact?service=lead-generation`
    },
    {
      title: { cn: '專案開發模式', zh: '專案開發模式', en: 'Outreach Project' },
      icon: <Send className="w-8 h-8 text-green-600" />,
      color: 'green',
      description: { cn: '適合想主動開發新市場，但缺乏開發信撰寫與系統經驗的企業。', zh: '適合想主動開發新市場，但缺乏開發信撰寫與系統經驗的企業。', en: 'Best for entering new markets without cold email expertise.' },
      price: { cn: '專案費用', zh: '專案費用', en: 'Project Fee' },
      features: [
        { cn: '客製化開發信序列 (4-7封)', zh: '客製化開發信序列 (4-7封)', en: 'Custom Email Sequences (4-7)' },
        { cn: '專屬發信域名設定', zh: '專屬發信域名設定', en: 'Dedicated Domain Setup' },
        { cn: '自動化寄送與跟進', zh: '自動化寄送與跟進', en: 'Automated Sending & Follow-up' },
        { cn: '每週成效資料報告', zh: '每週成效資料報告', en: 'Weekly Performance Reports' },
        { cn: '分組測試最佳化', zh: '分組測試最佳化', en: 'A/B Testing Optimization' },
      ],
      cta: { cn: '預約開發諮詢', zh: '預約開發諮詢', en: 'Book Consultation' },
      link: `/${lang}/contact?service=cold-outreach`
    },
    {
      title: { cn: '外銷業務外包服務', zh: '外銷業務外包服務', en: 'Sales Outsourcing' },
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      color: 'indigo',
      description: { cn: '適合無外銷團隊，需要專業人士完整代操海外業務的企業。', zh: '適合無外銷團隊，需要專業人士完整代操海外業務的企業。', en: 'Best for companies needing a full export sales arm without hiring.' },
      price: { cn: '底薪 + 佣金', zh: '底薪 + 佣金', en: 'Retainer + Commission' },
      features: [
        { cn: '專屬資深業務代表', zh: '專屬資深業務代表', en: 'Dedicated Senior Rep' },
        { cn: '詢價回覆與報價跟進', zh: '詢價回覆與報價跟進', en: 'Inquiry & Quote Management' },
        { cn: '樣品寄送與訂單處理', zh: '樣品寄送與訂單處理', en: 'Sample & Order Processing' },
        { cn: '客戶管理系統建置', zh: '客戶管理系統建置', en: 'CRM System Setup' },
        { cn: '定期市場回饋會議', zh: '定期市場回饋會議', en: 'Regular Market Feedback' },
      ],
      cta: { cn: '評估外包方案', zh: '評估外包方案', en: 'Evaluate Outsourcing' },
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
