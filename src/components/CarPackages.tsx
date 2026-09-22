import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Icon } from "@iconify/react";

import VW from "../images/VW.webp";
import FIAT from "../images/FIAT.webp";
import SKODA from "../images/SKODA.webp";
import Offer from "./Offer";

type CarPackage = {
  id: "volkswagen" | "fiat" | "skoda";
  translationIndex: number;
  image: string;
  featured?: boolean;
};

type CarPackagesProps = {};

const cars: CarPackage[] = [
  {
    id: "volkswagen",
    translationIndex: 0,
    image: VW,
    featured: true,
  },
  {
    id: "fiat",
    translationIndex: 1,
    image: FIAT,
  },
  {
    id: "skoda",
    translationIndex: 2,
    image: SKODA,
  },
];

const CarPackages = forwardRef<HTMLDivElement, CarPackagesProps>(
  (_props, ref) => {
    const { t } = useTranslation();

    return (
      <div ref={ref}>
        <Helmet>
          <title>
            {t(
              "carPackages.seo.title",
              "Pachete auto | Școala de șoferi TopalX",
            )}
          </title>

          <meta
            name="description"
            content={t(
              "carPackages.seo.description",
              "Alege mașina potrivită și începe pregătirea pentru permisul de conducere alături de TopalX.",
            )}
          />
        </Helmet>

        <section
          id="car-packages"
          className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white py-16 md:py-20"
        >
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-logoBlue/5 blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <header className="mx-auto max-w-3xl text-center">
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                {t("carPackages.title")}
              </h1>

              <div className="mx-auto mt-5 h-[2px] w-32 rounded-full bg-gradient-to-r from-logoBlue/20 via-logoBlue to-logoBlue/20" />

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                {t("carPackages.subtitluCars")}
              </p>
            </header>

            {/* Cars grid */}
            <div className="mt-12 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
              {cars.map((car) => {
                const basePath = `carPackages.packages.${car.translationIndex}`;

                const name = t(`${basePath}.name`);
                const price = t(`${basePath}.price`);
                const transmission = t(`${basePath}.transmission`);
                const fuelType = t(`${basePath}.fuelType`);
                const note = t(`${basePath}.note`);

                const features = Array.from({ length: 5 }, (_, index) =>
                  t(`${basePath}.features.${index}`),
                );

                return (
                  <article
                    key={car.id}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
                      car.featured
                        ? "border-secondary/40 shadow-xl shadow-secondary/10 ring-1 ring-secondary/10"
                        : "border-slate-200 shadow-lg shadow-slate-900/5"
                    }`}
                  >
                    {/* Recommended badge */}
                    {car.featured && (
                      <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-secondary/25">
                        <Icon icon="mdi:star" className="text-sm" />
                        {t("carPackages.featured.cipReco")}
                      </div>
                    )}

                    {/* Image */}
                    <div className="p-3">
                      <div className="relative aspect-square overflow-hidden rounded-[22px] bg-gradient-to-br from-slate-100 to-slate-50">
                        <img
                          src={car.image}
                          alt={name}
                          loading={car.featured ? "eager" : "lazy"}
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col px-6 pb-7 pt-3">
                      <h2 className="text-xl font-bold leading-snug text-slate-950 md:text-2xl">
                        {name}
                      </h2>

                      {/* Price */}
                      <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold leading-5 text-emerald-700 ring-1 ring-inset ring-emerald-200/70">
                        {price}
                      </div>

                      {/* Meta information */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                          <Icon
                            icon="mdi:car-shift-pattern"
                            className="text-base text-logoBlue"
                          />
                          {transmission}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                          <Icon
                            icon="mdi:fuel"
                            className="text-base text-logoBlue"
                          />
                          {fuelType}
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="mt-6 flex-1 space-y-3">
                        {features.map((feature, index) => (
                          <li
                            key={`${car.id}-feature-${index}`}
                            className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                          >
                            <Icon
                              icon="mdi:check-circle"
                              className="mt-1 shrink-0 text-lg text-emerald-600"
                            />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Note */}
                      {note && (
                        <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-red-50 px-4 py-3.5 text-sm leading-5 text-red-700 ring-1 ring-inset ring-red-200/70">
                          <Icon
                            icon="mdi:information-outline"
                            className="mt-0.5 shrink-0 text-lg"
                          />

                          <span>{note}</span>
                        </div>
                      )}

                      {/* Buttons */}
                      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <a
                          href="#contact"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-secondary/20 transition hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2"
                        >
                          <Icon
                            icon="mdi:account-edit-outline"
                            className="text-lg"
                          />

                          {t("carPackages.cta.contact")}
                        </a>

                        <a
                          href="tel:+40736470629"
                          aria-label={`${t("carPackages.cta.call")} +40 736 470 629`}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-logoBlue/30 hover:bg-logoBlue/5 hover:text-logoBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-logoBlue/30 focus-visible:ring-offset-2"
                        >
                          <Icon icon="mdi:phone" className="text-lg" />

                          {t("carPackages.cta.call")}
                        </a>
                      </div>
                    </div>

                    <span className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-transparent transition duration-300 group-hover:ring-logoBlue/20" />
                  </article>
                );
              })}
            </div>

            <div className="mt-14">
              <Offer />
            </div>
          </div>
        </section>
      </div>
    );
  },
);

CarPackages.displayName = "CarPackages";

export default CarPackages;
