import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const titles: Record<string, string> = {
  en: 'Machinery Buying Guides & Resources | SunGene', cn: '资源中心｜SunGene', zh: '資源中心｜SunGene',
  fr: 'Guides d\'achat et ressources | SunGene', es: 'Guías de compra y recursos | SunGene',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return { title: titles[lang] || titles.en }
}

export default async function ResourcesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, { title: string; desc: string; articles: string[] }> = {
    en: {
      title: 'Machinery Buying Guides',
      desc: 'Practical guides to help you choose the right machinery, plan your production line, and navigate the export process. Knowledge that saves you time and money.',
      articles: [
        'How to Choose the Right Packaging Machinery for Your Product',
        'VFFS vs HFFS: Which Packaging Machine Do You Need?',
        'Semi-Automatic vs Fully Automatic: Making the Right Investment',
        'Complete Guide to Importing Machinery from Taiwan',
        'Understanding Voltage Requirements for International Machinery',
        'How to Evaluate a Machinery Supplier Before Ordering',
      ]
    },
    cn: {
      title: '机械采购指南',
      desc: '帮助您选择合适机械、规划生产线和了解出口流程的实用指南。节省您的时间和成本的知识。',
      articles: [
        '如何为您的产品选择合适的包装机械',
        'VFFS与HFFS：您需要哪种包装机？',
        '半自动与全自动：做出正确的投资选择',
        '从台湾进口机械的完整指南',
        '了解国际机械的电压要求',
        '下单前如何评估机械供应商',
      ]
    },
    zh: {
      title: '機械採購指南',
      desc: '幫助您選擇合適機械、規劃生產線和了解出口流程的實用指南。節省您的時間和成本的知識。',
      articles: [
        '如何為您的產品選擇合適的包裝機械',
        'VFFS與HFFS：您需要哪種包裝機？',
        '半自動與全自動：做出正確的投資選擇',
        '從台灣進口機械的完整指南',
        '了解國際機械的電壓要求',
        '下單前如何評估機械供應商',
      ]
    },
    fr: {
      title: 'Guides d\'achat machines',
      desc: 'Guides pratiques pour vous aider à choisir la bonne machine, planifier votre ligne de production et naviguer le processus d\'exportation.',
      articles: [
        'Comment choisir la bonne machine d\'emballage pour votre produit',
        'VFFS vs HFFS : quelle machine de conditionnement vous faut-il ?',
        'Semi-automatique vs automatique : faire le bon investissement',
        'Guide complet pour importer des machines de Taïwan',
        'Comprendre les exigences de tension pour les machines internationales',
        'Comment évaluer un fournisseur de machines avant de commander',
      ]
    },
    es: {
      title: 'Guías de compra de maquinaria',
      desc: 'Guías prácticas para ayudarle a elegir la maquinaria adecuada, planificar su línea de producción y navegar el proceso de exportación.',
      articles: [
        'Cómo elegir la maquinaria de empaque adecuada para su producto',
        'VFFS vs HFFS: ¿Qué máquina de empaque necesita?',
        'Semiautomático vs totalmente automático: hacer la inversión correcta',
        'Guía completa para importar maquinaria de Taiwán',
        'Comprender los requisitos de voltaje para maquinaria internacional',
        'Cómo evaluar un proveedor de maquinaria antes de hacer un pedido',
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      <PageHeader title={t.title} desc={t.desc} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4">
            {t.articles.map((a, i) => (
              <Card key={i} className="flex items-center justify-between gap-6 p-6 transition hover:shadow-elev-2">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-sm font-bold text-accent-700">{i + 1}</span>
                  <span className="min-w-0 text-base font-semibold text-gray-950">{a}</span>
                </div>
                <svg className="h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
