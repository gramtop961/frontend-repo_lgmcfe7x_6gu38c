import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, LockKeyhole, BadgeCheck } from 'lucide-react'

const Item = ({ icon: Icon, title, desc, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
    className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-white backdrop-blur-xl"
  >
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06]">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-1 text-lg font-semibold tracking-tight">{title}</h3>
    <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
  </motion.div>
)

const Trust = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold text-white md:text-3xl tracking-tight">Security, elegantly implemented</h2>
        <p className="mt-2 text-white/70">Sparkasse-grade protection with a refined, private-first experience.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Item i={0} icon={ShieldCheck} title="Protected funds" desc="Safeguarded with multi-layer security and live monitoring." />
        <Item i={1} icon={LockKeyhole} title="Passkeys & biometrics" desc="Face ID, Touch ID, and passkeys for seamless authentication." />
        <Item i={2} icon={BadgeCheck} title="Trusted foundation" desc="Backed by Sparkasse infrastructure and standards." />
      </div>
    </section>
  )
}

export default Trust
