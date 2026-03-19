import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = 'https://sungene.net'

  return {
    title: `${lang === 'en' ? 'About Us' : (lang === 'cn' ? '关于我们' : '關於我們')} | SunGene`,
    description:
      isChinese
        ? 'SunGene 協助外銷企業建立一套可持續運作的海外客戶開發、通路拓展與成交推進系統。'
        : 'SunGene helps export companies build a repeatable system for overseas buyer development, channel expansion, and deal progression.',
    alternates: {
      canonical: `${baseUrl}/${lang}/about`,
      languages: {
        'zh-CN': 'https://sungene.net/cn/about',
        'zh-TW': 'https://sungene.net/zh/about',
        'en': 'https://sungene.net/en/about',
        'x-default': 'https://sungene.net/cn/about',
      },
    },
    openGraph: {
      title: `${lang === 'en' ? 'About Us' : (lang === 'cn' ? '关于我们' : '關於我們')} | SunGene`,
      description:
        isChinese
          ? 'SunGene 協助外銷企業建立一套可持續運作的海外客戶開發、通路拓展與成交推進系統。'
          : 'SunGene helps export companies build a repeatable system for overseas buyer development, channel expansion, and deal progression.',
      url: `${baseUrl}/${lang}/about`,
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'

  const pillars = [
    {
      title: lang === 'en' ? 'Buyer research and data buildout' : (lang === 'cn' ? '采购与决策人资料建置' : '採購與決策人資料建置'),
      desc:
        isChinese
          ? '我們先把市場、買家角色與決策人資料建好，再談開發效率。從公司、角色到可投遞聯絡方式，都會先整理清楚。'
          : 'We start with market research, buyer roles, and decision-maker data buildout before outreach volume: companies, roles, and deliverable contacts are clarified first.',
    },
    {
      title: lang === 'en' ? 'Outbound outreach and steady follow-up' : (lang === 'cn' ? '主动開發與持续跟进' : '主動開發與持續跟進'),
      desc:
        isChinese
          ? '我們用多次跟進節奏，而不是只寄一封信就結束。讓外銷開發變成可追蹤流程。'
          : 'We run structured follow-up cadences instead of one-off outreach, making export development trackable.',
    },
    {
      title: lang === 'en' ? 'Inquiry triage and sales support' : (lang === 'cn' ? '询盘整理與成交支援' : '詢價整理與成交支援'),
      desc:
        isChinese
          ? '把回覆整理成可跟進的詢價與下一步，讓你的團隊專注報價、樣品與出貨。'
          : 'We package replies into followable opportunities so your team can focus on quoting, samples, and shipment.',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gray-900 py-24 text-white">
        <Image src="/banner/banner1.png" alt="SunGene team and export workflow" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gray-950/70" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
              {lang === 'en' ? 'About SunGene' : (lang === 'cn' ? '關於 SunGene' : '關於 SunGene')}
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">{lang === 'en' ? 'We are not list brokers, nor just an email agency' : (lang === 'cn' ? '我们不是名单商，也不是代发信公司' : '我們不是名單商，也不是代發信公司')}</h1>
            <p className="text-xl leading-relaxed text-gray-200">
              {isChinese
                ? '我們協助外銷企業建立一套可以持續產生海外商機的開發流程。'
                : 'We help export companies build a development process that continuously generates overseas business opportunities.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{lang === 'en' ? 'Who we work with' : (lang === 'cn' ? '我们服务哪些客户' : '我們服務哪些客戶')}</h2>
            <p className="mt-4 leading-7 text-gray-600">
              {isChinese
                ? '我們主要服務有產品、有交付能力，但缺少穩定海外開發流程的外銷企業、貿易商與外銷企業。'
                : 'We primarily serve export companies, traders, and export companies with products and delivery capabilities, but lacking a stable overseas development process.'}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-5 shadow-sm border-t-4 border-t-blue-600">
                <div className="font-bold text-gray-900 mb-3">{lang === 'en' ? 'Ideal Fit' : (lang === 'cn' ? '适合客户' : '適合客戶')}</div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>{lang === 'en' ? 'Export companies / Traders / Manufacturers' : (lang === 'cn' ? '外贸企业 / 贸易商 / 外贸企业' : '外銷企業 / 貿易商 / 外銷企業')}</li>
                  <li className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>{lang === 'en' ? 'Have existing products and supply capacity' : (lang === 'cn' ? '已有产品与供应能力' : '已有產品與供應能力')}</li>
                  <li className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>{lang === 'en' ? 'Want to expand into overseas markets' : (lang === 'cn' ? '想拓展海外市场' : '想拓展海外市場')}</li>
                  <li className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>{lang === 'en' ? 'Willing to cooperate with quotes and replies' : (lang === 'cn' ? '愿意配合报价与客户回复' : '願意配合報價與客戶回覆')}</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-sm border-t-4 border-t-gray-300">
                <div className="font-bold text-gray-900 mb-3">{lang === 'en' ? 'Not a Fit' : (lang === 'cn' ? '不适合' : '不適合')}</div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0"></span>{lang === 'en' ? 'Just want to buy a list' : (lang === 'cn' ? '只想买名单' : '只想買名單')}</li>
                  <li className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0"></span>{lang === 'en' ? 'Lack quoting capabilities' : (lang === 'cn' ? '没有报价能力' : '沒有報價能力')}</li>
                  <li className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0"></span>{lang === 'en' ? 'Unable to reply to clients' : (lang === 'cn' ? '无法回复客户' : '無法回覆客戶')}</li>
                  <li className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0"></span>{lang === 'en' ? 'Unwilling to invest in samples, quotes, and follow-ups' : (lang === 'cn' ? '不愿意投入样品、报价、后续推进' : '不願意投入樣品、報價、後續推進')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image src="/banner/banner2.png" alt="Global market collaboration" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">{lang === 'en' ? 'We believe export growth should not rely on luck' : (lang === 'cn' ? '我們相信好的外贸，不該只靠運氣' : '我們相信好的外銷，不該只靠運氣')}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {isChinese
              ? '展會、平台、舊客戶介紹都能帶來機會，但如果沒有一套可複製的方法，團隊很難持續擴大。SunGene 的價值，就是把這些零散動作整理成一條清楚的路。'
              : 'Trade fairs, marketplaces, and referrals all help—but without a repeatable system, teams struggle to scale. SunGene turns scattered export activities into a clearer path.'}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/services`} className="rounded-sm bg-blue-900 px-8 py-4 font-bold text-white transition hover:bg-blue-800">
              {lang === 'en' ? 'View services' : (lang === 'cn' ? '看服务內容' : '看服務內容')}
            </Link>
            <Link href={`/${lang}/contact`} className="rounded-sm border border-gray-300 px-8 py-4 font-bold text-gray-900 transition hover:border-blue-900 hover:text-blue-900">
              {lang === 'en' ? 'Talk to us' : (lang === 'cn' ? '直接联系我们' : '直接聯絡我們')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
