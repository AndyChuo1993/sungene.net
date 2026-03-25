import { ComponentPropsWithoutRef } from 'react'
import { cx } from './cx'

export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cx('mx-auto w-full max-w-7xl px-6', className)} {...props} />
}
