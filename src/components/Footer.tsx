// import React from "react";
// import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
// import logo from "../images/logo.jpg";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const Footer: React.FC = () => {
//   const { t } = useTranslation();

//   return (
//     <footer className="bg-gray-800 bg-opacity-75 text-white text-center py-4 px-4 mx-auto">
//       <div className="container mx-auto flex flex-col gap-3 customFooter:flex-row customFooter:mx-auto  items-center justify-between">
//         <Link to="/" className="mb-2 sm:mb-0">
//           <div className="aspect-w-1 aspect-h-1 w-16 rounded-full overflow-hidden">
//             <img
//               src={logo}
//               alt="Logo"
//               className="object-cover"
//             />
//           </div>
//         </Link>
//         <div className="flex justify-center items-center mb-2 space-x-4">
//           <a
//             href="https://facebook.com"
//             className="text-white hover:text-gray-400"
//           >
//             <FaFacebook className="w-6 h-6" />
//           </a>
//           <a
//             href="https://instagram.com"
//             className="text-white hover:text-gray-400"
//           >
//             <FaInstagram className="w-6 h-6" />
//           </a>
//           <a
//             href="mailto:topalxtrans@gmail.com"
//             className="text-white hover:text-gray-400"
//           >
//             <FaEnvelope className="w-6 h-6" />
//           </a>
//         </div>
//         <p className="text-sm mb-2" dangerouslySetInnerHTML={{ __html: t("footer.rights") }}></p>
//         <nav>
//           <ul className="flex justify-center space-x-4 text-sm">
//             <li>
//               <Link to="/" className="hover:text-gray-400">
//                 {t("footer.home")}
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-gray-400">
//                 {t("footer.about")}
//               </Link>
//             </li>
//             <li>
//               <Link to="/services" className="hover:text-gray-400">
//                 {t("footer.services")}
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-gray-400">
//                 {t("footer.contact")}
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../images/logo.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 bg-opacity-75 text-white py-4 px-4 mx-auto">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center mb-4 md:mb-0 md:gap-4 md:w-[269.71px] pr-8">
          <Link to="/" className="mb-4 md:mb-0">
            <div className="aspect-w-1 aspect-h-1 w-16 rounded-full overflow-hidden">
              <img src={logo} alt="Logo" className="object-cover" />
            </div>
          </Link>
          <div className="flex flex-row gap-4 ">
            <a
              href="https://facebook.com"
              className="text-white hover:text-gray-400"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:topalxtrans@gmail.com"
              className="text-white hover:text-gray-400"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
        <p className="text-sm mt-4 mb-4 relative max-w-xs md:max-w-md text-center md:px-8 lg:px-12">
          <span className="before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white px-4">
            {t("footer.info")}
          </span>
        </p>
        <div className="flex flex-col items-center md:flex-row md:space-x-8 md:pl-8 md:pr-0 ">
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col items-center space-y-2 md:space-y-0 md:items-start md:gap-2">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400">
                  {t("footer.services")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center space-y-2 md:items-start list-none">
            <li className="">
              <Link to="/privacy-policy" className="hover:text-gray-400">
                {t("footer.privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-gray-400">
                {t("footer.termsAndConditions")}
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center md:mt-6">
        <p
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: t("footer.rights") }}
        ></p>
      </div>
    </footer>
  );
};

export default Footer;
