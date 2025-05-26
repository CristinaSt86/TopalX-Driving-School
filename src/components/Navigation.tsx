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

  // Close menu on screen resize change (mobile ↔ desktop)
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
    hover:text-white relative after:absolute after:left-1/2 after:bottom-0
    after:w-0 after:h-[2px] after:bg-yellow-400 after:bg-white after:transition-all after:duration-300
    hover:after:left-0 hover:after:w-full  hover:text-yellow-400 text-lg font-semibold shadow-2xl
  `;

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ErrorBoundary>
      <SidebarIcons />
      <nav
        className="p-3 md:py-2 font-semibold text-white md:backdrop-blur-md md:bg-black/50 md:rounded-2xl md:border-b md:border-yellow-500 md:shadow-md "
        aria-label="Main Navigation"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Hamburger for mobile */}
          {isMobileView && (
            <button
              title="Toggle Menu"
              className="md:hidden text-primary"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="primary-menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          )}

          {/* Navigation menu */}
          <ul
            id="primary-menu"
            ref={menuRef}
            className={`z-50 pt-6 md:pt-2 pb-2 gap-6 md:gap-3 space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto
    ${
      isMobileView && isOpen
        ? "absolute top-0 left-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center opacity-100 translate-y-0 transition-all duration-500 ease-in-out"
        : isMobileView
        ? "hidden"
        : "relative flex md:flex-row items-center opacity-100"
    }`}
          >
            {isOpen && isMobileView && (
              <li className="mb-6">
                <Link
                  to="/"
                  className="flex flex-col items-center justify-center"
                  onClick={handleLogoClick}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={logo}
                      alt="logo"
                      className="object-cover border-2 border-logo rounded-full"
                    />
                  </div>
                </Link>
              </li>
            )}

            {[
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

            <li>
              <LanguageButton />
            </li>

            {isOpen && isMobileView && (
              <li className="flex flex-col items-center space-y-4 pb-4">
                <div className="flex items-center hover:text-white border-2 border-white rounded-md p-1">
                  <FaPhoneAlt className="bounce-effect" />
                  <a className="ml-1" href="tel:0040736470629">
                    0736 470 629
                  </a>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </ErrorBoundary>
  );
};

export default Navigation;
