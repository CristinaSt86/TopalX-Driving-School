import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const TopHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white text-sm hidden custom:flex flex-col custom:flex-row justify-between items-center p-3">
      <div className="flex w-full justify-between items-center sm:hidden">
        <a
          title="fb"
          href="https://www.facebook.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <FaFacebook className="text-white" />
        </a>
        <a
          title="insta"
          href="https://www.instagram.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <FaInstagram className="text-white" />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between w-full">
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
          <a
            href="tel:0736470629"
            className="flex items-center space-x-2 hover:text-gray-400 sm:mr-4 sm:pr-10 "
          >
            <FaPhoneAlt className="bounce-effect" />
            <span>0736 470 629</span>
          </a>

          <a
            title="mail"
            href="mailto:topalxtrans@gmail.com"
            className="inline-flex items-center mb-2 sm:mb-0"
          >
            <FaEnvelope className="text-white mr-2" />
            {t("topHeader.email")}
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mt-2 sm:mt-0">
          <span className="inline-flex items-center sm:mr-4 sm:pr-10">
            <FaRegClock className="text-white mr-2" />
            {t("topHeader.workingHours")}
          </span>
        </div>
      </div>

      <div className="hidden sm:flex sm:justify-between w-full sm:w-auto">
        <a
          title="fb"
          href="https://www.facebook.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mr-4"
        >
          <FaFacebook className="text-white" />
        </a>
        <a
          title="insta"
          href="https://www.instagram.com/scoaladesoferitopalx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <FaInstagram className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
