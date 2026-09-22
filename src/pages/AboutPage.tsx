import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
//import "../index.css";
import CarCard from "../components/CarCard";
import Team from "../components/Team";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CineSuntemImg from "../components/CineSuntemImg";
import fiat from "../images/FIAT-front.webp";
import skoda from "../images/SK-front.webp";
import volkswagen from "../images/VW-front.webp";
import Button from "../components/Button";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<{ scrollToPackages: () => void }>(null);
  const testimonialsRef = useRef<{ scrollToTestimonials: () => void }>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [animate, setAnimate] = useState(false);

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPackages = () => {
    servicesRef.current?.scrollToPackages();
  };

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollToTestimonials();
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.topalxscoalaauto.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.topalxscoalaauto.ro/about",
      },
    ],
  };

  // Organization structured data for the school
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Scoala de soferi TopalX",
    description:
      "Școală de șoferi de top în București, oferim cursuri de conducere defensive și pregătire pentru permis auto.",
    url: "https://www.topalxscoalaauto.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calea Vitan 148A",
      addressLocality: "București",
      postalCode: "031301",
      addressCountry: "RO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40736 470 629",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://www.facebook.com/scoaladesoferitopalx/",
      "https://www.instagram.com/scoaladesoferitopalx/",
    ],
  };

  const nicknames = t("carCard.nickname", { returnObjects: true }) as string[];

  return (
    <>
      <Helmet>
        <title>
          Despre Noi | Scoala de soferi TopalX | Școala de Șoferi din București
        </title>
        <meta
          name="description"
          content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          name="keywords"
          content="școală de șoferi accesibilă, școală de șoferi București, cursuri de conducere defensive, permis auto, pregătire examen auto, instructori auto profesioniști, mașini moderne, prețuri accesibile"
        />
        <meta name="author" content="Scoala de soferi TopalX" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Despre Noi - Scoala de soferi TopalX - Școala de Șoferi din București"
        />
        <meta
          property="og:description"
          content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          property="og:url"
          content="https://www.topalxscoalaauto.ro/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.topalxscoalaauto.ro/images/about.webp"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="TopalX Scoala Auto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Despre Noi - Scoala de soferi TopalX - Școala de Șoferi din București"
        />
        <meta
          property="twitter:description"
          content="Află mai multe despre Scoala de soferi TopalX - școală de șoferi accesibilă și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          property="twitter:image"
          content="https://www.topalxscoalaauto.ro/images/about.webp"
        />
        <meta property="twitter:site" content="@TopalXScoalaAuto" />
        <meta property="twitter:creator" content="@TopalXScoalaAuto" />
        {/* Structured data scripts for breadcrumbs and organization */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
      </Helmet>

      <CineSuntemImg />

      {/* PAGE WRAPPER */}
      <div
        id="about"
        className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        {/* TOP GRID: Key info + 2 clickable cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8">
          {/* 1) Featured card: Mission */}
          <section
            onClick={scrollToTestimonials}
            className="cursor-pointer rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-7 lg:p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
              {t("about.mission.title")}
            </h2>

            {/* Text lung ok aici */}
            <p className="text-base leading-7 text-gray-800 sm:text-lg">
              {t("about.mission.description")}
            </p>

            <div className="mt-6 inline-flex items-center text-sm font-semibold text-logoBlue">
              {t("about.mission.seeRev")}
            </div>
          </section>

          {/* 2) Two compact cards */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
            <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
              <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
                {t("about.keyInformation.titleInfo")}
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-base font-medium leading-7 text-gray-800 sm:text-lg">
                <li>{t("about.keyInformation.founded")}</li>
                <li>{t("about.keyInformation.employees")}</li>
                <li>{t("about.keyInformation.location")}</li>
              </ul>
            </section>

            <section
              onClick={scrollToTeam}
              className="cursor-pointer rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-7 lg:p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
                {t("about.team.title")}
              </h2>
              <p className="text-base leading-7 text-gray-800 sm:text-lg">
                {t("about.team.description")}
              </p>

              <div className="mt-6 inline-flex items-center text-sm font-semibold text-logoBlue">
                {t("about.team.meetTeam")}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* COMPANY DESCRIPTION "PAPER CARD" */}
      <section className="mx-auto mb-10 w-full max-w-[1280px] px-4 sm:mb-12 sm:px-6 lg:mb-16 lg:px-8">
        <div className="rounded-2xl border border-black/10 bg-yellow-50/70 p-5 shadow-sm sm:p-7 lg:p-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">
              {t("about.companyDescription.title")}
            </h1>

            <div className="mx-auto mt-5 h-[2px] w-32 rounded-full bg-gradient-to-r from-logoBlue/20 via-logoBlue to-logoBlue/20" />

            {/* micro-subtitle optional (daca vrei) */}
            {/* <p className="mt-4 text-base text-gray-700">Pasiune, siguranță, rezultate.</p> */}
          </div>

          {/* Text content – modern readability */}
          <div className="mx-auto mt-8 max-w-[1160px] sm:mt-10 lg:mt-12">
            <div className="text-base leading-8 text-gray-900 md:columns-2 md:gap-10 md:text-[17px] lg:gap-12">
              <p className="[break-inside:avoid] mb-6">
                {t("about.companyDescription.paragraph1")}
              </p>
              <p className="[break-inside:avoid] mb-6">
                {t("about.companyDescription.paragraph3")}
              </p>

              <p className="[break-inside:avoid] mb-0">
                {t("about.companyDescription.paragraph2")}
              </p>
            </div>
          </div>

          {/* Cars section */}
          <div className="mt-10 sm:mt-12 lg:mt-14">
            <h2 className="px-1 text-center text-2xl font-bold sm:text-3xl">
              {t("about.carIntro")}{" "}
              <span className="bounce inline-block">&darr;</span>
            </h2>

            <p className="mt-3 text-center text-lg font-semibold text-gray-800">
              {t("about.categoryB")}
            </p>

            <div className="relative mt-12">
              {/* Background glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-1/2 h-40 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400/10 via-rose-500/10 to-emerald-400/10 blur-3xl"
              />

              <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    id: "volkswagen",
                    name: "Volkswagen Golf",
                    nickname: nicknames[0],
                    image: volkswagen,
                    gradient: "from-orange-400 via-red-500 to-rose-500",
                    glow: "bg-orange-400/25",
                  },
                  {
                    id: "fiat",
                    name: "Fiat 500",
                    nickname: nicknames[1],
                    image: fiat,
                    gradient: "from-red-500 via-rose-500 to-fuchsia-500",
                    glow: "bg-rose-500/25",
                  },
                  {
                    id: "skoda",
                    name: "Škoda Fabia",
                    nickname: nicknames[2],
                    image: skoda,
                    gradient: "from-lime-400 via-emerald-500 to-cyan-500",
                    glow: "bg-emerald-500/25",
                  },
                ].map((car) => (
                  <article
                    key={car.id}
                    className="group relative isolate w-full transition-all duration-500 ease-out hover:-translate-y-3"
                  >
                    {/* Glow behind card */}
                    <div
                      aria-hidden="true"
                      className={`absolute -inset-3 -z-10 rounded-[2.5rem] ${car.glow} opacity-0 blur-2xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-100`}
                    />

                    {/* Gradient border */}
                    <div
                      className={`relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br ${car.gradient} p-px shadow-[0_20px_60px_-25px_rgba(15,23,42,0.35)] transition-all duration-500 group-hover:shadow-[0_30px_80px_-25px_rgba(15,23,42,0.5)]`}
                    >
                      {/* Glass card */}
                      <div className="relative h-full overflow-hidden rounded-[calc(2rem-1px)] bg-white/95 p-2 backdrop-blur-xl">
                        {/* Shine effect */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -left-1/2 top-0 z-10 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
                        />

                        {/* Decorative corner glow */}
                        <div
                          aria-hidden="true"
                          className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${car.glow} blur-3xl transition-transform duration-700 group-hover:scale-150`}
                        />

                        {/* Existing CarCard */}
                        <div className="relative flex h-full justify-center overflow-hidden rounded-[1.6rem] [&>*]:h-full [&>*]:w-full [&_img]:mx-auto [&_img]:block">
                          <CarCard
                            name={car.name}
                            nickname={car.nickname}
                            image={car.image}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom color accent */}
                    <div
                      className={`mx-auto h-1 w-20 -translate-y-[2px] rounded-full bg-gradient-to-r ${car.gradient} opacity-60 transition-all duration-500 group-hover:w-36 group-hover:opacity-100`}
                    />
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                onClick={scrollToPackages}
                textKey="about.button"
                additionalClasses=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* REST */}
      <div>
        <Team ref={teamRef} />
        <Services ref={servicesRef} />
        <Testimonials ref={testimonialsRef} testimonials={[]} />
      </div>
    </>
  );
};

export default AboutPage;
