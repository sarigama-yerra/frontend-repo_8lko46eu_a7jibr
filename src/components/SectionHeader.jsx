export default function SectionHeader({ title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {title && <h2 className="mt-0 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>}
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  )
}
