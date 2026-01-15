import clsx from 'clsx'

export function TextArea({ label, rows = 6, className, ...props }) {
  return (
    <textarea
      rows={rows}
      placeholder={label}
      className={clsx(
        // Match TextInput exactly
        'relative block w-full resize-y border border-neutral-300 bg-transparent px-6 py-6 text-base text-neutral-950 placeholder:text-neutral-500 focus:z-10 focus:border-neutral-950 focus:outline-none focus:ring-0',

        // 👇 THIS is the missing piece
        'last:rounded-b-2xl',

        className
      )}
      {...props}
    />
  )
}
