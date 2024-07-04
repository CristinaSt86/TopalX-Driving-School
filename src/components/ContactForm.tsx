import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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

      if (response.ok) {
        setSuccess(t("contactForm.success"));
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(t("contactForm.error"));
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center">
    <div className="shadow-custom pb-6 pt-6 container w-[90%]  rounded-2xl backdrop-blur md:w-1/2 md:pl-6 md:pr-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-md ml-6 mr-6 md:mx-auto flex flex-col gap-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-lg font-bold mb-2 bg-white w-fit p-1 rounded-tr-2xl rounded-tl-2xl"
          >
            {t("contactForm.name")}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="appearance-none rounded-tl-2xl rounded-tr-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-lg font-bold mb-2 bg-white w-fit p-1 rounded-tr-2xl rounded-tl-2xl"
          >
            {t("contactForm.email")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="appearance-none rounded-tl-2xl rounded-tr-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-lg font-bold mb-2 bg-white w-fit p-1 rounded-tr-2xl rounded-tl-2xl"
          >
            {t("contactForm.message")}
          </label>
          <textarea
            name="message"
            id="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            required
            className="appearance-none rounded-tl-2xl rounded-tr-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={submitting}
            className="w-fit bg-white text-textColor py-2 px-6 rounded-full font-semibold hover:bg-secondary transition duration-300 transform hover:scale-150 hover:shadow-lg"
          >
            {submitting ? t("contactForm.sending") : t("contactForm.send")}
          </button>
        </div>
        {error && <p className="text-red-500 mt-4 bg-white font-bold  text-center rounded-full p-1">{error}</p>}
        {success && <p className="text-green-500 mt-4 bg-white font-bold text-center rounded-full p-1">{success}</p>}
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
