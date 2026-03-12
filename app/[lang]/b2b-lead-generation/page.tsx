import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B2B 客戶開發 | B2B Lead Generation | SunGene',
  description: '專業的 B2B 客戶開發服務，協助製造商與供應商找到全球潛在買家，建立穩定的商務合作關係。',
  keywords: 'B2B客戶開發, B2B外貿開發, 尋找B2B客戶, 海外B2B開發',
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? 'B2B 客戶開發' : 'B2B Lead Generation'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '突破 B2B 開發瓶頸，主動觸達決策者，建立長期合作夥伴。' 
              : 'Break through bottlenecks, reach decision-makers, and build long-term partnerships.'}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? 'B2B 客戶開發的關鍵' : 'Keys to B2B Lead Gen'}</h2>
                <p>
                    {lang === 'zh' 
                        ? 'B2B 開發不同於 B2C，決策流程長、參與者多、金額大。成功的關鍵在於「信任」與「精準」。'
                        : 'B2B is different. Long cycles, many stakeholders, high value. Trust and precision are key.'}
                </p>
                <p>
                    {lang === 'zh'
                        ? 'SunGene 透過數據驅動的 B2B 開發流程，協助您識別真正有需求的買家，並在對的時間點介入。'
                        : 'SunGene uses data-driven processes to identify buyers with real needs and engage them at the right time.'}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{lang === 'zh' ? '我們的 B2B 開發策略' : 'Our Strategy'}</h3>
                <ul className="space-y-4">
                    <li>
                        <strong>1. {lang === 'zh' ? '理想客戶輪廓 (ICP)' : 'Ideal Customer Profile'}</strong>: 
                        {lang === 'zh' ? ' 定義最適合您產品的買家特徵（規模、產業、地區）。' : ' Defining the perfect buyer for your product.'}
                    </li>
                    <li>
                        <strong>2. {lang === 'zh' ? '多渠道觸達 (Multi-Channel)' : 'Multi-Channel Outreach'}</strong>: 
                        {lang === 'zh' ? ' 結合 Email、LinkedIn 與電話開發，全方位接觸潛在客戶。' : ' Combining Email, LinkedIn, and calls.'}
                    </li>
                    <li>
                        <strong>3. {lang === 'zh' ? '內容行銷 (Content Marketing)' : 'Content Marketing'}</strong>: 
                        {lang === 'zh' ? ' 提供白皮書、案例研究與產業趨勢，建立專家形象。' : ' Providing whitepapers and cases to build authority.'}
                    </li>
                    <li>
                        <strong>4. {lang === 'zh' ? '商機培育 (Lead Nurturing)' : 'Lead Nurturing'}</strong>: 
                        {lang === 'zh' ? ' 持續跟進未成交客戶，等待採購時機成熟。' : ' Keeping prospects warm until they are ready to buy.'}
                    </li>
                </ul>

                <div className="mt-12 bg-blue-50 p-8 rounded-sm border-l-4 border-blue-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{lang === 'zh' ? '專注於高價值 B2B 客戶' : 'Focus on High-Value Clients'}</h4>
                    <p className="mb-4">
                        {lang === 'zh' ? '不再浪費時間在無效詢盤。讓我們協助您找到願意建立長期合作關係的優質買家。' : 'Stop wasting time on low-quality leads. Find buyers ready for long-term partnerships.'}
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
