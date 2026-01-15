import clsx from 'clsx'

export function TextArea({ label, rows = 6, className, ...props }) {
  return (
    <textarea
      rows={rows}
      placeholder={label}
      className={clsx(
        // Match the “clean input row” look
        'block w-full resize-y bg-transparent px-6 py-6 text-base text-neutral-950 placeholder:text-neutral-500 focus:outline-none focus:ring-0',
        className
      )}
      {...props}
    />
  )
}
