import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'

export default function Careers() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader eyebrow="Careers" title="Opportunities with Product Space" subtitle="Open roles, leadership positions, and how to get involved." />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[{ role: 'Lead, Product', type: 'Student leadership', desc: 'Guide teams through product discovery and delivery.' }, { role: 'Design Fellow', type: 'Fellowship', desc: 'Craft interfaces and run usability tests.' }, { role: 'Engineering Fellow', type: 'Fellowship', desc: 'Build robust frontends and backends for real users.' }].map((r) => (
            <div key={r.role} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{r.role}</h3>
                <span className="text-xs rounded-full bg-purple-50 px-2 py-1 text-purple-700 ring-1 ring-purple-200">{r.type}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
              <div className="mt-4">
                <button className="rounded-lg bg-purple-600 text-white px-4 py-2 text-sm font-medium hover:bg-purple-700 transition">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
