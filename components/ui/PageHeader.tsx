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
    <section className={cx('bg-hero-radial border-b border-gray-200/60', className)}>
      <Container className="py-14 sm:py-16">
        {kicker ? <div className="text-sm font-semibold tracking-wide text-brand-700">{kicker}</div> : null}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">{title}</h1>
        {desc ? <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">{desc}</p> : null}
      </Container>
    </section>
  )
}
