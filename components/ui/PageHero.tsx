import { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { Photo } from '@/components/ui/Photo'
import { cx } from '@/components/ui/cx'

export function PageHero({
  title,
  desc,
  kicker,
  actions,
  badges,
  image,
  below,
  className,
}: {
  title: ReactNode
  desc?: ReactNode
  kicker?: ReactNode
  actions?: ReactNode
  badges?: ReactNode
  image?: {
    src: string
    alt: string
    priority?: boolean
    sizes?: string
    className?: string
    imageClassName?: string
    aspectClassName?: string
  }
  below?: ReactNode
  className?: string
}) {
  return (
    <section className={cx('relative overflow-hidden bg-brand-950 bg-industrial-grid border-b-2 border-accent-600/30', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/80 to-brand-950/90 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-accent-600/[0.08] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-brand-700/20 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative py-14 sm:py-20">
        <div className={cx('grid items-start gap-10 lg:gap-14', image ? 'lg:grid-cols-[1.1fr,0.9fr] lg:items-center' : '')}>
          <div>
            {kicker ? (
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-accent-500" />
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">{kicker}</div>
              </div>
            ) : null}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
            {desc ? <div className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-300">{desc}</div> : null}
            {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
            {badges ? <div className="mt-10">{badges}</div> : null}
          </div>

          {image ? (
            <div className={cx('w-full', image.className)}>
              <Photo
                src={image.src}
                alt={image.alt}
                priority={image.priority}
                sizes={image.sizes || '(min-width: 1024px) 40vw, 92vw'}
                className={cx('ring-1 ring-white/10 shadow-elev-2', image.aspectClassName || 'aspect-[4/3]')}
                imageClassName={cx('object-cover', image.imageClassName)}
              />
            </div>
          ) : null}
        </div>

        {below ? <div className="mt-12">{below}</div> : null}
      </Container>
    </section>
  )
}
