import React from "react";

const Navbar = () => {
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
