import React, { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";
import "../index.css";

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
  }) => {};

  useEffect(() => {
    setAnimate(true);
  }, [t]);

  return (
    <div className={` ${animate ? "slide-in" : ""}`}>
      <Helmet>
        <title>
          Contact Scoala de soferi TopalX | Școală de șoferi accesibila și de calitate în București
        </title>
        <meta
          name="description"
          content="Contactați Scoala de soferi TopalX - școala de șoferi accesibila și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          name="keywords"
          content="școală de șoferi ieftină, școală de șoferi București, cursuri de conducere defensive, permis auto, pregătire examen auto"
        />
        <meta name="author" content="Scoala de soferi TopalX" />
        <meta
          property="og:title"
          content="Contact Scoala de soferi TopalX - Școală de șoferi ieftină și de calitate în București"
        />
        <meta
          property="og:description"
          content="Contactați Scoala de soferi TopalX - școala de șoferi accesibila și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
        />
        <meta
          property="og:url"
          content="https://www.topalxscoalaauto.ro/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.topalxscoalaauto.ro/images/contact.jpg"
        />
      </Helmet>

    
      <div className="shadow-custom relative items-center justify-center bg-opacity-custom pt-20 pb-20 md:flex-row md:gap-8 md:m-0">
      <h1 className=" px-3 mt-8 mb-16 text-3xl font-bold text-center md:mb-16 md:mt-16 ">
        {t("contactPage.title")}
      </h1>
        <div className="relative z-10">
          <Suspense fallback={<Loader />}>
            <ContactForm onSubmit={handleFormSubmit} />
          </Suspense>
        </div>
        <div className="w-full md:w-auto flex md:flex-row gap-2 justify-between items-start mt-8 mb-8">
          <h2 className="shadow-custom text-2xl text-white font-semibold mb-10 mt-10 bg-primary p-3 w-fit rounded-r-2xl">
            {t("contactPage.locationTitle")}
          </h2>
          <div className="shadow-custom  text-white mb-10 mt-10 bg-primary p-4 w-fit rounded-l-3xl">
            <p
              className="mb-2 whitespace-nowrap"
              dangerouslySetInnerHTML={{ __html: t("contactPage.address") }}
            ></p>
            <p className="mb-2 whitespace-nowrap">
              {t("contactPage.address2")}
            </p>
            <p
              className="mb-2 whitespace-nowrap"
              dangerouslySetInnerHTML={{ __html: t("contactPage.secretariat") }}
            ></p>
            <p
              className="mb-2 whitespace-nowrap"
              dangerouslySetInnerHTML={{ __html: t("contactPage.manager") }}
            ></p>
            <p
              className="mb-2 "
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


