import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaQuoteLeft,
  FaImages,
  FaEnvelope,
  FaChevronLeft,
} from "react-icons/fa";
import LanguageButton from "./LanguageButton";

const SidebarIcons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleSidebarClick = (sectionId: string, route: string = "/") => {
    if (window.location.pathname !== route) {
      navigate(route);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsSidebarOpen(false); // Închide sidebar-ul pe mobil după click
  };

  return (
    <>
      {/* Butonul de deschidere APEL PE MOBIL, DAR DOAR DUPĂ SCROLL > 300px */}
      {isVisible && (
        <button
          className={`fixed top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full shadow-lg z-[1003] transition-transform lg:hidden 
          ${isSidebarOpen ? "right-[4rem]" : "right-2"}`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaChevronLeft size={20} className={`transition-transform ${isSidebarOpen ? "rotate-180" : ""}`} />
        </button>
      )}

      {/* Sidebar-ul propriu-zis, vizibil doar după SCROLL > 300px pe AMBELE */}
      {isVisible && (
        <div
          className={`fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-2 bg-black/30 rounded-l-lg shadow-lg z-[1002] transition-transform duration-300 justify-center items-center 
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}
        >
          <button onClick={() => handleSidebarClick("home")} className="text-white p-3 hover:scale-125 transition-transform">
            <FaHome size={24} />
          </button>
          <button onClick={() => handleSidebarClick("about")} className="text-white p-3 hover:scale-125 transition-transform">
            <FaInfoCircle size={24} />
          </button>
          <button onClick={() => handleSidebarClick("services")} className="text-white p-3 hover:scale-125 transition-transform">
            <FaBriefcase size={24} />
          </button>
          <button onClick={() => handleSidebarClick("testimonials")} className="text-white p-3 hover:scale-125 transition-transform">
            <FaQuoteLeft size={24} />
          </button>
          <button onClick={() => handleSidebarClick("gallery")} className="text-white p-3 hover:scale-125 transition-transform">
            <FaImages size={24} />
          </button>
          <button onClick={() => handleSidebarClick("contact")} className="text-white p-3 hover:scale-125 transition-transform">
            <FaEnvelope size={24} />
          </button>
          <button className="text-white p-3 hover:scale-125 transition-transform">
            <LanguageButton />
          </button>
        </div>
      )}
    </>
  );
};

export default SidebarIcons;
