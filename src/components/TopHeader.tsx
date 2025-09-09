import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const TopHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
   <div className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/20 text-textColor text-sm hidden custom:flex flex-col custom:flex-row justify-between items-center p-3">

      {/* Social icons mobile */}
      <div className="flex w-full justify-between items-center sm:hidden">
        <a
          title="Facebook"
          href="https://www.facebook.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Icon icon="mdi:facebook" className="text-logoBlue w-5 h-5" />
        </a>
        <a
          title="Instagram"
          href="https://www.instagram.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Icon icon="mdi:instagram" className="text-logoBlue w-5 h-5" />
        </a>
      </div>

      {/* Contact info */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full">
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
          <a
            href="tel:0736470629"
            className="flex items-center space-x-2 hover:text-gray-600 sm:mr-4 sm:pr-10"
          >
            <Icon icon="mdi:phone" className="w-5 h-5 text-logoBlue" />
            <span>0736 470 629</span>
          </a>

          <a
            title="Email"
            href="mailto:topalxtrans@gmail.com"
            className="inline-flex items-center mb-2 sm:mb-0"
          >
            <Icon icon="mdi:email-outline" className="w-5 h-5 text-logoBlue mr-2" />
            {t("topHeader.email")}
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mt-2 sm:mt-0">
          <span className="inline-flex items-center sm:mr-4 sm:pr-10">
            <Icon icon="mdi:clock-time-four-outline" className="w-5 h-5 text-logoBlue mr-2" />
            {t("topHeader.workingHours")}
          </span>
        </div>
      </div>

      {/* Social icons desktop */}
      <div className="hidden sm:flex sm:justify-between w-full sm:w-auto">
        <a
          title="Facebook"
          href="https://www.facebook.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mr-4"
        >
          <Icon icon="mdi:facebook" className="text-logoBlue w-5 h-5" />
        </a>
        <a
          title="Instagram"
          href="https://www.instagram.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Icon icon="mdi:instagram" className="text-logoBlue w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
