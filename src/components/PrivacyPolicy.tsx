import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-6 mb-16 mt-16 w-full">
      <h1 className="text-4xl font-bold mb-12 text-center">
        {t("privacyPolicy.title")}
      </h1>
      <div className="text-left font-semibold">
        <p>{t("privacyPolicy.intro")}</p>
        {Object.entries(
          t("privacyPolicy.sections", { returnObjects: true })
        ).map(([key, section]: any) => (
          <div key={key}>
            <h2 className="text-2xl font-semibold mt-4">{section.title}</h2>
            <p>{section.content}</p>
            {section.list && (
              <ul className="list-disc ml-6">
                {section.list.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div>
          <h2 className="text-2xl font-semibold mt-4">{t("privacyPolicy.contact.title")}</h2>
          <p>{t("privacyPolicy.contact.content")}</p>
          <p>{t("privacyPolicy.contact.email")}</p>
          <p>{t("privacyPolicy.contact.address")}</p>
          <p>{t("privacyPolicy.contact.telephone")}</p>
          <p>{t("privacyPolicy.contact.telephone1")}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
