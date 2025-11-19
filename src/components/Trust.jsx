import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, LockKeyhole, BadgeCheck } from 'lucide-react'

const Item = ({ icon: Icon, title, desc, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: 0.06 * i }}
    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white backdrop-blur-xl"
  >
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-1 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-white/70">{desc}</p>
  </motion.div>
)

const Trust = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Security without the corporate feel</h2>
        <p className="mt-2 text-white/70">Protected by Sparkasse-grade systems, wrapped in a modern experience.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Item i={0} icon={ShieldCheck} title="Protected funds" desc="Your money is safeguarded with multi-layer security and monitoring." />
        <Item i={1} icon={LockKeyhole} title="Biometric everything" desc="Face ID, Touch ID, passkeys — your choice, your control." />
        <Item i={2} icon={BadgeCheck} title="Sparkasse trust" desc="Backed by the most trusted banking network in Germany." />
      </div>
    </section>
  )
}

export default Trust
