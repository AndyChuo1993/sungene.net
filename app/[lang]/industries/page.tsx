import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (lang === 'cn') return { title: '行业与应用｜SunGene' }
  if (lang === 'zh') return { title: '產業與應用｜SunGene' }
  return { title: 'Industries & Applications | SunGene' }
}

export default async function IndustriesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content = {
    en: {
      title: 'Industries & Applications',
      desc: 'Many buyers start with the application, not the machine name. That is why we organize part of our support around real production use cases. By understanding your product type, workflow, and output expectations, we can help identify more suitable machinery directions.',
      cats: [
        { title: 'Powder Products', desc: 'Machinery considerations for filling, packaging, and controlled product handling.' },
        { title: 'Liquid Products', desc: 'Solutions related to filling, sealing, conveying, and packaging workflow.' },
        { title: 'Granule & Snack Products', desc: 'Options for feeding, packaging, movement, and selected process support.' },
        { title: 'Food Production', desc: 'Equipment direction for processing, handling, and output improvement.' },
        { title: 'Household & Consumer Products', desc: 'Machinery applications beyond food where packaging or handling matters.' }
      ]
    },
    cn: {
      title: '行业与应用',
      desc: '许多买家是从应用场景而非机器名称开始的。这也是为什么我们将部分支持围绕真实的生产用例进行组织。通过了解您的产品类型、工作流和产能期望，我们可以协助找到更合适的机械方向。',
      cats: [
        { title: '粉末产品', desc: '灌装、包装及受控物料处理的机械考量。' },
        { title: '液体产品', desc: '与灌装、封口、输送及包装工作流相关的解决方案。' },
        { title: '颗粒与休闲食品', desc: '进料、包装、输送及特定流程支持的选项。' },
        { title: '食品生产', desc: '加工、处理及产能提升的设备方向。' },
        { title: '家居与消费品', desc: '食品以外、重视包装或物料处理的机械应用。' }
      ]
    },
    zh: {
      title: '產業與應用',
      desc: '許多買家是從應用場景而非機器名稱開始的。這也是為什麼我們將部分支援圍繞真實的生產用例進行組織。透過了解您的產品類型、工作流和產能期望，我們可以協助找到更合適的機械方向。',
      cats: [
        { title: '粉末產品', desc: '灌裝、包裝及受控物料處理的機械考量。' },
        { title: '液體產品', desc: '與灌裝、封口、輸送及包裝工作流相關的解決方案。' },
        { title: '顆粒與休閒食品', desc: '進料、包裝、輸送及特定流程支援的選項。' },
        { title: '食品生產', desc: '加工、處理及產能提升的設備方向。' },
        { title: '家居與消費品', desc: '食品以外、重視包裝或物料處理的機械應用。' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed">{t.desc}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {t.cats.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">{c.title}</h2>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
