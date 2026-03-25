import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: lang === 'en' ? 'About Us | SunGene' : (lang === 'cn' ? '关于我们｜SunGene' : '關於我們｜SunGene'),
    description: lang === 'en' 
      ? 'SunGene is a machinery solution partner serving global buyers who are evaluating equipment for packaging, food processing, and selected industrial applications.' 
      : 'SunGene 为全球买家提供包装、食品加工与工业应用机械解决方案。',
  }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content = {
    en: {
      title: 'About SunGene',
      p1: 'SunGene is a machinery solution partner serving global buyers who are evaluating equipment for packaging, food processing, and selected industrial applications. We support buyers who need clearer direction when comparing machinery options, planning future production, or sourcing equipment suitable for export markets.',
      p2: 'Rather than limiting the conversation to one fixed machine category too early, we focus on helping customers identify a practical machinery path based on real production needs. This may include standard equipment, semi-automatic setups, full-line thinking, or customized machinery support depending on the project.',
      p3: 'Our role is to simplify communication, reduce mismatch, and make the buying process more efficient for importers, distributors, factories, and project-based buyers.',
      beliefsTitle: 'What We Believe',
      beliefs: [
        { title: 'A machine is only useful when it fits the production reality.', desc: 'A technically impressive machine that does not match product type, labor conditions, maintenance ability, or capacity goals is still the wrong machine.' },
        { title: 'Many buyers need guidance before they need a quotation.', desc: 'At the early stage, buyers often need help narrowing down equipment direction more than they need a random price list.' },
        { title: 'Export projects need clear communication.', desc: 'International buyers need practical information, reliable process handling, and fewer misunderstandings.' }
      ],
      serveTitle: 'Who We Serve',
      serve: [
        'Importers building machinery product lines',
        'Distributors expanding into new equipment categories',
        'Manufacturers upgrading production capacity',
        'Project buyers sourcing machinery for specific applications'
      ],
      supportTitle: 'What We Support',
      support: [
        'Machinery category matching',
        'Application-based recommendation',
        'Standard and customized machinery direction',
        'Export communication and coordination',
        'Inquiry-to-delivery support'
      ]
    },
    cn: {
      title: '关于 SunGene',
      p1: 'SunGene 是一家为全球买家提供包装、食品加工及特定工业应用设备的机械解决方案合作伙伴。我们协助仍在比较选项、规划未来生产或寻找适合出口市场设备的买家获得更清晰的方向。',
      p2: '与其过早将讨论局限于单一机器类别，我们更倾向于根据真实的生产需求，协助客户找出务实的机械配置路径。这可能包含标准设备、半自动配置、全线规划，或是根据专案需求的定制化支持。',
      p3: '我们的角色是简化沟通、减少错配，并使进口商、经销商、工厂与专案买家的采购流程更加高效。',
      beliefsTitle: '我们的信念',
      beliefs: [
        { title: '机器只有符合生产实际才有价值。', desc: '一台技术惊艳但无法匹配产品类型、劳动力条件、维护能力或产能目标的机器，依然是错误的机器。' },
        { title: '在需要报价之前，买家往往更需要指引。', desc: '在初期阶段，比起一张随机的报价单，买家通常更需要协助缩小设备方向。' },
        { title: '出口专案需要清晰的沟通。', desc: '国际买家需要务实的信息、可靠的流程处理，并减少误解。' }
      ],
      serveTitle: '我们服务谁',
      serve: [
        '建立机械产品线的进口商',
        '拓展新设备类别的经销商',
        '升级产能的制造商',
        '为特定应用采购机械的专案买家'
      ],
      supportTitle: '我们提供什么',
      support: [
        '机械类别匹配',
        '基于应用的推荐',
        '标准与定制化机械方向',
        '出口沟通与协调',
        '从询价到交付的支持'
      ]
    },
    zh: {
      title: '關於 SunGene',
      p1: 'SunGene 是一家為全球買家提供包裝、食品加工及特定工業應用設備的機械解決方案合作夥伴。我們協助仍在比較選項、規劃未來生產或尋找適合出口市場設備的買家獲得更清晰的方向。',
      p2: '與其過早將討論侷限於單一機器類別，我們更傾向於根據真實的生產需求，協助客戶找出務實的機械配置路徑。這可能包含標準設備、半自動配置、全線規劃，或是根據專案需求的客製化支援。',
      p3: '我們的角色是簡化溝通、減少錯配，並使進口商、經銷商、工廠與專案買家的採購流程更加高效。',
      beliefsTitle: '我們的信念',
      beliefs: [
        { title: '機器只有符合生產實際才有價值。', desc: '一台技術驚豔但無法匹配產品類型、勞動力條件、維護能力或產能目標的機器，依然是錯誤的機器。' },
        { title: '在需要報價之前，買家往往更需要指引。', desc: '在初期階段，比起一張隨機的報價單，買家通常更需要協助縮小設備方向。' },
        { title: '出口專案需要清晰的溝通。', desc: '國際買家需要務實的資訊、可靠的流程處理，並減少誤解。' }
      ],
      serveTitle: '我們服務誰',
      serve: [
        '建立機械產品線的進口商',
        '拓展新設備類別的經銷商',
        '升級產能的製造商',
        '為特定應用採購機械的專案買家'
      ],
      supportTitle: '我們提供什麼',
      support: [
        '機械類別匹配',
        '基於應用的推薦',
        '標準與客製化機械方向',
        '出口溝通與協調',
        '從詢價到交付的支援'
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      <PageHeader title={t.title} desc={t.p1} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p3}</p>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">{t.beliefsTitle}</h2>
            <div className="mt-8 grid gap-6">
              {t.beliefs.map((b, i) => (
                <Card key={i} className="p-8">
                  <h3 className="text-base font-semibold text-brand-950 sm:text-lg">{b.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{b.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Card className="p-8">
              <h2 className="text-lg font-semibold text-gray-950">{t.serveTitle}</h2>
              <ul className="mt-6 space-y-3">
                {t.serve.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded bg-brand-50 text-brand-900 ring-1 ring-brand-100">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg font-semibold text-gray-950">{t.supportTitle}</h2>
              <ul className="mt-6 space-y-3">
                {t.support.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded bg-brand-50 text-brand-900 ring-1 ring-brand-100">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
