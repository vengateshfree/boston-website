import React from 'react'

function Challange() {
  return (
    <div>
   <section id="problem" className="relative py-24 bg-white overflow-hidden">

  {/* 🔵 Soft blurred background accents */}
  <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-200 opacity-20 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-300 opacity-20 blur-[160px] rounded-full"></div>

  {/* ✨ Subtle grain texture */}
  <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-blue-800 font-semibold tracking-wide uppercase text-sm">
        The Challenge
      </h2>

      <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text">
        The Innovation Bottleneck
      </h3>

      <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
        Modern R&D and software development are slowed by fragmented infrastructure.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
          <i className="fas fa-hourglass-half text-xl"></i>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">Slow Setup</h4>
        <p className="text-gray-600 text-sm">Days or weeks lost provisioning servers manually.</p>
      </div>

      {/* Card 2 */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
          <i className="fas fa-tools text-xl"></i>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">Tool Sprawl</h4>
        <p className="text-gray-600 text-sm">
          Juggling dozens of disconnected tools for provisioning and monitoring.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 mb-4">
          <i className="fas fa-eye-slash text-xl"></i>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">No Visibility</h4>
        <p className="text-gray-600 text-sm">Lack of centralized insight leads to wasted resources.</p>
      </div>

      {/* Card 4 */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-4">
          <i className="fas fa-file-contract text-xl"></i>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">Compliance Risk</h4>
        <p className="text-gray-600 text-sm">Manual, stressful, and error-prone audit preparations.</p>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Challange