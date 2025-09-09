import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import logo from "../images/logo.webp";
import QRCodeComponent from "./QRCodeComponent";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white/50 backdrop-blur-md border-t border-white/20 text-textColor py-8 px-4">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
        {/* STÂNGA */}
        <div className="flex flex-col items-center md:items-center md:w-[270px] md:pr-8">
          <button onClick={() => scrollToSection("home")} className="mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={logo}
                alt="Scoala de soferi TopalX - Logo oficial"
                className="object-cover"
              />
            </div>
          </button>

          {/* Social */}
          <div className="flex items-center gap-5 text-[22px] mb-4">
            <a
              href="https://www.facebook.com/scoaladesoferitopalx/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="hover:text-logoBlue"
            >
              <Icon icon="mdi:facebook" />
            </a>
            <a
              href="https://www.instagram.com/scoaladesoferitopalx/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="hover:text-logoBlue"
            >
              <Icon icon="mdi:instagram" />
            </a>
            <a
              href="mailto:topalxtrans@gmail.com"
              title="Email"
              className="hover:text-logoBlue"
            >
              <Icon icon="mdi:email-outline" />
            </a>
          </div>

          {/* QR */}
          <div className="mt-2">
            <QRCodeComponent
              title={
                <span className="sr-only">
                  Scanează codul QR pentru detalii despre școala de șoferi
                  TopalX
                </span>
              }
            />
          </div>
        </div>

        {/* CENTRU */}
        <div className="text-sm text-center md:text-center max-w-[28rem] px-4 md:px-8 lg:px-12 relative">
          {/* separatoare DOAR pe desktop */}
          <span
            className="mx-1 mt-0 md:mt-10 md:before:absolute md:before:left-0 md:before:top-0 md:before:bottom-0 md:before:w-px md:before:bg-gray-300
                         md:after:absolute md:after:right-0 md:after:top-0 md:after:bottom-0 md:after:w-px md:after:bg-gray-300
                         inline-block"
          >
            {t("footer.info")}
          </span>

          {/* drepturi: pe mobil îl mutăm jos, pe desktop rămâne aici */}
          <div
            className="hidden md:block pt-6"
            dangerouslySetInnerHTML={{ __html: t("footer.rights") }}
          />
        </div>

        <div className="w-full md:w-auto flex flex-col items-center md:items-start md:pl-8 mb-6 md:mb-0">
          {/* Navigație */}
          <nav className="flex flex-col text-sm mb-4 text-center md:text-left space-y-2">
            <a
              href="#home"
              className="hover:text-logoBlue flex items-center justify-center md:justify-start gap-2"
            >
              <Icon icon="mdi:home-outline" className="opacity-70" />
              {t("navigation.home")}
            </a>
            <a
              href="#about"
              className="hover:text-logoBlue flex items-center justify-center md:justify-start gap-2"
            >
              <Icon icon="mdi:information-outline" className="opacity-70" />
              {t("navigation.about")}
            </a>
            <a
              href="#services"
              className="hover:text-logoBlue flex items-center justify-center md:justify-start gap-2"
            >
              <Icon icon="mdi:briefcase-outline" className="opacity-70" />
              {t("navigation.services")}
            </a>
            <a
              href="#contact"
              className="hover:text-logoBlue flex items-center justify-center md:justify-start gap-2"
            >
              <Icon icon="mdi:phone-outline" className="opacity-70" />
              {t("navigation.contact")}
            </a>
          </nav>

          {/* Separator */}
          <div className="w-24 md:w-full h-px bg-gray-300 my-3" />

          {/* Legal */}
          <div className="flex flex-col text-sm text-center md:text-left space-y-2">
            <a
              href="/privacy"
              className="hover:text-logoBlue flex items-center justify-center md:justify-start gap-2"
            >
              <Icon icon="mdi:shield-account-outline" className="opacity-70" />
              {t("privacyPolicy.title")}
            </a>
            <a
              href="/terms"
              className="hover:text-logoBlue flex items-center justify-center md:justify-start gap-2"
            >
              <Icon icon="mdi:file-document-outline" className="opacity-70" />
              {t("termsAndConditions.title")}
            </a>
            <a
              href="/faq"
              className="hover:text-logoBlue flex items-center justify-center md:justify-start gap-2"
            >
              <Icon icon="mdi:help-circle-outline" className="opacity-70" />
              {t("faq.title")}
            </a>
          </div>
        </div>
      </div>

      {/* Rights pe mobil (sub tot footerul) */}
      <div
        className="mt-6 text-center md:hidden text-sm px-6"
        dangerouslySetInnerHTML={{ __html: t("footer.rights") }}
      />

      {/* Developer */}
      <div className="text-xs text-gray-400 text-center md:text-right mt-4">
        <p>
          {t("footer.developedBy")}
          <a
            href="https://www.csweb.pro"
            className="hover:text-logoBlue underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            csweb.pro
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
