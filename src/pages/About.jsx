import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">About Product Space UIUC</h1>
          <p className="mt-3 text-slate-300/90">We’re a student-run community focused on building and shipping thoughtful products. We host hackathons, run client projects, and teach workshops.</p>
        </header>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          {[{ title: 'Mission', text: 'Empower students to ideate, validate, and ship products that matter.' },
            { title: 'Values', text: 'User-first thinking, craftsmanship, collaboration, and continuous learning.' },
            { title: 'Community', text: 'A supportive environment where product, design, and engineering meet.' }].map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{b.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Join the team</h2>
          <p className="mt-2 text-sm text-slate-300/90">We recruit every semester for multiple tracks. Whether you design, code, or PM, there’s a place for you.</p>
          <div className="mt-4 flex gap-3">
            <button className="rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition">Apply</button>
            <button className="rounded-lg bg-white/10 text-white px-4 py-2 text-sm font-medium ring-1 ring-white/20 hover:bg-white/20 transition">Newsletter</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
