export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-300/80 text-sm">© {new Date().getFullYear()} Product Space UIUC. All rights reserved.</p>
          <div className="text-slate-400 text-sm">Built with love by student makers.</div>
        </div>
      </div>
    </footer>
  )
}
