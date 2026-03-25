import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (lang === 'cn') return { title: '解决方案｜SunGene' }
  if (lang === 'zh') return { title: '解決方案｜SunGene' }
  return { title: 'Solutions | SunGene' }
}

export default async function SolutionsPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content = {
    en: {
      title: 'Solutions',
      desc: 'Different buyers need different levels of machinery support. Some need one machine. Some need a semi-automatic workflow. Some need a broader production solution. We support multiple project scopes depending on application, budget, and project maturity.',
      cats: [
        { id: 'single', title: 'Single Machine Solutions', desc: 'For buyers who already understand the process and need the right equipment match.' },
        { id: 'semi', title: 'Semi-Automatic Setups', desc: 'For customers balancing cost control, labor usage, and production improvement.' },
        { id: 'line', title: 'Production Line Thinking', desc: 'For projects where workflow connection and equipment coordination matter.' },
        { id: 'custom', title: 'OEM / Customized Direction', desc: 'For buyers needing machinery adapted to product, process, or market requirements.' },
        { id: 'export', title: 'Export Support', desc: 'For international buyers requiring clear communication and shipment-oriented coordination.' }
      ]
    },
    cn: {
      title: '解决方案',
      desc: '不同的买家需要不同层级的机械支持。有些需要单台机器，有些需要半自动化工作流，有些则需要更全面的生产解决方案。我们根据应用、预算及项目成熟度，支持多种项目范围。',
      cats: [
        { id: 'single', title: '单机解决方案', desc: '适合已经了解流程并需要匹配正确设备的买家。' },
        { id: 'semi', title: '半自动配置', desc: '适合在成本控制、劳动力使用及生产改进之间寻求平衡的客户。' },
        { id: 'line', title: '生产线思维', desc: '适合注重工作流连接与设备协调的项目。' },
        { id: 'custom', title: 'OEM / 定制化方向', desc: '适合需要根据产品、流程或市场要求调整机械的买家。' },
        { id: 'export', title: '出口支持', desc: '适合需要清晰沟通及以发货为导向进行协调的国际买家。' }
      ]
    },
    zh: {
      title: '解決方案',
      desc: '不同的買家需要不同層級的機械支援。有些需要單臺機器，有些需要半自動化工作流，有些則需要更全面的生產解決方案。我們根據應用、預算及專案成熟度，支援多種專案範圍。',
      cats: [
        { id: 'single', title: '單機解決方案', desc: '適合已經了解流程並需要匹配正確設備的買家。' },
        { id: 'semi', title: '半自動配置', desc: '適合在成本控制、勞動力使用及生產改進之間尋求平衡的客戶。' },
        { id: 'line', title: '生產線思維', desc: '適合注重工作流連接與設備協調的專案。' },
        { id: 'custom', title: 'OEM / 客製化方向', desc: '適合需要根據產品、流程或市場要求調整機械的買家。' },
        { id: 'export', title: '出口支援', desc: '適合需要清晰溝通及以發貨為導向進行協調的國際買家。' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      <PageHeader title={t.title} desc={t.desc} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6">
            {t.cats.map((c, i) => (
              <Card key={i} id={c.id} className="p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-900 ring-1 ring-brand-100 font-semibold text-lg">
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold text-gray-950 sm:text-2xl">{c.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">{c.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
