import clsx from 'clsx'

export function TextArea({ label, rows = 6, className, ...props }) {
  return (
    <textarea
      rows={rows}
      placeholder={label}
      className={clsx(
        // Matches TextInput row border + padding
        'relative block w-full resize-y rounded-none border border-neutral-200 bg-transparent px-6 py-6 text-base text-neutral-950 placeholder:text-neutral-500 focus:z-10 focus:border-neutral-950 focus:outline-none focus:ring-0',
        className
      )}
      {...props}
    />
  )
}
