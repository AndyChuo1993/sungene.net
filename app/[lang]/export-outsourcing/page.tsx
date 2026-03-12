import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '外貿外包服務 | Export Outsourcing | SunGene',
  description: '專業的外貿業務外包團隊，提供海外客戶開發、詢盤處理、報價跟進等完整服務，協助企業低成本拓展全球市場。',
  keywords: '外貿外包, 外貿業務代工, 海外業務外包, 詢盤處理外包',
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '外貿外包服務' : 'Export Sales Outsourcing'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '無需建立龐大團隊，也能擁有專業的外貿業務部門。' 
              : 'Scale globally without hiring a massive internal team.'}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-sm hover:bg-blue-500 transition">
                {t(lang, 'cta_consult')}
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg mx-auto text-gray-600">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '為什麼選擇外貿外包？' : 'Why Outsource Export Sales?'}</h2>
                <p>
                    {lang === 'zh' 
                        ? '建立內部的外貿團隊成本高昂且管理困難。招聘、培訓、留才，以及長時間的市場試錯，都是企業面臨的挑戰。'
                        : 'Building an internal export team is costly and hard to manage. Recruiting, training, and long trial periods are major challenges.'}
                </p>
                <p>
                    {lang === 'zh'
                        ? '外貿外包 (Export Outsourcing) 讓企業能夠立即擁有具備市場經驗與開發能力的專業團隊，專注於生產與產品研發。'
                        : 'Export Outsourcing gives you immediate access to experienced professionals, allowing you to focus on production and R&D.'}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{lang === 'zh' ? '我們的外包服務內容' : 'Our Services'}</h3>
                <ul className="space-y-4">
                    <li>
                        <strong>1. {lang === 'zh' ? '詢盤管理與篩選' : 'Inquiry Management'}</strong>: 
                        {lang === 'zh' ? ' 快速回應並過濾無效詢盤，將高品質潛在客戶轉交給您。' : ' Rapid response and screening of inquiries.'}
                    </li>
                    <li>
                        <strong>2. {lang === 'zh' ? '商務溝通與談判' : 'Negotiation Support'}</strong>: 
                        {lang === 'zh' ? ' 協助處理報價、樣品寄送與商務條件談判。' : ' Support with quotations, samples, and terms negotiation.'}
                    </li>
                    <li>
                        <strong>3. {lang === 'zh' ? '長期客戶跟進' : 'Follow-up'}</strong>: 
                        {lang === 'zh' ? ' 建立穩定的客戶關係，提升長期訂單轉化率。' : ' Build stable relationships to increase conversion rates.'}
                    </li>
                    <li>
                        <strong>4. {lang === 'zh' ? '市場情報回饋' : 'Market Feedback'}</strong>: 
                        {lang === 'zh' ? ' 定期提供市場反饋，協助產品優化與策略調整。' : ' Regular feedback for product optimization.'}
                    </li>
                </ul>

                <div className="mt-12 bg-blue-50 p-8 rounded-sm border-l-4 border-blue-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{lang === 'zh' ? '降低成本，提升效率' : 'Lower Cost, Higher Efficiency'}</h4>
                    <p className="mb-4">
                        {lang === 'zh' ? '透過外貿外包，您可以節省 50% 以上的人力成本，並獲得更專業的市場開發服務。' : 'Save over 50% on labor costs while getting professional market development services.'}
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
