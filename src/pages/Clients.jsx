import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Clients() {
  const clients = [
    { name: 'Illini Startups', area: 'Campus entrepreneurship', impact: 'MVP mobile app for event discovery' },
    { name: 'Research Labs', area: 'HCI + AI', impact: 'Interactive dashboards for study participants' },
    { name: 'Local Nonprofits', area: 'Community services', impact: 'Volunteer matching platform' },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Client Collaborations</h1>
          <p className="mt-3 text-slate-300/90">We partner with student ventures and community organizations to build real products with real users.</p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {clients.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-1 text-xs text-slate-300/80">{c.area}</p>
              <p className="mt-3 text-sm text-slate-300/90">{c.impact}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
          <h2 className="text-xl font-semibold">Work with us</h2>
          <p className="mt-2 text-sm text-slate-200/90">Have a product idea and need a student team? Tell us about your needs and timeline.</p>
          <button className="mt-4 rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition">Start a project</button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
