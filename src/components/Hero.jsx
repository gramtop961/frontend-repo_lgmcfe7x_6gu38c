import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

// Apple-inspired hero: obsidian tones, crystal/metal 3D, subtle parallax and refined motion
const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Subtle parallax for 3D and copy
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, -40])
  const rotate3D = useTransform(scrollYProgress, [0, 1], [0, 10])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.45])

  return (
    <section ref={ref} className="relative min-h-[100vh] w-full overflow-hidden bg-[#0A0A0B]">
      {/* Cinematic lighting layers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-1/2 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(214,67,245,0.08),transparent_70%)] blur-3xl" />
      </div>

      {/* Spline 3D scene: polished metal / crystal object */}
      <motion.div style={{ rotateZ: rotate3D }} className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <Spline scene="https://prod.spline.design/8F8fHFK2WlQ3u0qq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Contrast overlay for readability (always above Spline) */}
      <motion.div style={{ opacity: overlayOpacity }} className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(65%_55%_at_50%_45%,rgba(0,0,0,0.0),rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.8)_100%)]" />

      {/* Content */}
      <motion.div style={{ y: yCopy }} className="relative z-20 mx-auto flex min-h-[100vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-xs font-medium text-white/70 backdrop-blur-md"
        >
          Designed for the Sparkasse generation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-[1.05] text-transparent sm:text-5xl md:text-6xl"
        >
          Banking, distilled
          <span className="block text-base font-normal tracking-tight text-white/60 sm:text-lg">Minimal, secure, beautifully engineered.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#features"
            className="button-solid-gradient"
            aria-label="Explore features"
          >
            Explore features
          </a>
          <a
            href="#app"
            className="button-glass"
            aria-label="See the app"
          >
            See the app
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="pointer-events-none absolute bottom-10 flex flex-col items-center text-white/60"
        >
          <div className="mb-2 text-[11px] uppercase tracking-widest">Scroll</div>
          <div className="h-10 w-6 rounded-full border border-white/20 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-white/70" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
