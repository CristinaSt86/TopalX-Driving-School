import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import useContactForm from "../utils/useContactForm";

interface ReCaptchaProps {
  submitting: boolean;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ submitting }) => {
  const { t } = useTranslation();
  const { setRecaptchaToken } = useContactForm();

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const siteKey = process.env.REACT_APP_RECAPTCHA_KEY as string;

  return (
    <div className="flex flex-col items-center">
      <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptchaChange} />
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-fit bg-white text-textColor py-2 px-6 rounded-lg font-semibold hover:bg-secondary transition duration-300 transform hover:scale-150 hover:shadow-lg"
      >
        {submitting ? t("contactForm.sending") : t("contactForm.send")}
      </button>
    </div>
  );
};

export default ReCaptcha;
