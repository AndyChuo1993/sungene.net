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
          <div className="text-blue-600 font-bold mb-4 uppercase tracking-wide">01 Who We Are</div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            {lang === 'zh' ? '我們是誰' : 'Who We Are'}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {lang === 'zh' 
              ? 'SunGene 是一家專注於外貿增長的服務公司，我們不賣軟體，而是直接幫製造商找到買家。' 
              : 'SunGene is a specialized export growth partner. We don\'t sell software; we deliver buyers.'}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {lang === 'zh'
              ? '透過精準的名單與專業的開發流程，我們協助台灣企業拓展全球市場。我們的團隊由資深外貿顧問、數據分析師與商務開發專家組成，致力於解決傳統外貿「找不到人、聯絡不上、談不下來」的痛點。'
              : 'By combining data-driven prospecting with professional outreach, we help manufacturers expand their global footprint efficiently. Our team consists of export consultants, data analysts, and business development experts dedicated to solving the core challenges of "finding, reaching, and closing" overseas buyers.'}
          </p>
        </div>
      </section>

      {/* 2. What We Believe */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-blue-600 font-bold mb-4 uppercase tracking-wide">02 Our Belief</div>
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
          <div className="text-blue-600 font-bold mb-4 uppercase tracking-wide">03 Our Methodology</div>
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

      {/* 4. Future Vision */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-blue-300 font-bold mb-4 uppercase tracking-wide">04 Our Future</div>
          <h2 className="text-3xl font-bold mb-8 text-white">
            {lang === 'zh' ? 'SunGene 未來方向' : 'Our Future Vision'}
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12">
            {lang === 'zh'
              ? 'SunGene 不只是外貿代工團隊，我們正在建立一套更有效率的外貿增長方法。從客戶資料、開發流程、案例方法論，到未來的合作網絡與平台工具，我們希望讓更多製造商更容易進入全球市場。'
              : 'SunGene is more than a service provider. We are building a more structured way for manufacturers to grow internationally. From buyer data and outreach execution to case-based know-how and future partner infrastructure, our long-term goal is to create a scalable export growth ecosystem.'}
          </p>
          <Link href={`/${lang}/contact`} className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
            {t(lang, 'cta_start')}
          </Link>
        </div>
      </section>
    </main>
  )
}
