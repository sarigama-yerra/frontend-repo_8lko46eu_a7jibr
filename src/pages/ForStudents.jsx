import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'

export default function ForStudents() {
  const tracks = [
    { name: 'Product', desc: 'Learn discovery, prioritization, and roadmap planning.' },
    { name: 'Design', desc: 'Master Figma, prototyping, and usability testing.' },
    { name: 'Engineering', desc: 'Build full-stack apps with modern tools.' },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader title={<span className="inline-flex items-center gap-2"><span className="text-[13px] font-medium tracking-wide uppercase text-[#7f2d82] bg-[#7f2d82]/10 ring-1 ring-[#7f2d82]/20 rounded-full px-3 py-1">For Students</span></span>} subtitle="Join hackathons, workshops, and fellowships to level up with a supportive community." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tracks.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#7f2d82]/10 to-white border border-[#7f2d82]/20 p-6">
          <h3 className="font-semibold">Stay in the loop</h3>
          <p className="mt-1 text-sm text-slate-600">Subscribe for recruiting dates and event announcements.</p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="your@email" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7f2d82]/20" />
            <button className="rounded-lg bg-[#7f2d82] text-white px-4 py-2 text-sm font-medium hover:bg-[#6f2772] transition">Subscribe</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
