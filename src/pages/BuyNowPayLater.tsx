import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const BuyNowPayLater: React.FC = () => {
  const { t } = useTranslation();
  const [openExamples, setOpenExamples] = useState(false);

  const s1Steps = t("buyNowPayLater.section1.steps", {
    returnObjects: true,
  }) as string[];
  const s2Steps = t("buyNowPayLater.section2.steps", {
    returnObjects: true,
  }) as string[];
  const examples = t("buyNowPayLater.section3.examples", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="buy-now-section" className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t("buyNowPayLater.title")}
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-logoBlue/60" />
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("buyNowPayLater.section1.subtitle")}
          </p>
        </header>

        {/* 3 cards */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {/* Card 1 */}
          <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              {t("buyNowPayLater.section1.description")}
            </p>

            <div className="mt-5 rounded-2xl bg-yellow-50/80 border border-black/10 p-4">
              <p className="text-sm font-semibold text-gray-900">
                {t("buyNowPayLater.section1.howItWorks")}
              </p>
              <p className="mt-1 text-sm text-slate-700">
                {t("buyNowPayLater.section4.moreInfo")}
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {t("buyNowPayLater.section2.subtitle")}
            </h3>

            {/* ✅ NUMERE FIXATE / ALINIERE PREMIUM */}
            <ol className="mt-4 space-y-4">
              {s2Steps.slice(0, 5).map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="
                      flex-none shrink-0 self-start
                      mt-1
                      inline-flex h-8 w-8 items-center justify-center
                      rounded-xl bg-secondary text-white
                      text-sm font-semibold leading-none
                      shadow-sm
                    "
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>

                  <p className="text-slate-700 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>

            {s1Steps?.length > 0 && (
              <div className="mt-5 border-t border-black/10 pt-4">
                <ul className="space-y-2 text-sm text-slate-700">
                  {s1Steps.slice(0, 3).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Card 3 */}
          <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {t("buyNowPayLater.section3.subtitle")}
            </h3>

            {/* Summary – scurt */}
            <p className="mt-3 text-slate-700 leading-relaxed">
              {examples?.[0] ?? ""}
            </p>

            {/* Accordion */}
            <button
              type="button"
              onClick={() => setOpenExamples((v) => !v)}
              className="mt-4 inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-slate-50"
            >
              {openExamples
                ? t("buyNowPayLater.section3.hideExamples")
                : t("buyNowPayLater.section3.viewFullExamples")}
            </button>

            {openExamples && (
              <div className="mt-4 space-y-3 rounded-2xl bg-slate-50 p-4 border border-black/10">
                {examples.map((ex, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-slate-700 leading-relaxed"
                  >
                    {ex}
                  </p>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-6 grid gap-3">
              <a
                href="https://www.tbibank.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                {t("buyNowPayLater.section4.moreInfo")} • tbibank.ro
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tbibank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-slate-50"
                >
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com/ro/app/tbi-bank/id1466051318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-slate-50"
                >
                  App Store
                </a>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              {t("buyNowPayLater.section4.downloadApp")}{" "}
              {t("buyNowPayLater.section4.or")} tbibank.ro
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BuyNowPayLater;
