import React from "react";
import { useTranslation } from "react-i18next";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import CheckboxField from "./CheckboxField";
import useContactForm from "./useContactForm";

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
    <div className="flex justify-center">
      <div className="shadow-custom pb-6 pt-6 container w-[90%] rounded-2xl backdrop-blur md:w-1/2 md:pl-6 md:pr-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 md:mx-auto flex flex-col gap-4"
        >
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
          <TextareaField
            id="message"
            label={t("contactForm.message")}
            value={formData.message}
            onChange={handleChange}
          />
          <CheckboxField
            checked={consent}
            onChange={handleChange}
            label={t("contactForm.consent")}
            linkText={t("contactForm.privacyPolicy")}
            linkUrl="/privacy-policy"
          />
          <div className="flex flex-col items-center">
            <button
              type="submit"
              disabled={submitting}
              className="w-fit bg-white text-textColor py-2 px-6 rounded-full font-semibold hover:bg-secondary transition duration-300 transform hover:scale-150 hover:shadow-lg"
            >
              {submitting ? t("contactForm.sending") : t("contactForm.send")}
            </button>
          </div>
          {error && (
            <p className="text-red-500 mt-4 bg-white font-bold text-center rounded-full p-1">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-500 mt-4 bg-white font-bold text-center rounded-full p-1">
              {success}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
