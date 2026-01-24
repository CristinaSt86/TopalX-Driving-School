import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Icon } from "@iconify/react";

import mer from "../images/mer.webp";
import vol from "../images/vol.webp";
import f3 from "../images/f3.webp";
import sk1 from "../images/sk1.webp";
import Offer from "./Offer";

type CarPackage = {
  name: string;
  price: string;
  transmission: string;
  fuelType: string;
  features: string[];
  note: string;
  image: string;
};

type CarPackagesProps = {};

const CarPackages = forwardRef<HTMLDivElement, CarPackagesProps>(
  (_props, ref) => {
    const { t } = useTranslation();

    const carPackages: CarPackage[] = [
      {
        name: t("carPackages.packages.0.name"),
        price: t("carPackages.packages.0.price"),
        transmission: t("carPackages.packages.0.transmission"),
        fuelType: t("carPackages.packages.0.fuelType"),
        features: [
          t("carPackages.packages.0.features.0"),
          t("carPackages.packages.0.features.1"),
          t("carPackages.packages.0.features.2"),
          t("carPackages.packages.0.features.3"),
          t("carPackages.packages.0.features.4"),
        ],
        note: t("carPackages.packages.0.note"),
        image: mer,
      },
      {
        name: t("carPackages.packages.1.name"),
        price: t("carPackages.packages.1.price"),
        transmission: t("carPackages.packages.1.transmission"),
        fuelType: t("carPackages.packages.1.fuelType"),
        features: [
          t("carPackages.packages.1.features.0"),
          t("carPackages.packages.1.features.1"),
          t("carPackages.packages.1.features.2"),
          t("carPackages.packages.1.features.3"),
          t("carPackages.packages.1.features.4"),
        ],
        note: t("carPackages.packages.1.note"),
        image: vol,
      },
      {
        name: t("carPackages.packages.2.name"),
        price: t("carPackages.packages.2.price"),
        transmission: t("carPackages.packages.2.transmission"),
        fuelType: t("carPackages.packages.2.fuelType"),
        features: [
          t("carPackages.packages.2.features.0"),
          t("carPackages.packages.2.features.1"),
          t("carPackages.packages.2.features.2"),
          t("carPackages.packages.2.features.3"),
          t("carPackages.packages.2.features.4"),
        ],
        note: t("carPackages.packages.2.note"),
        image: f3,
      },
      {
        name: t("carPackages.packages.3.name"),
        price: t("carPackages.packages.3.price"),
        transmission: t("carPackages.packages.3.transmission"),
        fuelType: t("carPackages.packages.3.fuelType"),
        features: [
          t("carPackages.packages.3.features.0"),
          t("carPackages.packages.3.features.1"),
          t("carPackages.packages.3.features.2"),
          t("carPackages.packages.3.features.3"),
          t("carPackages.packages.3.features.4"),
        ],
        note: t("carPackages.packages.3.note"),
        image: sk1,
      },
    ];

    return (
      <div ref={ref}>
        <Helmet>
          <title>
            {t("carPackages.seo.title", "Car Packages | TopalX Driving School")}
          </title>
          <meta
            name="description"
            content={t(
              "carPackages.seo.description",
              "Choose from modern cars and professional training.",
            )}
          />
        </Helmet>

        <section id="car-packages" className="py-16">
          {/* MAX WIDTH WRAPPER */}
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <header className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("carPackages.title")}
              </h1>
              <div className="mx-auto mt-5 h-[2px] w-32 rounded-full bg-gradient-to-r from-logoBlue/20 via-logoBlue to-logoBlue/20" />
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-700">
                {t("carPackages.subtitluCars")}
              </p>
            </header>

            {/* GRID */}
            <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
              {carPackages.map((pkg, i) => {
                const isFeatured = i === 0; // primul pachet “featured”

                return (
                  <article
                    key={i}
                    className={`
                    group relative overflow-hidden rounded-2xl border border-slate-200 bg-white
                    shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl
                    ${isFeatured ? "md:col-span-2" : ""}
                  `}
                  >
                    {/* Featured badge */}
                    {isFeatured && (
                      <div className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        {t("carPackages.featured.cipReco")}
                      </div>
                    )}

                    <div className={isFeatured ? "md:flex md:gap-6" : ""}>
                      {/* Image */}
                      <div className={isFeatured ? "md:w-[46%] p-4" : "p-4"}>
                        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-50">
                          <img
                            src={pkg.image}
                            alt={pkg.name}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>

                      {/* Text */}
                      <div
                        className={
                          isFeatured
                            ? "md:w-[54%] px-5 pb-6 md:pt-5"
                            : "px-5 pb-6"
                        }
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="text-xl font-semibold text-gray-900">
                            {pkg.name}
                          </h2>
                          <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                            {pkg.price}
                          </span>
                        </div>

                        {/* Meta badges */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                            <Icon
                              icon="mdi:car-shift-pattern"
                              className="text-slate-500"
                            />
                            {t("carPackages.transmission")}: {pkg.transmission}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                            <Icon icon="mdi:fuel" className="text-slate-500" />
                            {t("carPackages.fuelType")}: {pkg.fuelType}
                          </span>
                        </div>

                        {/* Features */}
                        <ul className="mt-4 space-y-2">
                          {pkg.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-slate-700"
                            >
                              <Icon
                                icon="mdi:check-circle-outline"
                                className="mt-[2px] text-emerald-600"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Note (premium alert) */}
                        {pkg.note && (
                          <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-100">
                            {pkg.note}
                          </div>
                        )}

                        {/* CTA (real) */}
                        <div className="mt-6 flex flex-wrap gap-3">
                          <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                          >
                            {t("carPackages.cta.contact")}
                          </a>

                          <a
                            href="tel:+40736470629"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/30"
                          >
                            {t("carPackages.cta.call")}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* subtle accent ring on hover */}
                    <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-logoBlue/20" />
                  </article>
                );
              })}
            </div>

            <div className="mt-12">
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
