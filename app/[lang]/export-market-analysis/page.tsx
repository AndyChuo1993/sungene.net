import { Metadata } from 'next'
import { getDictionary, Lang } from '@/lib/i18n'
import DownloadForm from '@/components/DownloadForm'
import { CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = 'https://sungene.net'

  return {
    title: lang === 'en' ? 'Get Market Entry Advice | SunGene' : (lang === 'cn' ? '获取市场切入建议｜SunGene' : '取得市場切入建議｜SunGene'),
    description:
      lang === 'en'
        ? 'Submit your product and target markets. We’ll reply with an initial export market and channel analysis.'
        : lang === 'cn'
          ? '提交产品与目标市场，我们提供出口市场与买家通路的初步切入建议。'
          : '提交產品與目標市場，我們提供出口市場與買家通路的初步切入建議。',
    alternates: { 
      canonical: `${baseUrl}/${lang}/export-market-analysis`, 
      languages: { 
        'zh-CN': 'https://sungene.net/cn/export-market-analysis', 
        'zh-TW': 'https://sungene.net/zh/export-market-analysis', 
        'en': 'https://sungene.net/en/export-market-analysis', 
        'x-default': 'https://sungene.net/cn/export-market-analysis' 
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{lang === 'en' ? 'Get Market Entry Advice' : lang === 'cn' ? '获取市场切入建议' : '取得市場切入建議'}</h1>
            <p className="mt-4 text-gray-600 leading-7">
              {lang === 'en'
                ? 'Tell us your product and target markets. We’ll reply with entry approach, buyer roles, and lead gen strategy.'
                : lang === 'cn'
                  ? '告诉我们你的产品与目标市场，我们会回复市场切入方向、买家角色与可行的开发策略。'
                  : '告訴我們你的產品與目標市場，我們會回覆市場切入方向、買家角色與可行的開發策略。'}
            </p>
            <div className="mt-8 grid gap-4">
              {[
                lang === 'en' ? 'Market opportunities and key buyer roles' : lang === 'cn' ? '市场机会与主要买家角色' : '市場機會與主要買家角色',
                lang === 'en' ? 'Channel structure and entry recommendations' : lang === 'cn' ? '通路结构与切入建议' : '通路結構與切入建議',
                lang === 'en' ? 'Content and outreach cadence recommendations' : lang === 'cn' ? '内容与开发节奏建议' : '內容與開發節奏建議',
              ].map((t, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-blue-900" />
                  <div className="text-gray-700">{t}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-700">
              <div className="mb-2 font-bold text-gray-900">{lang === 'en' ? 'Company Information' : lang === 'cn' ? '联络资讯' : '聯絡資訊'}</div>
              {lang === 'en' ? (
                <>
                  <div className="font-bold">SunGene Co., Ltd.</div>
                  <div>Tax ID: 94111922</div>
                  <div>No. 201, Guangfu Rd., Central Dist., Taichung City, Taiwan</div>
                  <div>Phone: +886 43703 2705</div>
                  <div>LINE: @sungene</div>
                  <div>Email: contact@sungenelite.com</div>
                  
                  <div className="pt-4 font-bold">Xiamen SunGene Trading Co., Ltd.</div>
                  <div>Unit 1001-2, Building A1, Yincheng Zhigu, No. 6788-1 Binhai West Avenue, Tongan District, Xiamen City</div>
                  <div>Phone: 18144132078 (WeChat included)</div>
                </>
              ) : lang === 'cn' ? (
                <>
                  <div className="font-bold">上瑾铼有限公司</div>
                  <div>统一编号：94111922</div>
                  <div>台中市中区光复路201号</div>
                  <div>+886 43703 2705</div>
                  <div>LINE账号：@sungene</div>
                  <div>电子邮箱：contact@sungenelite.com</div>
                  
                  <div className="pt-4 font-bold">厦门上瑾铼贸易有限公司</div>
                  <div>厦门市同安区滨海西大道6788-1号银城智谷A1栋1001单元之二</div>
                  <div>电话：18144132078 (微信同号)</div>
                </>
              ) : (
                <>
                  <div className="font-bold">上瑾錸有限公司</div>
                  <div>統一編號：94111922</div>
                  <div>台中市中區光復路201號</div>
                  <div>+886 43703 2705</div>
                  <div>LINE帳號：@sungene</div>
                  <div>電子信箱：contact@sungenelite.com</div>
                  
                  <div className="pt-4 font-bold">厦门上瑾铼贸易有限公司</div>
                  <div>厦门市同安区滨海西大道6788-1号银城智谷A1栋1001单元之二</div>
                  <div>电话：18144132078 (微信同號)</div>
                </>
              )}
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
