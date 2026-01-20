import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6 lg:px-8 pt-24 pb-24">
      <Helmet>
        <title>{t("privacyPolicy.title")} - TopalX Driving School</title>
        <meta name="description" content={t("privacyPolicy.intro")} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-20">
          {t("privacyPolicy.title")}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          {t("privacyPolicy.intro")}
        </p>
      </header>

      <article
        className="mt-10 sm:mt-12 rounded-3xl border border-black/10 bg-white/70 backdrop-blur-md shadow-sm ring-1 ring-black/5"
        itemScope
        itemType="https://schema.org/PrivacyPolicy"
      >
        <div className="p-6 sm:p-10">
          <div className="text-left" itemProp="description">
            {/* Intro already shown above, keep schema description */}
            <span className="sr-only">{t("privacyPolicy.intro")}</span>
          </div>

          <div className="mt-2 space-y-12 sm:space-y-14">
            {Object.entries(
              t("privacyPolicy.sections", { returnObjects: true })
            ).map(([key, section]: any) => (
              <section
                key={key}
                itemProp="hasPart"
                itemScope
                itemType="https://schema.org/ArticleSection"
                className="scroll-mt-24"
              >
                <h2
                  className="text-xl sm:text-2xl font-bold text-gray-900"
                  itemProp="headline"
                >
                  {section.title}
                </h2>

                <p
                  itemProp="text"
                  className="mt-4 text-base leading-relaxed text-slate-700"
                >
                  {section.content}
                </p>

                {section.list && (
                  <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-700">
                    {section.list.map((item: string, index: number) => (
                      <li key={index} itemProp="itemListElement">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="pt-10 border-t border-black/10">
              <div className="grid gap-3 text-sm sm:text-base text-slate-700">
                <p>
                  Email <span className="text-slate-400">—</span>{" "}
                  <a
                    href="mailto:topalxtrans@gmail.com"
                    className="font-semibold underline underline-offset-4 decoration-black/20 hover:decoration-black/50 hover:text-logoBlue transition"
                    itemProp="email"
                  >
                    topalxtrans@gmail.com
                  </a>
                </p>

                <p itemProp="address" className="text-slate-700">
                  {t("privacyPolicy.sections.contact.address")}
                </p>

                <p>
                  Telefon <span className="text-slate-400">—</span>{" "}
                  <a
                    href="tel:+40736470629"
                    className="font-semibold underline underline-offset-4 decoration-black/20 hover:decoration-black/50 hover:text-logoBlue transition"
                    itemProp="telephone"
                  >
                    0736 470 629
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
