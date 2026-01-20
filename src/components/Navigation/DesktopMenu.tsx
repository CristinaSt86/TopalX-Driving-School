import { useTranslation } from "react-i18next";
import LanguageButton from "../LanguageButton";
import { menuItems } from "./menuItems";

const buttonClassName = `
  relative inline-flex items-center
  px-3 py-2 rounded-xl
  text-[15px] font-semibold tracking-wide text-white/90
  transition-all duration-200
  hover:text-white hover:bg-white/10
  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
  active:scale-[0.98]
  after:absolute after:left-3 after:right-3 after:bottom-1.5
  after:h-[1px] after:rounded-full after:bg-yellow-400
  after:scale-x-0 after:origin-left
  after:transition-transform after:duration-200
  hover:after:scale-x-100
`;

type DesktopMenuProps = {
  handleMenuClick: (id: string, route?: string) => void;
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ handleMenuClick }) => {
  const { t } = useTranslation();

  return (
    <ul className="hidden lg:flex items-center gap-2">
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

      <li className="ml-1 pl-2 border-l border-white/15">
        <div className="rounded-xl px-2 py-1 hover:bg-white/10 transition-colors">
          <LanguageButton />
        </div>
      </li>
    </ul>
  );
};

export default DesktopMenu;
