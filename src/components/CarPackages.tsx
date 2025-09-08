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
              "Choose from modern cars and professional training."
            )}
          />
        </Helmet>

        <section className="container mx-auto px-4 py-16">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">
            {t("carPackages.title")}
          </h1>
          <div className="w-64 h-[1px] bg-slate-400 mx-auto my-8"></div>

          {/* GRID of pricing-style cards */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {carPackages.map((pkg, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {/* Image */}
                <div className="p-4">
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

                {/* Text content */}
                <div className="px-5 pb-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-semibold">{pkg.name}</h2>
                    <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Meta badges */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      <Icon
                        icon="mdi:transmission-tower"
                        className="text-slate-500"
                      />
                      {t("carPackages.transmission")}: {pkg.transmission}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      <Icon
                        icon="mdi:gas-station-outline"
                        className="text-slate-500"
                      />
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

                  {/* Note + CTA */}
                  <p className="mt-3 text-sm text-red-600">{pkg.note}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
                    >
                      {t("common.cta.contact", "Contact")}
                    </a>
                  </div>
                </div>

                {/* subtle accent ring on hover */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-blue-600/20" />
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Offer />
          </div>
        </section>
      </div>
    );
  }
);

CarPackages.displayName = "CarPackages";
export default CarPackages;
