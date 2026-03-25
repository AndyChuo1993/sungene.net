import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (lang === 'cn') return { title: '机械类别｜SunGene' }
  if (lang === 'zh') return { title: '機械類別｜SunGene' }
  return { title: 'Machinery Categories | SunGene' }
}

export default async function MachineryPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content = {
    en: {
      title: 'Machinery Categories',
      desc: 'We support machinery solutions across multiple categories, especially where buyers are still evaluating the right equipment direction. Instead of forcing a fixed answer too early, we help clarify what type of machine, configuration, and automation level may better match the application.',
      cats: [
        { title: 'Packaging Machinery', desc: 'For pouch, bag, bottle, container, powder, liquid, granule, and related packaging needs.' },
        { title: 'Food Processing Machinery', desc: 'For preparation, cutting, mixing, handling, and selected food production requirements.' },
        { title: 'Filling & Sealing Equipment', desc: 'For liquid, paste, powder, or semi-fluid product handling and packaging operations.' },
        { title: 'Conveying & Automation', desc: 'For supporting workflow movement, line arrangement, and production coordination.' },
        { title: 'Customized Machinery', desc: 'For projects requiring adaptation in dimensions, structure, function, or application logic.' }
      ],
      footer: 'If your exact machinery category is still undecided, we can start from your product and production target first.'
    },
    cn: {
      title: '机械类别',
      desc: '我们支持多个类别的机械解决方案，特别是当买家仍在评估合适的设备方向时。与其过早强加一个固定的答案，我们协助厘清哪种类型的机器、配置和自动化水平能更好地匹配应用场景。',
      cats: [
        { title: '包装机械', desc: '针对袋装、瓶装、容器、粉末、液体、颗粒及相关包装需求。' },
        { title: '食品加工机械', desc: '针对食品备料、切割、混合、处理及特定生产需求。' },
        { title: '灌装与封口设备', desc: '针对液体、膏体、粉末或半流体产品的处理与包装操作。' },
        { title: '输送与自动化', desc: '支持工作流移动、产线布置与生产协调。' },
        { title: '定制机械', desc: '针对在尺寸、结构、功能或应用逻辑上需要调整的项目。' }
      ],
      footer: '如果您的确切机械类别仍未确定，我们可以先从您的产品和生产目标开始。'
    },
    zh: {
      title: '機械類別',
      desc: '我們支援多個類別的機械解決方案，特別是當買家仍在評估合適的設備方向時。與其過早強加一個固定的答案，我們協助釐清哪種類型的機器、配置和自動化水準能更好地匹配應用場景。',
      cats: [
        { title: '包裝機械', desc: '針對袋裝、瓶裝、容器、粉末、液體、顆粒及相關包裝需求。' },
        { title: '食品加工機械', desc: '針對食品備料、切割、混合、處理及特定生產需求。' },
        { title: '灌裝與封口設備', desc: '針對液體、膏體、粉末或半流體產品的處理與包裝操作。' },
        { title: '輸送與自動化', desc: '支援工作流移動、產線佈置與生產協調。' },
        { title: '客製機械', desc: '針對在尺寸、結構、功能或應用邏輯上需要調整的專案。' }
      ],
      footer: '如果您的確切機械類別仍未確定，我們可以先從您的產品和生產目標開始。'
    }
  }

  const t = content[lang] || content['en']
  const categoryHrefs = [
    `/${lang}/machinery/packaging`,
    `/${lang}/machinery/food-processing`,
    `/${lang}/machinery/filling-sealing`,
    `/${lang}/machinery/conveying-automation`,
    `/${lang}/machinery/custom`,
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed">{t.desc}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.cats.map((c, i) => (
            <Link
              key={i}
              href={categoryHrefs[i] || `/${lang}/machinery`}
              className="block bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-3">{c.title}</h2>
              <p className="text-gray-600">{c.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 p-8 rounded-xl text-center">
          <p className="text-lg font-medium text-blue-900">{t.footer}</p>
        </div>
      </div>
    </div>
  )
}
