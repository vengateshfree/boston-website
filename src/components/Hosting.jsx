import React from 'react'
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaCloud } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
function Hosting() {

 const hostingServices = [
  {
    id: 1,
    title: "VPS Hosting",
    description: "Ideal for developers and high-traffic sites.",
    icon: <GrCloudSoftware size={30} />,
    iconBg: "bg-blue-50",
    features: [
      "NVMe SSD Storage",
      "Full Root Access"
    ],
    popular: false,
    price: "Contact for Quote",
    buttonText: "Contact Sales",
    buttonStyle: "outline"
  },
  {
    id: 2,
    title: "Cloud Hosting",
    description: "Flexible and scalable cloud hosting for growing businesses.",
     icon: <FaCloud size={30} />,
    iconBg: "bg-blue-100",
    features: [
      "99.99% Uptime",
      "Auto-Scaling"
    ],
    popular: true, // because you marked POPULAR
    price: "Contact for Quote",
    buttonText: "Contact Sales",
    buttonStyle: "primary"
  },
  {
    id: 3,
    title: "Dedicated Hosting",
    description: "Private server hosting with top-tier speed and security.",
   
     icon: <AiOutlineCloudServer size={30} />,
    iconBg: "bg-blue-50",
    features: [
      "Isolated Environment",
      "PCI DSS Ready"
    ],
    popular: false,
    price: "Contact for Quote",
    buttonText: "Contact Sales",
    buttonStyle: "outline"
  }
];




  return (
       <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-800 font-semibold tracking-wide uppercase text-sm">Hosting Services</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Power Your Platform
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Reliable, high-speed hosting solutions optimized for CatalystSuite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingServices.map((service) => (
  <div key={service.id} className={`${service.popular ? " scale-105" : ""} bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col`}>
    {service.popular && (
      <div className="absolute top-0 right-0 bg-blue-800 rounded-tr-2xl text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
        POPULAR
      </div>
    )}

    <div className="p-8 flex-1">
      <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center text-blue-800 mb-6`}>
      {service.icon} 
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-500 text-sm mb-6">{service.description}</p>

      <ul className="space-y-3 mb-8">
        {service.features.map((f, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <i className="fas fa-check text-green-500 mr-2"></i> {f}
          </li>
        ))}
      </ul>
    </div>

<div
  className={`${
    service.popular
      ? "bg-blue-800"
      : " bg-gray-50"
  } p-8  flex flex-col items-center rounded-b-2xl`}
>

  <span className={`${service.popular ? "text-sky-200" : "text-gray-500 " } text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2`}>
        Pricing
      </span>

      <span className={`${service.popular ? "text-white" : "text-gray-900 "} text-xl font-semibold text-gray-900 mb-4`}>{service.price}</span>

      <a
        href="#contact"
        className={`block w-full text-center font-semibold py-3 rounded-lg transition
          ${service.popular 
            ? "bg-white text-blue-800 hover:bg-gray-100"
            : "bg-white border border-blue-800 text-blue-800 hover:bg-blue-50"
          }`}
      >
        {service.buttonText}
      </a>
    </div>
  </div>
))}

     


             </div>
              </div>
               </section>
   
  )
}

export default Hosting