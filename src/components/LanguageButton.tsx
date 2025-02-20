import React from "react";
import { useLanguage } from "../LanguageContext";

const LanguageButton: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      role="button"
      onClick={toggleLanguage}
      className="w-4 h-4 bg-blue-500 text-white rounded-full  flex items-center justify-center hover:bg-blue-700 transition duration-300 cursor-pointer"
    >
      {language === "ro" ? "EN" : "RO"}
    </div>
  );
};

export default LanguageButton;
