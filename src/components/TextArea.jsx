export function TextArea({ label, rows = 6, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-950">
        {label}
      </label>
      <textarea
        rows={rows}
        className="mt-2 block w-full rounded-xl border border-neutral-300 px-4 py-3 text-base text-neutral-950 shadow-sm focus:border-neutral-950 focus:ring-neutral-950"
        {...props}
      />
    </div>
  )
}
