import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function Applications({ lang }: { lang: Lang }) {
  const content = {
    en: {
      title: 'Applications We Commonly Support',
      desc: 'Even when the exact machine model is not yet defined, application-based planning helps buyers move faster in the right direction.',
      tags: ['Powder Products', 'Granule Products', 'Liquid Filling', 'Snack Processing', 'Food Preparation', 'Industrial Handling']
    },
    cn: {
      title: '常见应用场景',
      desc: '即使尚未确定具体的机器型号，基于应用场景的规划也能帮助买家更快朝着正确的方向前进。',
      tags: ['粉末产品', '颗粒产品', '液体灌装', '休闲食品加工', '食品备料', '工业物料处理']
    },
    zh: {
      title: '常見應用場景',
      desc: '即使尚未確定具體的機器型號，基於應用場景的規劃也能幫助買家更快朝著正確的方向前進。',
      tags: ['粉末產品', '顆粒產品', '液體灌裝', '休閒食品加工', '食品備料', '工業物料處理']
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{t.desc}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.tags.map((tag, i) => (
            <span key={i} className="rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-900 ring-1 ring-brand-100">
              {tag}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
