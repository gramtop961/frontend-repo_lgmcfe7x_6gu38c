import React, { useEffect, useMemo, useRef, useState, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// Lazy-load Spline to avoid blocking first paint and prevent flash-to-black on WebGL init
const LazySpline = React.lazy(() => import('@splinetool/react-spline'))

// Detect WebGL support safely
function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || canvas.getContext('webgl2'))
  } catch {
    return false
  }
}

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Subtle parallax for 3D and copy
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, -40])
  const rotate3D = useTransform(scrollYProgress, [0, 1], [0, 10])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.45])

  // Feature-gate 3D: disable for reduced motion or missing WebGL
  const prefersReduced = useMemo(() => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])
  const [enable3D, setEnable3D] = useState(false)

  useEffect(() => {
    if (prefersReduced) return setEnable3D(false)
    // Only enable if WebGL is present
    const ok = hasWebGL()
    if (!ok) return setEnable3D(false)
    // Stagger enabling to avoid initial flash
    const t = setTimeout(() => setEnable3D(true), 250)
    return () => clearTimeout(t)
  }, [prefersReduced])

  // Safety: if Spline renders a black frame (rare GPU quirk), hide it
  const [hide3D, setHide3D] = useState(false)
  useEffect(() => {
    // Auto-hide if the tab reports WebGL context lost
    const onLost = () => setHide3D(true)
    window.addEventListener('webglcontextlost', onLost, { passive: true })
    // Timeout fallback in case init takes too long
    const fallback = setTimeout(() => setHide3D(true), 4000)
    return () => {
      window.removeEventListener('webglcontextlost', onLost)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <section ref={ref} className="relative min-h-[100vh] w-full overflow-hidden bg-[#0A0A0B]">
      {/* Cinematic lighting layers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-1/2 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(214,67,245,0.08),transparent_70%)] blur-3xl" />
      </div>

      {/* Spline 3D scene as strict background. Forced canvas layering via CSS class 'hero-3d'. */}
      {enable3D && !hide3D && (
        <motion.div
          style={{ rotateZ: rotate3D }}
          className="hero-3d absolute inset-0 z-0 pointer-events-none"
          aria-hidden
        >
          <Suspense fallback={null}>
            <LazySpline scene="https://prod.spline.design/8F8fHFK2WlQ3u0qq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </Suspense>
        </motion.div>
      )}

      {/* Contrast overlay for readability (always above 3D) */}
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
            <span>Explore features</span>
          </a>
          <a
            href="#app"
            className="button-glass"
            aria-label="See the app"
          >
            <span>See the app</span>
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
