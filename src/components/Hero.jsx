import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0B0F]">
      {/* Background gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 -right-40 h-[65vh] w-[65vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(122,63,255,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,45,175,0.15),transparent_60%)] blur-2xl" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur-md"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#E50914] shadow-[0_0_10px_2px_rgba(229,9,20,0.6)]" />
          Next-gen Fintech for Sparkasse • Built for Gen Z
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Money, but make it neon
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] via-[#7A3FFF] to-[#FF2DAF]">Smart. Secure. Seriously fast.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Pay, save, and flex your finances with a high-velocity experience. Designed with Sparkasse trust and a gaming-grade interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#features"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#E50914] via-[#7A3FFF] to-[#FF2DAF]" />
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 40px 10px rgba(122,63,255,0.35)' }} />
            <span className="relative">Get Started</span>
          </a>
          <a
            href="#app"
            className="relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            See the app
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pointer-events-none absolute bottom-8 flex flex-col items-center text-white/60"
        >
          <div className="mb-2 text-xs">Scroll</div>
          <div className="h-10 w-6 rounded-full border border-white/20 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-white/70" />
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay to enhance contrast over 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,rgba(0,0,0,0),rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.75)_100%)]" />
    </section>
  )
}

export default Hero
