import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const useContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      setConsent((event.target as HTMLInputElement).checked);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!consent) {
      setError(t("contactForm.consentRequired"));
      return;
    }
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("https://formspree.io/f/mldrejzl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Log the response and response data
      const responseData = await response.json();
      console.log('Response:', response);
      console.log('Response Data:', responseData);

      if (response.ok) {
        setSuccess(t("contactForm.success"));
        setFormData({ name: "", email: "", message: "" });
        setConsent(false);
      } else {
        throw new Error(t("contactForm.error"));
      }
    } catch (error) {
      console.error('Fetch error:', error);
      if (error instanceof Error) setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return {
    formData,
    consent,
    submitting,
    error,
    success,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
