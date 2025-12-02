import React, { useState } from 'react';
import Hero from './components/Hero';
import LiveAgent from './components/LiveAgent';
import Challange from './components/Challange';
import Catalyst from './components/Catalyst';
import Hosting from './components/Hosting';
import Footer from './components/Footer';
import Speed from './components/Hyperspeed/Speed';

export default function CatalystSuite() {
  const [apiKey, setApiKey] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);




  return (
    <div className="font-sans text-gray-800 bg-slate-50">
      {/* Navigation */}
   <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-20 items-center">

      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          C
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">
            Catalyst<span className="text-blue-800">Suite</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
            by Boston Tech India
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <a href="#ai-demos" className="text-blue-800 font-bold hover:text-blue-900 transition">
          <i className="fas fa-sparkles mr-1"></i> Live AI Tools
        </a>
        <a href="#problem" className="text-gray-600 hover:text-blue-800 font-medium transition">
          The Problem
        </a>
        <a href="#features" className="text-gray-600 hover:text-blue-800 font-medium transition">
          Product Features
        </a>
        <a href="#services" className="text-gray-600 hover:text-blue-800 font-medium transition">
          Hosting Services
        </a>
        <a href="#contact" className="text-gray-600 hover:text-blue-800 font-medium transition">
          Contact Sales
        </a>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center space-x-4">
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Paste Gemini API Key"
          className="text-xs border border-gray-300 rounded px-2 py-1 w-32 focus:w-48 transition-all focus:outline-none focus:border-blue-800"
        />
        <a
          href="#contact"
          className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded-full font-medium shadow-lg shadow-blue-800/30 transition transform hover:-translate-y-0.5"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-500 hover:text-blue-800 focus:outline-none"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden fixed top-20 left-0 w-full bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200 z-40 animate-slideDown">
      <div className="flex flex-col px-6 py-4 space-y-4">

        <a
          href="#ai-demos"
          className="text-blue-800 font-semibold text-sm flex items-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <i className="fas fa-sparkles"></i> Live AI Tools
        </a>

        <a
          href="#problem"
          className="text-gray-700 text-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          The Problem
        </a>

        <a
          href="#features"
          className="text-gray-700 text-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          Product Features
        </a>

        <a
          href="#services"
          className="text-gray-700 text-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          Hosting Services
        </a>

        <a
          href="#contact"
          className="text-gray-700 text-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact Sales
        </a>

        {/* API Key */}
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Paste Gemini API Key"
          className="text-xs border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-800"
        />

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="bg-blue-800 text-center hover:bg-blue-900 text-white px-4 py-2.5 rounded-full font-medium shadow-md shadow-blue-800/30 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  )}
</nav>



      <Hero />
      <LiveAgent />
      <Challange />
      <Catalyst />
      <Hosting />
      <Footer />

    </div>
  );
};