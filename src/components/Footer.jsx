import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#0C1320] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-600 text-white font-bold w-7 h-7 flex items-center justify-center rounded">
              C
            </div>
            <h1 className="text-2xl font-semibold">
              Catalyst<span className="text-blue-500">Suite</span>
            </h1>
          </div>

          <p className="text-sm text-gray-400 uppercase tracking-wider">
            BOSTON TECH INDIA
          </p>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg">
            Empowering creators with next-gen infrastructure.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10"></div>

        {/* Bottom Section */}
        <div className="text-center py-6 text-sm text-gray-500">
          © 2025 Boston Tech India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
