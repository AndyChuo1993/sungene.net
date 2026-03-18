import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = lang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'

  return {
    title: `${lang === 'en' ? 'About Us' : (lang === 'cn' ? '关于我们' : '關於我們')} | SunGene`,
    description:
      isChinese
        ? 'SunGene 專注於協助企業建立海外買家名單、主動開發節奏與外銷成交流程。'
        : 'SunGene helps manufacturers build buyer lists, outbound cadences, and export sales workflows.',
    alternates: {
      canonical: `${baseUrl}/${lang}/about`,
      languages: {
        'zh-CN': 'https://sungene.net/cn/about',
        'zh-TW': 'https://sungenelite.com/zh/about',
        'en': 'https://sungene.net/en/about',
        'x-default': 'https://sungene.net/en/about',
      },
    },
    openGraph: {
      title: `${lang === 'en' ? 'About Us' : (lang === 'cn' ? '关于我们' : '關於我們')} | SunGene`,
      description:
        isChinese
          ? 'SunGene 專注於協助企業建立海外買家名單、主動開發節奏與外銷成交流程。'
          : 'SunGene helps manufacturers build buyer lists, outbound cadences, and export sales workflows.',
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
      title: lang === 'en' ? 'Buyer lists and contact validation' : (lang === 'cn' ? '买家名单與数据验证' : '買家名單與資料驗證'),
      desc:
        isChinese
          ? '我們先把名單做對，再談開發效率。從公司、角色到可投遞聯絡方式，都會先整理清楚。'
          : 'We start with list quality before outreach volume: companies, roles, and deliverable contacts are clarified first.',
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">{lang === 'en' ? 'We turn export development into a sustainable system for manufacturers' : (lang === 'cn' ? '我們幫企业把外贸開發做成一套可持续的系統' : '我們幫企業把外銷開發做成一套可持續的系統')}</h1>
            <p className="text-xl leading-relaxed text-gray-200">
              {isChinese
                ? 'SunGene 不是單純賣名單，也不是只寫幾封開發信。我們的角色，是幫你把海外買家開發、經銷商開發與詢價跟進，整理成一套能持續運作的商務流程。'
                : 'SunGene is not just a list vendor or an email-writing shop. We help manufacturers turn buyer discovery, distributor development, and inquiry follow-up into a repeatable commercial workflow.'}
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
            <h2 className="text-3xl font-bold text-gray-900">{lang === 'en' ? 'Who we work with' : (lang === 'cn' ? '我們服务哪些客戶' : '我們服務哪些客戶')}</h2>
            <p className="mt-4 leading-7 text-gray-600">
              {isChinese
                ? '我們主要服務有產品、有交付能力，但缺少穩定海外開發流程的外銷企業與供應商。特別適合正在拓展歐洲、北美、日本與東南亞市場的團隊。'
                : 'We serve export enterprises and suppliers with great products but no stable export process. Ideal for teams expanding into Europe, North America, Japan, and SEA.'}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <div className="font-bold text-blue-700">{lang === 'en' ? 'Typical clients' : (lang === 'cn' ? '典型客戶' : '典型客戶')}</div>
                <div className="mt-2 text-gray-600">{lang === 'en' ? 'Machinery, hardware, electronics, packaging, and industrial materials' : (lang === 'cn' ? '机械、五金、電子零部件、包材、工业材料' : '機械、五金、電子零元件、套件材、工業材料')}</div>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <div className="font-bold text-blue-700">{lang === 'en' ? 'Common goals' : (lang === 'cn' ? '常見需求' : '常見需求')}</div>
                <div className="mt-2 text-gray-600">{lang === 'en' ? 'Find buyers, build channels, stabilize inquiries, and keep growing without hiring first' : (lang === 'cn' ? '找买家、找经销商、稳定询盘、不扩编也能持续開發' : '找買家、找經銷商、穩定詢價、不擴編也能持續開發')}</div>
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
