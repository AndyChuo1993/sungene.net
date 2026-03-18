import { Metadata } from 'next'
import { getDictionary, Lang } from '@/lib/i18n'
import DownloadForm from '@/components/DownloadForm'
import { CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = lang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'

  return {
    title: lang === 'en' ? 'Free Export Market Analysis | SunGene' : (lang === 'cn' ? '免费出口市场分析｜SunGene' : '免費出口市場分析｜SunGene'),
    description:
      isChinese
        ? '提交產品與目標市場，我們提供出口市場與買家通路的初步分析建議。'
        : 'Submit your product and target markets. We’ll reply with an initial export market and channel analysis.',
    alternates: { 
      canonical: `${baseUrl}/${lang}/export-market-analysis`, 
      languages: { 
        'zh-CN': 'https://sungene.net/cn/export-market-analysis', 
        'zh-TW': 'https://sungenelite.com/zh/export-market-analysis', 
        'en': 'https://sungene.net/en/export-market-analysis', 
        'x-default': 'https://sungene.net/en/export-market-analysis' 
      } 
    },
    robots: { index: false, follow: true },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const isChinese = lang !== 'en'
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{isChinese ? '免費出口市場分析' : 'Free Export Market Analysis'}</h1>
            <p className="mt-4 text-gray-600 leading-7">
              {isChinese
                ? '告訴我們你的產品與目標市場，我們會回覆市場切入方向、買家角色與可行的開發策略。'
                : 'Tell us your product and target markets. We’ll reply with entry approach, buyer roles, and lead gen strategy.'}
            </p>
            <div className="mt-8 grid gap-4">
              {[
                isChinese ? '市場機會與主要買家角色' : 'Market opportunities and key buyer roles',
                isChinese ? '通路結構與切入建議' : 'Channel structure and entry recommendations',
                isChinese ? '內容與開發節奏建議（搜尋優化＋主動開發）' : 'Content and outreach cadence recommendations (SEO + outbound)',
              ].map((t, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-blue-900" />
                  <div className="text-gray-700">{t}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-700">
              <div className="mb-2 font-bold text-gray-900">{isChinese ? '聯絡資訊' : 'Company Information'}</div>
              <div>上瑾錸有限公司</div>
              <div>統一編號：94111922</div>
              <div>台中市中區光復路201號</div>
              <div>+886 43703 2705</div>
              <div>LINE帳號：@sungene</div>
              <div className="pt-1">厦门上瑾铼贸易有限公司</div>
              <div>厦门市同安区滨海西大道6788-1号银城智谷A1栋1001单元之二</div>
              <div>电话：18144132078 (微信同號)</div>
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
