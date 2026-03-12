import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'about_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(lang, 'about_title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t(lang, 'hero_subtitle')}</p>
        </div>
      </section>

      {/* 1. Who We Are */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-blue-600 font-bold mb-4 uppercase tracking-wide">Who We Are</div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            {lang === 'zh' ? '我們是誰' : 'Who We Are'}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {lang === 'zh' 
              ? 'SunGene 是一家專注於外貿增長的服務公司，我們不賣軟體，而是直接幫製造商找到買家。' 
              : 'SunGene is a specialized export growth partner. We don\'t sell software; we deliver buyers.'}
          </p>
          <p className="text-lg text-gray-800 font-bold mb-8 p-6 bg-blue-50 border-l-4 border-blue-600">
             {lang === 'zh' 
                ? 'SunGene 不只是外貿服務供應商，我們正在建立一套可擴充的外貿增長系統。' 
                : 'SunGene is not just a service provider; we are building a scalable export growth system.'}
          </p>
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{lang === 'zh' ? '我們的服務範圍' : 'Our Service Coverage'}</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                    <div className="font-bold text-blue-600 mb-2">{lang === 'zh' ? '主要服務客戶' : 'We Serve'}</div>
                    <ul className="text-gray-600 space-y-1">
                        <li>• {lang === 'zh' ? '台灣製造商與供應商' : 'Taiwan Manufacturers'}</li>
                        <li>• {lang === 'zh' ? '中國工廠與外貿企業' : 'China Factories'}</li>
                        <li>• {lang === 'zh' ? '東南亞供應鏈企業' : 'Southeast Asia Suppliers'}</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                    <div className="font-bold text-green-600 mb-2">{lang === 'zh' ? '協助開發市場' : 'Target Markets'}</div>
                    <ul className="text-gray-600 space-y-1">
                        <li>• {lang === 'zh' ? '歐洲 (德國/英國/荷蘭)' : 'Europe (Germany/UK/Netherlands)'}</li>
                        <li>• {lang === 'zh' ? '北美 (美國/加拿大)' : 'North America (USA/Canada)'}</li>
                        <li>• {lang === 'zh' ? '日本與全球市場' : 'Japan & Global Markets'}</li>
                    </ul>
                </div>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            {lang === 'zh'
              ? '透過精準的名單與專業的開發流程，我們協助企業拓展全球市場。我們的團隊由資深外貿顧問、數據分析師與商務開發專家組成，致力於解決傳統外貿「找不到人、聯絡不上、談不下來」的痛點。'
              : 'By combining data-driven prospecting with professional outreach, we help manufacturers expand their global footprint efficiently. Our team consists of export consultants, data analysts, and business development experts dedicated to solving the core challenges of "finding, reaching, and closing" overseas buyers.'}
          </p>
        </div>
      </section>

      {/* 2. What We Believe */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-blue-600 font-bold mb-4 uppercase tracking-wide">Our Belief</div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            {lang === 'zh' ? '我們相信什麼' : 'What We Believe'}
          </h2>
          <div className="bg-white p-8 rounded-sm border-l-4 border-blue-600 shadow-sm">
             <p className="text-2xl text-gray-800 font-serif italic leading-relaxed mb-6">
                "{lang === 'zh' ? '好產品不該被埋沒，外貿開發應該更科學、更精準。' : 'Great products shouldn\'t go unnoticed. Export sales should be scientific and precise.'}"
             </p>
             <p className="text-gray-600 text-lg">
                {lang === 'zh'
                  ? '傳統的「參展等待」與「亂槍打鳥」已經失效。我們相信，透過數據驅動的主動開發 (Data-Driven Outreach)，任何有競爭力的製造商都能直接與全球買家建立連結。'
                  : 'Traditional "wait-and-see" exhibition strategies are obsolete. We believe that through Data-Driven Outreach, any competitive manufacturer can establish direct connections with global buyers.'}
             </p>
          </div>
        </div>
      </section>

      {/* 3. How We Do It (Methodology) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-blue-600 font-bold mb-4 uppercase tracking-wide">Our Methodology</div>
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            {lang === 'zh' ? '我們怎麼做外貿增長' : 'Our Growth Methodology'}
          </h2>
          
          <div className="space-y-12 relative">
             {/* Vertical Line */}
             <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>

             {[
                { title: lang === 'zh' ? 'Buyer Data (名單數據)' : 'Buyer Data', desc: lang === 'zh' ? '建立精準的決策人資料庫，而非泛泛的企業名單。' : 'Building precise decision-maker databases, not generic lists.' },
                { title: lang === 'zh' ? 'Outreach Execution (開發執行)' : 'Outreach Execution', desc: lang === 'zh' ? '高客製化的開發信與多點觸達策略。' : 'Highly customized cold emails and multi-touch strategies.' },
                { title: lang === 'zh' ? 'Sales Support (商務支援)' : 'Sales Support', desc: lang === 'zh' ? '專業的詢盤處理與談判建議，確保轉化。' : 'Professional inquiry handling and negotiation support to ensure conversion.' },
                { title: lang === 'zh' ? 'Export Growth (外貿增長)' : 'Export Growth', desc: lang === 'zh' ? '建立可複製、可預測的訂單來源。' : 'Establishing a replicable and predictable source of orders.' }
             ].map((step, idx) => (
                <div key={idx} className="relative flex items-start pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 z-10">
                        {idx + 1}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 text-lg">{step.desc}</p>
                    </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-blue-300 font-bold mb-4 uppercase tracking-wide">Our Vision</div>
          <h2 className="text-3xl font-bold mb-12 text-white">
            {lang === 'zh' ? '我們的願景與使命' : 'Our Vision & Mission'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-xl font-bold mb-4 text-blue-200">{lang === 'zh' ? '公司使命' : 'Mission'}</h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                  {lang === 'zh' 
                    ? '建立可規模化的外貿增長系統，讓每一個好產品都能找到對的國際買家。' 
                    : 'To build a scalable export growth system where every quality product finds its right international buyer.'}
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4 text-blue-200">{lang === 'zh' ? '未來願景' : 'Vision'}</h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                  {lang === 'zh' 
                    ? '成為亞洲製造商進入全球市場的基礎設施，從數據、工具到服務，打造完整的外貿生態系。' 
                    : 'To become the infrastructure for Asian manufacturers entering global markets, building a complete export ecosystem from data and tools to services.'}
                </p>
            </div>
          </div>

          <div className="text-center mt-12 pt-12 border-t border-blue-800">
             <Link href={`/${lang}/contact`} className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
                {t(lang, 'cta_start')}
             </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
