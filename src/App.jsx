import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import AppPreview from './components/AppPreview'
import Trust from './components/Trust'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0B0F]">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded bg-gradient-to-tr from-[#E50914] via-[#7A3FFF] to-[#FF2DAF]" />
              <span className="text-sm font-semibold tracking-tight text-white">Neon Spark</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#app" className="transition hover:text-white">App</a>
              <a href="#trust" className="transition hover:text-white">Security</a>
            </nav>
            <a href="#cta" className="rounded-xl bg-gradient-to-r from-[#E50914] via-[#7A3FFF] to-[#FF2DAF] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_24px_rgba(122,63,255,0.35)]">Get the app</a>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Features />
        <AppPreview />
        <div id="trust">
          <Trust />
        </div>

        {/* CTA */}
        <section id="cta" className="relative mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#E50914]/15 via-[#7A3FFF]/15 to-[#FF2DAF]/15 p-10 text-center text-white shadow-2xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold md:text-3xl">Ready to glow up your money?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/70">Join the waitlist and be first to get access to the Neon Spark app — a new wave of finance for the Sparkasse generation.</p>
            <div className="mx-auto mt-6 flex max-w-md flex-col items-center gap-3 sm:flex-row">
              <input type="email" placeholder="Enter your email" className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7A3FFF]/50" />
              <button className="relative h-11 w-full rounded-xl bg-gradient-to-r from-[#E50914] via-[#7A3FFF] to-[#FF2DAF] text-sm font-semibold text-white shadow-[0_0_40px_rgba(122,63,255,0.35)] sm:w-40">Notify me</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Neon Spark — Inspired by Sparkasse. All rights reserved.
      </footer>
    </div>
  )
}

export default App
