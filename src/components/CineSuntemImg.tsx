import React from "react";
import { useTranslation } from "react-i18next";
import sis2 from "../images/wha.webp";
import sis from "../images/clasa3.webp";
import clasa from "../images/top1.webp";
import servicii from "../images/sediuOUT.webp";
import sisCostiElev from "../images/sisCostiElev.webp";
import clasa3 from "../images/sis2.webp";

const CineSuntemImg: React.FC = () => {
  const { t } = useTranslation();

  const images: string[] = [sis2, clasa3, sis, sisCostiElev, servicii, clasa];

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-14 md:mb-12 sm:pt-16">
      {/* Title block */}
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-textColor">
          {t("about.headerTitle")}
        </h1>
        <div className="mx-auto mt-5 h-[2px] w-32 rounded-full bg-gradient-to-r from-logoBlue/20 via-logoBlue to-logoBlue/20" />
      </header>

      {/* Mosaic grid */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((src, index) => {
            const isHero = index === 0 || index === 1;

            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg
            ${isHero ? "lg:col-span-2" : ""}`}
              >
                <div
                  className={`${
                    isHero ? "aspect-[21/9]" : "aspect-[16/10]"
                  } w-full`}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CineSuntemImg;
