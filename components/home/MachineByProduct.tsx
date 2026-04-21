import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import { PHOTO } from '@/lib/photoLibrary'

const content: Record<string, any> = {
  en: {
    title: 'Start from Product Fit, Not a Catalog',
    subtitle: 'Tell us your product and packaging goal — we\'ll map the right sourcing path and configuration direction',
    bottomCta: 'Not sure where to start? → Send us your product',
    cards: [
      {
        href: '/machines/powder-filling-machine',
        label: 'Powder / Flour',
        desc: 'Coffee, spices, flour, protein, chemicals',
        badge: 'Auger · VFFS',
      },
      {
        href: '/machines/liquid-filling-machine',
        label: 'Liquid / Paste',
        desc: 'Sauces, beverages, oils, cosmetics',
        badge: 'Piston · Gravity · Pump',
      },
      {
        href: '/machines/pouch-packing-machine',
        label: 'Pouch / Bag',
        desc: 'Snacks, nuts, dried fruits, pet food',
        badge: 'Stand-up · Pillow · Zipper',
      },
      {
        href: '/machines/conveyor-system',
        label: 'Line Integration',
        desc: 'Conveyors, checkweighers, detectors, and line coordination',
        badge: 'Belt · Roller · Turnkey',
      },
    ],
  },
  cn: {
    title: '先从产品适配开始，不从型录开始',
    subtitle: '告诉我们您的产品与包装目标——我们将为您规划合适的采购路径与配置方向',
    bottomCta: '不确定从哪里开始？→ 发送您的产品信息',
    cards: [
      {
        href: '/machines/powder-filling-machine',
        label: '粉末 / 面粉',
        desc: '咖啡、香料、面粉、蛋白粉、化工品',
        badge: '螺旋充填 · VFFS',
      },
      {
        href: '/machines/liquid-filling-machine',
        label: '液体 / 膏体',
        desc: '酱料、饮料、油脂、化妆品',
        badge: '活塞式 · 重力式 · 泵式',
      },
      {
        href: '/machines/pouch-packing-machine',
        label: '软包 / 袋装',
        desc: '零食、坚果、干果、宠物食品',
        badge: '自立袋 · 枕型袋 · 拉链袋',
      },
      {
        href: '/machines/conveyor-system',
        label: '产线整合',
        desc: '输送、检测与整线协同',
        badge: '皮带 · 滚筒 · 交钥匙',
      },
    ],
  },
  zh: {
    title: '先從產品適配開始，不從型錄開始',
    subtitle: '告訴我們您的產品與包裝目標——我們將為您規劃合適的採購路徑與配置方向',
    bottomCta: '不確定從哪裡開始？→ 傳送您的產品資訊',
    cards: [
      {
        href: '/machines/powder-filling-machine',
        label: '粉末 / 麵粉',
        desc: '咖啡、香料、麵粉、蛋白粉、化工品',
        badge: '螺旋充填 · VFFS',
      },
      {
        href: '/machines/liquid-filling-machine',
        label: '液體 / 膏體',
        desc: '醬料、飲料、油脂、化妝品',
        badge: '活塞式 · 重力式 · 泵式',
      },
      {
        href: '/machines/pouch-packing-machine',
        label: '軟包 / 袋裝',
        desc: '零食、堅果、乾果、寵物食品',
        badge: '自立袋 · 枕型袋 · 拉鏈袋',
      },
      {
        href: '/machines/conveyor-system',
        label: '產線整合',
        desc: '輸送、檢測與整線協同',
        badge: '皮帶 · 滾筒 · 交鑰匙',
      },
    ],
  },
}

// Inline SVG icons for each card
function PowderIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hopper/bag icon */}
      <path d="M10 8h28l-4 16H14L10 8z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M14 24h20v14a2 2 0 01-2 2H16a2 2 0 01-2-2V24z" fill="currentColor" opacity="0.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 30h8M20 34h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 8L6 4M38 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function LiquidIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bottle/drop icon */}
      <path d="M24 4 C24 4 14 18 14 28 C14 36 18.7 42 24 42 C29.3 42 34 36 34 28 C34 18 24 4 24 4Z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M18 32 C18 36 20.7 38 24 38 C27.3 38 30 36 30 32" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="4" r="2" fill="currentColor"/>
    </svg>
  )
}

function PouchIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stand-up pouch icon */}
      <path d="M12 44 L12 16 Q12 8 20 8 L28 8 Q36 8 36 16 L36 44 Q32 48 24 48 Q16 48 12 44 Z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2"/>
      <rect x="12" y="14" width="24" height="4" rx="2" fill="currentColor" opacity="0.6"/>
      <rect x="16" y="22" width="16" height="12" rx="2" fill="white" opacity="0.3"/>
      <path d="M12 38 L36 38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2"/>
    </svg>
  )
}

function ConveyorIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Conveyor icon */}
      <rect x="4" y="28" width="40" height="10" rx="4" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="10" cy="33" r="5" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="38" cy="33" r="5" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="1.5"/>
      {/* Boxes on belt */}
      <rect x="14" y="20" width="10" height="10" rx="2" fill="currentColor" opacity="0.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="27" y="20" width="10" height="10" rx="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
      {/* Arrow */}
      <path d="M38 14l4 4-4 4M30 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const cardIcons = [<PowderIcon key="powder" />, <LiquidIcon key="liquid" />, <PouchIcon key="pouch" />, <ConveyorIcon key="conveyor" />]

const cardPhotos = [
  PHOTO.home.machineByProduct[0],
  PHOTO.home.machineByProduct[1],
  PHOTO.home.machineByProduct[2],
  PHOTO.home.machineByProduct[3],
]

export default function MachineByProduct({ lang }: { lang: Lang }) {
  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-brand-950">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{t.title}</h2>
          <p className="mt-4 text-lg text-brand-300">{t.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card: any, i: number) => (
            <Link
              key={i}
              href={`/${lang}${card.href}`}
              className="group block rounded-2xl bg-brand-900 border border-brand-800 p-6 transition duration-200 hover:border-accent-500 hover:shadow-[0_0_0_1px_theme(colors.accent.500)] hover:-translate-y-0.5"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-brand-800">
                <Image
                  src={cardPhotos[i]}
                  alt={`${card.label} sourcing scenario`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                  className="object-cover opacity-90 transition duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/0 to-brand-950/0" />
              </div>

              {/* Icon circle */}
              <div className="-mt-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/20 text-accent-300 ring-1 ring-white/10 backdrop-blur transition group-hover:bg-accent-500/30">
                {cardIcons[i]}
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold text-white group-hover:text-accent-300 transition">
                {card.label}
              </h3>

              {/* Desc */}
              <p className="mt-2 text-sm leading-relaxed text-brand-400">
                {card.desc}
              </p>

              {/* Badge pill */}
              <div className="mt-4">
                <span className="inline-block rounded-full bg-brand-800 px-3 py-1 text-xs font-medium text-brand-300 ring-1 ring-brand-700">
                  {card.badge}
                </span>
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition group-hover:translate-x-1">
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href={`/${lang}/assessment`}
            className="inline-block rounded-2xl bg-accent-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-accent-500"
          >
            {t.bottomCta}
          </Link>
        </div>
      </Container>
    </section>
  )
}
