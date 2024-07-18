import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavigationLinks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="mb-4 md:mb-0">
      <ul className="flex flex-col items-center space-y-2 md:space-y-0 md:items-start md:gap-2">
        <li>
          <Link to="/" className="hover:text-gray-400">
            {t("footer.home")}
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            {t("footer.about")}
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-gray-400">
            {t("footer.services")}
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400">
            {t("footer.contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
