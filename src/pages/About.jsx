import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="max-w-3xl">
          <h1 className="inline-flex items-center gap-2 text-4xl font-bold tracking-tight"><span className="text-[13px] font-medium tracking-wide uppercase text-[#7f2d82] bg-[#7f2d82]/10 ring-1 ring-[#7f2d82]/20 rounded-full px-3 py-1">About</span></h1>
          <p className="mt-3 text-slate-600">We’re a student-run community focused on building and shipping thoughtful products. We host hackathons, run client projects, and teach workshops.</p>
        </header>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          {[{ title: 'Mission', text: 'Empower students to ideate, validate, and ship products that matter.' },
            { title: 'Values', text: 'User-first thinking, craftsmanship, collaboration, and continuous learning.' },
            { title: 'Community', text: 'A supportive environment where product, design, and engineering meet.' }].map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-[#7f2d82]/20 bg-[#7f2d82]/10 p-6">
          <h2 className="text-xl font-semibold">Join the team</h2>
          <p className="mt-2 text-sm text-slate-600">We recruit every semester for multiple tracks. Whether you design, code, or PM, there’s a place for you.</p>
          <div className="mt-4 flex gap-3">
            <button className="rounded-lg bg-[#7f2d82] text-white px-4 py-2 text-sm font-medium hover:bg-[#6f2772] transition">Apply</button>
            <button className="rounded-lg bg-white text-[#7f2d82] px-4 py-2 text-sm font-medium ring-1 ring-[#7f2d82]/30 hover:bg-[#7f2d82]/10 transition">Newsletter</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
