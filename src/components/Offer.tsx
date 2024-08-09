import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Offer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate("/contact");
  };

  return (
    <div className="p-6 mt-10 mb-10 mx-auto my-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-3">{t("offer.title")}</h2>
      <p className="text-2xl mb-4">{t("offer.description1")}</p>
      <p className="text-xl mb-6">{t("offer.description2")}</p>
      <Button onClick={goToContactPage} textKey="offer.btnText" additionalClasses=" border-4 border-secondary mt-16 mb-16"/>
    </div>
  );
};

export default Offer;
