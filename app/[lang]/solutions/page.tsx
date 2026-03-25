import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'

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
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed">{t.desc}</p>

        <div className="space-y-6">
          {t.cats.map((c, i) => (
            <div id={c.id} key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-800 font-bold rounded-full flex items-center justify-center shrink-0 text-xl">
                {i + 1}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{c.title}</h2>
                <p className="text-gray-600 text-lg">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
