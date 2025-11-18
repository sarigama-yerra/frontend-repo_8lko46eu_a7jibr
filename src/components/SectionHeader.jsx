export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200 ring-1 ring-white/20 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          {eyebrow}
        </div>
      )}
      {title && <h2 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h2>}
      {subtitle && <p className="mt-2 text-slate-300/90">{subtitle}</p>}
    </div>
  )
}
