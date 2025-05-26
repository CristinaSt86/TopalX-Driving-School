import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-6 mb-16 mt-16 w-full">
      <Helmet>
        <title>{t("privacyPolicy.title")} - TopalX Driving School</title>
        <meta name="description" content={t("privacyPolicy.intro")} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
       <h1 className="text-4xl font-bold my-16 md:mt-36 md:mb-24 text-center">
        {t("privacyPolicy.title")}
      </h1>
      
      <div className="text-left font-semibold py-12" itemScope itemType="https://schema.org/PrivacyPolicy">
        <p itemProp="description">{t("privacyPolicy.intro")}</p>
        {Object.entries(
          t("privacyPolicy.sections", { returnObjects: true })
        ).map(([key, section]: any) => (
          <div key={key} itemProp="hasPart" itemScope itemType="https://schema.org/ArticleSection">
            <h2 className="text-2xl font-semibold  mt-16" itemProp="headline">{section.title}</h2>
            <p itemProp="text" className=" mt-6">{section.content}</p>
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
          {/* <h2 className="text-2xl font-semibold mt-4" itemProp="contactPoint">{t("privacyPolicy.contact.title")}</h2> */}
          {/* <p>{t("privacyPolicy.sections.contact.title")}</p> */}
          <p>
            Email - <a href="mailto:topalxtrans@gmail.com" className="text-blue-500 underline" itemProp="email">topalxtrans@gmail.com</a>
          </p>
          <p itemProp="address">{t("privacyPolicy.sections.contact.address")}</p>
          <p>
            Telefon - <a href="tel:+40736470629" className="text-blue-500 underline" itemProp="telephone">0736 470 629</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
