import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { FaMedal, FaCarSide, FaTruckPickup } from "react-icons/fa";

const Offer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 mx-auto flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-3 mx-2 text-center">{t("offer.title")}</h2>
      <p className="text-2xl mb-4 whitespace-nowrap">
        {t("offer.description1")}{" "}
        <FaMedal className="inline-block align-middle ml-1" />
      </p>
      <p className="text-xl mb-6 text-center">
        {t("offer.description2")}
        <span className="inline-block align-middle mx-2">
          <FaCarSide />
        </span>
        <span className="inline-block align-middle ml-2">
          <FaTruckPickup />
        </span>
      </p>

      <Button
        onClick={() => scrollToSection("contact")}
        textKey="offer.btnText"
        additionalClasses="border-4 border-secondary my-8"
      />
    </div>
  );
};

export default Offer;
