import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import AppPreview from './components/AppPreview'
import Trust from './components/Trust'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0B] text-white">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F]/80 px-4 py-2.5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded bg-gradient-to-tr from-[#FF2D55] to-[#D643F5] opacity-70" />
              <span className="text-sm font-semibold tracking-tight text-white/90">Spark Atlas</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-white/60 sm:flex">
              <a href="#features" className="transition hover:text-white/80">Features</a>
              <a href="#app" className="transition hover:text-white/80">App</a>
              <a href="#trust" className="transition hover:text-white/80">Security</a>
            </nav>
            <a href="#cta" className="button-glass-gradient text-xs">Get the app</a>
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
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0E0E10]/80 p-10 text-center backdrop-blur-xl">
            <div className="gradient-hairline rounded-[calc(1.5rem-1px)]" />
            <h3 className="text-2xl font-semibold md:text-3xl text-white">Join the next generation of banking</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/70">Be first to experience a sleek, modern way to manage money — private, fast, and designed with care.</p>
            <div className="mx-auto mt-6 flex max-w-md flex-col items-center gap-3 sm:flex-row">
              <input type="email" placeholder="Enter your email" className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/10" />
              <button className="button-solid-gradient h-11 w-full text-sm font-semibold sm:w-40">Notify me</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#0A0A0B] py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Spark Atlas — Inspired by Sparkasse. All rights reserved.
      </footer>
    </div>
  )
}

export default App
