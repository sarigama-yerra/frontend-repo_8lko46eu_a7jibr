export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1.5 text-xs text-purple-700 ring-1 ring-purple-200">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
          {eyebrow}
        </div>
      )}
      {title && <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>}
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  )
}
