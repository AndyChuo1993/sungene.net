import { Metadata } from 'next'
import { getDictionary, Lang } from '@/lib/i18n'
import DownloadForm from '@/components/DownloadForm'
import { CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const lang = params.lang
  return {
    title: lang === 'zh' ? '免費出口市場分析｜SunGene' : 'Free Export Market Analysis | SunGene',
    description:
      lang === 'zh'
        ? '提交產品與目標市場，我們提供出口市場與買家通路的初步分析建議。'
        : 'Submit your product and target markets. We’ll reply with an initial export market and channel analysis.',
    alternates: { canonical: `/${lang}/export-market-analysis`, languages: { zh: '/zh/export-market-analysis', en: '/en/export-market-analysis', 'x-default': '/en/export-market-analysis' } },
    robots: { index: false, follow: true },
  }
}

export default async function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const dict = await getDictionary(lang)
  const isZh = lang === 'zh'
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{isZh ? '免費出口市場分析' : 'Free Export Market Analysis'}</h1>
            <p className="mt-4 text-gray-600 leading-7">
              {isZh
                ? '告訴我們你的產品與目標市場，我們會回覆市場切入方向、買家角色與可行的開發策略。'
                : 'Tell us your product and target markets. We’ll reply with entry approach, buyer roles, and lead gen strategy.'}
            </p>
            <div className="mt-8 grid gap-4">
              {[
                isZh ? '市場機會與主要買家角色' : 'Market opportunities and key buyer roles',
                isZh ? '通路結構與切入建議' : 'Channel structure and entry recommendations',
                isZh ? '內容與開發節奏建議（SEO + Outbound）' : 'Content and outreach cadence recommendations (SEO + outbound)',
              ].map((t, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-blue-900" />
                  <div className="text-gray-700">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <DownloadForm dict={dict} lang={lang} resourceId="export-market-analysis" />
          </div>
        </div>
      </div>
    </main>
  )
}
