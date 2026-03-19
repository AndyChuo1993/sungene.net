import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'

export default function CTASection({ lang }: { lang: Lang }) {
  return (
    <section className="bg-blue-900 py-24 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          {lang === 'en' ? 'Which export path fits your product?' : lang === 'cn' ? '先确认你的产品适合哪种外销路径' : '先確認你的產品適合哪種外銷路徑'}
        </h2>
        <p className="mb-10 text-xl text-blue-100">
          {lang === 'en' ? 'Get a market assessment or book a strategy call to explore your opportunities.' : lang === 'cn' ? '取得市场评估或预约策略通话，找出最有效的开发方式。' : '取得市場評估或預約策略通話，找出最有效的開發方式。'}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={`/${lang}/export-market-analysis`}
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-lg font-bold text-blue-900 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
          >
            {lang === 'en' ? 'Get Market Assessment' : lang === 'cn' ? '取得市场评估' : '取得市場評估'}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center rounded-sm border-2 border-white px-8 py-4 text-lg font-bold text-white transition duration-300 hover:bg-white/10"
          >
            {lang === 'en' ? 'Book Strategy Call' : lang === 'cn' ? '预约策略通话' : '預約策略通話'}
          </Link>
        </div>
      </div>
    </section>
  )
}
