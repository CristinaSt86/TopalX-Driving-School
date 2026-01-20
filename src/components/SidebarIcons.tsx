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
  FaTimes,
} from "react-icons/fa";
import LanguageButton from "./LanguageButton";

const SidebarIcons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClosedByUser, setIsClosedByUser] = useState(false);
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
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  // dacă user a închis sidebarul, nu-l mai afișăm
  if (!isVisible || isClosedByUser) return null;

  return (
    <>
      {/* Toggle mobil */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle quick menu"
        className={`fixed top-1/2 -translate-y-1/2 lg:hidden z-[1003]
          h-11 w-11 grid place-items-center rounded-full
          bg-black/45 backdrop-blur-md text-white shadow-lg
          ring-1 ring-white/10 transition-all duration-200
          hover:bg-black/55 active:scale-95
          ${isSidebarOpen ? "right-[4rem]" : "right-2"}`}
      >
        <FaChevronLeft
          size={18}
          className={`transition-transform ${
            isSidebarOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-[1002]
          flex flex-col items-center gap-2 p-2
          rounded-l-2xl bg-black/30 backdrop-blur-md
          shadow-xl ring-1 ring-white/10
          transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0`}
      >
        {/* Close (X) */}
        <button
          aria-label="Close quick navigation"
          onClick={() => setIsClosedByUser(true)}
          className="w-10 h-10 rounded-xl grid place-items-center
            text-white/80 hover:bg-white/10 hover:text-white
            transition active:scale-95 mb-1"
          title="Close"
        >
          <FaTimes size={18} />
        </button>

        {/* Icons */}
        {[
          ["home", <FaHome size={20} />],
          ["about", <FaInfoCircle size={20} />],
          ["services", <FaBriefcase size={20} />],
          ["testimonials", <FaQuoteLeft size={20} />],
          ["gallery", <FaImages size={20} />],
          ["contact", <FaEnvelope size={20} />],
        ].map(([id, icon]) => (
          <button
            key={id as string}
            onClick={() => handleSidebarClick(id as string)}
            className="w-11 h-11 rounded-2xl grid place-items-center
              text-white/90 transition-all duration-200
              hover:bg-white/10 hover:text-white hover:-translate-x-[2px]
              active:scale-95"
          >
            {icon}
          </button>
        ))}

        {/* Language */}
        <div className="mt-1 pt-2 w-full flex justify-center border-t border-white/10">
          <div className="w-11 h-11 rounded-2xl grid place-items-center
            text-white/90 hover:bg-white/10 transition">
            <LanguageButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarIcons;
