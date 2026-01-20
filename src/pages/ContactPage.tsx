import React, { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
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

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.topalxscoalaauto.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.topalxscoalaauto.ro/contact",
      },
    ],
  };

  // Organization structured data for the school
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Scoala de soferi TopalX",
    description:
      "Oferim servicii de calitate pentru permis auto și cursuri de conducere defensive la Scoala de soferi TopalX din București.",
    url: "https://www.topalxscoalaauto.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calea Vitan 148A",
      addressLocality: "București",
      postalCode: "031301",
      addressCountry: "RO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40736 470 629",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://www.facebook.com/scoaladesoferitopalx/",
      "https://www.instagram.com/scoaladesoferitopalx/",
    ],
  };

  return (
    <div id="contact" className={` ${animate ? "slide-in" : ""}`}>
      <Helmet>
        <title>
          Contact Scoala de soferi TopalX | Școală de șoferi accesibila și de
          calitate în București
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
          content="https://www.topalxscoalaauto.ro/images/contact.webp"
        />
        {/* Structured data for breadcrumbs and organization */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
      </Helmet>
      <div id="contact" className={`${animate ? "slide-in" : ""}`}>
        <Helmet>
          <title>
            Contact Scoala de soferi TopalX | Școală de șoferi accesibila și de
            calitate în București
          </title>
          <meta
            name="description"
            content="Contactați Scoala de soferi TopalX - școala de șoferi accesibila și de calitate din București. Oferim cursuri de conducere defensive, permis auto, și pregătire pentru examen auto."
          />
          <meta
            name="keywords"
            content="școală de șoferi ieftină, școală de șoferi București, cursuri de conducere defensive, permis auto, pregătire examen auto"
          />
          <meta
            property="og:title"
            content="Contact Scoala de soferi TopalX - Școală de șoferi ieftină și de calitate în București"
          />
          <meta
            property="og:description"
            content="Contactați Scoala de soferi TopalX - școala de șoferi accesibila și de calitate din București."
          />
          <meta
            property="og:url"
            content="https://www.topalxscoalaauto.ro/contact"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.topalxscoalaauto.ro/images/contact.webp"
          />
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbData)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(organizationData)}
          </script>
        </Helmet>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {/* SPLIT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT PANEL */}
              <div className="rounded-3xl border border-black/10 bg-yellow-50/70 p-7 sm:p-10 shadow-sm">
                <h1 className="text-3xl  font-bold text-gray-900">
                  {t("contactPage.title")}
                </h1>
                <p className="mt-4 text-slate-700 max-w-md">
                  {t("contactPage.subtitluContact")}
                </p>

                {/* Quick actions */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="tel:+40736470629"
                    className="inline-flex items-center justify-center rounded-2xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  >
                     {t("contactPage.ctaContact")}
                  </a>
                  <a
                    href="mailto:topalxtrans@gmail.com"
                    className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-slate-50"
                  >
                     {t("contactPage.ctaEmail")}
                  </a>
                </div>

                {/* Trust / info blocks */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-sm">
                    <p className="text-xs font-semibold text-slate-500">
                      {t("contactPage.adres")}
                    </p>
                    <p className="mt-2 text-sm text-gray-900">
                      {t("contactPage.address")}
                    </p>
                    <p className="text-sm text-slate-600">{t("contactPage.address2")}</p>
                  </div>

                  <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-sm">
                    <p className="text-xs font-semibold text-slate-500">
                      {t("contactPage.telef")}
                    </p>
                    <a
                      href="tel:+40736470629"
                      className="mt-2 block text-sm font-semibold text-gray-900 underline"
                    >
                      0736 470 629
                    </a>
                    <p className="mt-2 text-xs text-slate-500">
                      {t("contactPage.quickAnswer")}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-sm sm:col-span-2">
                    <p className="text-xs font-semibold text-slate-500">
                      Email
                    </p>
                    <a
                      href="mailto:topalxtrans@gmail.com"
                      className="mt-2 block text-sm font-semibold text-gray-900 underline break-all"
                    >
                      topalxtrans@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT: FORM BIG */}
              <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-7 sm:p-10">
                <h2 className="text-xl font-semibold text-gray-900">
                  {t("contactPage.titluForm")}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {t("contactPage.subtitluForm")}
                </p>

                <div className="mt-6">
                  <Suspense fallback={<Loader />}>
                    <ContactForm onSubmit={handleFormSubmit} />
                  </Suspense>
                </div>
              </div>
            </div>

            {/* MAP FULL WIDTH */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-4">
                <h2 className="text-base font-semibold text-gray-900">
                  {t("contactPage.cipFindUsHere")}
                </h2>
                <a
                  className="text-sm font-semibold text-logoBlue underline"
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("contactPage.cipOpenMaps")}
                </a>
              </div>

              <div className="h-[360px] sm:h-[420px] lg:h-[480px]">
                <Suspense fallback={<Loader />}>
                  <GoogleMapComponent />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
