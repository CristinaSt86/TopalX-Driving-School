import React from "react";
import { useTranslation } from "react-i18next";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const faqs: FAQItem[] = t("faq.items", { returnObjects: true }) as FAQItem[];

  return (
    <div className="max-w-2xl mx-auto p-6 my-16 py-12">
      <h2 className="text-3xl font-bold my-20  md:mt-28 text-center">{t("faq.title")}</h2>
      {faqs.map((faq: { question: string; answer: string }, index: number) => (
        <div key={index} className="mb-12">
          <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
          <p className="text-md text-textColor">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
