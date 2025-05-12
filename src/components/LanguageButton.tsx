import React from "react";
import { useLanguage } from "../LanguageContext";

const LanguageButton: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const flagSrc = language === "ro" ? "/flags/ro.svg" : "/flags/en.svg";
  const altText = language === "ro" ? "Română" : "English";

  return (
    <div
      onClick={toggleLanguage}
      role="button"
      aria-label={`Switch to ${language === "ro" ? "English" : "Română"}`}
      className="cursor-pointer transition-transform hover:scale-110 w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden"
    >
      <img
        src={flagSrc}
        alt={altText}
        className="w-full h-full"
      />
    </div>
  );
};

export default LanguageButton;
