import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringNav, setIsHoveringNav] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isNavLink = target.closest(".nav-link") !== null;
      setIsHoveringNav(isNavLink);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHoveringNav ? "nav-hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        position: "fixed",
        pointerEvents: "none",
        transition: "opacity 0.3s ease, transform 0.1s ease",
        opacity: isHoveringNav ? 0 : 1,
      }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
