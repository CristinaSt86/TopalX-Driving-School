// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// import LanguageButton from "./LanguageButton";

// const Navigation: React.FC<{ isMobileView: boolean }> = ({ isMobileView }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t } = useTranslation();
//   const menuRef = useRef<HTMLUListElement>(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <nav
//       className="shadow-2xl p-3 md:py-1 md:px-6 bg-primary text-white sm:p-3 rounded-md"
//       aria-label="Main Navigation"
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {isMobileView && (
//           <button
//             className="md:hidden"
//             onClick={toggleMenu}
//             aria-expanded={isOpen}
//             aria-controls="primary-menu"
//           >
//             {isOpen ? (
//               <FaTimes className="w-6 h-6" />
//             ) : (
//               <FaBars className="w-6 h-6" />
//             )}
//           </button>
//         )}
//         <ul
//           id="primary-menu"
//           ref={menuRef}
//           className={`pt-1 pb-1 z-1000 gap-3 flex-col md:flex-row md:items-center md:flex space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-primary md:bg-transparent w-full md:w-auto left-0 md:left-auto top-24 md:top-auto ${
//             isOpen ? "flex items-center" : "hidden"
//           }`}
//         >
//           <li>
//             <Link
//               to="/"
//               className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               onClick={toggleMenu}
//             >
//               {t("navigation.home")}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               onClick={toggleMenu}
//             >
//               {t("navigation.about")}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/services"
//               className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               onClick={toggleMenu}
//             >
//               {t("navigation.services")}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/testimonials"
//               className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               onClick={toggleMenu}
//             >
//               {t("navigation.testimonials")}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/gallery"
//               className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               onClick={toggleMenu}
//             >
//               {t("navigation.gallery")}
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               onClick={toggleMenu}
//             >
//               {t("navigation.contact")}
//             </Link>
//           </li>
//           <li>
//             <LanguageButton />
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaEnvelope, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

const Navigation: React.FC<{ isMobileView: boolean }> = ({ isMobileView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className="shadow-2xl p-3 md:py-1 md:px-6 bg-primary text-white sm:p-3 rounded-md"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        {isMobileView && (
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="primary-menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        )}
        <ul
          id="primary-menu"
          ref={menuRef}
          className={`pt-1 pb-1 z-1000 gap-3 flex-col md:flex-row md:items-center md:flex space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-primary md:bg-transparent w-full md:w-auto left-0 md:left-auto top-24 md:top-auto ${
            isOpen ? "flex items-center" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.home")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.about")}
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.services")}
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.testimonials")}
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.gallery")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.contact")}
            </Link>
          </li>
          <li>
            <LanguageButton />
          </li>
          {isOpen && isMobileView && (
  <>
    <li className="flex flex-col items-center space-y-4 pb-4">
      <div className="flex items-center space-x-2 hover:text-gray-400">
        <FaPhoneAlt />
        <a href="tel:0736470629">0736 470 629</a>
      </div>
      <div className="flex items-center space-x-2 hover:text-gray-400">
        <FaRegClock />
        <span>{t("topHeader.workingHours")}</span>
      </div>
      <div className="flex items-center space-x-4 hover:text-gray-400">
        <a href="mailto:topalxtrans@gmail.com" className="flex items-center">
          <FaEnvelope className="mr-1" />
          {t("topHeader.email")}
        </a>
        <a
          href="https://www.facebook.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaInstagram />
        </a>
      </div>
    </li>
  </>
)}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
