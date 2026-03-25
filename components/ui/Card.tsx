import { ComponentPropsWithoutRef } from 'react'
import { cx } from './cx'

export function Card({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cx('rounded-2xl bg-white shadow-elev-1 ring-1 ring-gray-200/60', className)} {...props} />
}
