import { Lang } from '@/lib/i18n'
import Link from 'next/link'

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
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{t.title}</h1>
        <div className="prose prose-lg text-gray-700 mb-12">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.subTitle}</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {t.cons.map((c, i) => (
              <li key={i} className="flex items-center"><span className="text-blue-600 mr-2">✓</span> {c}</li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-900 text-white p-10 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-6">{t.cta}</h2>
          <Link href={`/${lang}/contact`} className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
            {lang === 'en' ? 'Send an Inquiry' : (lang === 'cn' ? '提交询价' : '提交詢價')}
          </Link>
        </div>
      </div>
    </div>
  )
}
