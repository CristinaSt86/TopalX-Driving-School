import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "../index.css";
import cos2 from "../images/cos2.webp";
import sisOffice from "../images/sisOffice.webp";
import ins2 from "../images/ins2.webp";
//import ins1 from "../images/ins1.webp";
import prof1 from "../images/prof1.webp";
import FiatDrive from "../images/FiatDrive.webp";
import { Link } from "react-router-dom";
import Button from "./Button";

type TeamProps = any;

const Team = React.forwardRef<HTMLDivElement, TeamProps>((props, ref) => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t("team2.members.0.name"),
      role: t("team2.members.0.role"),
      description: t("team2.members.0.description"),
      image: cos2,
    },
    {
      id: 2,
      name: t("team2.members.1.name"),
      role: t("team2.members.1.role"),
      description: t("team2.members.1.description"),
      image: sisOffice,
    },
    {
      id: 3,
      name: t("team2.members.2.name"),
      role: t("team2.members.2.role"),
      description: t("team2.members.2.description"),
      image: ins2,
    },

    {
      id: 5,
      name: t("team2.members.4.name"),
      role: t("team2.members.4.role"),
      description: t("team2.members.4.description"),
      image: prof1,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Echipa | Scoala de soferi TopalX | Instructori cu Experiență și
          Profesionism în București
        </title>
        <meta
          name="description"
          content="Cunoaște echipa noastră de la Scoala de soferi TopalX - școală de șoferi din București. Instructori cu experiență, profesionism, management dedicat și servicii de secretariat eficiente."
        />
        <meta
          name="keywords"
          content="echipă școală de șoferi, instructori cu experiență, profesioniști auto, management școală de șoferi, secretariat școală de șoferi, TopalX București, instructori auto București, cursuri de conducere defensive, permis auto"
        />
        <meta name="author" content="Scoala de soferi TopalX" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Echipa - Scoala de soferi TopalX - Instructori cu Experiență și Profesionism în București"
        />
        <meta
          property="og:description"
          content="Cunoaște echipa noastră de la Scoala de soferi TopalX - școală de șoferi din București. Instructori cu experiență, profesionism, management dedicat și servicii de secretariat eficiente."
        />
        <meta
          property="og:url"
          content="https://www.topalxscoalaauto.ro/team"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.topalxscoalaauto.ro/images/team.webp"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="TopalX Scoala Auto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Echipa - Scoala de soferi TopalX - Instructori cu Experiență și Profesionism în București"
        />
        <meta
          property="twitter:description"
          content="Cunoaște echipa noastră de la Scoala de soferi TopalX - școală de șoferi din București. Instructori cu experiență, profesionism, management dedicat și servicii de secretariat eficiente."
        />
        <meta
          property="twitter:image"
          content="https://www.topalxscoalaauto.ro/images/team.webp"
        />
        <meta property="twitter:site" content="@TopalXScoalaAuto" />
        <meta property="twitter:creator" content="@TopalXScoalaAuto" />
      </Helmet>

      <section className="relative bg-white py-4 md:py-8">
        {/* car animation (mai “curat”, mai mic) */}
        <div className="relative mt-4 h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-56 animate-drive opacity-90">
            <img src={FiatDrive} alt="Car" loading="lazy" />
          </div>
        </div>
        {/* decor subtil */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              ref={ref}
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {t("team2.title")}
              <div className="mx-auto mt-5 h-[2px] w-32 rounded-full bg-gradient-to-r from-logoBlue/20 via-logoBlue to-logoBlue/20" />
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
              {t("team2.subtitluTeam")}
            </p>
          </div>

          {/* grid modern */}
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-black/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <div className="mt-1 inline-flex items-center rounded-full bg-black/5 px-2.5 py-1 text-xs font-semibold text-gray-700">
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-md leading-relaxed text-gray-600">
                  {member.description}
                </p>
              </article>
            ))}
          </div>

          {/* CTA modern */}
          <div className="my-16 rounded-2xl border border-black/10 bg-gradient-to-b from-white to-black/5 p-6 md:p-8">
            <p className="mx-auto max-w-3xl text-center text-lg font-semibold leading-relaxed text-gray-900">
              {t("carPackages.introText")}{" "}
              <Link to="/contact" className="text-logoBlue underline">
                {t("carPackages.registrationFormText")}
              </Link>{" "}
              {t("carPackages.orCallText")}{" "}
              <a href="tel:+40736470629" className="text-logoBlue underline">
                0736 470 629
              </a>
              .
            </p>

            <div className="mt-6 flex justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                textKey="carPackages.buttonText"
                additionalClasses="bg-secondary"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Team;
