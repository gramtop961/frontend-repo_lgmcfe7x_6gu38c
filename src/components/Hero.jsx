import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ErrorBoundary from './ErrorBoundary'

// Toggle: 3D disabled by default for stability
const ENABLE_3D_DEFAULT = false

// Helper: detect WebGL support safely
function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || canvas.getContext('webgl2'))
  } catch {
    return false
  }
}

const Poster = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_45%,rgba(0,0,0,0.0),rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.85)_100%)]" />
    <div className="absolute -top-40 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />
    <div className="absolute bottom-[-20%] left-1/2 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(214,67,245,0.08),transparent_70%)] blur-3xl" />
  </div>
)

const HeroInner = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const yCopy = useTransform(scrollYProgress, [0, 1], [0, -40])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.45])

  const prefersReduced = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  // 3D gating + toggle
  const [enable3D, setEnable3D] = useState(ENABLE_3D_DEFAULT)
  const [splineReady, setSplineReady] = useState(false)
  const [hide3D, setHide3D] = useState(false)

  useEffect(() => {
    // Diagnostics: log at key lifecycle points
    // eslint-disable-next-line no-console
    console.log('[Hero] Mount. prefersReduced=', prefersReduced)

    // If reduced motion or missing WebGL, keep 3D off
    if (prefersReduced || !hasWebGL()) {
      setEnable3D(false)
      return
    }

    // If default is on, we still delay to avoid any flash
    if (ENABLE_3D_DEFAULT) {
      const t = setTimeout(() => setEnable3D(true), 500)
      return () => clearTimeout(t)
    }
  }, [prefersReduced])

  useEffect(() => {
    const onLost = () => {
      setHide3D(true)
      // eslint-disable-next-line no-console
      console.warn('[Hero] WebGL context lost. Hiding 3D layer.')
    }
    window.addEventListener('webglcontextlost', onLost, { passive: true })
    return () => window.removeEventListener('webglcontextlost', onLost)
  }, [])

  return (
    <section ref={ref} className="relative min-h-[100vh] w-full overflow-hidden bg-[#0A0A0B]">
      {/* Poster background is always present; 3D can sit behind but is disabled by default */}
      <Poster />

      {/* Optional 3D layer (off by default). When enabled, it's forced behind content and hidden on issues. */}
      {enable3D && !hide3D && (
        <div className="hero-3d absolute inset-0 -z-10 pointer-events-none" aria-hidden>
          {/* Dynamically import only when toggled on */}
          <React.Suspense fallback={null}>
            {(() => {
              const Spline = React.lazy(() => import('@splinetool/react-spline'))
              return (
                <Spline
                  scene="https://prod.spline.design/8F8fHFK2WlQ3u0qq/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                  onLoad={() => {
                    setSplineReady(true)
                    // eslint-disable-next-line no-console
                    console.log('[Hero] Spline loaded')
                  }}
                />
              )
            })()}
          </React.Suspense>
        </div>
      )}

      {/* Contrast overlay for readability (always above background) */}
      <motion.div style={{ opacity: overlayOpacity }} className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(65%_55%_at_50%_45%,rgba(0,0,0,0.0),rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.8)_100%)]" />

      {/* Content */}
      <motion.div style={{ y: yCopy }} className="relative z-20 mx-auto flex min-h-[100vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-xs font-medium text-white/70 backdrop-blur-md">
          Designed for the Sparkasse generation
        </span>

        <h1 className="text-balance bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-[1.05] text-transparent sm:text-5xl md:text-6xl">
          Banking, distilled
          <span className="block text-base font-normal tracking-tight text-white/60 sm:text-lg">Minimal, secure, beautifully engineered.</span>
        </h1>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#features" className="button-solid-gradient" aria-label="Explore features">
            <span>Explore features</span>
          </a>
          <a href="#app" className="button-glass" aria-label="See the app">
            <span>See the app</span>
          </a>
        </div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-10 flex flex-col items-center text-white/60">
          <div className="mb-2 text-[11px] uppercase tracking-widest">Scroll</div>
          <div className="h-10 w-6 rounded-full border border-white/20 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-white/70" />
          </div>
        </div>

        {/* Developer toggle: only visible in dev — enable 3D explicitly. */}
        <div className="absolute left-6 top-6 hidden rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70 sm:block">
          3D: <button className="underline" onClick={() => setEnable3D((v) => !v)}>{enable3D ? 'On' : 'Off'}</button>
          {enable3D && <span className="ml-2">{splineReady ? 'ready' : 'loading…'}</span>}
        </div>
      </motion.div>
    </section>
  )
}

const Hero = () => (
  <ErrorBoundary>
    <HeroInner />
  </ErrorBoundary>
)

export default Hero
