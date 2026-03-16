import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: `${lang === 'zh' ? '關於我們' : 'About Us'} | SunGene`,
    description:
      lang === 'zh'
        ? 'SunGene 專注於協助企業建立海外買家名單、主動開發節奏與外銷成交流程。'
        : 'SunGene helps manufacturers build buyer lists, outbound cadences, and export sales workflows.',
    openGraph: {
      title: `${lang === 'zh' ? '關於我們' : 'About Us'} | SunGene`,
      description:
        lang === 'zh'
          ? 'SunGene 專注於協助企業建立海外買家名單、主動開發節奏與外銷成交流程。'
          : 'SunGene helps manufacturers build buyer lists, outbound cadences, and export sales workflows.',
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const pillars = [
    {
      title: lang === 'zh' ? '買家名單與資料驗證' : 'Buyer lists and contact validation',
      desc:
        lang === 'zh'
          ? '我們先把名單做對，再談開發效率。從公司、角色到可投遞聯絡方式，都會先整理清楚。'
          : 'We start with list quality before outreach volume: companies, roles, and deliverable contacts are clarified first.',
    },
    {
      title: lang === 'zh' ? '主動開發與持續跟進' : 'Outbound outreach and steady follow-up',
      desc:
        lang === 'zh'
          ? '我們用多次跟進節奏，而不是只寄一封信就結束。讓外銷開發變成可追蹤流程。'
          : 'We run structured follow-up cadences instead of one-off outreach, making export development trackable.',
    },
    {
      title: lang === 'zh' ? '詢價整理與成交支援' : 'Inquiry triage and sales support',
      desc:
        lang === 'zh'
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
              {lang === 'zh' ? '關於 SunGene' : 'About SunGene'}
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">{lang === 'zh' ? '我們幫企業把外銷開發做成一套可持續的系統' : 'We turn export development into a sustainable system for manufacturers'}</h1>
            <p className="text-xl leading-relaxed text-gray-200">
              {lang === 'zh'
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
            <h2 className="text-3xl font-bold text-gray-900">{lang === 'zh' ? '我們服務哪些客戶' : 'Who we work with'}</h2>
            <p className="mt-4 leading-7 text-gray-600">
              {lang === 'zh'
                ? '我們主要服務有產品、有工廠、有交付能力，但缺少穩定海外開發流程的外銷企業與供應商。特別適合正在拓展歐洲、北美、日本與東南亞市場的團隊。'
                : 'We mainly work with manufacturers and suppliers that already have product and production capacity, but need a steadier export development process—especially for Europe, North America, Japan, and Southeast Asia.'}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <div className="font-bold text-blue-700">{lang === 'zh' ? '典型客戶' : 'Typical clients'}</div>
                <div className="mt-2 text-gray-600">{lang === 'zh' ? '機械、五金、電子零元件、套件材、工業材料' : 'Machinery, hardware, electronics, packaging, and industrial materials'}</div>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <div className="font-bold text-blue-700">{lang === 'zh' ? '常見需求' : 'Common goals'}</div>
                <div className="mt-2 text-gray-600">{lang === 'zh' ? '找買家、找經銷商、穩定詢價、不擴編也能持續開發' : 'Find buyers, build channels, stabilize inquiries, and keep growing without hiring first'}</div>
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
          <h2 className="text-3xl font-bold text-gray-900">{lang === 'zh' ? '我們相信好的外銷，不該只靠運氣' : 'We believe export growth should not rely on luck'}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {lang === 'zh'
              ? '展會、平台、舊客戶介紹都能帶來機會，但如果沒有一套可複製的方法，團隊很難持續擴大。SunGene 的價值，就是把這些零散動作整理成一條清楚的路。'
              : 'Trade fairs, marketplaces, and referrals all help—but without a repeatable system, teams struggle to scale. SunGene turns scattered export activities into a clearer path.'}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/services`} className="rounded-sm bg-blue-900 px-8 py-4 font-bold text-white transition hover:bg-blue-800">
              {lang === 'zh' ? '看服務內容' : 'View services'}
            </Link>
            <Link href={`/${lang}/contact`} className="rounded-sm border border-gray-300 px-8 py-4 font-bold text-gray-900 transition hover:border-blue-900 hover:text-blue-900">
              {lang === 'zh' ? '直接聯絡我們' : 'Talk to us'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
