import React, { useState, useEffect } from 'react';

function Nav() {
  const [navColapse, setNavColapse] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 30 && currentY > lastScroll) {
        setNavColapse(true);
      } else {
        setNavColapse(false);
      }
     

      lastScroll = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">

      {/* MAIN CONTAINER (MUNAEEEM STYLE) */}
      <div
        className={`flex items-center gap-6 px-6 py-3 rounded-full border border-white/10
        bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.3)]
        transition-all duration-500 ease-in-out overflow-hidden
        ${navColapse ? "w-[200px]" : "w-[460px]"}`}
      >

        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 text-white font-semibold shrink-0">
          <img src="logo.png" alt="logo" className="w-6 h-6 object-contain" />
          Imtanan
        </a>

        {/* SWITCH AREA (LINKS ↔ DOTS) */}
        <div className="relative flex-1 h-8 overflow-hidden">

          {/* LINKS */}
          <div
            className={`absolute inset-0 flex items-center gap-6 text-gray-300 transition-all duration-500 ease-in-out
            ${navColapse ? "-translate-x-6 opacity-0 pointer-events-none" : "translate-x-0 opacity-100"}`}
          >
            <a className="px-2 py-1 rounded-full hover:bg-gray-500 transition cursor-pointer">
              Projects
            </a>

            <a className="px-2 py-1 rounded-full hover:bg-gray-500 transition cursor-pointer">
              TechStack
            </a>

            <a className="px-2 py-1 rounded-full hover:bg-gray-500 transition cursor-pointer">
              Contact
            </a>
          </div>

          {/* DOTS */}
          <div
            className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out
            ${navColapse ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0 pointer-events-none"}`}
          >
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Nav;