import { Container } from '@/components/ui/Container'
import { Photo } from '@/components/ui/Photo'
import { Lang } from '@/lib/i18n'
import { PHOTO } from '@/lib/photoLibrary'
import {
  BadgeCheck,
  ClipboardCheck,
  Cpu,
  Package,
  ShieldCheck,
  Ship,
  Users,
  Wrench,
} from 'lucide-react'

export default function TrustGallery({ lang }: { lang: Lang }) {
  const title =
    lang === 'cn'
      ? '供应商协作 · 品控测试 · 出口交付（实景）'
      : lang === 'zh'
        ? '供應商協作 · 品控測試 · 出口交付（實景）'
        : 'Supplier Coordination · QC Test · Export Delivery'

  const desc =
    lang === 'cn'
      ? '用真实照片按流程展示：团队评审 → 供应商装配协作 → FAT测试 → 质检与打包出货。让您在申请采购评估前就能看到我们如何交付。'
      : lang === 'zh'
        ? '用真實照片按流程展示：團隊評審 → 供應商裝配協作 → FAT測試 → 質檢與打包出貨。讓您在申請採購評估前就能看到我們如何交付。'
        : 'A photo narrative of how your line is verified (FAT), inspected, and shipped — before you request a sourcing assessment.'

  const steps: {
    key: string
    src: string
    alt: string
    Icon: any
    title: string
    desc: string
  }[] = [
    {
      key: 'team',
      src: PHOTO.home.trustGallery[6],
      alt: 'Engineering and quality team review',
      Icon: Users,
      title: lang === 'cn' ? '团队评审' : lang === 'zh' ? '團隊評審' : 'Team Review',
      desc:
        lang === 'cn'
          ? '工程、生产与品控一起确认需求、产能与安全规范。'
          : lang === 'zh'
            ? '工程、生產與品控一起確認需求、產能與安全規範。'
            : 'Engineering, operations, and QC align on specs, capacity, and safety.',
    },
    {
      key: 'build',
      src: PHOTO.home.trustGallery[0],
      alt: 'SUS304 weld detail',
      Icon: Wrench,
      title: lang === 'cn' ? '供应商协作制造' : lang === 'zh' ? '供應商協作製造' : 'Supplier Build Coordination',
      desc:
        lang === 'cn'
          ? '从材料到组装进行协作控管，关键部位工艺可追溯。'
          : lang === 'zh'
            ? '從材料到組裝進行協作控管，關鍵部位工藝可追溯。'
            : 'Coordinated build from materials to assembly with traceable workmanship.',
    },
    {
      key: 'controls',
      src: PHOTO.home.trustGallery[1],
      alt: 'Control cabinet and PLC wiring',
      Icon: Cpu,
      title: lang === 'cn' ? '电控与PLC' : lang === 'zh' ? '電控與PLC' : 'Controls & PLC',
      desc:
        lang === 'cn'
          ? '电控柜布局清晰，便于维护与远程支持。'
          : lang === 'zh'
            ? '電控櫃佈局清晰，便於維護與遠端支援。'
            : 'Clean electrical layout for easier maintenance and remote support.',
    },
    {
      key: 'precision',
      src: PHOTO.home.trustGallery[2],
      alt: 'Sealing jaw close-up',
      Icon: BadgeCheck,
      title: lang === 'cn' ? '关键工位精度' : lang === 'zh' ? '關鍵工位精度' : 'Critical Precision',
      desc:
        lang === 'cn'
          ? '封口、灌装等关键部件按应用匹配材料与结构。'
          : lang === 'zh'
            ? '封口、灌裝等關鍵部件按應用匹配材料與結構。'
            : 'Sealing/filling parts are configured for your product and packaging needs.',
    },
    {
      key: 'fat',
      src: PHOTO.home.trustGallery[3],
      alt: 'FAT acceptance test',
      Icon: ClipboardCheck,
      title: lang === 'cn' ? 'FAT验收测试' : lang === 'zh' ? 'FAT驗收測試' : 'FAT Testing',
      desc:
        lang === 'cn'
          ? '按您的产品与包装材做测试，并提供验收测试视频。'
          : lang === 'zh'
            ? '按您的產品與包裝材做測試，並提供驗收測試影片。'
            : 'We run tests with your product/material and provide FAT test videos.',
    },
    {
      key: 'qc',
      src: PHOTO.home.trustGallery[7],
      alt: 'Quality control inspection in a lab',
      Icon: ShieldCheck,
      title: lang === 'cn' ? '品控检验' : lang === 'zh' ? '品控檢驗' : 'QC Inspection',
      desc:
        lang === 'cn'
          ? '关键项目复检，降低到货后调整与停线风险。'
          : lang === 'zh'
            ? '關鍵項目複檢，降低到貨後調整與停線風險。'
            : 'Secondary checks on key points to reduce on-site adjustment risk.',
    },
    {
      key: 'crating',
      src: PHOTO.home.trustGallery[4],
      alt: 'Export wooden crate packing',
      Icon: Package,
      title: lang === 'cn' ? '出口木箱包装' : lang === 'zh' ? '出口木箱包裝' : 'Export Crating',
      desc:
        lang === 'cn'
          ? '防震加固、标识齐全，适配国际运输。'
          : lang === 'zh'
            ? '防震加固、標識齊全，適配國際運輸。'
            : 'Shock-proof packing and clear labeling for international shipping.',
    },
    {
      key: 'delivery',
      src: PHOTO.home.trustGallery[5],
      alt: 'Container loading for export',
      Icon: Ship,
      title: lang === 'cn' ? '装柜出货' : lang === 'zh' ? '裝櫃出貨' : 'Container Loading',
      desc:
        lang === 'cn'
          ? '按目的地与文件要求安排物流与交付。'
          : lang === 'zh'
            ? '按目的地與文件要求安排物流與交付。'
            : 'Export documentation and logistics prepared for your destination.',
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{desc}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.key} className="rounded-2xl bg-white ring-1 ring-gray-200/60 shadow-elev-1 overflow-hidden">
              <Photo
                src={s.src}
                alt={s.alt}
                className="aspect-[4/3] rounded-none"
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
              />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 ring-1 ring-accent-200">
                    <s.Icon className="h-5 w-5 text-accent-600" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-gray-950 truncate">{s.title}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
