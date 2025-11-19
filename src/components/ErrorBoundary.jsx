import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Minimal diagnostics without noisy alerts
    // eslint-disable-next-line no-console
    console.error('[Hero ErrorBoundary] Caught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative min-h-[100vh] w-full overflow-hidden bg-[#0A0A0B]">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
          <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
            <span className="mb-3 text-xs text-white/60">Hero temporarily unavailable</span>
            <h1 className="text-3xl font-semibold text-white">Banking, distilled</h1>
            <p className="mt-2 max-w-xl text-white/70">We disabled the interactive background due to a rendering issue. The rest of the page remains fully functional.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
