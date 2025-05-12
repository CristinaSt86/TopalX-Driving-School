import React from "react";
import { useLanguage } from "../LanguageContext";
import { FlagIcon } from "react-flag-kit";

const LanguageButton: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const flagCode = language === "ro" ? "RO" : "GB";

  return (
    <button
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "ro" ? "English" : "Română"}`}
      className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out w-7 h-7 overflow-hidden flex items-center justify-center"
    >
      <FlagIcon code={flagCode} size={24} />
    </button>
  );
};

export default LanguageButton;
