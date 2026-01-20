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
      className={`shadow-md sm:mt-4 bg-secondary text-textColor
    py-2 px-6 rounded-md font-semibold text-lg
    transition-all duration-200 ease-out
    hover:brightness-95
    hover:shadow-lg
    hover:scale-[1.03]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40
    w-[260px] text-center
    whitespace-nowrap overflow-hidden text-ellipsis border-2 border-secondary
    ${additionalClasses}`}
    >
      {t(textKey)}
    </button>
  );
};

export default Button;
