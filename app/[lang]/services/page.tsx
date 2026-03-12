import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'service_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  const services = [
    {
      id: 'lead-gen',
      title: t(lang, 'service_lead_gen_title'),
      desc: t(lang, 'service_lead_gen_desc'),
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      who: lang === 'zh' 
        ? ['沒有海外業務團隊的工廠', '想開發新市場但不知道從哪開始的企業', '已經有產品但沒有穩定買家來源的供應商']
        : ['Factories without an internal export sales team', 'Companies expanding to new markets', 'Suppliers with products but no stable buyer source'],
      what: lang === 'zh'
        ? ['目標市場分析', '海外買家名單建立', '公司資料與聯絡方式整理', '分層標註潛在客戶名單']
        : ['Target market analysis', 'Overseas buyer list building', 'Company & contact data verification', 'Segmented prospect lists'],
      deliverables: lang === 'zh'
        ? ['精準買家資料庫 (Excel/CRM)', '關鍵決策人聯絡方式', '市場競爭分析報告']
        : ['Verified Buyer Database (Excel/CRM)', 'Decision Maker Contacts', 'Market Intelligence Report'],
      result: lang === 'zh'
        ? ['更快找到潛在買家', '更少浪費在低價值客戶', '建立後續開發信與跟進的基礎資料']
        : ['Identify potential buyers faster', 'Reduce time on low-value leads', 'Solid foundation for outreach campaigns']
    },
    {
      id: 'outreach',
      title: t(lang, 'service_outreach_title'),
      desc: t(lang, 'service_outreach_desc'),
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      who: lang === 'zh'
        ? ['有買家名單但不知道如何開發', '開發信回覆率低', '需要主動出擊 B2B 客戶']
        : ['Have lists but unsure how to engage', 'Low cold email response rates', 'Need proactive B2B outreach'],
      what: lang === 'zh'
        ? ['客製化開發信撰寫', 'LinkedIn 社交開發', '多波段跟進策略', 'A/B 測試優化']
        : ['Customized cold email copywriting', 'LinkedIn social outreach', 'Multi-touch follow-up strategy', 'A/B testing optimization'],
      deliverables: lang === 'zh'
        ? ['開發信文案 (Email Scripts)', 'LinkedIn 訊息模版', '發送排程與數據報告']
        : ['Cold Email Scripts', 'LinkedIn Message Templates', 'Campaign Schedule & Data Reports'],
      result: lang === 'zh'
        ? ['提高開信率與回覆率', '直接觸達關鍵決策人', '建立穩定的詢盤來源']
        : ['Increase open & reply rates', 'Reach decision makers directly', 'Generate consistent inquiries']
    },
    {
      id: 'outsourcing',
      title: t(lang, 'service_sales_title'),
      desc: t(lang, 'service_sales_desc'),
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
      who: lang === 'zh'
        ? ['詢盤量大但轉化率低', '缺乏英語談判人才', '需要長期維護客戶關係']
        : ['High inquiry volume but low conversion', 'Lack English negotiation talent', 'Need long-term relationship management'],
      what: lang === 'zh'
        ? ['詢盤篩選與分級', '報價單製作與跟進', '樣品寄送安排', '商務談判支援']
        : ['Inquiry screening & qualification', 'Quotation follow-up', 'Sample arrangement', 'Commercial negotiation support'],
      deliverables: lang === 'zh'
        ? ['詢盤處理週報', '潛在訂單進度表', '客戶反饋分析']
        : ['Weekly Inquiry Reports', 'Pipeline Status Sheet', 'Customer Feedback Analysis'],
      result: lang === 'zh'
        ? ['提升訂單轉化率', '縮短成交週期', '降低業務溝通成本']
        : ['Boost conversion rates', 'Shorten sales cycles', 'Lower communication costs']
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(lang, 'service_title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t(lang, 'hero_subtitle')}</p>
        </div>
      </section>

      {/* Services List */}
      <div className="py-12">
        {services.map((s, idx) => (
          <section key={s.id} className={`py-24 ${idx % 2 !== 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100`}>
            <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Title & Main Desc */}
              <div className="lg:col-span-4">
                <div className="w-24 h-24 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-8">
                  {s.imageIcon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{s.title}</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-blue-500 pl-4">
                  {s.desc}
                </p>
                <Link href={`/${lang}/contact`} className="inline-block bg-blue-900 text-white font-bold py-3 px-8 rounded-sm hover:bg-blue-800 transition duration-300">
                  {lang === 'zh' ? '諮詢此服務' : 'Inquire Now'}
                </Link>
              </div>

              {/* Right Column: Detailed Breakdown */}
              <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                
                {/* Who is this for */}
                <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-100 pb-2">
                    {lang === 'zh' ? '適合對象' : 'Who is this for?'}
                  </h3>
                  <ul className="space-y-3">
                    {s.who.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2 mt-1">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What we do */}
                <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-100 pb-2">
                    {lang === 'zh' ? '我們做什麼' : 'What we do'}
                  </h3>
                  <ul className="space-y-3">
                    {s.what.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2 mt-1">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-blue-50 p-8 rounded-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4 uppercase tracking-wide border-b border-blue-200 pb-2">
                    {lang === 'zh' ? '交付內容' : 'Deliverables'}
                  </h3>
                  <ul className="space-y-3">
                    {s.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start text-blue-800 font-medium">
                        <span className="text-blue-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="bg-green-50 p-8 rounded-sm border border-green-100">
                  <h3 className="text-lg font-bold text-green-900 mb-4 uppercase tracking-wide border-b border-green-200 pb-2">
                    {lang === 'zh' ? '預期成果' : 'Key Results'}
                  </h3>
                  <ul className="space-y-3">
                    {s.result.map((item, i) => (
                      <li key={i} className="flex items-start text-green-800 font-medium">
                        <span className="text-green-600 mr-2">★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t(lang, 'hero_cta_start')}</h2>
          <Link href={`/${lang}/free-market-analysis`} className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
            {t(lang, 'cta_analysis')}
          </Link>
        </div>
      </section>
    </main>
  )
}
