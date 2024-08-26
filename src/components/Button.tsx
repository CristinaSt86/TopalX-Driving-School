import React from "react";
import { useTranslation } from "react-i18next";

interface ButtonProps {
  onClick: () => void;
  textKey: string;
  additionalClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  textKey,
  additionalClasses = "",
}) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className={`border-2-secondary bounce-effect mt-10 sm:mt-16 bg-white text-textColor py-2 px-4 sm:px-6 rounded-lg font-semibold text-lg hover:bg-secondary transition duration-300 transform hover:scale-110 sm:hover:scale-150 hover:shadow-lg ${additionalClasses}`}
    >
      {t(textKey)} 
    </button>
  );
};

export default Button;
