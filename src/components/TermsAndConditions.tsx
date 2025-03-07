import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const TermsAndConditions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-6 mb-16 mt-16">
      <Helmet>
        <title>{t("termsAndConditions.title")} - TopalX Driving School</title>
        <meta name="description" content={t("termsAndConditions.intro")} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <h1 className="text-4xl font-bold mb-12 mt-12 text-center">
        {t("termsAndConditions.title")}
      </h1>
      
      <div className="text-left font-semibold" itemScope itemType="https://schema.org/TermsOfService">
        <p itemProp="description">{t("termsAndConditions.intro")}</p>
        {Object.entries(
          t("termsAndConditions.sections", { returnObjects: true })
        ).map(([key, section]: any) => (
          <div key={key} itemProp="hasPart" itemScope itemType="https://schema.org/ArticleSection">
            <h2 className="text-2xl font-semibold mt-4" itemProp="headline">{section.title}</h2>
            <p itemProp="text">{section.content}</p>
            {section.list && (
              <ul className="list-disc ml-6">
                {section.list.map((item: string, index: number) => (
                  <li key={index} itemProp="itemListElement">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        
        <div>
          <h2 className="text-2xl font-semibold mt-4">{t("termsAndConditions.sections.contact.title")}</h2>
          <p>
            Email: <a href="mailto:topalxtrans@gmail.com" className="text-blue-500 underline" itemProp="email">topalxtrans@gmail.com</a>
          </p>
          <p itemProp="address">{t("termsAndConditions.sections.contact.address")}</p>
          <p>
            Telefon: <a href="tel:+40736470629" className="text-blue-500 underline" itemProp="telephone">0736 470 629</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
