import { Container } from '@/components/ui/Container'
import { Photo } from '@/components/ui/Photo'
import { aiImageUrl, photoPrompt } from '@/lib/aiImage'
import { Lang } from '@/lib/i18n'

const photos = [
  {
    src: aiImageUrl(
      photoPrompt(
        'macro detail of SUS304 stainless steel weld seam on industrial machinery, clean brushed surface, sharp reflections',
        'machineDetail'
      ),
      'square_hd'
    ),
    alt: 'SUS304 weld detail',
  },
  {
    src: aiImageUrl(
      photoPrompt(
        'stainless steel control cabinet interior, neat PLC wiring and cable management, professional assembly',
        'machineDetail'
      ),
      'square_hd'
    ),
    alt: 'Control cabinet and PLC wiring',
  },
  {
    src: aiImageUrl(
      photoPrompt(
        'close-up of packaging machine sealing jaw, stainless steel, clean workshop background',
        'machineDetail'
      ),
      'square_hd'
    ),
    alt: 'Sealing jaw close-up',
  },
  {
    src: aiImageUrl(
      photoPrompt(
        'factory acceptance test of industrial machinery, technician hands operating HMI screen, clean production area, faces not visible',
        'qcDetail'
      ),
      'square_hd'
    ),
    alt: 'Factory acceptance test',
  },
  {
    src: aiImageUrl(
      photoPrompt(
        'industrial machinery being packed into a wooden crate with protective foam and straps, export packaging',
        'shipping'
      ),
      'square_hd'
    ),
    alt: 'Export wooden crate packing',
  },
  {
    src: aiImageUrl(
      photoPrompt(
        'shipping container loading with industrial equipment crates, logistics scene, overcast daylight',
        'shipping'
      ),
      'square_hd'
    ),
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
