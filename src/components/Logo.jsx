import { useId } from 'react'
import logoZerofour from '@/images/zerofour.png'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <img src={logoZerofour} alt="Zerofour Logo" {...props} />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
      Zerofour.
    </h2>
  )
}
