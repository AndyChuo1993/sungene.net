import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceComparison from '@/components/ServiceComparison'
import { Users, FileSpreadsheet, Target, BarChart3, ShieldCheck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: '客戶名單開發服務 | Lead Generation | SunGene',
  description: '專業 B2B 海外買家名單建立服務。透過海關數據、產業資料庫與人工篩選，為您提供精準的決策者聯絡方式。',
  keywords: '客戶名單開發, B2B名單, 海外買家資料, 決策人聯絡方式, 潛在客戶名單',
  openGraph: {
    title: '客戶名單開發服務 | Lead Generation | SunGene',
    description: '專業 B2B 海外買家名單建立服務。為您提供精準的決策者聯絡方式。',
    type: 'website',
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <div className="inline-block bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
             {lang === 'zh' ? '海外客戶名單開發服務' : 'Lead Generation Service'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '不再為「找不到客戶」煩惱' : 'Stop Worrying About "Finding Clients"'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '我們交付可直接使用的海外客戶名單，包含寄信名單與開信名單（Excel）。' 
              : 'We deliver ready-to-use overseas buyer lists, including sending lists and verified open lists (Excel).'}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={`/${lang}/free-market-analysis`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition">
                {t(lang, 'cta_analysis')}
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
             <Breadcrumbs 
                 lang={lang} 
                 items={[
                     { label: lang === 'zh' ? '服務介紹' : 'Services', href: `/${lang}/services` },
                     { label: lang === 'zh' ? '客戶名單開發' : 'Lead Generation', href: `/${lang}/services/lead-generation` }
                 ]} 
             />

            <div className="grid lg:grid-cols-12 gap-16 mt-8">
                <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '服務內容' : 'Service Details'}</h2>
                <div className="prose prose-lg text-gray-600 mb-12">
                    <p>
                        {lang === 'zh' 
                         ? '許多企業在外貿開發時，花費大量時間在網路上搜尋客戶，卻往往只找到無效的 Info 信箱或總機電話。SunGene 的名單開發服務，結合了數據科技與人工驗證，協助您直接鎖定目標市場的潛在買家。'
                         : 'Many companies waste time searching for clients online, only to find generic info emails. SunGene combines data technology with manual verification to help you target potential buyers directly.'}
                    </p>
                </div>

                {/* Who it is for */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '適合對象' : 'Who Is This For?'}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                      <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{lang === 'zh' ? '尋找經銷商的製造商' : 'Manufacturers Seeking Distributors'}</h4>
                        <p className="text-sm text-gray-600 mt-1">{lang === 'zh' ? '需要快速建立當地通路名單。' : 'Need to quickly build local channel lists.'}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                      <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{lang === 'zh' ? '已有業務團隊的企業' : 'Companies with Sales Teams'}</h4>
                        <p className="text-sm text-gray-600 mt-1">{lang === 'zh' ? '業務專注於開發，不該浪費時間找資料。' : 'Sales should focus on closing, not researching.'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '交付內容' : 'Deliverables'}</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                      <FileSpreadsheet className="w-10 h-10 text-green-600" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '精準買家名單 (Excel/CSV)' : 'Targeted Buyer List (Excel/CSV)'}</h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          {lang === 'zh' ? '包含完整欄位：公司名稱、網址、國家、產業分類。' : 'Includes full fields: Company Name, Website, Country, Industry.'}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                      <Users className="w-10 h-10 text-blue-600" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '關鍵決策人資訊' : 'Key Decision Maker Info'}</h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          {lang === 'zh' ? '採購經理、CEO、產品經理的姓名與職稱。' : 'Names and titles of Purchasing Managers, CEOs, Product Managers.'}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 flex items-start gap-4">
                      <ShieldCheck className="w-10 h-10 text-indigo-600" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '驗證過的聯絡方式' : 'Verified Contact Details'}</h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          {lang === 'zh' ? '直通 Email 與 LinkedIn 個人頁面連結（若有）。' : 'Direct Emails and LinkedIn Profile URLs (if available).'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expected Results */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '預期成效' : 'Expected Results'}</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">95%+</div>
                      <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? 'Email 有效性' : 'Email Validity'}</div>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                      <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '目標客群吻合' : 'ICP Match'}</div>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                      <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '節省搜尋時間' : 'Time Saved'}</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '為什麼選擇我們？' : 'Why Choose Us?'}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '節省 80% 時間' : 'Save 80% Time'}</h4>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '讓業務團隊專注於溝通，而不是找資料。' : 'Let sales focus on communication, not research.'}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-green-600">
                        <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '資料準確率 95%+' : '95%+ Accuracy'}</h4>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '嚴格的驗證流程，降低退信率。' : 'Strict verification to minimize bounce rates.'}</p>
                    </div>
                </div>
                
                {/* Service Comparison */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '服務方案比較' : 'Service Comparison'}</h3>
                    <ServiceComparison lang={lang} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '常見問題' : 'FAQ'}</h3>
                <div className="space-y-4 mb-12">
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '名單包含哪些欄位？' : 'What fields are included?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '通常包含：公司名稱、網址、國家、聯絡人姓名、職稱、Email、LinkedIn 個人頁面連結（若有）。' : 'Typically includes: Company Name, Website, Country, Contact Person, Title, Email, LinkedIn Profile (if available).'}
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '最少需要購買多少筆？' : 'Minimum order quantity?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '我們建議專案啟動至少以 500 筆為單位，這樣才能有足夠的樣本數進行測試與優化。' : 'We recommend starting with at least 500 leads to have a sufficient sample size for testing and optimization.'}
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '資料是合法的嗎？' : 'Is the data legal?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '是的。我們僅收集公開商業資訊（Public Business Data），符合 GDPR (B2B Legitimate Interest) 與各國隱私法規。' : 'Yes. We only collect public business data, compliant with GDPR (B2B Legitimate Interest) and international privacy laws.'}
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '適合我的產業嗎？' : 'Is it suitable for my industry?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '我們服務過機械、電子、紡織、化工、食品等多個產業。只要您的目標客戶是 B2B 企業，我們就能協助開發。' : 'We have served machinery, electronics, textile, chemical, food, and more. As long as your target is B2B, we can help.'}
                        </div>
                    </details>
                </div>

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-blue-50 p-8 rounded-sm border border-blue-100 sticky top-24">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{lang === 'zh' ? '索取名單範本' : 'Get Sample List'}</h3>
                    <p className="text-blue-800 mb-6 text-sm">
                        {lang === 'zh' ? '想確認資料品質？填寫表單，我們將寄送一份去識別化的名單範本給您參考。' : 'Want to check quality? Fill the form to get a de-identified sample list.'}
                    </p>
                    <Link href={`/${lang}/contact`} className="block w-full bg-blue-600 text-white font-bold py-3 rounded-sm hover:bg-blue-700 transition text-center">
                        {lang === 'zh' ? '聯繫我們索取' : 'Contact to Get Sample'}
                    </Link>
                </div>
            </div>
            </div>
        </div>
      </section>
    </main>
  )
}
