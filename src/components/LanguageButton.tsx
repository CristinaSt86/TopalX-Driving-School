import React from "react";
import { useLanguage } from "../LanguageContext";

const LanguageButton: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="w-4 h-4 bg-blue-500 text-primary rounded-full  flex items-center justify-center hover:bg-blue-700 transition duration-300"
    >
      {language === "ro" ? "EN" : "RO"}
    </button>
  );
};

export default LanguageButton;
