import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceComparison from '@/components/ServiceComparison'
import { UserCheck, MessageSquare, Briefcase, TrendingDown, Clock, Globe, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: '外貿外包服務 | Sales Outsourcing | SunGene',
  description: '專業的外貿業務外包團隊，提供海外客戶開發、詢盤處理、報價跟進等完整服務，協助企業低成本拓展全球市場。',
  keywords: '外貿外包, 外貿業務代工, 海外業務外包, 詢盤處理外包',
  openGraph: {
    title: '外貿外包服務 | Sales Outsourcing | SunGene',
    description: '專業的外貿業務外包團隊，協助企業低成本拓展全球市場。',
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
          <div className="inline-block bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
             {lang === 'zh' ? '外貿外包服務' : 'Sales Outsourcing'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '無需自建團隊，即刻擁有專業外貿戰力' : 'Instant Pro Sales Team, No Hiring Required'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '企業只需負責報價、出貨，其餘外貿工作由我們完成。' 
              : 'You handle quotation and shipping; we take care of all other export sales activities.'}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition">
                {t(lang, 'cta_consult')}
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
                     { label: lang === 'zh' ? '外貿外包服務' : 'Sales Outsourcing', href: `/${lang}/services/sales-outsourcing` }
                 ]} 
             />

            <div className="grid lg:grid-cols-12 gap-16 mt-8">
                <div className="lg:col-span-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '服務內容' : 'Service Details'}</h2>
                    <div className="prose prose-lg text-gray-600 mb-12">
                        <p>
                            {lang === 'zh' 
                             ? '招聘與培訓外貿業務不僅成本高，而且管理困難。人員流動率高往往導致客戶流失。SunGene 的外貿外包服務，提供穩定、專業且可擴充的業務支援，讓您專注於產品研發與製造。'
                             : 'Hiring and training export sales is costly and hard to manage. High turnover often leads to client loss. SunGene provides stable, professional, and scalable sales support, letting you focus on R&D and manufacturing.'}
                        </p>
                    </div>

                    {/* Who it is for */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '適合對象' : 'Who Is This For?'}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                          <UserCheck className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900">{lang === 'zh' ? '無外貿團隊的中小企業' : 'SMEs without Export Team'}</h4>
                            <p className="text-sm text-gray-600 mt-1">{lang === 'zh' ? '老闆分身乏術，需要專業人士接手。' : 'Owner is too busy, needs pros to take over.'}</p>
                          </div>
                        </div>
                        <div className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                          <Globe className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900">{lang === 'zh' ? '想測試新市場的企業' : 'Testing New Markets'}</h4>
                            <p className="text-sm text-gray-600 mt-1">{lang === 'zh' ? '不想貿然增聘，想先低成本測試水溫。' : 'Want to test waters before hiring full-time.'}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '交付內容' : 'Deliverables'}</h3>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                          <Briefcase className="w-10 h-10 text-indigo-600" />
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '專屬業務代表' : 'Dedicated Sales Rep'}</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                              {lang === 'zh' ? '配置一位熟悉您產品的資深業務，代表您與客戶溝通。' : 'A senior sales rep familiar with your product communicates on your behalf.'}
                            </p>
                          </div>
                        </div>
                        <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                          <MessageSquare className="w-10 h-10 text-blue-600" />
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '詢盤處理與跟進' : 'Inquiry Handling & Follow-up'}</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                              {lang === 'zh' ? '24小時內回覆詢盤，並持續跟進直到成交或結案。' : 'Reply within 24h and follow up until closed or lost.'}
                            </p>
                          </div>
                        </div>
                        <div className="p-6 flex items-start gap-4">
                          <FileText className="w-10 h-10 text-green-600" />
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '訂單與樣品管理' : 'Order & Sample Management'}</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                              {lang === 'zh' ? '協助安排樣品寄送、報價單製作與合約確認。' : 'Assist with sampling, quotations, and contract confirmation.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expected Results */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '預期成效' : 'Expected Results'}</h3>
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-indigo-50 rounded-lg">
                          <div className="text-3xl font-bold text-indigo-600 mb-2">50%</div>
                          <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '成本節省' : 'Cost Savings'}</div>
                        </div>
                        <div className="p-6 bg-indigo-50 rounded-lg">
                          <div className="text-3xl font-bold text-indigo-600 mb-2">24h</div>
                          <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '平均回覆時間' : 'Avg. Response Time'}</div>
                        </div>
                        <div className="p-6 bg-indigo-50 rounded-lg">
                          <div className="text-3xl font-bold text-indigo-600 mb-2">3x</div>
                          <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '擴充速度' : 'Scaling Speed'}</div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '為什麼選擇外包？' : 'Why Outsource?'}</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-blue-600">
                            <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '降低 50% 成本' : 'Cut Costs by 50%'}</h4>
                            <p className="text-sm text-gray-600">{lang === 'zh' ? '無需負擔勞健保、獎金與管理成本。' : 'No overhead for benefits, bonuses, or management.'}</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-indigo-600">
                            <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '立即啟動' : 'Start Immediately'}</h4>
                            <p className="text-sm text-gray-600">{lang === 'zh' ? '無需等待漫長的招聘與培訓期。' : 'Skip the long hiring and training process.'}</p>
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
                                <span>{lang === 'zh' ? '你們會直接跟客戶報價嗎？' : 'Do you quote prices directly?'}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {lang === 'zh' ? '我們會依照您提供的價格表進行初步報價。對於大額訂單或特殊需求，我們會將客戶需求轉交給您做最終決定，我們扮演協助溝通的角色。' : 'We quote based on your price list. For large orders or special requests, we forward details to you for the final decision, acting as communication facilitators.'}
                            </div>
                        </details>
                        <details className="group bg-white border border-gray-200 rounded-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                                <span>{lang === 'zh' ? '如何確保不會搶走我們的客戶？' : 'How to ensure you don\'t steal clients?'}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {lang === 'zh' ? '所有的客戶資料與聯繫記錄都屬於貴公司所有。我們會簽署嚴格的保密協議與競業禁止條款，確保您的權益。' : 'All client data and records belong to you. We sign strict NDAs and non-compete agreements to protect your interests.'}
                            </div>
                        </details>
                        <details className="group bg-white border border-gray-200 rounded-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                                <span>{lang === 'zh' ? '收費模式是怎樣的？' : 'How do you charge?'}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {lang === 'zh' ? '我們採「底薪 + 佣金」的模式。底薪確保業務的基本運作與報告，佣金則激勵業務達成業績目標。詳細費用請參考價格頁面。' : 'We use a "Base + Commission" model. Base covers operations and reporting; commission incentivizes performance. See Pricing page for details.'}
                            </div>
                        </details>
                        <details className="group bg-white border border-gray-200 rounded-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                                <span>{lang === 'zh' ? '如果不滿意可以換人嗎？' : 'Can we switch rep if unsatisfied?'}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {lang === 'zh' ? '可以。我們會定期檢視業務成效，若成效不佳或溝通不順暢，我們會協助更換合適的業務代表，無需額外費用。' : 'Yes. We review performance regularly. If results are poor or communication fails, we will replace the rep at no extra cost.'}
                            </div>
                        </details>
                    </div>

                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-indigo-50 p-8 rounded-sm border border-indigo-100 sticky top-24">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4">{lang === 'zh' ? '評估外包方案' : 'Evaluate Outsourcing'}</h3>
                        <p className="text-indigo-800 mb-6 text-sm">
                            {lang === 'zh' ? '想了解外包是否適合您的企業？立即諮詢我們的外貿顧問。' : 'Wondering if outsourcing fits you? Consult our export experts now.'}
                        </p>
                        <Link href={`/${lang}/contact`} className="block w-full bg-indigo-600 text-white font-bold py-3 rounded-sm hover:bg-indigo-700 transition text-center">
                            {lang === 'zh' ? '預約評估' : 'Book Assessment'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}
