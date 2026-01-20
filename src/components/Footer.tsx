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

  const linkBase =
    "inline-flex items-center rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-black/5 hover:text-logoBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-logoBlue/30";

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-gradient-to-b from-white to-slate-50">
      {/* blur layer */}
      <div className="pointer-events-none absolute inset-0 bg-white/40 backdrop-blur-md" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="group inline-flex items-center gap-3"
              aria-label="Înapoi sus"
            >
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-black/10 shadow-sm transition group-hover:shadow-md">
                <img
                  src={logo}
                  alt="TopalX logo"
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="text-base font-semibold text-gray-900">
                TopalX
                <span className="block text-xs font-medium text-slate-500">
                  {t("footer.shortTagline")}
                </span>
              </span>
            </button>

            {/* SOCIAL */}
            <div className="mt-5 flex items-center gap-3 text-[22px] text-slate-700">
              <a
                href="https://www.facebook.com/scoaladesoferitopalx/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="rounded-full p-2 transition hover:bg-black/5 hover:text-logoBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-logoBlue/30"
              >
                <Icon icon="mdi:facebook" />
              </a>
              <a
                href="https://www.instagram.com/scoaladesoferitopalx/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="rounded-full p-2 transition hover:bg-black/5 hover:text-logoBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-logoBlue/30"
              >
                <Icon icon="mdi:instagram" />
              </a>
              <a
                href="mailto:topalxtrans@gmail.com"
                title="Email"
                className="rounded-full p-2 transition hover:bg-black/5 hover:text-logoBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-logoBlue/30"
              >
                <Icon icon="mdi:email-outline" />
              </a>
              <a
                href="tel:+40736470629"
                title="Telefon"
                className="rounded-full p-2 transition hover:bg-black/5 hover:text-logoBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-logoBlue/30"
              >
                <Icon icon="mdi:phone-outline" />
              </a>
            </div>

            {/* QR */}
            <div className="mt-6 w-full max-w-[220px] md:max-w-[240px]">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm">
                <p className="mb-3 text-center text-xs font-semibold text-slate-600 md:text-center">
                  {t("footer.qrTitle")}
                </p>
                <QRCodeComponent
                  title={
                    <span className="sr-only">
                      Scanează codul QR pentru detalii despre TopalX
                    </span>
                  }
                />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="px-3 md:px-2">
            <h3 className="text-sm font-semibold tracking-wide text-gray-900">
              {t("footer.infoTitle")}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {t("footer.info")}
            </p>

            {/* chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                {t("footer.chip2")}
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                {t("footer.chip3", { defaultValue: "Calea Vitan 148A" })}
              </span>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-semibold leading-none text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
              >
                <Icon icon="mdi:message-outline" className="h-5 w-5 shrink-0" />
                <span className="leading-none">{t("footer.ctaFooter")}</span>
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-col md:items-end">
            <div className="w-full max-w-[360px] md:max-w-[320px]">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900 md:text-right pl-3 md:pl-0 md:pr-3">
                {t("footer.linksMenu")}
              </h3>

              <nav className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 md:justify-items-end">
                <a href="#home" className={linkBase}>
                  <Icon
                    icon="mdi:home-outline"
                    className="text-slate-400 text-[18px]"
                  />
                  {t("navigation.home")}
                </a>

                <a href="#about" className={linkBase}>
                  <Icon
                    icon="mdi:information-outline"
                    className="text-slate-400 text-[18px]"
                  />
                  {t("navigation.about")}
                </a>

                <a href="#services" className={linkBase}>
                  <Icon
                    icon="mdi:briefcase-outline"
                    className="text-slate-400 text-[18px]"
                  />
                  {t("navigation.services")}
                </a>

                <a href="#contact" className={linkBase}>
                  <Icon
                    icon="mdi:phone-outline"
                    className="text-slate-400 text-[18px]"
                  />
                  {t("navigation.contact")}
                </a>
              </nav>

              <div className="my-6 h-px w-full bg-black/10" />

              <h3 className="text-sm font-semibold tracking-wide text-gray-900 md:text-right pl-3 md:pl-0 pr-3">
                {t("footer.legalTitle", { defaultValue: "Legal" })}
              </h3>

              <div className="mt-4 grid gap-2 md:justify-items-end">
                <a
                  href="/privacy-policy"
                  className={`${linkBase} flex items-center gap-0.5`}
                >
                  <Icon
                    icon="mdi:shield-account-outline"
                    className="text-slate-400"
                  />
                  <span>{t("privacyPolicy.title")}</span>
                </a>

                <a
                  href="/terms-and-conditions"
                  className={`${linkBase} flex items-center gap-0.5`}
                >
                  <Icon
                    icon="mdi:file-document-outline"
                    className="text-slate-400"
                  />
                  <span>{t("termsAndConditions.title")}</span>
                </a>

                <a
                  href="/faq"
                  className={`${linkBase} flex items-center gap-0.5`}
                >
                  <Icon
                    icon="mdi:help-circle-outline"
                    className="text-slate-400"
                  />
                  <span>{t("faq.title")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div
            className="text-xs text-slate-500 text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: t("footer.rights") }}
          />

          <div className="text-xs text-slate-400 text-center md:text-right">
            <span>{t("footer.developedBy")}</span>
            <a
              href="https://www.csweb.pro"
              className="ml-1 underline transition hover:text-logoBlue"
              target="_blank"
              rel="noopener noreferrer"
            >
              csweb.pro
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
