import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceComparison from '@/components/ServiceComparison'
import { Send, BarChart3, MessageCircle, FileText, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: '海外客戶開發服務 | Cold Outreach | SunGene',
  description: '系統化的外貿客戶開發服務，透過高回覆率的開發信 (Cold Email) 與 LinkedIn 社交銷售，協助企業建立商務對話。',
  keywords: '海外客戶開發, 外貿開發信, Cold Email, LinkedIn開發, 主動式銷售',
  openGraph: {
    title: '海外客戶開發服務 | Cold Outreach | SunGene',
    description: '系統化的外貿客戶開發服務，透過高回覆率的開發信 (Cold Email) 與 LinkedIn 社交銷售。',
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
          <div className="inline-block bg-green-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
             {lang === 'zh' ? '交付海外客戶詢盤' : 'Deliver Overseas Inquiries'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '主動出擊，建立商務連結' : 'Proactive Outreach, Building Connections'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '我們持續進行海外客戶開發，並將客戶詢盤交付給企業跟進。' 
              : 'We continuously conduct overseas outreach and deliver qualified inquiries for you to follow up.'}
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
                     { label: lang === 'zh' ? '海外客戶開發' : 'Cold Outreach', href: `/${lang}/services/cold-outreach` }
                 ]} 
             />

            <div className="grid lg:grid-cols-12 gap-16 mt-8">
                <div className="lg:col-span-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '服務內容' : 'Service Details'}</h2>
                    <div className="prose prose-lg text-gray-600 mb-12">
                        <p>
                            {lang === 'zh' 
                             ? '開發信寄出後石沉大海？這是大多數外貿企業的痛點。SunGene 的開發服務不僅僅是發送郵件，而是透過精心設計的文案、多波段跟進策略以及 A/B 測試，找出最有效的溝通方式。'
                             : 'Cold emails ignored? SunGene goes beyond sending emails. We use crafted copy, multi-touch follow-ups, and A/B testing to find the most effective communication strategy.'}
                        </p>
                    </div>

                    {/* Who it is for */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '適合對象' : 'Who Is This For?'}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                          <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900">{lang === 'zh' ? '想主動開發市場的企業' : 'Companies Targeting New Markets'}</h4>
                            <p className="text-sm text-gray-600 mt-1">{lang === 'zh' ? '不被動等待展會或平台詢盤。' : 'Not waiting passively for trade show leads.'}</p>
                          </div>
                        </div>
                        <div className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                          <MessageCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900">{lang === 'zh' ? '需要提升回覆率的團隊' : 'Teams Needing Better Reply Rates'}</h4>
                            <p className="text-sm text-gray-600 mt-1">{lang === 'zh' ? '現有開發方式效果不彰，需要專業優化。' : 'Current methods failing? Need professional optimization.'}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '交付內容' : 'Deliverables'}</h3>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                          <FileText className="w-10 h-10 text-blue-600" />
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '客製化開發信序列' : 'Custom Email Sequences'}</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                              {lang === 'zh' ? '針對不同客群撰寫 4-7 封高轉換文案。' : '4-7 high-converting emails tailored to segments.'}
                            </p>
                          </div>
                        </div>
                        <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                          <Send className="w-10 h-10 text-green-600" />
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '自動化發送與跟進' : 'Automated Sending & Follow-up'}</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                              {lang === 'zh' ? '設定發信系統，確保信件送達並自動跟進。' : 'Setup sending infrastructure, ensure delivery and auto follow-up.'}
                            </p>
                          </div>
                        </div>
                        <div className="p-6 flex items-start gap-4">
                          <BarChart3 className="w-10 h-10 text-indigo-600" />
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '詳細成效報告' : 'Detailed Performance Reports'}</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                              {lang === 'zh' ? '每週提供開信率、回覆率與潛在客戶名單。' : 'Weekly stats on Open Rate, Reply Rate, and Leads.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expected Results */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '預期成效' : 'Expected Results'}</h3>
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-green-50 rounded-lg">
                          <div className="text-3xl font-bold text-green-600 mb-2">40-60%</div>
                          <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '平均開信率' : 'Avg. Open Rate'}</div>
                        </div>
                        <div className="p-6 bg-green-50 rounded-lg">
                          <div className="text-3xl font-bold text-green-600 mb-2">5-15%</div>
                          <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '平均回覆率' : 'Avg. Reply Rate'}</div>
                        </div>
                        <div className="p-6 bg-green-50 rounded-lg">
                          <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                          <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '每月商務對話' : 'Monthly Meetings'}</div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '為什麼選擇我們？' : 'Why Choose Us?'}</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-blue-600">
                            <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '平均開信率 40%+' : '40%+ Open Rate'}</h4>
                            <p className="text-sm text-gray-600">{lang === 'zh' ? '遠高於業界平均，確保訊息被看見。' : 'Far above industry average, ensuring visibility.'}</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-green-600">
                            <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '拒絕罐頭訊息' : 'No Generic Spam'}</h4>
                            <p className="text-sm text-gray-600">{lang === 'zh' ? '高度個性化的內容，建立信任感。' : 'Highly personalized content builds trust.'}</p>
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
                                <span>{lang === 'zh' ? '這算是發垃圾信嗎？' : 'Is this spamming?'}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {lang === 'zh' ? '不是。我們發送的是針對特定對象的高相關性商務信件 (Cold Email)，並非大量群發的垃圾郵件 (Spam)。我們會嚴格遵守各國的反垃圾郵件法規。' : 'No. We send highly relevant business emails (Cold Email) to specific targets, not mass spam. We strictly adhere to anti-spam regulations.'}
                            </div>
                        </details>
                        <details className="group bg-white border border-gray-200 rounded-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                                <span>{lang === 'zh' ? '可以用我們公司的名義發送嗎？' : 'Send on our behalf?'}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {lang === 'zh' ? '可以。我們可以協助設定專屬的發信域名，讓收件人看到的是來自貴公司的郵件，提升專業度與信任感。' : 'Yes. We can help set up a dedicated sending domain so recipients see emails coming from your company, enhancing professionalism and trust.'}
                            </div>
                        </details>
                        <details className="group bg-white border border-gray-200 rounded-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                                <span>{lang === 'zh' ? '多久可以看到成效？' : 'How long to see results?'}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {lang === 'zh' ? '通常在專案啟動後 2-3 週內會開始收到潛在客戶的回覆。前兩週我們專注於技術設定與名單篩選。' : 'Typically, replies start coming in 2-3 weeks after launch. The first two weeks are for tech setup and list building.'}
                            </div>
                        </details>
                        <details className="group bg-white border border-gray-200 rounded-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                                <span>{lang === 'zh' ? '是否提供保密協定 (NDA)？' : 'Do you provide NDA?'}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {lang === 'zh' ? '是的，我們非常重視您的商業機密。在合作開始前，我們很樂意簽署 NDA 以保障雙方權益。' : 'Yes, we value your confidentiality. We are happy to sign an NDA before we start.'}
                            </div>
                        </details>
                    </div>

                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-green-50 p-8 rounded-sm border border-green-100 sticky top-24">
                        <h3 className="text-xl font-bold text-green-900 mb-4">{lang === 'zh' ? '預約策略諮詢' : 'Strategy Consultation'}</h3>
                        <p className="text-green-800 mb-6 text-sm">
                            {lang === 'zh' ? '不確定如何開始？與我們的外貿顧問聊聊您的產品與目標市場。' : 'Not sure where to start? Talk to our consultants about your product and target market.'}
                        </p>
                        <Link href={`/${lang}/contact`} className="block w-full bg-green-600 text-white font-bold py-3 rounded-sm hover:bg-green-700 transition text-center">
                            {lang === 'zh' ? '預約免費諮詢' : 'Book Free Consultation'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}
