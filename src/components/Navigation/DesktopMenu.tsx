import type { FC } from "react";
import { useTranslation } from "react-i18next";
import LanguageButton from "../LanguageButton";
import { menuItems } from "./menuItems";

const defaultButtonClassName = `
  inline-flex items-center justify-center
  rounded-lg px-3 py-2
  text-[14px] font-medium tracking-[0.01em] text-white/85
  transition-all duration-200 ease-out

  hover:-translate-y-0.5
  hover:bg-white/[0.07]
  hover:text-yellow-300

  active:translate-y-0
  active:scale-[0.98]

  focus:outline-none
  focus-visible:ring-2
  focus-visible:ring-yellow-400/50
`;

const contactButtonClassName = `
  inline-flex items-center justify-center
  rounded-xl bg-yellow-400 px-4 py-2
  text-[14px] font-semibold text-slate-950
  shadow-sm transition-all duration-200 ease-out

  hover:-translate-y-0.5
  hover:bg-yellow-300
  hover:shadow-md

  active:translate-y-0
  active:scale-[0.98]

  focus:outline-none
  focus-visible:ring-2
  focus-visible:ring-yellow-300
  focus-visible:ring-offset-2
  focus-visible:ring-offset-slate-950
`;

type DesktopMenuProps = {
  handleMenuClick: (id: string, route?: string) => void;
};

const DesktopMenu: FC<DesktopMenuProps> = ({
  handleMenuClick,
}) => {
  const { t } = useTranslation();

  return (
    <ul className="hidden items-center gap-2 lg:flex">
      {menuItems.map((item) => {
        const isContact = item.id === "contact";

        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleMenuClick(item.id)}
              className={
                isContact
                  ? contactButtonClassName
                  : defaultButtonClassName
              }
            >
              {t(item.labelKey)}
            </button>
          </li>
        );
      })}

      <li className="ml-2 border-l border-white/15 pl-3">
        <div
          className="
            rounded-lg px-1.5 py-1
            transition-colors duration-200
            hover:bg-white/[0.07]
          "
        >
          <LanguageButton />
        </div>
      </li>
    </ul>
  );
};

export default DesktopMenu;