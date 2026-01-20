import React, { useEffect, useState } from "react";
import { dotColors, fileTabs } from "../assets/constants";
import { ChevronDown } from "lucide-react";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMousemove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMousemove);

    return () => window.removeEventListener("mousemove", handleMousemove);
  }, []);
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* ....mouse moving background color animation  */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        ></div>

        {/* ------Top left bg color animation */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-ful blur-3xl animate-pulse"></div>
        {/* ------bottom right bg color animation */}
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative order-2 w-full">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:h-[450px] border-white/5">
              {/* -----IDE Header */}
              <div className="flex items-center justify-between px-3  sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                <div className="flex items-center gap-x-2">
                  <div className="dots flex items-center gap-x-1 sm:gap-x-2">
                    {dotColors.map((item, key) => (
                      <div
                        key={key}
                        className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${item.colorCode}`}
                      ></div>
                    ))}
                  </div>

                  <span className="text-xs sm:text-sm text-gray-300">
                    CodeFlow AI
                  </span>
                </div>
                <ChevronDown className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
              </div>
              {/* -------code body */}
              <div className="p-3 sm:p-4 relative h-full">
                {/* -----file tabs */}
                <div className="flex gap-x-1 sm:gap-x-2 mb-3 sm:mb-4 overflow-x-auto">
                  {fileTabs.map((item, key) => (
                    <button
                      onClick={() => setActiveTab(item.tabName)}
                      key={key}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === item.tabName ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}
                    >
                      {item.tabName}
                    </button>
                  ))}
                </div>


                {/* ----code content */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
