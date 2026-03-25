import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export default function WhyUs({ lang }: { lang: Lang }) {
  const content = {
    en: {
      title: 'Why Buyers Work With SunGene',
      desc: 'We understand that buying machinery is not just about price. Buyers need a solution that fits production reality, export conditions, operator use, maintenance expectations, and long-term business goals. Our role is to help reduce mismatch, communication gaps, and costly wrong decisions.',
      items: [
        { title: 'Practical Solution Matching', desc: 'We focus on application fit, not just machine descriptions.' },
        { title: 'Flexible Product Direction', desc: 'We can support different machinery categories while the project scope is still evolving.' },
        { title: 'Export-Oriented Communication', desc: 'We work in a way that is suitable for international buyers comparing suppliers across countries.' },
        { title: 'From Inquiry to Delivery', desc: 'We support the process from initial discussion to export coordination.' }
      ]
    },
    cn: {
      title: '为什么选择 SunGene',
      desc: '我们深知购买机械不只是价格问题。买家需要的是符合生产实际、出口条件、操作习惯、维护预期以及长期商业目标的解决方案。我们的角色是减少错配、沟通落差及昂贵的错误决策。',
      items: [
        { title: '务实的方案匹配', desc: '我们专注于应用匹配度，而不仅是机器参数描述。' },
        { title: '灵活的产品方向', desc: '在项目需求仍在调整时，我们能支援不同类别的机械评估。' },
        { title: '出口导向的沟通', desc: '我们的工作方式适合正在跨国比较供应商的国际买家。' },
        { title: '从询价到交付', desc: '我们支援从初步讨论到出口协调的完整流程。' }
      ]
    },
    zh: {
      title: '為什麼選擇 SunGene',
      desc: '我們深知購買機械不只是價格問題。買家需要的是符合生產實際、出口條件、操作習慣、維護預期以及長期商業目標的解決方案。我們的角色是減少錯配、溝通落差及昂貴的錯誤決策。',
      items: [
        { title: '務實的方案匹配', desc: '我們專注於應用匹配度，而不僅是機器參數描述。' },
        { title: '靈活的產品方向', desc: '在專案需求仍在調整時，我們能支援不同類別的機械評估。' },
        { title: '出口導向的溝通', desc: '我們的工作方式適合正在跨國比較供應商的國際買家。' },
        { title: '從詢價到交付', desc: '我們支援從初步討論到出口協調的完整流程。' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200/60">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">{t.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{t.desc}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.items.map((item, i) => (
              <Card key={i} className="p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-900 ring-1 ring-brand-100 font-semibold">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-gray-950">{item.title}</h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
