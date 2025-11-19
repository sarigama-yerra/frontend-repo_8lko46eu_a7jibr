import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'

export default function Home() {
  const companies = [
    { name: 'Google' },
    { name: 'Meta' },
    { name: 'Microsoft' },
    { name: 'Illinois Ventures' },
    { name: 'Research Labs' },
    { name: 'Startups' },
  ]

  const clients = [
    { quote: 'The team shipped a polished MVP in weeks.', author: 'Director, Local Nonprofit' },
    { quote: 'Professional, user-centered, and fast.', author: 'Founder, Campus Startup' },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <main className="relative">
        {/* Companies */}
        <section id="companies" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            align="center"
            title={<span className="inline-flex items-center gap-2"><span className="text-[13px] font-medium tracking-wide uppercase text-[#7f2d82] bg-[#7f2d82]/10 ring-1 ring-[#7f2d82]/20 rounded-full px-3 py-1">Companies we’ve worked with</span><span className="sr-only">—</span><span className="hidden" /></span>}
            subtitle="We collaborate with industry partners, research groups, and startups to build real products."
          />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {companies.map((c) => (
              <div key={c.name} className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-600">
                {c.name}
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <SectionHeader
              title={<span className="inline-flex items-center gap-2"><span className="text-[13px] font-medium tracking-wide uppercase text-[#7f2d82] bg-[#7f2d82]/10 ring-1 ring-[#7f2d82]/20 rounded-full px-3 py-1">About</span></span>}
              subtitle="We’re a student-run community focused on hackathons, client projects, and workshops."
            />
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[{
                title: 'Hackathons',
                desc: 'Fast-paced weekend sprints to ideate, build, and pitch.'
              }, {
                title: 'Client Projects',
                desc: 'Work with startups and campus orgs on real problems.'
              }, {
                title: 'Workshops',
                desc: 'Hands-on sessions on design, product, and engineering.'
              }].map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            title={<span className="inline-flex items-center gap-2"><span className="text-[13px] font-medium tracking-wide uppercase text-[#7f2d82] bg-[#7f2d82]/10 ring-1 ring-[#7f2d82]/20 rounded-full px-3 py-1">Our Clients</span></span>}
            subtitle="Real collaborations with student ventures and community organizations."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {clients.map((t, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-slate-800">“{t.quote}”</p>
                <p className="mt-3 text-sm text-slate-500">— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fellowship */}
        <section id="fellowship" className="bg-gradient-to-b from-[#7f2d82]/5 to-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <SectionHeader
              align="center"
              title={<span className="inline-flex items-center gap-2"><span className="text-[13px] font-medium tracking-wide uppercase text-[#7f2d82] bg-[#7f2d82]/10 ring-1 ring-[#7f2d82]/20 rounded-full px-3 py-1">Fellowship</span></span>}
              subtitle="Semester-long tracks in product, design, and engineering with mentorship and real projects."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className="rounded-lg bg-[#7f2d82] text-white px-4 py-2 text-sm font-medium shadow hover:bg-[#6f2772] transition">Apply now</button>
              <button className="rounded-lg bg-white text-[#7f2d82] px-4 py-2 text-sm font-medium ring-1 ring-[#7f2d82]/30 hover:bg-[#7f2d82]/5 transition">Get updates</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
