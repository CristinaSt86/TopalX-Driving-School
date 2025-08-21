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
      className={` shadow-xl sm:mt-4 bg-secondary text-textColor py-2 px-10 md:px-16 sm:px-6 rounded-md font-semibold text-lg hover:bg-secondaryHover hover:text-white transition duration-300 transform hover:scale-110 sm:hover:scale-110 hover:shadow-lg ${additionalClasses}`}
    >
      {t(textKey)} 
    </button>
  );
};

export default Button;
