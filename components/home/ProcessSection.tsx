import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function ProcessSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'HOW WE WORK',
      title: 'From Inquiry to Delivery in 5 Steps',
      items: [
        { step: '01', title: 'Share Your Requirements', desc: 'Tell us your product type, target output, packaging format, and destination country. We start from your application, not a catalog.' },
        { step: '02', title: 'Engineering Consultation', desc: 'Our technical team analyzes your needs and recommends the optimal machine configuration, materials, and automation level.' },
        { step: '03', title: 'Quotation & Proposal', desc: 'Receive a detailed proposal with machine specifications, layout drawings, pricing, lead time, and warranty terms.' },
        { step: '04', title: 'Manufacturing & QC', desc: 'Your machine is built to spec with full quality inspections. We share factory test videos and photos before shipment.' },
        { step: '05', title: 'Export & Installation', desc: 'Professional crating, international shipping, customs documentation, and remote video-guided installation support.' }
      ]
    },
    cn: {
      kicker: '合作流程',
      title: '从询价到交付只需5步',
      items: [
        { step: '01', title: '提交需求', desc: '告诉我们您的产品类型、目标产能、包装形式和目的国。我们从您的应用出发，而非产品目录。' },
        { step: '02', title: '工程咨询', desc: '我们的技术团队分析您的需求，推荐最优的机器配置、材料和自动化水平。' },
        { step: '03', title: '报价与方案', desc: '获取详细方案书，包含设备规格、布局图、价格、交期和保修条款。' },
        { step: '04', title: '制造与质检', desc: '按规格制造，全程品质检验。发货前提供工厂测试视频和照片。' },
        { step: '05', title: '出口与安装', desc: '专业木箱包装、国际运输、报关文件及远程视频安装指导。' }
      ]
    },
    zh: {
      kicker: '合作流程',
      title: '從詢價到交付只需5步',
      items: [
        { step: '01', title: '提交需求', desc: '告訴我們您的產品類型、目標產能、包裝形式和目的國。我們從您的應用出發，而非產品目錄。' },
        { step: '02', title: '工程諮詢', desc: '我們的技術團隊分析您的需求，推薦最優的機器配置、材料和自動化水平。' },
        { step: '03', title: '報價與方案', desc: '獲取詳細方案書，包含設備規格、佈局圖、價格、交期和保修條款。' },
        { step: '04', title: '製造與質檢', desc: '按規格製造，全程品質檢驗。發貨前提供工廠測試影片和照片。' },
        { step: '05', title: '出口與安裝', desc: '專業木箱包裝、國際運輸、報關文件及遠端視訊安裝指導。' }
      ]
    },
    fr: {
      kicker: 'NOTRE PROCESSUS',
      title: 'De la demande à la livraison en 5 étapes',
      items: [
        { step: '01', title: 'Décrivez vos besoins', desc: 'Indiquez-nous votre type de produit, votre objectif de production, le format d\'emballage et le pays de destination. Nous partons de votre application, pas d\'un catalogue.' },
        { step: '02', title: 'Consultation technique', desc: 'Notre équipe technique analyse vos besoins et recommande la configuration machine, les matériaux et le niveau d\'automatisation optimaux.' },
        { step: '03', title: 'Devis et proposition', desc: 'Recevez une proposition détaillée avec les spécifications machines, les plans d\'implantation, les tarifs, les délais et les conditions de garantie.' },
        { step: '04', title: 'Fabrication et contrôle qualité', desc: 'Votre machine est construite sur mesure avec des inspections qualité complètes. Nous partageons vidéos et photos des tests usine avant expédition.' },
        { step: '05', title: 'Export et installation', desc: 'Mise en caisse professionnelle, expédition internationale, documents douaniers et assistance à l\'installation guidée par vidéo à distance.' }
      ]
    },
    es: {
      kicker: 'NUESTRO PROCESO',
      title: 'De la consulta a la entrega en 5 pasos',
      items: [
        { step: '01', title: 'Comparta sus requisitos', desc: 'Indíquenos su tipo de producto, producción objetivo, formato de empaque y país de destino. Partimos de su aplicación, no de un catálogo.' },
        { step: '02', title: 'Consulta de ingeniería', desc: 'Nuestro equipo técnico analiza sus necesidades y recomienda la configuración de máquina, materiales y nivel de automatización óptimos.' },
        { step: '03', title: 'Cotización y propuesta', desc: 'Reciba una propuesta detallada con especificaciones de máquina, planos de distribución, precios, plazos de entrega y términos de garantía.' },
        { step: '04', title: 'Fabricación y control de calidad', desc: 'Su máquina se construye según especificaciones con inspecciones de calidad completas. Compartimos videos y fotos de pruebas en fábrica antes del envío.' },
        { step: '05', title: 'Exportación e instalación', desc: 'Embalaje profesional en cajas de madera, envío internacional, documentación aduanera y asistencia de instalación guiada por video remoto.' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-brand-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-400">{t.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-5">
          {t.items.map((item: any, i: number) => (
            <div key={i} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-600 text-xl font-bold text-white shadow-lg">
                {item.step}
              </div>
              {i < t.items.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-accent-500/50 to-accent-500/10 md:block" />
              )}
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
