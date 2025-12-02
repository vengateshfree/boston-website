import React from 'react'

function Hero() {
  return (
    <div>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-blue-900 min-h-screen">

  {/* 🔵 Smooth Gradient Layer (original but enhanced) */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 to-blue-800/90"></div>

  {/* 💠 Soft Blur Glowing Blobs — Same Blue Tone */}
  <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-600 opacity-20 blur-[130px] rounded-full"></div>
  <div className="absolute top-1/2 -right-28 w-[400px] h-[400px] bg-blue-400 opacity-20 blur-[160px] rounded-full"></div>
  <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-blue-700 opacity-20 blur-[200px] rounded-full"></div>

  {/* ✨ Subtle Grain Texture (adds depth, looks premium) */}
  <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light"></div>

  {/* ---- Your existing content stays the same ---- */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <div className="animate-fade-in-up">
      <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-semibold mb-6">
        🚀 Powered by Boston Tech India
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
        Turn Infrastructure Into An <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
          Accelerator, Not A Bottleneck
        </span>
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 mb-10">
        CatalystSuite transforms complex R&D and hosting management with <strong>Agentic AI</strong>.
        Now featuring intelligent upscale infrastructure recommendations for optimized cost & performance with value systems.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#ai-demos"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-800 text-white font-bold rounded-lg shadow-xl hover:shadow-blue-500/50 transition transform hover:-translate-y-1"
        >
          <i className="fas fa-sparkles mr-2"></i> Try AI Demo
        </a>
        <a
          href="#features"
          className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition backdrop-blur-sm"
        >
          Discover Features
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero