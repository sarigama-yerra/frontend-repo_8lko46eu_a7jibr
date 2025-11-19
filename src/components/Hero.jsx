import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1.5 text-xs text-purple-700 ring-1 ring-purple-200">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            Student-led product org at UIUC
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
            Build products. Ship impact.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            We are a community of builders, designers, and product thinkers at the University of Illinois.
            Join our hackathons, collaborate with real clients, and level up your craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#companies" className="rounded-lg bg-purple-600 text-white px-4 py-2.5 text-sm font-medium shadow hover:bg-purple-700 transition">
              See our partners
            </a>
            <a href="#fellowship" className="rounded-lg bg-purple-50 text-purple-700 px-4 py-2.5 text-sm font-medium ring-1 ring-purple-200 hover:bg-purple-100 transition">
              Explore fellowships
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
