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
    <div className="max-w-2xl mx-auto my-16 p-4">
      <h2 className="text-3xl font-bold mb-12 mt-12 text-center">{t("faq.title")}</h2>
      {faqs.map((faq: { question: string; answer: string }, index: number) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold mb-1">{faq.question}</h3>
          <p className="text-md text-textColor">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
