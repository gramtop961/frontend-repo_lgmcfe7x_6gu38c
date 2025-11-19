import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Shield, Sparkles, Zap, Wallet } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-6 w-6" />, 
    title: 'Real-time payments',
    desc: 'Instant transfers and tap-to-pay with Sparkasse reliability.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure by design',
    desc: 'Encryption, passkeys, biometrics — privacy-first architecture.'
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Effortless saving',
    desc: 'Goals, round-ups, and automations that get out of your way.'
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Thoughtful rewards',
    desc: 'Earn perks for healthy money habits — subtle, not noisy.'
  },
]

const FeatureCard = ({ icon, title, desc, i, y }) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
    style={{ y }}
    tabIndex={0}
    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-white backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
    aria-label={`${title} — ${desc}`}
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }} />
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white/90">
      {icon}
    </div>
    <h3 className="mb-1 text-lg font-semibold tracking-tight">{title}</h3>
    <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
  </motion.article>
)

const Features = () => {
  const sectionRef = useRef(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })

  const yA = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -14])
  const yB = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -6])
  const yC = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, 6])
  const yD = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, 14])

  return (
    <section id="features" ref={sectionRef} className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-white md:text-3xl tracking-tight">Core features</h2>
        <div className="text-sm text-white/60">Built with intention</div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} i={i} y={[yA, yB, yC, yD][i % 4]} {...f} />
        ))}
      </div>
    </section>
  )
}

export default Features
