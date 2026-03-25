import { Lang } from '@/lib/i18n'
import Link from 'next/link'

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
