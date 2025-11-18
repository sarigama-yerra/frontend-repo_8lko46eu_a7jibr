import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-2 text-slate-300/90">Page not found.</p>
        <a href="/" className="mt-6 inline-block rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition">Go home</a>
      </div>
    </div>
  )
}
