import { useTranslation } from "react-i18next";
import LanguageButton from "../LanguageButton";
import { menuItems } from "./menuItems";

const buttonClassName = `
  relative text-lg font-medium text-white
  hover:text-yellow-400 transition 
  after:absolute after:left-1/2 after:bottom-0
  after:w-0 after:h-[1px] after:bg-yellow-400 
  after:transition-all after:duration-300 after:ease-in-out
  hover:after:left-0 hover:after:w-full
`;

type DesktopMenuProps = {
  handleMenuClick: (id: string, route?: string) => void;
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ handleMenuClick }) => {
  const { t } = useTranslation();

  return (
    <ul className="hidden md:flex items-center space-x-6">
      {menuItems.map((item) => (
        <li key={item.id}>
          <button onClick={() => handleMenuClick(item.id)} className={buttonClassName}>
            {t(item.labelKey)}
          </button>
        </li>
      ))}
      <li>
        <LanguageButton />
      </li>
    </ul>
  );
};


export default DesktopMenu;
