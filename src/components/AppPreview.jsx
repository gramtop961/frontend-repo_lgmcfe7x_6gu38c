import React from 'react'
import { motion } from 'framer-motion'

const Screen = ({ i, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.05 * i }}
    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-4 text-white shadow-2xl backdrop-blur-xl"
  >
    <div className="mb-3 flex items-center justify-between text-xs text-white/60">
      <span>{title}</span>
      <span className="rounded-full bg-white/10 px-2 py-0.5">v1.0</span>
    </div>
    <div className="aspect-[9/16] w-full rounded-2xl bg-[radial-gradient(60%_60%_at_50%_40%,rgba(229,9,20,0.3),rgba(122,63,255,0.2)_60%,rgba(255,45,175,0.15)_100%)] p-3">
      <div className="h-full w-full rounded-xl border border-white/10 bg-black/50" />
    </div>
  </motion.div>
)

const AppPreview = () => {
  return (
    <section id="app" className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">A mobile app that moves like you</h2>
        <div className="text-sm text-white/60">Smooth, fast, and ultra-modern</div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Screen i={0} title="Home • Balance" />
        <Screen i={1} title="Cards • Tap to pay" />
        <Screen i={2} title="Insights • Trends" />
      </div>
    </section>
  )
}

export default AppPreview
