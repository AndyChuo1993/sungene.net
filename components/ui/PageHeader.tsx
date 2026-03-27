import { ReactNode } from 'react'
import { Container } from './Container'
import { cx } from './cx'

export function PageHeader({
  title,
  desc,
  kicker,
  className,
}: {
  title: ReactNode
  desc?: ReactNode
  kicker?: ReactNode
  className?: string
}) {
  return (
    <section className={cx('relative overflow-hidden bg-brand-950 bg-industrial-grid border-b-2 border-accent-600/30', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/80 to-brand-950/90 pointer-events-none" />
      <Container className="relative py-14 sm:py-20">
        {kicker ? (
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500" />
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">{kicker}</div>
          </div>
        ) : null}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {desc ? <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-300">{desc}</p> : null}
      </Container>
    </section>
  )
}
