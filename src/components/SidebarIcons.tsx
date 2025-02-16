import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaQuoteLeft,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";

const SidebarIcons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      className={`fixed right-0 top-1/3 transform -translate-y-1/2 flex flex-col space-y-4 p-2 bg-black/30 rounded-l-lg shadow-lg z-[1002] transition-opacity duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <a
        href="#home"
        className="text-white p-3 hover:scale-110 transition-transform"
      >
        <FaHome size={24} />
      </a>
      <a
        href="#about"
        className="text-white p-3 hover:scale-110 transition-transform"
      >
        <FaInfoCircle size={24} />
      </a>
      <a
        href="#services"
        className="text-white p-3 hover:scale-110 transition-transform"
      >
        <FaBriefcase size={24} />
      </a>
      <a
        href="#testimonials"
        className="text-white p-3 hover:scale-110 transition-transform"
      >
        <FaQuoteLeft size={24} />
      </a>
      <a
        href="#gallery"
        className="text-white p-3 hover:scale-110 transition-transform"
      >
        <FaImages size={24} />
      </a>
      <a
        href="#contact"
        className="text-white p-3 hover:scale-110 transition-transform"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default SidebarIcons;
