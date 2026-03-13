import { Metadata } from 'next'
import { getDictionary, Lang } from '@/lib/i18n'
import DownloadForm from '@/components/DownloadForm'
import { CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const lang = params.lang
  return {
    title: lang === 'zh' ? '免費索取 100 位潛在買家名單｜SunGene' : 'Get 100 Potential Buyers List (Free) | SunGene',
    description:
      lang === 'zh'
        ? '留下你的產品與目標市場，我們提供 100 位潛在海外買家名單（依情況調整）。'
        : 'Share your product and target market. We’ll send a list of 100 potential overseas buyers (depending on feasibility).',
    alternates: { canonical: `/${lang}/buyers-list`, languages: { zh: '/zh/buyers-list', en: '/en/buyers-list' } },
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{isZh ? '免費索取 100 位潛在海外買家名單' : 'Get 100 Potential Overseas Buyers (Free)'}</h1>
            <p className="mt-4 text-gray-600 leading-7">
              {isZh
                ? '提供產品與目標市場，我們會用買家畫像與名單建立邏輯，整理一份可直接開發的潛在買家清單。'
                : 'Share your product and target market. We’ll compile a prospect list you can start outreach with.'}
            </p>
            <div className="mt-8 grid gap-4">
              {[
                isZh ? '依產業與通路角色分層（Importer/Distributor/Brand）' : 'Segmented by channel roles (importer/distributor/brand)',
                isZh ? '附上網站與公司基本資訊，方便快速驗證' : 'Includes website and basic company info for quick validation',
                isZh ? '可搭配開發信框架與跟進節奏，直接啟動' : 'Works with outreach framework and follow-up cadence',
              ].map((t, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-blue-900" />
                  <div className="text-gray-700">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <DownloadForm dict={dict} lang={lang} resourceId="buyers-list-100" />
          </div>
        </div>
      </div>
    </main>
  )
}

