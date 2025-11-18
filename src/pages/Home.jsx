import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />

      <main className="relative">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Hackathons',
              desc: 'Fast-paced weekend sprints to ideate, build, and pitch.',
            }, {
              title: 'Client Projects',
              desc: 'Work with startups and campus orgs on real problems.',
            }, {
              title: 'Workshops',
              desc: 'Hands-on sessions on design, product, and engineering.',
            }].map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-slate-300/90 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
