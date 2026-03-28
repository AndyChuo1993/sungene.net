import { Container } from '@/components/ui/Container'
import { Photo } from '@/components/ui/Photo'
import { Lang } from '@/lib/i18n'
import { PHOTO } from '@/lib/photoLibrary'

const photos = [
  {
    src: PHOTO.home.trustGallery[0],
    alt: 'SUS304 weld detail',
  },
  {
    src: PHOTO.home.trustGallery[1],
    alt: 'Control cabinet and PLC wiring',
  },
  {
    src: PHOTO.home.trustGallery[2],
    alt: 'Sealing jaw close-up',
  },
  {
    src: PHOTO.home.trustGallery[3],
    alt: 'Factory acceptance test',
  },
  {
    src: PHOTO.home.trustGallery[4],
    alt: 'Export wooden crate packing',
  },
  {
    src: PHOTO.home.trustGallery[5],
    alt: 'Container loading for export',
  },
]

export default function TrustGallery({ lang }: { lang: Lang }) {
  const title =
    lang === 'cn'
      ? '制造、质检与出口交付实况'
      : lang === 'zh'
        ? '製造、質檢與出口交付實況'
        : 'Manufacturing, QC, and Export Delivery'

  const desc =
    lang === 'cn'
      ? '用真实场景展示我们如何制造、测试与交付设备，让买家在询价前就能建立信任。'
      : lang === 'zh'
        ? '用真實場景展示我們如何製造、測試與交付設備，讓買家在詢價前就能建立信任。'
        : 'Real scenes that show how we build, test, and ship machines — before you request a quote.'

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{desc}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <Photo
              key={p.alt}
              src={p.src}
              alt={p.alt}
              className="aspect-square ring-1 ring-gray-200/60"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
