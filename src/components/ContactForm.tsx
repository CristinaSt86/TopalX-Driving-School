import React from "react";
import { useTranslation } from "react-i18next";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import CheckboxField from "./CheckboxField";
import useContactForm from "../utils/useContactForm";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const {
    formData,
    consent,
    submitting,
    error,
    success,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          // dacă vrei să folosești onSubmit din props, dă-mi structura din useContactForm
          // ca să-l conectăm corect (momentan hook-ul pare să gestioneze intern submit-ul)
        }}
        className="w-full flex flex-col gap-4"
      >
        {/* 2 coloane pe desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            id="name"
            label={t("contactForm.name")}
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            id="email"
            label={t("contactForm.email")}
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <TextareaField
          id="message"
          label={t("contactForm.message")}
          value={formData.message}
          onChange={handleChange}
        />

        <div className="pt-1">
          <CheckboxField
            checked={consent}
            onChange={handleChange}
            label={t("contactForm.consent")}
            linkText={t("contactForm.privacyPolicy")}
            linkUrl="/privacy-policy"
          />
        </div>

        {(error || success) && (
          <div
            className={`rounded-xl border p-3 text-sm font-semibold ${
              error
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {error || success}
          </div>
        )}

        {/* CTA */}
        <button
          type="submit"
          disabled={submitting || !consent}
          className={`
            mt-2 inline-flex items-center justify-center rounded-2xl px-5 py-3
            text-sm font-semibold shadow-sm transition
            bg-secondary text-white hover:opacity-95
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {t(submitting ? "contactForm.sending" : "contactForm.send")}
        </button>

        {!consent && (
          <p className="text-xs text-slate-500 flex items-center justify-center">
            {t("contactForm.bifeazaAcordul")}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
