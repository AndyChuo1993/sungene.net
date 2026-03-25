import { Lang } from '@/lib/i18n'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'

export default async function FoodProcessingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const content = {
    en: {
      title: 'Food Processing Machinery Solutions',
      p1: 'Food processing projects vary widely depending on product type, hygiene requirements, workflow, output volume, and downstream packaging needs. We support customers evaluating machinery for food preparation, handling, mixing, cutting, and selected production processes.',
      p2: 'At the early stage, buyers often do not need a long catalog. They need a clearer understanding of what type of machinery setup is practical for their product and production objective. That is where our support starts.',
      subTitle: 'Suitable for Buyers Looking At',
      cons: ['Food preparation processes', 'Semi-automatic production upgrades', 'New line planning', 'Product handling improvements', 'Export-oriented equipment sourcing'],
      cta: 'Share your product and target capacity to start the discussion.'
    },
    cn: {
      title: '食品加工机械解决方案',
      p1: '食品加工项目因产品类型、卫生要求、工作流、产量及下游包装需求而异。我们协助评估用于食品备料、处理、混合、切割及特定生产流程的机械。',
      p2: '在初期阶段，买家通常不需要长篇的目录。他们需要更清晰地了解哪种类型的机械配置对其产品和生产目标是务实的。这就是我们支持的起点。',
      subTitle: '适合正在寻找以下方案的买家',
      cons: ['食品备料流程', '半自动生产升级', '新产线规划', '产品处理改进', '出口导向设备采购'],
      cta: '分享您的产品和目标产能以开始讨论。'
    },
    zh: {
      title: '食品加工機械解決方案',
      p1: '食品加工專案因產品類型、衛生要求、工作流、產量及下游包裝需求而異。我們協助評估用於食品備料、處理、混合、切割及特定生產流程的機械。',
      p2: '在初期階段，買家通常不需要長篇的目錄。他們需要更清晰地了解哪種類型的機械配置對其產品和生產目標是務實的。這就是我們支援的起點。',
      subTitle: '適合正在尋找以下方案的買家',
      cons: ['食品備料流程', '半自動生產升級', '新產線規劃', '產品處理改進', '出口導向設備採購'],
      cta: '分享您的產品和目標產能以開始討論。'
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
