import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Sparkles, Zap, Wallet } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-6 w-6" />, 
    title: 'Instant payments',
    desc: 'Lightning-fast transfers and tap-to-pay — powered by Sparkasse infrastructure.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Bank-grade security',
    desc: '24/7 protection with encrypted vaults, biometric lock, and fraud intelligence.'
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Smart saving',
    desc: 'Round-ups, streaks, and goals — saving that feels like a game.'
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Rewards that slap',
    desc: 'Earn neon points and unlock boosts when you build money habits.'
  },
]

const FeatureCard = ({ icon, title, desc, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
  >
    <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: '0 0 80px 10px rgba(255,45,175,0.15)' }} />
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#E50914]/20 via-[#7A3FFF]/20 to-[#FF2DAF]/20 text-white/90">
      {icon}
    </div>
    <h3 className="mb-1 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-white/70">{desc}</p>
  </motion.div>
)

const Features = () => {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Core features</h2>
        <div className="text-sm text-white/60">Built for speed, trust, and vibes</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} i={i} {...f} />
        ))}
      </div>
    </section>
  )
}

export default Features
