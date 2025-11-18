import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-900 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200 ring-1 ring-white/20 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Student-led product org at UIUC
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Build products. Ship impact.
          </h1>
          <p className="mt-5 text-lg text-slate-200/90">
            We are a community of builders, designers, and product thinkers at the University of Illinois.
            Join our hackathons, collaborate with real clients, and level up your craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#hackathon" className="rounded-lg bg-white text-slate-900 px-4 py-2.5 text-sm font-medium shadow hover:shadow-lg transition">
              Explore Hackathons
            </a>
            <a href="#clients" className="rounded-lg bg-white/10 text-white px-4 py-2.5 text-sm font-medium ring-1 ring-white/20 hover:bg-white/20 transition">
              Work with Clients
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
