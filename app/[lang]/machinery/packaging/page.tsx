import { Lang } from '@/lib/i18n'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'

export default async function PackagingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const content = {
    en: {
      title: 'Packaging Machinery Solutions',
      p1: 'We support packaging machinery inquiries for applications involving powder, granule, liquid, pouch, bottle, container, and related product formats. The right equipment choice depends on the product itself, packaging style, target output, labor preference, and level of automation.',
      p2: 'For some buyers, a simple semi-automatic solution is enough. For others, the project may require a more integrated packaging approach. We help identify a more suitable direction based on practical production needs instead of assuming one machine fits everything.',
      subTitle: 'Typical Considerations',
      cons: ['Product type', 'Packaging format', 'Capacity per hour', 'Automatic or semi-automatic preference', 'Space limitations', 'Voltage and destination market', 'Budget expectations'],
      cta: 'Tell us what you need to pack, and we will help narrow down the machinery direction.'
    },
    cn: {
      title: '包装机械解决方案',
      p1: '我们支持涉及粉末、颗粒、液体、袋装、瓶装、容器及相关产品形式的包装机械询价。正确的设备选择取决于产品本身、包装形式、目标产能、劳动力偏好以及自动化程度。',
      p2: '对某些买家来说，简单的半自动解决方案就足够了。对其他买家来说，项目可能需要更综合的包装方案。我们根据实际的生产需求协助锁定更合适的方向，而不是假设一台机器能适用所有情况。',
      subTitle: '典型考量因素',
      cons: ['产品类型', '包装格式', '每小时产能', '自动或半自动偏好', '空间限制', '电压与目标市场', '预算预期'],
      cta: '告诉我们您需要包装什么，我们将协助您缩小机械方向的范围。'
    },
    zh: {
      title: '包裝機械解決方案',
      p1: '我們支援涉及粉末、顆粒、液體、袋裝、瓶裝、容器及相關產品形式的包裝機械詢價。正確的設備選擇取決於產品本身、包裝形式、目標產能、勞動力偏好以及自動化程度。',
      p2: '對某些買家來說，簡單的半自動解決方案就足夠了。對其他買家來說，專案可能需要更綜合的包裝方案。我們根據實際的生產需求協助鎖定更合適的方向，而不是假設一臺機器能適用所有情況。',
      subTitle: '典型考量因素',
      cons: ['產品類型', '包裝格式', '每小時產能', '自動或半自動偏好', '空間限制', '電壓與目標市場', '預算預期'],
      cta: '告訴我們您需要包裝什麼，我們將協助您縮小機械方向的範圍。'
    }
  }
  const t = content[lang] || content['en']

  return (
    <>
      <PageHeader title={t.title} desc={t.p1} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="p-8">
              <h2 className="text-xl font-semibold text-gray-950">{t.subTitle}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded bg-brand-50 text-brand-900 ring-1 ring-brand-100">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed sm:text-base">{c}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="rounded-2xl bg-brand-950 p-8 text-white shadow-elev-2">
              <h2 className="text-xl font-semibold">{t.cta}</h2>
              <div className="mt-8">
                <ButtonLink href={`/${lang}/contact`} size="lg">
                  {lang === 'en' ? 'Send an Inquiry' : (lang === 'cn' ? '提交询价' : '提交詢價')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
