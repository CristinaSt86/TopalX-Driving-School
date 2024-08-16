import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const NavigationLinks: React.FC = () => {
  const { t } = useTranslation();
  
  // State to track if the menu is open
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="mb-4 md:mb-0">
      <ul className="flex flex-col items-center space-y-2 md:space-y-0 md:items-start md:gap-2">
        <li>
          <button onClick={() => scrollToSection("home")}>
            {t("footer.home")}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")}>
            {t("footer.about")}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("services")}>
            {t("footer.services")}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")}>
            {t("footer.contact")}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
