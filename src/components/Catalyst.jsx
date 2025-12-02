import React from 'react'

function Catalyst() {
  return (
    <div>
             <section id="features" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:text-center mb-16">
            <h2 className="text-blue-400 font-bold tracking-wide uppercase text-sm">
              Boston Tech India Presents
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              CatalystSuite Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 flex items-center justify-center mb-4">
  <i className="fas fa-rocket text-white text-xl"></i>
</div>

              <h4 className="text-lg font-bold text-white mb-2">One-Touch Provisioning</h4>
              <p className="text-gray-400 text-sm">Automate OS, application, and Kubernetes deployments.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="w-12 h-12 rounded-lg bg-blue-800 flex items-center justify-center mb-4">
                <i className="fas fa-chart-pie text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">One-Dashboard Monitoring</h4>
              <p className="text-gray-400 text-sm">Real-time visibility into system health and utilization.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-blue-900/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/50 hover:border-blue-400 transition relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-2 py-1 rounded-bl text-white">
                NEW
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                <i className="fas fa-brain text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Intelligent Infrastructure Upscale</h4>
              <p className="text-gray-400 text-sm">
                AI-driven recommendations for optimized cost & performance, tailored to your value systems.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                <i className="fas fa-calculator text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Smart Cost Estimates</h4>
              <p className="text-gray-400 text-sm">
                AI-driven cost estimation ensuring you never over-provision.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-4">
                <i className="fas fa-bolt text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Power & Thermal Analytics</h4>
              <p className="text-gray-400 text-sm">
                Detailed power estimation and cooling efficiency details.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <i className="fas fa-battery-half text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Endpoint Health</h4>
              <p className="text-gray-400 text-sm">
                Monitoring of endpoint health, including battery and PSU status.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Catalyst