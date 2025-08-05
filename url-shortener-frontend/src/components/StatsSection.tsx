// src/components/StatsSection.tsx
import React from "react";
import { FaGlobe, FaQrcode, FaPuzzlePiece, FaChartBar } from "react-icons/fa";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#fefcf8] py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-12">
        Adopted and loved by millions of users for over a decade
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#f3f0ea] rounded-2xl p-6 flex flex-col items-center shadow">
          <FaGlobe className="text-3xl text-[#001f3f] mb-3" />
          <h3 className="text-3xl font-bold text-[#001f3f]">500K+</h3>
          <p className="text-gray-600 mt-1">Global paying customers</p>
        </div>

        <div className="bg-[#f3f0ea] rounded-2xl p-6 flex flex-col items-center shadow">
          <FaQrcode className="text-3xl text-[#001f3f] mb-3" />
          <h3 className="text-3xl font-bold text-[#001f3f]">256M</h3>
          <p className="text-gray-600 mt-1">Links & QR Codes created monthly</p>
        </div>

        <div className="bg-[#f3f0ea] rounded-2xl p-6 flex flex-col items-center shadow">
          <FaPuzzlePiece className="text-3xl text-[#001f3f] mb-3" />
          <h3 className="text-3xl font-bold text-[#001f3f]">800+</h3>
          <p className="text-gray-600 mt-1">App integrations</p>
        </div>

        <div className="bg-[#f3f0ea] rounded-2xl p-6 flex flex-col items-center shadow">
          <FaChartBar className="text-3xl text-[#001f3f] mb-3" />
          <h3 className="text-3xl font-bold text-[#001f3f]">10B</h3>
          <p className="text-gray-600 mt-1">Connections (clicks & scans monthly)</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
