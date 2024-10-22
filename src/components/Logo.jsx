import clsx from 'clsx'

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <img
      src="/images/zerofour.png" // Update this path to point to your PNG file
      alt="Logo"
      className={clsx(
        fillOnHover && 'group/logo',
        'h-8 transition-all duration-300',
        invert ? 'brightness-0 invert' : '',
        filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        className
      )}
      {...props}
    />
  )
}
