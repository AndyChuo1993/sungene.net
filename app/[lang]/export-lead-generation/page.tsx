import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '外貿客戶開發服務 | Export Lead Generation | SunGene',
  description: '專業的外貿客戶開發服務，協助企業建立精準海外買家名單，透過系統化開發流程，主動觸達全球潛在客戶。',
  keywords: '外貿客戶開發, 海外買家名單, B2B客戶開發, 外貿開發信',
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '外貿客戶開發服務' : 'Export Lead Generation Service'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '建立精準的海外買家名單，主動出擊，不再被動等待詢盤。' 
              : 'Build precise overseas buyer lists and proactively reach out. Stop waiting for inquiries.'}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={`/${lang}/free-market-analysis`} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-sm hover:bg-blue-500 transition">
                {t(lang, 'cta_analysis')}
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg mx-auto text-gray-600">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '為什麼需要主動開發海外客戶？' : 'Why Proactive Export Lead Gen?'}</h2>
                <p>
                    {lang === 'zh' 
                        ? '傳統的 B2B 外貿模式往往依賴展會或 B2B 平台（如 Alibaba）等待客戶上門。然而，隨著競爭加劇，被動等待的詢盤質量越來越低，價格競爭卻越來越激烈。'
                        : 'Traditional B2B export models rely on trade shows or platforms like Alibaba. However, with increasing competition, inbound inquiries are lower quality while price wars intensify.'}
                </p>
                <p>
                    {lang === 'zh'
                        ? '主動客戶開發 (Outbound Sales) 讓企業能夠掌握主導權，直接鎖定最理想的潛在買家，避開紅海競爭。'
                        : 'Outbound Sales allows you to take control, targeting ideal buyers directly and avoiding red ocean competition.'}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{lang === 'zh' ? '我們的外貿開發流程' : 'Our Process'}</h3>
                <ul className="space-y-4">
                    <li>
                        <strong>1. {lang === 'zh' ? '目標市場分析' : 'Market Analysis'}</strong>: 
                        {lang === 'zh' ? ' 確認產品適合的國家與買家類型。' : ' Identify target countries and buyer personas.'}
                    </li>
                    <li>
                        <strong>2. {lang === 'zh' ? '買家名單建立' : 'List Building'}</strong>: 
                        {lang === 'zh' ? ' 透過進口數據與產業資料庫，整理精準的決策人聯絡方式。' : ' Build verified contact lists using import data and industry databases.'}
                    </li>
                    <li>
                        <strong>3. {lang === 'zh' ? '開發信撰寫' : 'Copywriting'}</strong>: 
                        {lang === 'zh' ? ' 設計高回覆率的 Cold Email 與 LinkedIn 訊息。' : ' Craft high-response cold emails and LinkedIn messages.'}
                    </li>
                    <li>
                        <strong>4. {lang === 'zh' ? '系統化觸達' : 'Systematic Outreach'}</strong>: 
                        {lang === 'zh' ? ' 透過多波段跟進，確保訊息被看到並獲得回覆。' : ' Multi-touch follow-ups to ensure engagement.'}
                    </li>
                </ul>

                <div className="mt-12 bg-blue-50 p-8 rounded-sm border-l-4 border-blue-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{lang === 'zh' ? '立即開始您的外貿開發' : 'Start Your Export Growth'}</h4>
                    <p className="mb-4">
                        {lang === 'zh' ? '不要讓好產品被埋沒。讓我們協助您建立穩定的海外客戶來源。' : 'Don\'t let great products go unnoticed. Let us help you build a stable source of overseas clients.'}
                    </p>
                    <Link href={`/${lang}/contact`} className="text-blue-600 font-bold hover:underline">
                        {t(lang, 'cta_consult')} →
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}
