import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const Screen = ({ i, title, y, r }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
    style={{ y, rotateZ: r }}
    className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 text-white shadow-2xl backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
    role="group"
    tabIndex={0}
    aria-label={`${title} preview card`}
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
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -18])
  const y2 = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -8])
  const y3 = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, 10])
  const r1 = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -0.6])
  const r2 = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, 0.4])
  const r3 = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -0.3])

  return (
    <section id="app" ref={ref} className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold md:text-3xl tracking-tight">A mobile app that feels effortless</h2>
        <div className="text-sm text-white/60">Quietly powerful</div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Screen i={0} title="Home • Balance" y={y1} r={r1} />
        <Screen i={1} title="Cards • Tap to pay" y={y2} r={r2} />
        <Screen i={2} title="Insights • Trends" y={y3} r={r3} />
      </div>
    </section>
  )
}

export default AppPreview
