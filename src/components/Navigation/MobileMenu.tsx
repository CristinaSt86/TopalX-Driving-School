import type { FC } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButton from "../LanguageButton";
import logo from "../../images/logo.webp";
import { menuItems } from "./menuItems";

type MobileMenuProps = {
  isOpen: boolean;
  handleMenuClick: (id: string, route?: string) => void;
};

const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  handleMenuClick,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <ul className="absolute left-0 top-0 z-50 flex w-full flex-col items-start bg-black/70 text-left backdrop-blur-md">
      {/* Logo */}
      <li className="w-full border-b border-white/40 px-6 pb-4 pt-6">
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-secondary">
            <img
              src={logo}
              alt="TopalX"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
      </li>

      {/* Menu links */}
      {menuItems.map((item, index) => {
        const isContact = item.id === "contact";

        return (
          <li
            key={item.id}
            className="mt-2 w-full px-6 py-3"
          >
            <button
              type="button"
              onClick={() => handleMenuClick(item.id)}
              className={
                isContact
                  ? `
                    w-full rounded-xl bg-yellow-400
                    px-4 py-3 text-center
                    font-semibold text-slate-950
                    shadow-sm transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-yellow-300
                    hover:shadow-md
                    active:translate-y-0
                    active:scale-[0.98]
                  `
                  : `
                    w-full text-left font-semibold text-white
                    transition-all duration-200
                    hover:translate-x-1
                    hover:text-yellow-400
                  `
              }
            >
              {t(item.labelKey)}
            </button>

            {!isContact && index < menuItems.length - 1 && (
              <div className="mt-2 w-2/3 border-t border-white/30" />
            )}
          </li>
        );
      })}

      {/* Language */}
      <li className="w-full border-b border-t border-white/40 px-6 py-4">
        <LanguageButton />
      </li>

      {/* Phone */}
      <li className="flex w-full items-center gap-2 px-6 py-4 text-white">
        <FaPhoneAlt />
        <a
          href="tel:+40736470629"
          className="transition-colors hover:text-yellow-400 hover:underline"
        >
          0736 470 629
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;