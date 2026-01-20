import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { FaMedal, FaCarSide, FaTruckPickup } from "react-icons/fa";

const Offer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          {/* subtle background */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-logoBlue/15 blur-3xl" />

          <div className="relative p-6 sm:p-10">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t("offer.title")}
              </h2>

              <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-logoBlue/60" />

              <p className="mx-auto mt-5 max-w-2xl text-lg sm:text-xl text-slate-700 leading-relaxed">
                {t("offer.description1")}
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                {t("offer.description2")}
              </p>
            </div>

            {/* Benefit chips */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm">
                <FaMedal className="opacity-80" />
                {t("offer.cipInstructor")}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm">
                <FaCarSide className="opacity-80" />
                {t("offer.cipMasini")}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm">
                <FaTruckPickup className="opacity-80" />
                {t("offer.cipPachete")}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 ">
              <Button
                onClick={() => scrollToSection("contact")}
                textKey="offer.btnText"
                additionalClasses="whitespace-nowrap md:mt-0"
              />

              <a
                href="tel:+40736470629"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-slate-50"
              >
                {t("offer.sunaAcum")}
              </a>
            </div>

            {/* micro text */}
            <p className="mt-4 text-center text-xs text-slate-500">
              
              {t("offer.raspundemRapid")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
