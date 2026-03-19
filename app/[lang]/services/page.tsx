import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceComparison from '@/components/ServiceComparison'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = 'https://sungene.net'

  return {
    title: t(lang, 'service_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
    keywords:
      lang === 'cn'
        ? ['外贸客户开发', '经销商开发', '外贸业务外包', '采购资料建置', '外贸市场切入']
        : isChinese
          ? ['外銷客戶開發', '經銷商開發', '外銷業務外包', '採購資料建置', '外銷市場切入']
          : ['export lead generation', 'distributor development', 'export sales outsourcing', 'prospect data buildout', 'market entry'],
    openGraph: {
      title: t(lang, 'service_title') + ' | SunGene',
      description: t(lang, 'meta_home_desc'),
      url: `${baseUrl}/${lang}/services`,
      images: ['/og/og.png'],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/services`,
      languages: {
        'zh-CN': 'https://sungene.net/cn/services',
        'zh-TW': 'https://sungene.net/zh/services',
        'en': 'https://sungene.net/en/services',
        'x-default': 'https://sungene.net/cn/services',
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sungene.net'
  const pageUrl = `${baseUrl}/${lang}/services`

  type Card = { href: string; title: string; desc: string; tags?: string[]; suitable: string[]; get: string[] }

  const core = [
    {
      href: `/${lang}/services/export-lead-generation`,
      title: lang === 'en' ? 'Export Lead Generation' : (lang === 'cn' ? '外销客户开发' : '外銷客戶開發'),
      desc: lang === 'en' 
        ? 'Directly connect with overseas procurement and decision-makers.' 
        : lang === 'cn' 
        ? '直接对接海外采购与决策人。' 
        : '直接對接海外採購與決策人。',
      suitable: lang === 'en' 
        ? ['Companies wanting direct orders', 'Ready with products & capacity', 'Faster access to overseas procurement'] 
        : lang === 'cn'
        ? ['想直接拿订单的外贸企业', '已有产品与供应能力', '希望更快接触海外采购']
        : ['想直接拿訂單的外銷企業', '已有產品與供應能力', '希望更快接觸海外採購'],
      get: lang === 'en'
        ? ['Decision-maker lists', 'Valid inquiries', 'Quoting opportunities', 'Actionable leads']
        : lang === 'cn'
        ? ['采购决策人名单', '有效询价', '报价机会', '可推进的商机']
        : ['採購決策人名單', '有效詢價', '報價機會', '可推進的商機'],
    },
    {
      href: `/${lang}/services/distributor-development`,
      title: lang === 'en' ? 'Distributor Development' : (lang === 'cn' ? '经销商开发' : '經銷商開發'),
      desc: lang === 'en'
        ? 'Help you enter local channels and build a cooperative distribution system.'
        : lang === 'cn'
        ? '帮你打进当地通路，建立可合作的经销体系。'
        : '幫你打進當地通路，建立可合作的經銷體系。',
      suitable: lang === 'en'
        ? ['Entering local markets', 'Need channel partners, not single leads', 'Long-term market coverage']
        : lang === 'cn'
        ? ['想进入当地市场的企业', '需要通路合作而非单点客户', '希望建立长期市场覆盖']
        : ['想進入當地市場的企業', '需要通路合作而非單點客戶', '希望建立長期市場覆蓋'],
      get: lang === 'en'
        ? ['Channel structure analysis', 'Potential distributor lists', 'Partnership evaluations', 'Samples & negotiation support']
        : lang === 'cn'
        ? ['通路结构分析', '潜在经销商名单', '合作评估', '推进样品与合作谈判']
        : ['通路結構分析', '潛在經銷商名單', '合作評估', '推進樣品與合作談判'],
    },
    {
      href: `/${lang}/services/export-sales-outsourcing`,
      title: lang === 'en' ? 'Export Sales Outsourcing' : (lang === 'cn' ? '外贸业务外包' : '外銷業務外包'),
      desc: lang === 'en'
        ? 'Directly handle export sales for you, with the goal of closing deals.'
        : lang === 'cn'
        ? '直接帮你做外销业务，目标是成交。'
        : '直接幫你做外銷業務，目標是成交。',
      suitable: lang === 'en'
        ? ['No full export team', 'Prefer not to hire immediately', 'Need consistent outreach & follow-ups']
        : lang === 'cn'
        ? ['没有完整外贸团队', '不想先养太多人', '需要有人持续推进客户开发与跟进']
        : ['沒有完整外銷團隊', '不想先養太多人', '需要有人持續推進客戶開發與跟進'],
      get: lang === 'en'
        ? ['Continuous prospecting', 'Inquiry follow-ups', 'Quoting & requirement triage', 'Closing support']
        : lang === 'cn'
        ? ['持续开发', '询价跟进', '报价与需求整理', '成交推进支援']
        : ['持續開發', '詢價跟進', '報價與需求整理', '成交推進支援'],
    },
  ]

  const searchIntentLabels =
    lang !== 'en'
      ? ['外銷客戶開發', '如何找到海外買家', '如何找到經銷商', '國際買家名單', '外銷內容行銷']
      : ['export lead generation', 'find overseas buyers', 'find distributors', 'international buyers', 'b2b export marketing']

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: lang === 'en' ? 'Export Services Overview' : (lang === 'cn' ? '外贸服务總覽' : '外銷服務總覽'),
    url: pageUrl,
    hasPart: core.map((item) => ({
      '@type': 'Service',
      name: item.title,
      url: `${baseUrl}${item.href}`,
      description: item.desc,
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={servicesSchema} />
      <section className="bg-gray-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            {lang === 'en' ? 'Choose the right partnership for your export goals' : (lang === 'cn' ? '依你的外贸目标，选择最适合的合作方式' : '依你的外銷目標，選擇最適合的合作方式')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            {lang === 'cn'
              ? '如果你要找海外买家、建立经销渠道，或想在不扩编的前提下持续开发海外市场，这里可以直接找到对应方案。'
              : isChinese
                ? '如果你要找海外買家、建立經銷通路，或想在不擴編的前提下持續開發海外市場，這裡可以直接找到對應方案。'
                : 'Whether you need overseas buyers, channel partners, or a managed export sales workflow without hiring first, you can choose the right service here.'}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/contact`} className="rounded-sm bg-white px-8 py-3 font-bold text-blue-900 transition hover:bg-gray-100">
              {lang === 'en' ? 'Let us help you decide the best approach' : (lang === 'cn' ? '让我们帮你判断适合哪一种合作' : '讓我們幫你判斷適合哪一種合作')}
            </Link>
            <Link href={`/${lang}/export-market-analysis`} className="rounded-sm border border-white/40 bg-transparent px-8 py-3 font-bold text-white transition hover:bg-white/10">
              {lang === 'en' ? 'Get Market Entry Advice' : (lang === 'cn' ? '取得市场切入建议' : '取得市場切入建議')}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {core.map((x, i) => (
              <div key={i} className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 transition hover:shadow-lg">
                <div className="text-2xl font-bold text-gray-900 mb-6">{x.title}</div>
                
                <div className="mb-6">
                  <div className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-3">
                    {lang === 'en' ? 'Who is it for' : (lang === 'cn' ? '适合谁' : '適合誰')}
                  </div>
                  <ul className="space-y-2">
                    {x.suitable.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-blue-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 flex-grow">
                  <div className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-3">
                    {lang === 'en' ? 'What you get' : (lang === 'cn' ? '你会得到' : '你會得到')}
                  </div>
                  <ul className="space-y-2">
                    {x.get.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 font-medium">
                        <svg className="mr-2 mt-0.5 h-5 w-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={x.href} className="inline-block text-center w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-sm hover:bg-blue-800 transition">
                  {lang === 'en' ? 'View Service Details →' : (lang === 'cn' ? '查看服务内容 →' : '查看服務內容 →')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {lang === 'en' ? 'Start with the service that fits your current stage' : (lang === 'cn' ? '先确认你目前最需要哪一種合作' : '先確認你目前最需要哪一種合作')}
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                {lang === 'cn'
                  ? '如果你缺的是稳定买家来源，就先看外贸客户开发；如果你想找本地渠道，就看经销商开发；如果你缺的是整体执行人力，就看外贸业务外包服务。'
                  : isChinese
                    ? '如果你缺的是穩定買家來源，就先看外銷客戶開發；如果你想找在地通路，就看經銷商開發；如果你缺的是整體執行人力，就看外銷業務外包服務。'
                    : 'If you need a steadier flow of buyers, start with export lead generation. If you need local channel partners, review distributor development. If execution bandwidth is the gap, look at sales outsourcing.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={core[0].href} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800">
                  {lang === 'en' ? 'View Export Lead Gen' : (lang === 'cn' ? '看外贸客户开发' : '看外銷客戶開發')}
                </Link>
                <Link href={core[1].href} className="inline-flex items-center justify-center rounded-sm border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50">
                  {lang === 'en' ? 'View Distributor Dev' : (lang === 'cn' ? '看经销商开发' : '看經銷商開發')}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ServiceComparison lang={lang} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {lang === 'en' ? 'Not sure which one? Start with the comparison' : (lang === 'cn' ? '不确定选哪个？先看差异表' : '不確定選哪個？先看差異表')}
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                {lang === 'cn'
                  ? '外贸客户开发解决“海外采购名与询盘交付”；经销商开发解决“渠道伙伴与经销合作”；外贸业务外包服务解决“不扩编也能稳定开发与跟进”。'
                  : isChinese
                    ? '外銷客戶開發解決「海外採購與決策人資料建置與詢價交付」；經銷商開發解決「通路夥伴與經銷合作」；外銷業務外包服務解決「不擴編也能穩定開發與跟進」。'
                    : 'Lead gen delivers prospect data and qualified inquiries. Distributor development builds partner pipelines. Sales outsourcing runs end-to-end outreach and follow-ups without hiring.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={core[0].href} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800">
                  {lang === 'en' ? 'Export Lead Gen' : (lang === 'cn' ? '看外贸客户开发' : '看外銷客戶開發')}
                </Link>
                <Link href={core[1].href} className="inline-flex items-center justify-center rounded-sm border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50">
                  {lang === 'en' ? 'Distributor Dev' : (lang === 'cn' ? '看经销商开发' : '看經銷商開發')}
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Common search intents' : (lang === 'cn' ? '常见需求关键词' : '常見需求關鍵字')}</div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {searchIntentLabels.map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={`/${lang}/blog/how-to-find-overseas-buyers`} className="font-medium text-blue-900 hover:underline">
                  {lang === 'en' ? 'Read the guide →' : (lang === 'cn' ? '先看指南文章 →' : '先看指南文章 →')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{lang === 'en' ? 'Not sure which one to choose? Let us help you find the best path' : (lang === 'cn' ? '不确定该选哪一种？先让我们帮你判断最适合的合作路径' : '不確定該選哪一種？先讓我們幫你判斷最適合的合作路徑')}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-slate-200">
            {lang === 'cn'
              ? '提交产品与目标市场，我们会回复市场切入方式、买家角色与可行的外贸开发路径。'
              : isChinese
                ? '提交產品與目標市場，我們會回覆市場切入方式、買家角色與可行的外銷開發路徑。'
                : 'Submit your product and markets. We’ll reply with entry approach, buyer roles, and a feasible lead-gen path.'}
          </p>
              <Link href={`/${lang}/contact`} className="inline-block rounded-sm bg-white px-10 py-4 text-lg font-bold text-blue-900 shadow-lg transition duration-300 hover:bg-gray-100">
            {lang === 'en' ? 'Get Market Entry Advice' : (lang === 'cn' ? '获取市场切入建议' : '取得市場切入建議')}
          </Link>
        </div>
      </section>
    </main>
  )
}
