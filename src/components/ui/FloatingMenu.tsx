import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="fixed bottom-8 right-8 z-[9998]">
      <div className="relative">
        <div
          className={`absolute right-0 bottom-0 flex items-center justify-end transition-all duration-500 ease-in-out origin-right ${
            isOpen
              ? "bg-[rgba(225,212,195,0.95)] backdrop-blur-lg shadow-xl border border-[rgba(255,255,255,0.2)] w-auto rounded-lg"
              : "w-14 rounded-lg"
          }`}
          style={{
            height: "52px", // Slightly increased height for better padding
            minHeight: "52px", // Ensure consistent height
          }}
        >
          <div
            className={`flex items-center transition-all duration-500 ${
              isOpen ? "opacity-100 mr-1" : "opacity-0 -mr-[400px]"
            }`}
          >
            <nav className="flex flex-row items-center gap-3">
              {location.pathname !== "/" && (
                <Link
                  to="/"
                  className="flex flex-col items-center justify-center px-3 py-1.5 text-[#5a4a42] hover:bg-[#5a4a42] hover:text-white transition-colors duration-200 font-medium rounded-md group"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mb-1 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-xs">HOME</span>
                </Link>
              )}
              {location.pathname !== "/work" && (
                <Link
                  to="/work"
                  className="flex flex-col items-center justify-center px-3 py-1.5 text-[#5a4a42] hover:bg-[#5a4a42] hover:text-white transition-colors duration-200 font-medium rounded-md group"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mb-1 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs">WORK</span>
                </Link>
              )}
              {location.pathname !== "/about" && (
                <Link
                  to="/about"
                  className="flex flex-col items-center justify-center px-3 py-1.5 text-[#5a4a42] hover:bg-[#5a4a42] hover:text-white transition-colors duration-200 font-medium rounded-md group"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mb-1 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-xs">ABOUT</span>
                </Link>
              )}
              {location.pathname !== "/contact" && (
                <Link
                  to="/contact"
                  className="flex flex-col items-center justify-center px-3 py-1.5 text-[#5a4a42] hover:bg-[#5a4a42] hover:text-white transition-colors duration-200 font-medium rounded-md group"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-5 h-5 mb-1 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs">CONTACT</span>
                </Link>
              )}
            </nav>
          </div>
          <button
            className={`ml-2 min-w-[52px] h-[52px] rounded-lg bg-[#5a4a42] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-[#333333] ${
              isOpen ? "bg-[#333333] rotate-45" : "hover:scale-105"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="text-2xl select-none">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
