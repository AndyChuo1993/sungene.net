import { Lang } from '@/lib/i18n'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'

export default async function CustomMachineryPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const content = {
    en: {
      title: 'Customized Machinery Support',
      p1: 'Not every production need can be solved with a standard machine. Some projects require modifications in machine size, structure, handling method, workflow connection, or application-specific function.',
      p2: 'We support buyers who are exploring non-standard machinery directions and need a more practical way to move from concept to workable equipment planning.',
      subTitle: 'When Customization May Be Needed',
      cons: ['Special product shape or material behavior', 'Non-standard layout requirements', 'Integration with existing workflow', 'Unique packaging or handling logic', 'Market-specific technical conditions'],
      cta: 'If your project does not fit a standard machine easily, tell us the application and challenge.'
    },
    cn: {
      title: '定制机械支持',
      p1: '并非每个生产需求都能通过标准机器解决。有些项目需要在机器尺寸、结构、处理方式、工作流连接或特定应用功能上进行调整。',
      p2: '我们支持正在探索非标准机械方向的买家，帮助他们以更务实的方式从概念推进到可行的设备规划。',
      subTitle: '何时可能需要定制化',
      cons: ['特殊产品形状或物料特性', '非标准布局需求', '与现有工作流整合', '独特的包装或处理逻辑', '特定市场的技术条件'],
      cta: '如果您的项目不易匹配标准机器，请告诉我们您的应用和挑战。'
    },
    zh: {
      title: '客製機械支援',
      p1: '並非每個生產需求都能透過標準機器解決。有些專案需要在機器尺寸、結構、處理方式、工作流連接或特定應用功能上進行調整。',
      p2: '我們支援正在探索非標準機械方向的買家，幫助他們以更務實的方式從概念推進到可行的設備規劃。',
      subTitle: '何時可能需要客製化',
      cons: ['特殊產品形狀或物料特性', '非標準佈局需求', '與現有工作流整合', '獨特的包裝或處理邏輯', '特定市場的技術條件'],
      cta: '如果您的專案不易匹配標準機器，請告訴我們您的應用和挑戰。'
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
