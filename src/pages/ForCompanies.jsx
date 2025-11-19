import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'

export default function ForCompanies() {
  const offerings = [
    { name: 'Discovery Sprint', desc: 'One-week engagement to validate problems and define MVP scope.' },
    { name: 'MVP Build', desc: '4-8 week project to design and ship a functional prototype.' },
    { name: 'Research & Testing', desc: 'Recruit participants and run usability studies with our community.' },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader title={<span className="inline-flex items-center gap-2"><span className="text-[13px] font-medium tracking-wide uppercase text-[#7f2d82] bg-[#7f2d82]/10 ring-1 ring-[#7f2d82]/20 rounded-full px-3 py-1">For Companies</span></span>} subtitle="Collaborate with student builders to explore ideas, validate, and build user-centered solutions." />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">{o.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#7f2d82]/20 bg-[#7f2d82]/10 p-6">
          <h3 className="font-semibold">Start a project</h3>
          <p className="mt-1 text-sm text-slate-600">Tell us about your goals and timeline. We’ll follow up within a week.</p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Company name" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7f2d82]/20" />
            <input type="email" placeholder="Contact email" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7f2d82]/20" />
            <button className="rounded-lg bg-[#7f2d82] text-white px-4 py-2 text-sm font-medium hover:bg-[#6f2772] transition">Submit</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
