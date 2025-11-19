import React from 'react'
import { motion } from 'framer-motion'

const Screen = ({ i, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
    className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 text-white shadow-2xl backdrop-blur-xl"
  >
    <div className="mb-3 flex items-center justify-between text-xs text-white/60">
      <span>{title}</span>
      <span className="rounded-full bg-white/10 px-2 py-0.5">v1.0</span>
    </div>
    <div className="aspect-[9/16] w-full rounded-2xl border border-white/[0.08] bg-[#0D0D0F]/80 p-3">
      <div className="h-full w-full rounded-xl border border-white/[0.06] bg-[radial-gradient(80%_80%_at_50%_20%,rgba(255,45,85,0.10),rgba(214,67,245,0.08)_60%,rgba(255,255,255,0.04)_100%)]" />
    </div>
  </motion.div>
)

const AppPreview = () => {
  return (
    <section id="app" className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold md:text-3xl tracking-tight">A mobile app that feels effortless</h2>
        <div className="text-sm text-white/60">Quietly powerful</div>
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
