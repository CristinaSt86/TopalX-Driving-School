import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";
import ErrorBoundary from "./ErrB";
import logo from "../images/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import SidebarIcons from "./SidebarIcons";

const Navigation: React.FC<{ isMobileView: boolean }> = ({ isMobileView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();

  const handleMenuClick = (sectionId: string, route: string = "/") => {
    if (window.location.pathname !== route) {
      navigate(route);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleClickInsideMenu = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        menuRef.current &&
        !target.closest("a") &&
        !target.closest("button")
      ) {
        closeMenu();
      }
    },
    [closeMenu]
  );

  useEffect(() => {
    setIsOpen(false);
  }, [isMobileView]);

  useEffect(() => {
    if (isOpen && isMobileView) {
      document.addEventListener("mousedown", handleClickInsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickInsideMenu);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickInsideMenu);
    };
  }, [isOpen, isMobileView, handleClickInsideMenu]);

  const buttonClassName = `
  relative text-lg font-medium text-white
  hover:text-yellow-400 transition 
  after:absolute after:left-1/2 after:bottom-0
  after:w-0 after:h-[1px] after:bg-yellow-400 
  after:transition-all after:duration-300 after:ease-in-out
  hover:after:left-0 hover:after:w-full
`;

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ErrorBoundary>
      <SidebarIcons />
      <nav
        className="p-3 md:py-2 font-semibold text-white md:backdrop-blur-md md:bg-black/50 md:rounded-2xl md:border-b md:border-yellow-500 md:shadow-md"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto flex justify-between items-center">
          {isMobileView && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-6 flex flex-col justify-between items-center group z-1000"
              aria-label="Toggle menu"
            >
              <span
                className={`h-[3.5px] w-full bg-secondary rounded transition-all duration-300 ease-in-out 
      ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-[2.5px] w-full bg-secondary rounded transition-all duration-300 ease-in-out 
      ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-[1.5px] w-full bg-secondary rounded transition-all duration-300 ease-in-out 
      ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          )}

          {/* ✅ NAVIGATION MENU */}
          <ul
            id="primary-menu"
            ref={menuRef}
            className={`z-50 w-full md:w-auto md:space-x-6 md:px-4
              ${
                isMobileView && isOpen
                  ? "absolute top-0 left-0 bg-black/70 backdrop-blur-md flex flex-col items-start text-left transition-all duration-500 ease-in-out md:hidden"
                  : isMobileView
                  ? "hidden md:hidden"
                  : "relative flex flex-row items-center space-x-4 text-white md:flex"
              }`}
          >
            {/* ✅ Logo pe mobil */}
            {isOpen && isMobileView && (
              <li className="w-full px-6 pt-6 pb-4 border-b border-white/40 border-[1.5px]">
                <Link to="/" onClick={handleLogoClick}>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <img
                      src={logo}
                      alt="logo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Link>
              </li>
            )}

            {/* ✅ Mobile menu list */}
            {isMobileView && isOpen && (
              <>
                {[
                  { id: "home", label: t("navigation.home") },
                  { id: "about", label: t("navigation.about") },
                  { id: "services", label: t("navigation.services") },
                  { id: "testimonials", label: t("navigation.testimonials") },
                  { id: "gallery", label: t("navigation.gallery") },
                  { id: "contact", label: t("navigation.contact") },
                ].map((item, index) => (
                  <li key={item.id} className="w-full px-6 py-3">
                    <button
                      onClick={() => handleMenuClick(item.id)}
                      className="w-full text-left font-semibold text-white transition hover:text-yellow-400 "
                    >
                      {item.label}
                    </button>

                    {/* ✅ Linie scurtă sub fiecare item, dar nu după ultimul */}
                    {index < 5 && (
                      <div className="border-t border-white/30 w-2/3 mt-2 " />
                    )}
                  </li>
                ))}

                <li className="w-full px-6 py-4 border-b border-white/40 border-[1.5px]">
                  <LanguageButton />
                </li>

                <li className="w-full px-6 py-4 flex items-center gap-2 ">
                  <FaPhoneAlt />
                  <a
                    className="hover:underline underline-offset-4 hover:text-yellow-400 decoration-yellow-400"
                    href="tel:0040736470629"
                  >
                    0736 470 629
                  </a>
                </li>
              </>
            )}

            {/* ✅ Desktop menu list fără modificări */}
            {!isMobileView &&
              [
                { id: "home", label: t("navigation.home") },
                { id: "about", label: t("navigation.about") },
                { id: "services", label: t("navigation.services") },
                { id: "testimonials", label: t("navigation.testimonials") },
                { id: "gallery", label: t("navigation.gallery") },
                { id: "contact", label: t("navigation.contact") },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={buttonClassName}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

            {!isMobileView && (
              <li>
                <LanguageButton />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </ErrorBoundary>
  );
};

export default Navigation;
