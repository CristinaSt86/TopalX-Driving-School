import React from "react";
import { useTranslation } from "react-i18next";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const faqs = t("faq.items", { returnObjects: true }) as FAQItem[];

  return (
    <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8 pt-24 pb-24">
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-20">
          {t("faq.title")}
        </h1>
      </header>

      <div className="mt-12 sm:mt-14 rounded-3xl border border-black/10 bg-white/70 backdrop-blur-md shadow-sm ring-1 ring-black/5">
        <div className="divide-y divide-black/10">
          {faqs.map((faq, index) => (
            <section
              key={index}
              className="p-6 sm:p-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                {faq.question}
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {faq.answer}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
