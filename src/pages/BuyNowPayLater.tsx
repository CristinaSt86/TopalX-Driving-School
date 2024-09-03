import React from "react";
import { useTranslation } from "react-i18next";

const BuyNowPayLater: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="buy-now-section" className="container mx-auto mb-10 px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-16 mt-16 pl-4 pr-4">
        {t("buyNowPayLater.title")}
      </h1>

      <section className="mb-8">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-12">
          {t("buyNowPayLater.section1.subtitle")}
        </h2>
        <p className="mb-4">{t("buyNowPayLater.section1.description")}</p>
        <p className="mb-4 font-semibold">{t("buyNowPayLater.section1.howItWorks")}</p>
        <ul className="list-disc pl-5 mb-4">
          {(t("buyNowPayLater.section1.steps", { returnObjects: true }) as string[]).map(
            (step, index) => (
              <li key={index} className="mb-2 cursor-pointer">
                {step}
              </li>
            )
          )}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          {t("buyNowPayLater.section2.subtitle")}
        </h2>
        <ul className="list-disc pl-5 mb-4">
          {(t("buyNowPayLater.section2.steps", { returnObjects: true }) as string[]).map(
            (step, index) => (
              <li key={index} className="mb-2 cursor-pointer">
                {step}
              </li>
            )
          )}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          {t("buyNowPayLater.section3.subtitle")}
        </h2>
        {(t("buyNowPayLater.section3.examples", { returnObjects: true }) as string[]).map(
          (example, index) => (
            <p key={index} className="mb-4">
              {example}
            </p>
          )
        )}
      </section>

      <section className="text-center">
        <p className="mb-4">
          {t("buyNowPayLater.section4.moreInfo")}{" "}
          <a
            href="https://www.tbibank.ro"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            tbibank.ro
          </a>
        </p>
        <p className="mb-4">
          {t("buyNowPayLater.section4.downloadApp")}{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.tbibank"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play
          </a>{" "}
          {t("buyNowPayLater.section4.or")}{" "}
          <a
            href="https://apps.apple.com/ro/app/tbi-bank/id1466051318"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple App Store
          </a>.
        </p>
      </section>
    </div>
  );
};

export default BuyNowPayLater;
