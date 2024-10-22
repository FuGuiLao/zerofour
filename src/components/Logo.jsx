import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path d="M1215.5 503c-.34.55-.141 1 .441 1s1.059-.45 1.059-1-.198-1-.441-1-.719.45-1.059 1m232.5 0c0 .55.477 1 1.059 1s.781-.45.441-1-.816-1-1.059-1-.441.45-.441 1m-413.655 6.543c-.326.849-.369 1.767-.096 2.04.274.273.737-.422 1.03-1.543.624-2.383-.069-2.751-.934-.497m178.293-.043c-.316.825-.187 1.5.286 1.5.474 0 1.121-.675 1.438-1.5.316-.825.187-1.5-.286-1.5-.474 0-1.121.675-1.438 1.5" />
  
</svg>  
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
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d=""
      />
    </svg>
  )
}
