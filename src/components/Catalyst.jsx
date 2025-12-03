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
    iconBg:
      "bg-gray-100 shadow-md border border-gray-200",
    wrapperStyle:
      "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg",
    badge: null,
  },
  {
    title: "One-Dashboard Monitoring",
    description: "Real-time visibility into system health and utilization.",
    icon: <BsFillPieChartFill size={30} />,
    iconBg:
      "bg-gray-100 shadow-md border border-gray-200",
    wrapperStyle:
      "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg",
    badge: null,
  },
  {
    title: "Intelligent Infrastructure Upscale",
    description:
      "AI-driven recommendations for optimized cost & performance, tailored to your value systems.",
    icon: <FaBrain size={30} />,
    iconBg:
      "bg-blue-50 border border-blue-200 shadow-md",
    wrapperStyle:
      "bg-gradient-to-br from-blue-50 to-white border border-blue-300 hover:border-blue-500 hover:shadow-lg",
    badge: "NEW",
  },
  {
    title: "Smart Cost Estimates",
    description:
      "AI-driven cost estimation ensuring you never over-provision.",
    icon: <IoIosCalculator size={30} />,
    iconBg:
      "bg-gray-100 shadow-md border border-gray-200",
    wrapperStyle:
      "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg",
    badge: null,
  },
  {
    title: "Power & Thermal Analytics",
    description:
      "Detailed power estimation and cooling efficiency details.",
    icon: <AiOutlineThunderbolt size={30} />,
    iconBg:
      "bg-gray-100 shadow-md border border-gray-200",
    wrapperStyle:
      "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg",
    badge: null,
  },
  {
    title: "Endpoint Health",
    description:
      "Monitoring of endpoint health, including battery and PSU status.",
    icon: <TiBatteryCharge size={30} />,
    iconBg:
      "bg-gray-100 shadow-md border border-gray-200",
    wrapperStyle:
      "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg",
    badge: null,
  },
];

function Catalyst() {
  return (
    <div>
      <section
        id="features"
        className="py-20 bg-white text-gray-900 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="lg:text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Boston Tech India Presents
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              CatalystSuite Capabilities
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalystFeatures.map((item, index) => (
              <div
                key={index}
                className={`${item.wrapperStyle} p-6 rounded-xl transition relative overflow-hidden`}
              >
                {/* NEW Badge */}
                {item.badge && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-xs font-semibold px-2 py-1 rounded-bl text-white">
                    {item.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.iconBg}`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalyst;
