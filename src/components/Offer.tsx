import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
//import { useNavigate } from "react-router-dom";

const Offer: React.FC = () => {
  const { t } = useTranslation();
  // const navigate = useNavigate();

  // const goToContactPage = () => {
  //   navigate("/contact");
  // };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="p-6 mx-auto  flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-3">{t("offer.title")}</h2>
      <p className="text-2xl mb-4">{t("offer.description1")}</p>
      <p className="text-xl mb-6">{t("offer.description2")}</p>
      <Button onClick={() => scrollToSection("contact")} textKey="offer.btnText" additionalClasses=" border-4 border-secondary mt-16 mb-16"/>
    </div>
  );
};

export default Offer;
