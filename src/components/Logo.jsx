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
    <h2 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
      Zerofour.
    </h2>
  )
}
