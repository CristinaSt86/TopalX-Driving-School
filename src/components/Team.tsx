import React from "react";
import fiatDrive from "../images/FiatDrive.webp";
import "../index.css";
import cos2 from "../images/cos2.webp";
import sisOffice from "../images/sisOffice.webp";
import ins1 from "../images/ins1.webp";
import ins2 from "../images/ins2.webp";
import prof1 from "../images/prof1.webp";
import { useTranslation } from "react-i18next";

const Team = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t("team.members.0.name"),
      role: t("team.members.0.role"),
      description: t("team.members.0.description"),
      image: cos2,
    },
    {
      id: 2,
      name: t("team.members.1.name"),
      role: t("team.members.1.role"),
      description: t("team.members.1.description"),
      image: sisOffice,
    },
    {
      id: 3,
      name: t("team.members.2.name"),
      role: t("team.members.2.role"),
      description: t("team.members.2.description"),
      image: ins2,
    },
    {
      id: 4,
      name: t("team.members.3.name"),
      role: t("team.members.3.role"),
      description: t("team.members.3.description"),
      image: ins1,
    },
    {
      id: 5,
      name: t("team.members.4.name"),
      role: t("team.members.4.role"),
      description: t("team.members.4.description"),
      image: prof1,
    },
  ];
  return (
    <>
      <h2
        ref={ref}
        className="text-center text-3xl font-bold text-gray-800 mb-16 mt-16"
      >
        {t("team.title")}
      </h2>

      <section className="bg-white pb-3 mb-10 shadow-2xl">
        <div className="relative w-full h-48 overflow-hidden">
          <div className="absolute bottom-1 left-0 w-80 h-auto animate-drive">
            <img src={fiatDrive} alt="Car" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-6 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`bg-gray-100 p-4 rounded-lg shadow-xl flex flex-col items-center sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gray-300 clip-hexagon mx-auto">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
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
    </>
  );
});

export default Team;
