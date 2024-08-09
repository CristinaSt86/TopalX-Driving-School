import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LegalLinks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-2 md:items-start list-none">
      <ul className="flex flex-col items-center gap-2">
        <li>
          <Link to="/privacy-policy" className="hover:text-gray-400">
            {t("footer.privacyPolicy")}
          </Link>
        </li>
        <li>
          <Link to="/terms-and-conditions" className="hover:text-gray-400">
            {t("footer.termsAndConditions")}
          </Link>
        </li>
        <li>
          <Link to="/faq" className="hover:text-gray-400">
            {t("footer.faq")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LegalLinks;
