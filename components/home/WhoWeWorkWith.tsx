import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export default function WhoWeWorkWith({ lang }: { lang: Lang }) {
  const content = {
    en: {
      title: 'Who We Work With',
      desc: 'Our solutions are relevant for buyers who are sourcing machinery for production, packaging, processing, or product line expansion.',
      items: [
        { title: 'Importers & Distributors', desc: 'Looking for machinery categories that suit their market and customer base.' },
        { title: 'Manufacturers', desc: 'Seeking equipment for capacity growth, replacement, or process improvement.' },
        { title: 'Project Buyers', desc: 'Evaluating machinery options for new product lines or production planning.' },
      ]
    },
    cn: {
      title: '我们的服务对象',
      desc: '我们的解决方案适合正在为生产、包装、加工或产品线扩展采购机械设备的买家。',
      items: [
        { title: '进口商与经销商', desc: '寻找适合其市场与客户群的机械类别。' },
        { title: '制造商', desc: '寻求提升产能、设备替换或流程改进的设备。' },
        { title: '项目采购方', desc: '为新产品线或生产规划评估机械方案。' },
      ]
    },
    zh: {
      title: '我們的服務對象',
      desc: '我們的解決方案適合正在為生產、包裝、加工或產品線擴展採購機械設備的買家。',
      items: [
        { title: '進口商與經銷商', desc: '尋找適合其市場與客戶群的機械類別。' },
        { title: '製造商', desc: '尋求提升產能、設備替換或流程改進的設備。' },
        { title: '專案採購方', desc: '為新產品線或生產規劃評估機械方案。' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{t.desc}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.items.map((item, i) => (
            <Card key={i} className="p-8">
              <h3 className="text-base font-semibold text-gray-950">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
