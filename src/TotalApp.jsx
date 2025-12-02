import React, { use, useState } from 'react';
import Hero from './components/Hero';
import LiveAgent from './components/LiveAgent';
import Challange from './components/Challange';
import Catalyst from './components/Catalyst';
import Hosting from './components/Hosting';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import ContactForm from './components/ContactForm';
function TotalApp() {

  const [apiKey, setApiKey] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locaion = useLocation();

  console.log("Current location:", locaion?.hash);


  const navLinks = [
    { href: '#ai-demos', text: 'Live AI Tools', icon: 'fas fa-sparkles', highlight: true },
    { href: '#problem', text: 'The Problem' },
    { href: '#features', text: 'Product Features' },
    { href: '#services', text: 'Hosting Services' },
    { href: '#contact', text: 'Contact Sales' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800 bg-slate-50">
      {/* Navigation */}

      <>
        <nav className="fixed w-full  z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 sm:h-20 items-center">

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white font-semibold text-xl">
                  C
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg sm:text-xl tracking-tight text-gray-900 leading-none">
                    Catalyst<span className="text-blue-800">Suite</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                    by Boston Tech India
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`${link.href == location?.hash
                        ? 'text-blue-800 font-semibold'
                        : 'text-gray-600 font-medium'
                      } hover:text-blue-900 transition`}
                  >
                    {link.icon && <i className={`${link.icon} mr-1`}></i>}
                    {link.text}
                  </a>
                ))}
              </div>

              {/* Desktop Right Side */}
              <div className="hidden lg:flex items-center space-x-4">
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
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-800 rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                C
              </div>
              <span className="font-semibold text-lg text-gray-900">
                Catalyst<span className="text-blue-800">Suite</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-5 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3 rounded-lg transition ${link.href == location?.hash
                    ? 'bg-blue-50 text-blue-800 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {link.icon && <i className={`${link.icon} mr-2`}></i>}
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile API Key Input */}
          <div className="px-5 py-4 border-t border-gray-200">
            <label className="block text-xs font-medium text-gray-600 mb-2">
              Gemini API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Paste your API key"
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
            />
          </div>

          {/* Mobile CTA Button */}
          <div className="px-5 pb-6">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block w-full bg-blue-800 hover:bg-blue-900 text-white text-center px-5 py-3 rounded-full font-medium shadow-lg shadow-blue-800/30 transition"
            >
              Get Started
            </a>
          </div>
        </div>


      </>


 <div id="hero" className="scroll-mt-10">
  <Hero />
</div>

<div id="ai-demos" className="scroll-mt-10">
  <LiveAgent />
</div>

<div id="problem" className="scroll-mt-10">
  <Challange />
</div>

<div id="features" className="scroll-mt-10">
  <Catalyst />
</div>

<div id="services" className="scroll-mt-10">
  <Hosting />
</div>

<div id="contact" className="scroll-mt-10">
  <ContactForm />
</div>

<div id="contact" className="scroll-mt-10">
  <Footer />
</div>

    </div>
  )
}

export default TotalApp