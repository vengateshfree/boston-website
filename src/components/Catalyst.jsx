import React from "react";
import { MdRocketLaunch } from "react-icons/md";
import { BsFillPieChartFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa6";
import { IoIosCalculator } from "react-icons/io";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TiBatteryCharge } from "react-icons/ti";
const catalystFeatures = [
  {
    title: "One-Touch Provisioning",
    description: "Automate OS, application, and Kubernetes deployments.",
    icon: <MdRocketLaunch size={30} />,
    iconBg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10",
    wrapperStyle: "bg-gray-800/50 border-gray-700 hover:border-blue-500",
    badge: null,
    gradient: null,
  },
  {
    title: "One-Dashboard Monitoring",
    description: "Real-time visibility into system health and utilization.",
    icon: <BsFillPieChartFill    size={30} />,
     iconBg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10",
   wrapperStyle: "bg-gray-800/50 border-gray-700 hover:border-blue-500",
    badge: null,
    gradient: null,
  },
  {
    title: "Intelligent Infrastructure Upscale",
    description:
      "AI-driven recommendations for optimized cost & performance, tailored to your value systems.",
  icon: <FaBrain size={30} />,
    iconBg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10",
     wrapperStyle:
      "bg-gradient-to-br from-gray-800 to-blue-900/50 border-blue-500/50 hover:border-blue-400",
    badge: "NEW",
    gradient: true,
  },
  {
    title: "Smart Cost Estimates",
    description:
      "AI-driven cost estimation ensuring you never over-provision.",
   icon: <IoIosCalculator size={30} />,
    iconBg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10",
    wrapperStyle: "bg-gray-800/50 border-gray-700 hover:border-blue-500",
    badge: null,
    gradient: null,
  },
  {
    title: "Power & Thermal Analytics",
    description:
      "Detailed power estimation and cooling efficiency details.",
    icon: <AiOutlineThunderbolt  size={30} />,
   iconBg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10",
     wrapperStyle: "bg-gray-800/50 border-gray-700 hover:border-blue-500",
    badge: null,
    gradient: null,
  },
  {
    title: "Endpoint Health",
    description:
      "Monitoring of endpoint health, including battery and PSU status.",
  icon: <TiBatteryCharge size={30} />,
    iconBg: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10",
    wrapperStyle: "bg-gray-800/50 border-gray-700 hover:border-blue-500",
    badge: null,
    gradient: null,
  },
];

function Catalyst() {
  return (
    <div>
      <section
        id="features"
        className="py-20 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="lg:text-center mb-16">
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
              Boston Tech India Presents
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              CatalystSuite Capabilities
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalystFeatures.map((item, index) => (
              <div
                key={index}
                className={`${item.wrapperStyle} backdrop-blur-sm p-6 rounded-xl border transition relative overflow-hidden`}
              >
                {/* NEW Badge */}
                {item.badge && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-xs font-semibold px-2 py-1 rounded-bl text-white">
                    {item.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.iconBg}`}
                >
                  {item?.icon}
                 
                </div>

                {/* Text */}
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalyst;
