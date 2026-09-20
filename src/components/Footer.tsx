import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../images/logo.webp";
import QRCodeComponent from "./QRCodeComponent";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  const linkBase = `
  group inline-flex items-center gap-2.5
  rounded-xl px-3 py-2
  text-sm font-medium text-slate-600
  transition-all duration-200 ease-out
  hover:bg-white/80 hover:text-logoBlue hover:shadow-sm
  focus:outline-none
  focus-visible:ring-2 focus-visible:ring-logoBlue/30
`;

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
              onClick={handleLogoClick}
              className="group inline-flex items-center gap-3"
              aria-label="Înapoi la pagina principală"
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
                {t("footer.chip3", {
                  defaultValue: "Calea Vitan 148A",
                })}
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
          {/* LINKS */}
          <div className="flex flex-col md:items-end">
            <div className="w-full max-w-[360px] md:max-w-[320px]">
              {/* NAVIGAȚIE */}
              <h3 className="pl-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 md:pl-0 md:pr-3 md:text-right">
                {t("footer.linksMenu")}
              </h3>

              <nav className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 md:justify-items-end">
                <a href="#home" className={linkBase}>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900/[0.04] text-slate-500 transition-colors duration-200 group-hover:bg-logoBlue/10 group-hover:text-logoBlue">
                    <Icon
                      icon="solar:home-2-linear"
                      className="h-[17px] w-[17px]"
                    />
                  </span>

                  <span className="leading-none">{t("navigation.home")}</span>
                </a>

                <a href="#about" className={linkBase}>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900/[0.04] text-slate-500 transition-colors duration-200 group-hover:bg-logoBlue/10 group-hover:text-logoBlue">
                    <Icon
                      icon="solar:info-circle-linear"
                      className="h-[17px] w-[17px]"
                    />
                  </span>

                  <span className="leading-none">{t("navigation.about")}</span>
                </a>

                <a href="#services" className={linkBase}>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900/[0.04] text-slate-500 transition-colors duration-200 group-hover:bg-logoBlue/10 group-hover:text-logoBlue">
                    <Icon
                      icon="solar:case-round-linear"
                      className="h-[17px] w-[17px]"
                    />
                  </span>

                  <span className="leading-none">
                    {t("navigation.services")}
                  </span>
                </a>

                <a href="#contact" className={linkBase}>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900/[0.04] text-slate-500 transition-colors duration-200 group-hover:bg-logoBlue/10 group-hover:text-logoBlue">
                    <Icon
                      icon="solar:phone-calling-linear"
                      className="h-[17px] w-[17px]"
                    />
                  </span>

                  <span className="leading-none">
                    {t("navigation.contact")}
                  </span>
                </a>
              </nav>

              <div className="my-6 h-px w-full bg-black/10" />

              {/* LEGAL */}
              <h3 className="pl-3 pr-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 md:pl-0 md:text-right">
                {t("footer.legalTitle", {
                  defaultValue: "Legal",
                })}
              </h3>

              <div className="mt-4 grid gap-2 md:justify-items-end">
                <a href="/privacy-policy" className={linkBase}>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900/[0.04] text-slate-500 transition-colors duration-200 group-hover:bg-logoBlue/10 group-hover:text-logoBlue">
                    <Icon
                      icon="solar:shield-check-linear"
                      className="h-[17px] w-[17px]"
                    />
                  </span>

                  <span className="leading-none">
                    {t("privacyPolicy.title")}
                  </span>
                </a>

                <a href="/terms-and-conditions" className={linkBase}>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900/[0.04] text-slate-500 transition-colors duration-200 group-hover:bg-logoBlue/10 group-hover:text-logoBlue">
                    <Icon
                      icon="solar:document-text-linear"
                      className="h-[17px] w-[17px]"
                    />
                  </span>

                  <span className="leading-none">
                    {t("termsAndConditions.title")}
                  </span>
                </a>

                <a href="/faq" className={linkBase}>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900/[0.04] text-slate-500 transition-colors duration-200 group-hover:bg-logoBlue/10 group-hover:text-logoBlue">
                    <Icon
                      icon="solar:question-circle-linear"
                      className="h-[17px] w-[17px]"
                    />
                  </span>

                  <span className="leading-none">{t("faq.title")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div
            className="text-xs text-slate-500 text-center md:text-left"
            dangerouslySetInnerHTML={{
              __html: t("footer.rights"),
            }}
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
