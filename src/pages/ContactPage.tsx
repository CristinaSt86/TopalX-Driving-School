import React, { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import Loader from "../components/Loader";

const GoogleMapComponent = lazy(
  () => import("../components/GoogleMapComponent")
);

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form Data Submitted:", formData);
    // Handle the submission here, e.g., send to a server
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={` ${animate ? "slide-in" : ""}`}>
      <Helmet>
        <title>{t("contactPage.title")} - TopalX</title>
        <meta name="description" content={t("contactPage.metaDescription")} />
        <meta name="keywords" content={t("contactPage.metaKeywords")} />
      </Helmet>
      <h1 className=" px-3 mt-16 mb-16 text-3xl font-bold text-center md:mb-16 md:mt-16 ">
        {t("contactPage.title")}
      </h1>
      <div className="items-center justify-center bg-custom-packages bg-center bg-cover bg-fixed pt-20 pb-20 md:flex-row md:gap-8 md:m-0 ">
        <div>
          <Suspense fallback={<Loader />}>
            <ContactForm onSubmit={handleFormSubmit} />
          </Suspense>
        </div>
        <div className="w-full md:w-auto flex  md:flex-row justify-between items-start mt-8 mb-8">
          <h2 className="text-2xl text-white font-semibold mb-10 mt-10 bg-primary p-3 w-fit rounded-r-full">
            {t("contactPage.locationTitle")}
          </h2>
          <div className="text-right text-white mb-10 mt-10 bg-primary p-12 w-fit rounded-l-full">
            <p
              className="mb-2 whitespace-nowrap"
              dangerouslySetInnerHTML={{ __html: t("contactPage.address") }}
            ></p>
            <p className="mb-2 whitespace-nowrap">{t("contactPage.address2")}</p>
            <p
              className="mb-2 whitespace-nowrap"
              dangerouslySetInnerHTML={{ __html: t("contactPage.secretariat") }}
            ></p>
            <p
              className="mb-2 whitespace-nowrap"
              dangerouslySetInnerHTML={{ __html: t("contactPage.manager") }}
            ></p>
            <p
              className="mb-4 "
              dangerouslySetInnerHTML={{ __html: t("contactPage.email") }}
            ></p>
          </div>
        </div>
        <div className="md:mr-4 w-full">
          <Suspense fallback={<Loader />}>
            <GoogleMapComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
