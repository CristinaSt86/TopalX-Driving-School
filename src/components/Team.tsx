import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "../index.css";
import cos2 from "../images/cos2.webp";
import sisOffice from "../images/sisOffice.webp";
import ins2 from "../images/ins2.webp";
import ins1 from "../images/ins1.webp";
import prof1 from "../images/prof1.webp";
import FiatDrive from "../images/FiatDrive.webp";
import { Link } from "react-router-dom";
import Button from "./Button";

const Team = React.forwardRef<HTMLDivElement, any>((props, ref) => {
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
      id: 4,
      name: t("team2.members.3.name"),
      role: t("team2.members.3.role"),
      description: t("team2.members.3.description"),
      image: ins1,
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

      <section className="bg-white pb-3 my-24 shadow-2xl">
        <h2
          ref={ref}
          className="text-center text-3xl font-bold text-gray-800 mt-16 pl-3 pr-3 pt-12"
        >
          {t("team2.title")}
        </h2>
        <div className="w-16 h-[2px] bg-primary mx-auto my-8"></div>
        <div className="relative w-full h-48 overflow-hidden">
          <div className="absolute bottom-1 left-0 w-80 h-auto animate-drive">
            <img src={FiatDrive} alt="Car" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-6 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`bg-gray-100 p-4 rounded-md shadow-xl flex flex-col items-center sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gray-300 clip-hexagon mx-auto">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4">
                  <h3 className="text-xl font-semibold text-center">
                    {member.name} <br /> - {member.role} -
                  </h3>
                  <p className="text-center mx-6 my-6">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>






      <div className="flex flex-col items-center justify-center mb-10">
        <p className="text-center mb-10 text-2xl px-4  md:px-24 font-semibold mt-10">
          {t("carPackages.introText")}{" "}
          <Link to="/contact" className="text-logoBlue underline">
            {" "}
            {t("carPackages.registrationFormText")}
          </Link>{" "}
          {t("carPackages.orCallText")}{" "}
          <a href="tel:+40736470629" className="text-logoBlue underline">
            {" "}
            0736 470 629
          </a>
          .
        </p>
        <Button
          onClick={() => scrollToSection("contact")}
          textKey="carPackages.buttonText"
          additionalClasses="mb-10 bg-secondary  "
        />
      </div>
    </>
  );
});

export default Team;
