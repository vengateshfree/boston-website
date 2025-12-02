import React from 'react'

function Hosting() {
  return (
       <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-800 font-bold tracking-wide uppercase text-sm">Hosting Services</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Power Your Platform
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Reliable, high-speed hosting solutions optimized for CatalystSuite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VPS Hosting */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col transition hover:scale-105 duration-300">
              <div className="p-8 flex-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-800 mb-6">
                  <i className="fas fa-server text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">VPS Hosting</h3>
                <p className="text-gray-500 text-sm mb-6">Ideal for developers and high-traffic sites.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-green-500 mr-2"></i> NVMe SSD Storage
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-green-500 mr-2"></i> Full Root Access
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col items-center">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Pricing
                </span>
                <span className="text-xl font-bold text-gray-900 mb-4">Contact for Quote</span>
                <a
                  href="#contact"
                  className="block w-full bg-white border border-blue-800 text-blue-800 text-center font-semibold py-3 rounded-lg hover:bg-blue-50 transition"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            {/* Cloud Hosting */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-800 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-8 flex-1">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 mb-6">
                  <i className="fas fa-cloud text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Hosting</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Flexible and scalable cloud hosting for growing businesses.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-green-500 mr-2"></i> Scalable Infrastructure
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-green-500 mr-2"></i> High Availability
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col items-center">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Pricing
                </span>
                <span className="text-xl font-bold text-gray-900 mb-4">$99/month</span>
                <a
                  href="#contact"
                  className="block w-full bg-blue-800 text-white text-center font-semibold py-3 rounded-lg hover:bg-blue-900 transition"
                >
                  Get Started
                </a>
              </div>
            </div>
               <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col transition hover:scale-105 duration-300">
              <div className="p-8 flex-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-800 mb-6">
                  <i className="fas fa-server text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">VPS Hosting</h3>
                <p className="text-gray-500 text-sm mb-6">Ideal for developers and high-traffic sites.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-green-500 mr-2"></i> NVMe SSD Storage
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-green-500 mr-2"></i> Full Root Access
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col items-center">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Pricing
                </span>
                <span className="text-xl font-bold text-gray-900 mb-4">Contact for Quote</span>
                <a
                  href="#contact"
                  className="block w-full bg-white border border-blue-800 text-blue-800 text-center font-semibold py-3 rounded-lg hover:bg-blue-50 transition"
                >
                  Contact Sales
                </a>
              </div>
            </div>


             </div>
              </div>
               </section>
   
  )
}

export default Hosting