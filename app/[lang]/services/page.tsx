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
      desc: lang === 'zh'
        ? '幫助企業建立精準的海外買家名單，為後續客戶開發與市場拓展建立基礎。我們透過市場研究、進口數據與產業分析，找出潛在採購商與決策者。'
        : 'Building precise overseas buyer lists to lay the foundation for market expansion. We identify potential buyers and decision-makers through market research, import data, and industry analysis.',
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      who: lang === 'zh' 
        ? ['想拓展海外市場但沒有客戶資料的企業', '想建立完整買家資料庫的公司', '需要精準名單做開發信或業務拓展']
        : ['Companies expanding overseas without client data', 'Firms wanting to build a complete buyer database', 'Businesses needing precise lists for outreach'],
      what: lang === 'zh'
        ? ['海外買家名單建立', '進口商與採購商資料整理', '產業市場分析', '潛在客戶分類與標記']
        : ['Overseas buyer list building', 'Importer & buyer data organization', 'Industry market analysis', 'Prospect segmentation & tagging'],
      deliverables: lang === 'zh'
        ? ['精準買家資料庫 (Excel/CRM)', '關鍵決策人聯絡方式', '市場競爭分析報告']
        : ['Verified Buyer Database (Excel/CRM)', 'Decision Maker Contacts', 'Market Intelligence Report'],
      result: lang === 'zh'
        ? ['企業可獲得一份可直接用於開發的海外買家名單', '作為外貿開發的基礎資源', '大幅節省自行搜尋名單的時間']
        : ['Acquire a ready-to-use overseas buyer list', 'Establish foundational resources for export growth', 'Save significant time on manual prospecting']
    },
    {
      id: 'outreach',
      title: t(lang, 'service_outreach_title'),
      desc: lang === 'zh'
        ? '透過系統化的外貿開發流程，主動接觸海外買家並建立商務對話。SunGene 協助企業規劃客戶開發策略，並透過 Email、LinkedIn 等渠道進行客戶觸達。'
        : 'Proactively engaging overseas buyers through systematic outreach. SunGene helps plan development strategies and reach clients via Email and LinkedIn to establish business dialogues.',
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      who: lang === 'zh'
        ? ['想主動開發海外客戶的企業', '想建立穩定詢盤來源的工廠', '想拓展新市場的供應商']
        : ['Companies wanting to proactively find clients', 'Factories needing consistent inquiry sources', 'Suppliers aiming to enter new markets'],
      what: lang === 'zh'
        ? ['客戶開發策略制定', '開發信撰寫與優化', 'Email / LinkedIn 開發流程', '客戶回覆管理']
        : ['Outreach strategy development', 'Cold email copywriting & optimization', 'Email / LinkedIn outreach workflows', 'Response management'],
      deliverables: lang === 'zh'
        ? ['開發信文案 (Email Scripts)', 'LinkedIn 訊息模版', '發送排程與數據報告']
        : ['Cold Email Scripts', 'LinkedIn Message Templates', 'Campaign Schedule & Data Reports'],
      result: lang === 'zh'
        ? ['持續接觸潛在買家並建立商務對話', '逐步累積海外客戶資源', '獲得高品質的商務詢盤']
        : ['Consistent engagement with potential buyers', 'Accumulate overseas client resources', 'Generate high-quality business inquiries']
    },
    {
      id: 'outsourcing',
      title: t(lang, 'service_sales_title'),
      desc: lang === 'zh'
        ? 'SunGene 作為企業的外貿業務團隊，協助處理客戶開發與商務跟進。企業不需要自行建立完整外貿團隊，也能持續拓展海外市場。'
        : 'Acting as your external export sales team to handle development and follow-up. Expand globally without building a full internal team from scratch.',
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
      who: lang === 'zh'
        ? ['沒有外貿團隊的工廠', '想降低外貿人力成本的企業', '希望快速拓展海外市場的公司']
        : ['Factories without an export team', 'Companies looking to reduce labor costs', 'Firms wanting rapid market expansion'],
      what: lang === 'zh'
        ? ['海外客戶開發與跟進', '詢盤管理', '商務溝通協助', '客戶關係維護']
        : ['Overseas client development & follow-up', 'Inquiry management', 'Business communication support', 'Customer relationship maintenance'],
      deliverables: lang === 'zh'
        ? ['詢盤處理週報', '潛在訂單進度表', '客戶反饋分析']
        : ['Weekly Inquiry Reports', 'Pipeline Status Sheet', 'Customer Feedback Analysis'],
      result: lang === 'zh'
        ? ['透過外部專業團隊持續拓展海外市場', '建立穩定的客戶來源', '專注於生產與產品優化']
        : ['Continuous market expansion via expert team', 'Establish stable client sources', 'Focus on production and product optimization']
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(lang, 'service_title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t(lang, 'hero_subtitle')}</p>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? '從客戶名單到詢盤獲取，再到完整外貿外包，我們提供不同階段的海外客戶開發方案。' 
              : 'From lead lists to inquiry generation and full export outsourcing, we offer solutions for every stage of overseas development.'}
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {lang === 'zh' ? '選擇適合您的服務模式' : 'Choose the Right Service Model'}
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    {lang === 'zh' ? '我們提供彈性的合作方案，滿足不同階段的企業需求。' : 'Flexible solutions for every stage of your business growth.'}
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b-2 border-gray-200">
                            <th className="p-4 md:p-6 font-bold text-gray-900 w-1/4"></th>
                            <th className="p-4 md:p-6 font-bold text-blue-900 text-lg w-1/4 text-center border-l border-gray-200 bg-blue-50/50">
                                {lang === 'zh' ? '客戶名單開發' : 'Lead Generation'}
                            </th>
                            <th className="p-4 md:p-6 font-bold text-green-900 text-lg w-1/4 text-center border-l border-gray-200 bg-green-50/50">
                                {lang === 'zh' ? '海外客戶開發' : 'Cold Outreach'}
                            </th>
                            <th className="p-4 md:p-6 font-bold text-indigo-900 text-lg w-1/4 text-center border-l border-gray-200 bg-indigo-50/50">
                                {lang === 'zh' ? '外貿外包服務' : 'Sales Outsourcing'}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            {
                                label: lang === 'zh' ? '適合對象' : 'Best For',
                                c1: lang === 'zh' ? '有業務團隊，缺名單' : 'Has Sales Team, Needs Leads',
                                c2: lang === 'zh' ? '想主動開發，缺方法' : 'Wants Outreach, Needs Strategy',
                                c3: lang === 'zh' ? '沒有外貿團隊、缺人手，或希望解放現有業務團隊的企業' : 'No export team, understaffed, or want to free up current sales team'
                            },
                            {
                                label: lang === 'zh' ? '核心價值' : 'Core Value',
                                c1: lang === 'zh' ? '省去 80% 找客戶時間' : 'Save 80% Research Time',
                                c2: lang === 'zh' ? '建立主動獲客系統' : 'Build Outreach System',
                                c3: lang === 'zh' ? '立即擁有專業團隊' : 'Instant Pro Team'
                            },
                            {
                                label: lang === 'zh' ? '交付內容' : 'Deliverables',
                                c1: lang === 'zh' ? '寄信名單與開信名單（Excel 交付）' : 'Sending List & Open List (Excel)',
                                c2: lang === 'zh' ? '海外客戶詢價' : 'Overseas Inquiries',
                                c3: lang === 'zh' ? '除報價與出貨外的所有外貿業務行為（客戶開發、郵件往來、詢盤處理、客戶跟進）' : 'All export sales activities except quotation and shipping'
                            },
                            {
                                label: lang === 'zh' ? '執行週期' : 'Duration',
                                c1: lang === 'zh' ? '一年' : '1 Year',
                                c2: lang === 'zh' ? '一年' : '1 Year',
                                c3: lang === 'zh' ? '一年以上' : '1 Year+'
                            }
                        ].map((row, idx) => (
                            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="p-4 md:p-6 font-bold text-gray-900 bg-gray-50/30">{row.label}</td>
                                <td className="p-4 md:p-6 text-gray-600 text-center border-l border-gray-100 font-medium">{row.c1}</td>
                                <td className="p-4 md:p-6 text-gray-600 text-center border-l border-gray-100 font-medium">{row.c2}</td>
                                <td className="p-4 md:p-6 text-gray-600 text-center border-l border-gray-100 font-medium">{row.c3}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="p-4 md:p-6 bg-gray-50/30"></td>
                            <td className="p-4 md:p-6 text-center border-l border-gray-100">
                                <Link href={`/${lang}/services/lead-generation`} className="text-blue-600 font-bold hover:underline text-sm">
                                    {lang === 'zh' ? '了解更多' : 'Learn More'} →
                                </Link>
                            </td>
                            <td className="p-4 md:p-6 text-center border-l border-gray-100">
                                <Link href={`/${lang}/services/cold-outreach`} className="text-green-600 font-bold hover:underline text-sm">
                                    {lang === 'zh' ? '了解更多' : 'Learn More'} →
                                </Link>
                            </td>
                            <td className="p-4 md:p-6 text-center border-l border-gray-100">
                                <Link href={`/${lang}/services/sales-outsourcing`} className="text-indigo-600 font-bold hover:underline text-sm">
                                    {lang === 'zh' ? '了解更多' : 'Learn More'} →
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    <Link href={`/${lang}/services/${s.id === 'lead-gen' ? 'lead-generation' : s.id === 'outreach' ? 'cold-outreach' : 'sales-outsourcing'}`} className="hover:text-blue-600 transition">
                        {s.title}
                    </Link>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-blue-500 pl-4">
                  {s.desc}
                </p>
                <div className="flex flex-col gap-3">
                    <Link href={`/${lang}/services/${s.id === 'lead-gen' ? 'lead-generation' : s.id === 'outreach' ? 'cold-outreach' : 'sales-outsourcing'}`} className="inline-block bg-white border border-blue-900 text-blue-900 font-bold py-3 px-8 rounded-sm hover:bg-blue-50 transition duration-300 text-center">
                    {lang === 'zh' ? '了解更多' : 'Learn More'}
                    </Link>
                    <Link href={`/${lang}/contact`} className="inline-block bg-blue-900 text-white font-bold py-3 px-8 rounded-sm hover:bg-blue-800 transition duration-300 text-center">
                    {lang === 'zh' ? '諮詢此服務' : 'Inquire Now'}
                    </Link>
                </div>
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

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{lang === 'zh' ? '常見問題' : 'FAQ'}</h2>
          <div className="space-y-6">
            {[
              { 
                q: lang === 'zh' ? 'Q: SunGene 適合哪些類型的企業？' : 'Q: Who is SunGene suitable for?',
                a: lang === 'zh' ? '我們最適合擁有成熟產品與製造能力，但缺乏海外業務團隊或希望加速外貿開發的製造商與供應商。' : 'We are best suited for manufacturers and suppliers with mature products but lacking an overseas sales team or wishing to accelerate export growth.'
              },
              { 
                q: lang === 'zh' ? 'Q: 你們是代發信公司嗎？' : 'Q: Are you just an email blasting service?',
                a: lang === 'zh' ? '不是。我們提供的是全流程的外貿開發服務，包含精準名單建立、決策人鎖定、客製化開發內容撰寫以及商務詢盤跟進。' : 'No. We provide full-cycle export development services, including precise list building, decision-maker targeting, customized outreach, and inquiry follow-up.'
              },
              { 
                q: lang === 'zh' ? 'Q: 多久可以看到成效？' : 'Q: How long to see results?',
                a: lang === 'zh' ? '通常在專案啟動後 1-2 個月內會開始收到潛在客戶的回覆與詢盤。具體時間取決於產品類型與目標市場的競爭程度。' : 'Typically, you will start receiving responses and inquiries within 1-2 months of project launch, depending on product type and market competition.'
              },
              { 
                q: lang === 'zh' ? 'Q: 資料會保密嗎？會簽署 NDA 嗎？' : 'Q: Is my data confidential? Do you sign NDAs?',
                a: lang === 'zh' ? '是的，我們非常重視客戶隱私。在合作開始前，我們會簽署保密協議 (NDA)，確保您的商業機密與客戶資料受到完整保護。' : 'Yes, we take privacy seriously. We sign an NDA before cooperation begins to ensure your trade secrets and client data are fully protected.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
