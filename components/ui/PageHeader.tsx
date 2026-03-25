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
    <section className={cx('bg-brand-950', className)}>
      <Container className="py-12 sm:py-16">
        {kicker ? <div className="text-sm font-bold uppercase tracking-wider text-accent-400">{kicker}</div> : null}
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        {desc ? <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">{desc}</p> : null}
      </Container>
    </section>
  )
}
