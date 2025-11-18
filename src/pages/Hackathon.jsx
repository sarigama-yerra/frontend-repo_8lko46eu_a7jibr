import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Hackathon() {
  const events = [
    { name: 'Ship Sprint', date: 'Oct 12-13, 2025', desc: 'A 24-hour build focused on shipping MVPs with a product-first mindset.' },
    { name: 'Design Dash', date: 'Nov 9, 2025', desc: 'Rapid prototyping and usability testing in small teams.' },
    { name: 'AI Product Weekend', date: 'Dec 7-8, 2025', desc: 'Build AI-powered experiences and pitch to industry mentors.' },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Hackathons at Product Space</h1>
          <p className="mt-3 text-slate-300/90">Fast-paced, collaborative events where you ideate, validate, and ship impactful products.</p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((e) => (
            <div key={e.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{e.name}</h3>
                <span className="text-xs rounded-full bg-white/10 px-2 py-1 text-slate-200 ring-1 ring-white/20">{e.date}</span>
              </div>
              <p className="mt-3 text-slate-300/90 text-sm">{e.desc}</p>
              <div className="mt-5">
                <button className="rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition">Register interest</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
