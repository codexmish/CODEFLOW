import React, { useState } from "react";
import { menuItem } from "../assets/constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/* ----logo */}
            <div className="flex items-center gap-x-1 group cursor-pointer">
              <img
                src="/images/logo.png"
                alt="logo"
                className="logo w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>

            {/* -----menu--- */}

            <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
              {menuItem.map((item, key) => (
                <a
                  key={key}
                  className="text-gray-300 hover:text-white text-sm lg:text-base"
                  href={item.itemLink}
                >
                  {item.itemName}
                </a>
              ))}
            </div>

            {/* -----hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="w-5 sm:w-5 h-6 sm:h-6" />
              ) : (
                <Menu className="w-5 sm:w-5 h-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ------res nav menu---- */}
        {isOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top animate-in duration-300">
            <div className="px-4 py-4 sm:py-6 gap-y-6 sm:gap-y-8 flex flex-col items-center">
              {menuItem.map((item, key) => (
                <a
                  key={key}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white text-sm lg:text-base"
                  href={item.itemLink}
                >
                  {item.itemName}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
