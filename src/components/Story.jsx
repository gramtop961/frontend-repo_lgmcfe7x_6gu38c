import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const Story = () => {
  const prefersReduced = useReducedMotion()

  return (
    <section aria-labelledby="story-heading" className="relative isolate overflow-hidden bg-[#0A0A0B] py-24">
      {/* Cinematic background image with soft DOF overlays */}
      <div className="absolute inset-0 -z-10">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(0,0,0,0.0),rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[70vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,45,85,0.10),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10">
          <h2 id="story-heading" className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
            A calm financial ritual
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Money should feel quiet, capable, and trustworthy. Spark Atlas blends Sparkasse heritage with a new standard of clarity
            and craft for the next generation.
          </p>
        </header>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <div className="gradient-hairline rounded-[calc(1.5rem-1px)]" />

          <motion.div
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 items-center gap-6 md:grid-cols-2"
          >
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0F]">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
                alt="Polished metal and glass composition, calm lighting"
                className="h-full w-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(255,255,255,0.04),rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.85)_100%)]" />
            </figure>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight">Designed for focus</h3>
              <p className="text-white/70">
                Clear hierarchies, generous spacing, and refined motion—everything is tuned for ease. Inter typography, soft
                overlays, and glass elements create a calm, premium rhythm.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-white/70">
                <li>Privacy-first architecture backed by Sparkasse security</li>
                <li>Subtle parallax and micro-interactions, reduced-motion aware</li>
                <li>Obsidian palette with high-contrast text and focus clarity</li>
              </ul>
              <div className="pt-2">
                <a href="#cta" className="button-solid-gradient" aria-label="Get early access">
                  Get early access
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Story
