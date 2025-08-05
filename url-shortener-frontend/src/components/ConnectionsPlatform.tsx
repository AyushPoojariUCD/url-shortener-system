// src/components/ConnectionsPlatform.jsx
import React from "react";

const ConnectionsPlatform = () => {
  return (
    <section className="bg-[#f9f6f1] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="uppercase text-sm font-semibold text-gray-500 mb-2">
          Great connections start with a click or scan
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          The Shortly Connections Platform
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          All the products you need to build brand connections, manage links and QR Codes, and connect with audiences everywhere, in a single unified platform.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition">
            Get started for free
          </button>
          <button className="border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-50 transition">
            Get a quote
          </button>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition text-left">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              🔗 URL Shortener
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              A comprehensive solution to help make every point of connection between your content and your audience more powerful.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition text-left">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              📱 QR Codes
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              QR Code solutions for every customer, business and brand experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition text-left">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              📄 Landing Pages
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Shortly Pages helps you create engaging, mobile-optimized landing pages in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionsPlatform;
