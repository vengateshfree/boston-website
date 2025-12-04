// Your provided code with background changed to white
import React, { useState } from 'react'
import { FaFileAlt } from "react-icons/fa";
import { CgIfDesign } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";

function LiveAgent() {
  const [apiKey, setApiKey] = useState('');
  const [upscaleInput, setUpscaleInput] = useState('');
  const [specOutput, setSpecOutput] = useState(null);
  const [upscaleOutput, setUpscaleOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workloadInput, setWorkloadInput] = useState('');

  const callGemini = async (prompt) => {
    if (!apiKey.trim()) {
      alert("Please enter a valid Gemini API Key in the top navigation bar to use the demo features.");
      return null;
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error("Gemini Error:", error);
      alert("Failed to connect to Gemini AI. Check console for details or verify your API key.");
      return null;
    }
  };

  const generateSpecs = async () => {
    if (!workloadInput) return alert("Please describe your workload first.");

    setIsGenerating(true);

    const prompt = `Act as a senior IT Infrastructure Architect. Analyze this user workload request: "${workloadInput}". Estimate the required server specifications including power and cooling. Return raw JSON only.`;

    const result = await callGemini(prompt);

    if (result) {
      try {
        const jsonStr = result.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(jsonStr);
        setSpecOutput(data);
      } catch (e) {
        console.error(e);
        alert("Error parsing AI response. Try again.");
      }
    }

    setIsGenerating(false);
  };

  const runUpscaleAnalysis = async () => {
    if (!upscaleInput) return alert("Please paste server stats to analyze.");

    setIsAnalyzing(true);

    const prompt = `Act as a Senior Infrastructure Consultant. Analyze: "${upscaleInput}" and return optimized upgrade recommendations in markdown (max 150 words).`;

    const result = await callGemini(prompt);
    if (result) setUpscaleOutput(result);

    setIsAnalyzing(false);
  };

  const parseMarkdown = (text) => {
    return text
      .replace(/### (.*?)$/gm, '<h3 class="font-semibold mt-4 text-black">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-black">$1</strong>')
      .replace(/- (.*?)$/gm, '<li class="text-gray-700">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 text-gray-700">$1</ul>');
  };

  return (
    <div>
      <section id="ai-demos" className="relative py-24 bg-white text-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Live Agentic AI</h2>
            <h3 className="text-4xl font-extrabold mt-2 text-gray-900">Experience the Future of IT Automation</h3>
            <p className="mt-3 text-gray-500">Enter your Gemini API key in the top navigation to unlock these live demos.</p>
          </div>


          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Workload Architect */}
            <div className="relative bg-white border border-gray-200 p-7 rounded-2xl shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gray-100 border border-gray-200">
                  <FaStar size={30} />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Workload Architect ✨</h4>
              </div>

              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Describe your project workload and instantly get recommended specs.</p>

              <textarea value={workloadInput} onChange={(e) => setWorkloadInput(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-black text-sm focus:border-blue-500" placeholder="Describe your workload here..." />

              <button onClick={generateSpecs} disabled={isGenerating} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
                {isGenerating ? 'Processing...' : 'Generate Specs'}
              </button>

              {specOutput && (
                <div className="mt-6 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-lg border-l-4 border-blue-500">
                      <div className="text-xs text-gray-500">vCPU</div>
                      <div className="font-mono text-gray-900 font-semibold">{specOutput.vcpu}</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border-l-4 border-blue-500">
                      <div className="text-xs text-gray-500">RAM</div>
                      <div className="font-mono text-gray-900 font-semibold">{specOutput.ram}</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border-l-4 border-orange-500">
                      <div className="text-xs text-gray-500">Power</div>
                      <div className="font-mono text-gray-900 font-semibold">{specOutput.power_watts}</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border-l-4 border-cyan-500">
                      <div className="text-xs text-gray-500">Cooling</div>
                      <div className="font-mono text-gray-900 font-semibold">{specOutput.cooling_btu}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-gray-600 italic">{specOutput.reasoning}</div>
                </div>
              )}
            </div>

            {/* Upscale Intelligence */}
            <div className="relative bg-white border border-gray-200 p-7 rounded-2xl shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gray-100 border border-gray-200">
                  <FaBrain size={28} />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Upscale Intelligence ✨</h4>
              </div>

              <p className="text-gray-600 text-sm mb-5 leading-relaxed">Paste your server stats and get upgrade recommendations.</p>

              <textarea value={upscaleInput} onChange={(e) => setUpscaleInput(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-black text-xs font-mono" placeholder="Current: 2x Xeon 8-core, 64GB RAM, 95% CPU load..." />

              <button onClick={runUpscaleAnalysis} disabled={isAnalyzing} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition">
                {isAnalyzing ? 'Analyzing...' : 'Get Recommendations'}
              </button>

              {upscaleOutput && (
                <div className="mt-6 bg-gray-50 rounded-xl p-5 border border-gray-200 max-h-64 overflow-y-auto">
                  <div className="prose prose-gray text-sm" dangerouslySetInnerHTML={{ __html: parseMarkdown(upscaleOutput) }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LiveAgent;