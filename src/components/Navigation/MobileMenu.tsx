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

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, handleMenuClick }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <ul className="absolute top-0 left-0 w-full bg-black/70 backdrop-blur-md flex flex-col items-start text-left z-50">
      <li className="w-full px-6 pt-6 pb-4 border-b border-white/40">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
            <img src={logo} alt="logo" className="object-cover w-full h-full" />
          </div>
        </Link>
      </li>

      {menuItems.map((item, index) => (
        <li key={item.id} className="w-full px-6 py-3 mt-2">
          <button onClick={() => handleMenuClick(item.id)} className="w-full text-left font-semibold text-white hover:text-yellow-400">
            {t(item.labelKey)}
          </button>
          {index < menuItems.length - 1 && <div className="border-t border-white/30 w-2/3 mt-2" />}
        </li>
      ))}

      <li className="w-full px-6 py-4 border-b border-t border-white/40 ">
        <LanguageButton />
      </li>

      <li className="w-full px-6 py-4 flex items-center gap-2">
        <FaPhoneAlt />
        <a href="tel:0040736470629" className="hover:underline hover:text-yellow-400">
          0736 470 629
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;
