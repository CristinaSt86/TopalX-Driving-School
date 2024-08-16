import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";
import ErrorBoundary from "./ErrB"; // Make sure this is the correct path

const Navigation: React.FC<{ isMobileView: boolean }> = ({ isMobileView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    },
    [closeMenu]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <ErrorBoundary>
      <nav
        className="shadow-2xl p-3 md:py-2 md:px-6 bg-primary text-white sm:p-3 rounded-md"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto flex justify-between items-center">
          {isMobileView && (
            <button
              title="btn"
              className="md:hidden"
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
          <ul
            id="primary-menu"
            ref={menuRef}
            className={`pt-1 pb-2 z-1000 gap-3 pl-1 pr-1 flex-col md:flex-row md:items-center md:flex space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-primary md:bg-transparent w-full md:w-auto left-0 md:left-auto top-24 md:top-auto ${
              isOpen
                ? "flex items-center max-h-98 overflow-y-auto"
                : "hidden md:flex"
            }`}
          >
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-secondary"
              >
                {t("navigation.home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-secondary"
              >
                {t("navigation.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-secondary"
              >
                {t("navigation.services")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:text-secondary"
              >
                {t("navigation.testimonials")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("gallery")}
                className="hover:text-secondary"
              >
                {t("navigation.gallery")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-secondary"
              >
                {t("navigation.contact")}
              </button>
            </li>
            <li>
              <LanguageButton />
            </li>
            {isOpen && isMobileView && (
              <li className="flex flex-col items-center space-y-4 pb-4">
                <div className="flex items-center hover:text-secondary border-2 border-secondary rounded-md p-1">
                  <FaPhoneAlt />
                  <a href="tel:0736470629">0736 470 629</a>
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
