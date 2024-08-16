import React from "react";
import { useTranslation } from "react-i18next";
import SocialLinks from "./SocialLinks";
import NavigationLinks from "./NavigationLinks";
import LegalLinks from "./LegalLinks";
import logo from "../images/logo.webp";


const Footer: React.FC = () => {
  const { t } = useTranslation();


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <footer className="bg-gray-800 bg-opacity-75 text-white py-4 px-4 mx-auto">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center mb-4 md:mb-0 md:gap-4 md:w-[269.71px] md:pr-8">
          <button onClick={() => scrollToSection("home")} className="mb-4 md:mb-0">
            <div className="aspect-w-1 aspect-h-1 w-16 rounded-full overflow-hidden">
              <img src={logo} alt="Logo" className="object-cover" />
            </div>
          </button>
          <SocialLinks />
        </div>
        <div className="text-sm mt-4 mb-4 relative max-w-xs md:max-w-md text-center md:px-8 lg:px-12">
          <span className="before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white px-4">
            {t("footer.info")}
          </span>
          <div
            className="text-sm pt-10 hidden md:block"
            dangerouslySetInnerHTML={{ __html: t("footer.rights") }}
          ></div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-x-8 md:pl-8 md:pr-0">
          <NavigationLinks />
          <LegalLinks />
        </div>
      </div>
      <div className="mt-4 text-center md:mt-6">
        <div
          className="text-sm md:hidden"
          dangerouslySetInnerHTML={{ __html: t("footer.rights") }}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
