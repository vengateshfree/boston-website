import React, { useState } from 'react'

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
          contents: [{
            parts: [{ text: prompt }]
          }]
        };
    
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          
          if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
          }
    
          const data = await response.json();
          return data.candidates[0].content.parts[0].text;
        } catch (error) {
          console.error("Gemini Error:", error);
          alert("Failed to connect to Gemini AI. Check console for details or verify your API key.");
          return null;
        }
      };
    
      const generateSpecs = async () => {
        if (!workloadInput) {
          alert("Please describe your workload first.");
          return;
        }
    
        setIsGenerating(true);
    
        const prompt = `
          Act as a senior IT Infrastructure Architect.
          Analyze this user workload request: "${workloadInput}".
          
          Estimate the required server specifications to run this smoothly.
          Also estimate the Power Consumption (Watts) and Cooling Requirement (BTU/hr) for such a machine at 80% load.
          
          RETURN ONLY RAW JSON. Do not include markdown formatting.
          Format:
          {
              "vcpu": "String (e.g. 4 vCPU)",
              "ram": "String (e.g. 16GB DDR4)",
              "power_watts": "String (e.g. 350W)",
              "cooling_btu": "String (e.g. 1200 BTU/hr)",
              "reasoning": "Short 1 sentence explanation."
          }
        `;
    
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
    
    /*************  ✨ Windsurf Command ⭐  *************/
      /**
       * Run an upscaling analysis on the user's current server stats.
    
    /*******  7bb99f80-5f97-4890-a49b-df9a9e013f30  *******/  const runUpscaleAnalysis = async () => {
        if (!upscaleInput) {
          alert("Please paste server stats to analyze.");
          return;
        }
    
        setIsAnalyzing(true);
    
        const prompt = `
          Act as a Senior Infrastructure Consultant.
          The user wants intelligent infrastructure recommendations to upscale or optimize their current setup.
          
          User's Current State/Goals: "${upscaleInput}"
    
          1. Analyze their current constraints (CPU, RAM, bottlenecks).
          2. Recommend an "Upscale Path" (e.g., upgrading specific hardware, changing architecture).
          3. Provide an estimate of the Performance Gain vs. Cost Impact.
          4. Ensure recommendations align with efficiency value systems (optimize resources, don't just throw money at it).
          
          Format the output in clean Markdown. Use bullet points. Keep it concise (max 150 words).
        `;
    
        const result = await callGemini(prompt);
        
        if (result) {
          setUpscaleOutput(result);
        }
    
        setIsAnalyzing(false);
      };
    
      const parseMarkdown = (text) => {
        return text
          .replace(/### (.*?)$/gm, '<h3 class="font-bold mt-4 text-slate-200">$1</h3>')
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
          .replace(/- (.*?)$/gm, '<li class="text-slate-300">$1</li>')
          .replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 text-slate-300">$1</ul>');
      };
    
    



  return (
    <div>
       <section
  id="ai-demos"
  className="relative py-24 bg-gray-950 text-white overflow-hidden"
>
  {/* ✨ Animated gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black"></div>
  <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-600 opacity-20 blur-[140px] rounded-full"></div>
  <div className="absolute top-1/2 -right-28 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[170px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm">
        Live Agentic AI
      </h2>
      <h3 className="text-4xl font-extrabold mt-2 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
        Experience the Future of IT Automation
      </h3>
      <p className="mt-3 text-gray-400">
        Enter your Gemini API key in the top navigation to unlock these live demos.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Workload Architect */}
      <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/60 p-7 rounded-2xl shadow-xl hover:shadow-blue-900/40 transition-all duration-300 overflow-hidden group">
        {/* Card glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Icon background */}
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
          <i className="fas fa-microchip text-9xl text-blue-500"></i>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-700/40 border border-blue-500/40 backdrop-blur-md flex items-center justify-center shadow-lg">
              <i className="fas fa-calculator text-white"></i>
            </div>
            <h4 className="text-2xl font-bold">Workload Architect ✨</h4>
          </div>

          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            Describe your project workload and instantly get recommended vCPU,
            RAM, power usage, and cooling requirements.
          </p>

          <textarea
            value={workloadInput}
            onChange={(e) => setWorkloadInput(e.target.value)}
            className="w-full bg-gray-950/50 border border-gray-700 rounded-xl p-4 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition mb-5 min-h-28"
            placeholder="Describe your workload here..."
          />

          <button
            onClick={generateSpecs}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 rounded-xl transition shadow-lg hover:shadow-blue-700/40 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Processing...
              </>
            ) : (
              <>
                Generate Specs <i className="fas fa-sparkles"></i>
              </>
            )}
          </button>

          {specOutput && (
            <div className="mt-6 bg-gray-900/60 rounded-xl p-5 border border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-800/40 rounded-lg border-l-4 border-blue-500">
                  <div className="text-xs text-gray-400">vCPU</div>
                  <div className="font-mono text-white font-bold">{specOutput.vcpu}</div>
                </div>
                <div className="p-3 bg-gray-800/40 rounded-lg border-l-4 border-blue-500">
                  <div className="text-xs text-gray-400">RAM</div>
                  <div className="font-mono text-white font-bold">{specOutput.ram}</div>
                </div>
                <div className="p-3 bg-gray-800/40 rounded-lg border-l-4 border-orange-500">
                  <div className="text-xs text-gray-400">Power</div>
                  <div className="font-mono text-white font-bold">{specOutput.power_watts}</div>
                </div>
                <div className="p-3 bg-gray-800/40 rounded-lg border-l-4 border-cyan-500">
                  <div className="text-xs text-gray-400">Cooling</div>
                  <div className="font-mono text-white font-bold">{specOutput.cooling_btu}</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-400 italic">
                {specOutput.reasoning}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Upscale Intelligence */}
      <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/60 p-7 rounded-2xl shadow-xl hover:shadow-purple-900/40 transition-all duration-300 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
          <i className="fas fa-chart-line text-9xl text-purple-500"></i>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-purple-700/40 border border-purple-500/40 backdrop-blur-md flex items-center justify-center shadow-lg">
              <i className="fas fa-brain text-white"></i>
            </div>
            <h4 className="text-2xl font-bold">Upscale Intelligence ✨</h4>
          </div>

          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            Paste your current server stats, and the AI will recommend optimized
            infrastructure upgrade paths.
          </p>

          <textarea
            value={upscaleInput}
            onChange={(e) => setUpscaleInput(e.target.value)}
            className="w-full bg-gray-950/50 border border-gray-700 rounded-xl p-4 text-white text-xs font-mono focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition mb-5 min-h-28"
            placeholder="Current: 2x Xeon 8-core, 64GB RAM, 95% CPU load..."
          />

          <button
            onClick={runUpscaleAnalysis}
            disabled={isAnalyzing}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition shadow-lg hover:shadow-purple-700/40 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Analyzing...
              </>
            ) : (
              <>
                Get Recommendations <i className="fas fa-arrow-up"></i>
              </>
            )}
          </button>

          {upscaleOutput && (
            <div className="mt-6 bg-gray-900/60 rounded-xl p-5 border border-gray-700 max-h-64 overflow-y-auto">
              <div
                className="prose prose-invert prose-sm"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(upscaleOutput) }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default LiveAgent