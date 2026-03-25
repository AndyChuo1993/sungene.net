import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const titles: Record<string, string> = {
  en: 'Machinery Solutions | SunGene', cn: '解决方案｜SunGene', zh: '解決方案｜SunGene',
  fr: 'Solutions machines | SunGene', es: 'Soluciones de maquinaria | SunGene',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return { title: titles[lang] || titles.en }
}

export default async function SolutionsPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, { title: string; desc: string; cats: { id: string; title: string; desc: string }[] }> = {
    en: {
      title: 'Machinery Solutions',
      desc: 'From single machines to complete automated production lines — we offer solutions at every scale. Whether you need one machine or a turnkey factory setup, our engineering team will design the right configuration.',
      cats: [
        { id: 'single', title: 'Single Machine Solutions', desc: 'Individual packaging, filling, sealing, or processing machines configured for your specific product and output requirements.' },
        { id: 'semi', title: 'Semi-Automatic Setups', desc: 'Cost-effective combinations of manual and automated steps, ideal for growing businesses upgrading from manual production.' },
        { id: 'line', title: 'Production Line Solutions', desc: 'Integrated multi-machine lines with conveyors, feeders, and synchronized controls for high-volume continuous production.' },
        { id: 'custom', title: 'OEM & Custom Engineering', desc: 'Purpose-built machinery designed by our R&D team to match unique product characteristics, space constraints, or process requirements.' },
        { id: 'export', title: 'Export & Installation Support', desc: 'Complete export service including voltage customization, international shipping, documentation, and remote video-guided installation.' }
      ]
    },
    cn: {
      title: '机械解决方案',
      desc: '从单机到完整的自动化生产线——我们提供各种规模的解决方案。无论您需要一台机器还是交钥匙工厂配置，我们的工程团队都会设计合适的方案。',
      cats: [
        { id: 'single', title: '单机解决方案', desc: '根据您的特定产品和产能要求配置的单台包装、灌装、封口或加工机械。' },
        { id: 'semi', title: '半自动配置', desc: '手动与自动化步骤的经济型组合，适合从手工生产升级的成长型企业。' },
        { id: 'line', title: '生产线方案', desc: '集成多机产线，配备输送机、进料器和同步控制，适用于大批量连续生产。' },
        { id: 'custom', title: 'OEM与定制工程', desc: '由我们研发团队根据独特产品特性、空间限制或工艺需求专门设计的机械。' },
        { id: 'export', title: '出口与安装支持', desc: '包含电压定制、国际物流、文件及远程视频安装指导的完整出口服务。' }
      ]
    },
    zh: {
      title: '機械解決方案',
      desc: '從單機到完整的自動化生產線——我們提供各種規模的解決方案。無論您需要一台機器還是交鑰匙工廠配置，我們的工程團隊都會設計合適的方案。',
      cats: [
        { id: 'single', title: '單機解決方案', desc: '根據您的特定產品和產能要求配置的單台包裝、灌裝、封口或加工機械。' },
        { id: 'semi', title: '半自動配置', desc: '手動與自動化步驟的經濟型組合，適合從手工生產升級的成長型企業。' },
        { id: 'line', title: '生產線方案', desc: '整合多機產線，配備輸送機、進料器和同步控制，適用於大批量連續生產。' },
        { id: 'custom', title: 'OEM與客製工程', desc: '由我們研發團隊根據獨特產品特性、空間限制或工藝需求專門設計的機械。' },
        { id: 'export', title: '出口與安裝支援', desc: '包含電壓客製、國際物流、文件及遠端視訊安裝指導的完整出口服務。' }
      ]
    },
    fr: {
      title: 'Solutions machines',
      desc: 'De la machine individuelle aux lignes de production automatisées complètes — nous proposons des solutions à toutes les échelles. Notre équipe d\'ingénieurs conçoit la configuration adaptée à vos besoins.',
      cats: [
        { id: 'single', title: 'Solutions machine individuelle', desc: 'Machines d\'emballage, remplissage, scellage ou transformation configurées selon votre produit et vos exigences de production.' },
        { id: 'semi', title: 'Installations semi-automatiques', desc: 'Combinaisons rentables d\'étapes manuelles et automatisées, idéales pour les entreprises en croissance.' },
        { id: 'line', title: 'Solutions ligne de production', desc: 'Lignes multi-machines intégrées avec convoyeurs, alimentateurs et commandes synchronisées pour la production en continu.' },
        { id: 'custom', title: 'OEM et ingénierie sur mesure', desc: 'Machines conçues par notre équipe R&D pour répondre aux caractéristiques uniques de votre produit ou de votre processus.' },
        { id: 'export', title: 'Support export et installation', desc: 'Service export complet : personnalisation de la tension, expédition internationale, documentation et installation guidée par vidéo.' }
      ]
    },
    es: {
      title: 'Soluciones de maquinaria',
      desc: 'Desde máquinas individuales hasta líneas de producción automatizadas completas — ofrecemos soluciones a toda escala. Nuestro equipo de ingenieros diseña la configuración adecuada para sus necesidades.',
      cats: [
        { id: 'single', title: 'Soluciones de máquina individual', desc: 'Máquinas de empaque, llenado, sellado o procesamiento configuradas según su producto y requisitos de producción.' },
        { id: 'semi', title: 'Configuraciones semiautomáticas', desc: 'Combinaciones económicas de pasos manuales y automatizados, ideales para empresas en crecimiento.' },
        { id: 'line', title: 'Soluciones de línea de producción', desc: 'Líneas integradas multi-máquina con transportadores, alimentadores y controles sincronizados para producción continua.' },
        { id: 'custom', title: 'OEM e ingeniería personalizada', desc: 'Maquinaria diseñada por nuestro equipo de I+D para adaptarse a las características únicas de su producto o proceso.' },
        { id: 'export', title: 'Soporte de exportación e instalación', desc: 'Servicio de exportación completo: personalización de voltaje, envío internacional, documentación e instalación guiada por video.' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      <PageHeader title={t.title} desc={t.desc} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6">
            {t.cats.map((c, i) => (
              <Card key={i} id={c.id} className="p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-700 font-bold text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">{c.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">{c.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
