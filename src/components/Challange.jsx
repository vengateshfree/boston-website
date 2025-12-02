import React from 'react'
import { FaTools } from "react-icons/fa";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
function Challange() {

  const problemCards = [
  {
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  icon: <FaTools size={30} color='white' />,
    title: "Slow Setup",
    description: "Days or weeks lost provisioning servers manually."
  },
  {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  icon: <FaRegHourglassHalf size={30} color='white' />,
    title: "Tool Sprawl",
    description: "Juggling dozens of disconnected tools for provisioning and monitoring."
  },
  {
    iconBg: "bg-gray-200",
    iconColor: "text-gray-600",
   icon: <AiOutlineEyeInvisible size={30} color='white' />,
    title: "No Visibility",
    description: "Lack of centralized insight leads to wasted resources."
  },
  {
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
   icon: <FaFileAlt size={30} color='white' />,
    title: "Compliance Risk",
    description: "Manual, stressful, and error-prone audit preparations."
  }
];

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
  {problemCards.map((card, idx) => (
    <div
      key={idx}
      className="p-6 rounded-xl border shadow-sm shadow-blue-200 border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
    >
    <div className="w-14 h-14 rounded-2xl bg-blue-500 shadow-md border border-gray-100 flex items-center justify-center transition transform hover:-translate-y-1 hover:shadow-xl">
{card.icon }
</div>

      <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-2">{card.title}</h4>
      <p className="text-gray-600 text-sm">{card.description}</p>
    </div>
  ))}
</div>

  </div>
</section>

    </div>
  )
}

export default Challange