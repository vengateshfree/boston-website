import React from "react";
import { MdOutlineScience, MdAutoGraph } from "react-icons/md";
import { FaNetworkWired, FaShieldHalved } from "react-icons/fa6";
import { RiGovernmentFill } from "react-icons/ri";
import { BiSolidCloudLightning } from "react-icons/bi";

const features = [
  {
    title: "Virtual Labs",
    desc: "Spin up isolated, high-performance environments for CS and Engineering students instantly.",
    icon: <MdOutlineScience size={26} />,
  },
  {
    title: "Research Clusters",
    desc: "Dynamic resource allocation for PhD research workloads, prioritized by grant urgency.",
    icon: <FaNetworkWired size={26} />,
  },
  {
    title: "Audit Automation",
    desc: "One-click compliance reports for government and private grant audits.",
    icon: <RiGovernmentFill size={26} />,
    badge: "AI Powered"
  },
  {
    title: "Exam Auto-Scale",
    desc: "Predictive AI scales infrastructure up 1 hour before exams and down immediately after.",
    icon: <MdAutoGraph size={26} />,
  },
  {
    title: "Data Sovereignty",
    desc: "Keep sensitive student data on-prem while bursting non-critical workloads to the cloud.",
    icon: <FaShieldHalved size={26} />,
  },
  {
    title: "Green Campus",
    desc: "Energy-aware scheduling reduces carbon footprint by shutting down idle lab nodes.",
    icon: <BiSolidCloudLightning size={26} />,
  },
];

function Catalyst() {
  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Platform Capabilities</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-2">Built for Higher Education</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all group relative overflow-hidden">
              {item.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                  {item.badge}
                </div>
              )}
              
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalyst;