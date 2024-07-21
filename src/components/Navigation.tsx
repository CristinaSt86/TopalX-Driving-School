import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
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
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.testimonials")}
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.gallery")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
              onClick={toggleMenu}
            >
              {t("navigation.contact")}
            </Link>
          </li>
          <li>
            <LanguageButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;













// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { Transition } from "@headlessui/react";
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
//     <nav className="shadow-2xl p-4 md:py-2 md:px-6 bg-primary text-white sm:p-2 rounded-md" aria-label="Main Navigation">
//       <div className="container mx-auto flex justify-between items-center">
//         {isMobileView && (
//           <div className="relative">
//             <button
//               onClick={toggleMenu}
//               className="flex items-center p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//             >
//               <svg
//                 className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-90' : ''}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>

//             <Transition
//               show={isOpen}
//               enter="transition ease-out duration-100 transform"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="transition ease-in duration-75 transform"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div
//                 className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
//               >
//                 <ul>
//                   <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     <Link to="/" onClick={toggleMenu}>{t('navigation.home')}</Link>
//                   </li>
//                   <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     <Link to="/about" onClick={toggleMenu}>{t('navigation.about')}</Link>
//                   </li>
//                   <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     <Link to="/services" onClick={toggleMenu}>{t('navigation.services')}</Link>
//                   </li>
//                   <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     <Link to="/testimonials" onClick={toggleMenu}>{t('navigation.testimonials')}</Link>
//                   </li>
//                   <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     <Link to="/gallery" onClick={toggleMenu}>{t('navigation.gallery')}</Link>
//                   </li>
//                   <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     <Link to="/contact" onClick={toggleMenu}>{t('navigation.contact')}</Link>
//                   </li>
//                 </ul>
//                 <div className="border-t border-gray-200">
//                   <LanguageButton />
//                 </div>
//               </div>
//             </Transition>
//           </div>
//         )}
//         {!isMobileView && (
//           <ul
//             id="primary-menu"
//             ref={menuRef}
//             className="pt-1 pb-1 z-1000 gap-3 flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-primary md:bg-transparent w-full md:w-auto left-0 md:left-auto top-24 md:top-auto"
//           >
//             <li>
//               <Link
//                 to="/"
//                 className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               >
//                 {t('navigation.home')}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               >
//                 {t('navigation.about')}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               >
//                 {t('navigation.services')}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/testimonials"
//                 className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               >
//                 {t('navigation.testimonials')}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/gallery"
//                 className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               >
//                 {t('navigation.gallery')}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="hover:scale-125 hover:underline hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200"
//               >
//                 {t('navigation.contact')}
//               </Link>
//             </li>
//             <li>
//               <LanguageButton />
//             </li>
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
