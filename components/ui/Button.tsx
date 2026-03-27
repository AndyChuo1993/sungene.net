import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { cx } from './cx'

type Variant = 'primary' | 'secondary' | 'soft'
type Size = 'sm' | 'md' | 'lg'

function buttonClasses(variant: Variant, size: Size, className?: string) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 disabled:pointer-events-none disabled:opacity-50'

  const sizes: Record<Size, string> = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-base',
  }

  const variants: Record<Variant, string> = {
    primary: 'bg-accent-600 text-white font-bold shadow-md shadow-accent-700/25 hover:bg-accent-700 hover:shadow-lg hover:shadow-accent-700/30',
    secondary: 'bg-brand-950 text-white font-semibold ring-1 ring-brand-800 hover:bg-brand-900 hover:ring-brand-700',
    soft: 'bg-brand-50 text-brand-900 font-semibold ring-1 ring-brand-100 hover:bg-brand-100',
  }

  return cx(base, sizes[size], variants[variant], className)
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ComponentPropsWithoutRef<'button'> & { variant?: Variant; size?: Size }) {
  return <button className={buttonClasses(variant, size, className)} {...props} />
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & { variant?: Variant; size?: Size }) {
  return <Link className={buttonClasses(variant, size, className)} {...props} />
}
