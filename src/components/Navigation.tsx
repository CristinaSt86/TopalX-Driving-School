// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// import LanguageButton from "./LanguageButton";
// import ErrorBoundary from "./ErrB";
// import logo from "../images/logo.webp";
// import { Link } from "react-router-dom";

// const Navigation: React.FC<{ isMobileView: boolean }> = ({ isMobileView }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t } = useTranslation();
//   const menuRef = useRef<HTMLUListElement>(null);

//   const toggleMenu = useCallback(() => {
//     setIsOpen((prev) => !prev);
//   }, []);

//   const closeMenu = useCallback(() => {
//     setIsOpen(false);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     closeMenu();
//   };

  // Handle clicks inside the mobile dropdown menu but outside of links to close it
  // const handleClickInsideMenu = useCallback(
  //   (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     if (
  //       menuRef.current &&
  //       !target.closest("a") && // If not a link
  //       !target.closest("button") // If not a button
  //     ) {
  //       closeMenu(); // Close the menu if a non-link/button area is clicked
  //     }
  //   },
  //   [closeMenu]
  // );

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen, handleClickOutside]);

//   const buttonClassName = `
//   hover:text-white relative after:absolute after:left-1/2 after:bottom-0
//   after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
//   hover:after:left-0 hover:after:w-full text-lg font-normal
// `;
//   const handleLogoClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <ErrorBoundary>
//       <nav
//         className=" p-3 md:py-2 font-semibold text-white"
//         aria-label="Main Navigation"
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           {isMobileView && (
//             <button
//               title="btn"
//               className="md:hidden"
//               onClick={toggleMenu}
//               aria-expanded={isOpen}
//               aria-controls="primary-menu"
//             >
//               {isOpen ? (
//                 <FaTimes className="w-6 h-6" />
//               ) : (
//                 <FaBars className="w-6 h-6" />
//               )}
//             </button>
//           )}
//           <ul
//             id="primary-menu"
//             ref={menuRef}
//             className={`pt-6 md:pt-2 pb-2 z-1000 gap-6 md:gap-3 pl-1 pr-1 flex-col md:flex-row md:items-center md:flex space-y-2 md:space-y-0 md:space-x-4 absolute md:static w-full md:w-auto left-0 md:left-auto top-0 md:top-24 ${
//               isOpen
//                 ? "flex items-center max-h-98 overflow-y-auto md:hidden backdrop-blur-md bg-black/60" // Only apply blur and bg in mobile
//                 : "hidden md:flex"
//             }`}
//           >
//             {isOpen && isMobileView && (
//               <li>
//                 <Link
//                   to="/"
//                   className="flex flex-col items-center justify-center"
//                   onClick={handleLogoClick}
//                 >
//                   <div className="aspect-w-1 aspect-h-1 w-16 h-16 rounded-full overflow-hidden">
//                     <img
//                       src={logo}
//                       alt="logo"
//                       className="object-cover border-2 border-logo rounded-full"
//                     />
//                   </div>
//                 </Link>
//               </li>
//             )}
//             <li>
//               <button
//                 onClick={() => scrollToSection("home")}
//                 className={buttonClassName}
//               >
//                 {t("navigation.home")}
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("about")}
//                 className={buttonClassName}
//               >
//                 {t("navigation.about")}
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("services")}
//                 className={buttonClassName}
//               >
//                 {t("navigation.services")}
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("testimonials")}
//                 className={buttonClassName}
//               >
//                 {t("navigation.testimonials")}
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("gallery")}
//                 className={buttonClassName}
//               >
//                 {t("navigation.gallery")}
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className={buttonClassName}
//               >
//                 {t("navigation.contact")}
//               </button>
//             </li>
//             <li>
//               <LanguageButton />
//             </li>
//             {isOpen && isMobileView && (
//               <li className="flex flex-col items-center space-y-4 pb-4">
//                 <div className="flex items-center hover:text-white border-2 border-white rounded-md p-1">
//                   <FaPhoneAlt className="bounce-effect" />
//                   <a className="ml-1 " href="tel:0040736470629">
//                     0736 470 629
//                   </a>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </ErrorBoundary>
//   );
// };

// export default Navigation;

import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";
import ErrorBoundary from "./ErrB";
import logo from "../images/logo.webp";
import { Link } from "react-router-dom";

const Navigation: React.FC<{ isMobileView: boolean }> = ({ isMobileView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); // Close the menu after clicking a section
  };

  // Handle clicks inside the mobile dropdown menu but outside of links to close it
  const handleClickInsideMenu = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        menuRef.current &&
        !target.closest("a") && // If not a link
        !target.closest("button") // If not a button
      ) {
        closeMenu(); // Close the menu if a non-link/button area is clicked
      }
    },
    [closeMenu]
  );

  // Use effect to detect clicks only for mobile view
  useEffect(() => {
    if (isOpen && isMobileView) {
      document.addEventListener("mousedown", handleClickInsideMenu); // Listen for clicks inside the mobile menu
    } else {
      document.removeEventListener("mousedown", handleClickInsideMenu); // Clean up listener when the menu is closed or it's not mobile view
    }
    return () => {
      document.removeEventListener("mousedown", handleClickInsideMenu); // Clean up on unmount
    };
  }, [isOpen, isMobileView, handleClickInsideMenu]);

  const buttonClassName = `
  hover:text-white relative after:absolute after:left-1/2 after:bottom-0
  after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
  hover:after:left-0 hover:after:w-full text-lg font-semibold
  `;

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ErrorBoundary>
      <nav
        className="p-3 md:py-2 font-semibold text-white"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Hamburger menu icon for mobile view */}
          {isMobileView && (
            <button
              title="btn"
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
          {/* Menu items */}
          <ul
            id="primary-menu"
            ref={menuRef}
            className={`pt-6 md:pt-2 pb-2 z-1000 gap-6 md:gap-3 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto left-0 top-0 transition-all duration-700 ease-in-out transform ${
              isOpen && isMobileView
                ? "absolute translate-y-0 opacity-100 visible backdrop-blur-sm items-center bg-black/60"
                : isMobileView
                ? "absolute -translate-y-full opacity-0 items-center"
                : "relative opacity-100 visible"
            }`}
          >
            {isOpen && isMobileView && (
              <li className="mb-6">
                <Link
                  to="/"
                  className="flex flex-col items-center justify-center"
                  onClick={handleLogoClick}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={logo}
                      alt="logo"
                      className="object-cover border-2 border-logo rounded-full"
                    />
                  </div>
                </Link>
              </li>
            )}
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className={buttonClassName}
              >
                {t("navigation.home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={buttonClassName}
              >
                {t("navigation.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className={buttonClassName}
              >
                {t("navigation.services")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={buttonClassName}
              >
                {t("navigation.testimonials")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("gallery")}
                className={buttonClassName}
              >
                {t("navigation.gallery")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={buttonClassName}
              >
                {t("navigation.contact")}
              </button>
            </li>
            <li>
              <LanguageButton />
            </li>
            {isOpen && isMobileView && (
              <li className="flex flex-col items-center space-y-4 pb-4">
                <div className="flex items-center hover:text-white border-2 border-white rounded-md p-1">
                  <FaPhoneAlt className="bounce-effect" />
                  <a className="ml-1 " href="tel:0040736470629">
                    0736 470 629
                  </a>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </ErrorBoundary>
  );
};

export default Navigation;



