import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (lang === 'cn') return { title: '资源中心｜SunGene' }
  if (lang === 'zh') return { title: '資源中心｜SunGene' }
  return { title: 'Resources | SunGene' }
}

export default async function ResourcesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content = {
    en: {
      title: 'Resources',
      desc: 'Choosing machinery is easier when the buying process is clear. We share practical information to help buyers understand machinery selection, automation decisions, export considerations, and common planning mistakes before moving to quotation.',
      articles: [
        'How to choose the right packaging machinery',
        'What to prepare before asking for a machinery quotation',
        'Semi-automatic vs fully automatic: what matters first',
        'Key questions when importing machinery from Asia',
        'How to reduce mismatch in machinery sourcing'
      ]
    },
    cn: {
      title: '资源中心',
      desc: '当采购流程清晰时，选择机械就会变得更容易。在进入报价阶段之前，我们分享实用的信息，帮助买家了解机械选择、自动化决策、出口考量以及常见的规划误区。',
      articles: [
        '如何选择合适的包装机械',
        '在要求机械报价前应准备什么',
        '半自动与全自动：首先该考量什么',
        '从亚洲进口机械的关键问题',
        '如何减少机械采购中的错配'
      ]
    },
    zh: {
      title: '資源中心',
      desc: '當採購流程清晰時，選擇機械就會變得更容易。在進入報價階段之前，我們分享實用的資訊，幫助買家了解機械選擇、自動化決策、出口考量以及常見的規劃誤區。',
      articles: [
        '如何選擇合適的包裝機械',
        '在要求機械報價前應準備什麼',
        '半自動與全自動：首先該考量什麼',
        '從亞洲進口機械的關鍵問題',
        '如何減少機械採購中的錯配'
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed">{t.desc}</p>

        <div className="space-y-4">
          {t.articles.map((a, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition cursor-pointer flex items-center justify-between">
              <span className="text-lg font-medium text-gray-900">{a}</span>
              <span className="text-blue-600">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
