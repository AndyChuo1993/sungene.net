import Image from 'next/image'
import { cx } from './cx'

export function Photo({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes,
}: {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
}) {
  return (
    <div className={cx('relative overflow-hidden rounded-2xl bg-gray-100', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes || '100vw'}
        className={cx('object-cover', imageClassName)}
      />
    </div>
  )
}
