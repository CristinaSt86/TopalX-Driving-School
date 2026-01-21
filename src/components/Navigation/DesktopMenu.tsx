import { useTranslation } from "react-i18next";
import LanguageButton from "../LanguageButton";
import { menuItems } from "./menuItems";

const buttonClassName = `
  relative inline-flex items-center justify-center
  px-3.5 py-2 rounded-2xl
  text-[14px] font-semibold tracking-wide text-white/90
  transition-all duration-200 ease-out
  hover:text-white hover:bg-white/10
  active:scale-[0.99]
  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30

  after:absolute after:left-3 after:right-3 after:bottom-1
  after:h-[2px] after:rounded-full after:bg-yellow-400
  after:scale-x-0 after:origin-left
  after:transition-transform after:duration-200 after:ease-out
  hover:after:scale-x-100
`;

type DesktopMenuProps = {
  handleMenuClick: (id: string, route?: string) => void;
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ handleMenuClick }) => {
  const { t } = useTranslation();

  return (
    <ul className="hidden lg:flex items-center gap-1.5">
      {menuItems.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => handleMenuClick(item.id)}
            className={buttonClassName}
          >
            {t(item.labelKey)}
          </button>
        </li>
      ))}

      <li className="ml-2 pl-3 border-l border-white/15">
        <div className="rounded-2xl px-2.5 py-1.5 hover:bg-white/10 transition-colors">
          <LanguageButton />
        </div>
      </li>
    </ul>
  );
};

export default DesktopMenu;
