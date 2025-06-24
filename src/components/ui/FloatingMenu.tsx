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

  // Add/remove body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { path: "/", label: "HOME" },
    { path: "/work", label: "WORK" },
    { path: "/clients", label: "CLIENTS" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ].filter((item) => item.path !== location.pathname);

  return (
    <>
      {/* Backdrop blur overlay with scaled animation */}
      <div
        className={`fixed inset-0 bg-red backdrop-blur-md transition-all duration-700 z-[9997] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Centered Menu Container */}
      <div className="fixed bottom-8 right-8 z-[9998]" ref={menuRef}>
        {/* Menu Content */}
        <div className="relative">
          {/* Animated Menu Panel */}
          <div
            className={`fixed inset-0 flex items-center justify-center transition-all duration-700 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div
              className={`flex flex-col items-center justify-center transition-all duration-700 transform ${
                isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
              }`}
            >
              <nav className="flex flex-col items-center gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative group px-12 py-5 text-white transition-all duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 rounded-sm opacity-0 transform scale-95 transition-all duration-300 -z-10 group-hover:opacity-100 group-hover:scale-100 shadow-lg" />

                    {/* Menu item text */}
                    <span className="text-4xl font-medium tracking-wider transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                      {item.label}
                    </span>

                    {/* Animated underline */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-4/5" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            className={`fixed bottom-8 right-8 w-[96px] h-[96px] bg-gradient-to-r from-red-700 to-red-500 text-white flex items-center justify-center transition-transform duration-500 shadow-xl z-[9999] ${
              isOpen ? "rotate-45" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="text-[30px] select-none">+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;
