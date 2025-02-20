// import React from "react";
// import { useTranslation } from "react-i18next";
// import { Helmet } from "react-helmet-async";
// import InputField from "./InputField";
// import TextareaField from "./TextareaField";
// import CheckboxField from "./CheckboxField";

// import useContactForm from "../utils/useContactForm";
// //import ReCaptcha from "./ReCaptcha";

// interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// interface ContactFormProps {
//   onSubmit: (data: ContactFormData) => void;
// }

// const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
//   const { t } = useTranslation();
//   const {
//     formData,
//     consent,
//     // submitting,
//     error,
//     success,
//     handleChange,
//     handleSubmit,
//   } = useContactForm();

//   return (
//     <div className="flex justify-center">
//       <Helmet>
//         <title>
//           Contact | Scoala de soferi TopalX | Școala de Șoferi din București
//         </title>
//         <meta
//           name="description"
//           content="Contactați-ne la Scoala de soferi TopalX - școală de șoferi din București. Suntem aici pentru a răspunde la toate întrebările dvs. despre cursurile de conducere și obținerea permisului auto."
//         />
//         <meta
//           name="keywords"
//           content="contact școală de șoferi, Scoala de soferi TopalX, contact Scoala de soferi TopalX, școală de șoferi București, întrebări cursuri de conducere, permis auto, informații contact școală de șoferi"
//         />
//         <meta name="author" content="Scoala de soferi TopalX" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta
//           property="og:title"
//           content="Contact - Scoala de soferi TopalX - Școala de Șoferi din București"
//         />
//         <meta
//           property="og:description"
//           content="Contactați-ne la Scoala de soferi TopalX - școală de șoferi din București. Suntem aici pentru a răspunde la toate întrebările dvs. despre cursurile de conducere și obținerea permisului auto."
//         />
//         <meta
//           property="og:url"
//           content="https://www.topalxscoalaauto.ro/contact"
//         />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:image"
//           content="https://www.topalxscoalaauto.ro/images/contact.jpg"
//         />
//         <meta property="og:locale" content="ro_RO" />
//         <meta property="og:site_name" content="TopalX Scoala Auto" />
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta
//           property="twitter:title"
//           content="Contact - Scoala de soferi TopalX - Școala de Șoferi din București"
//         />
//         <meta
//           property="twitter:description"
//           content="Contactați-ne la Scoala de soferi TopalX - școală de șoferi din București. Suntem aici pentru a răspunde la toate întrebările dvs. despre cursurile de conducere și obținerea permisului auto."
//         />
//         <meta
//           property="twitter:image"
//           content="https://www.topalxscoalaauto.ro/images/contact.jpg"
//         />
//         <meta property="twitter:site" content="@TopalXScoalaAuto" />
//         <meta property="twitter:creator" content="@TopalXScoalaAuto" />
//       </Helmet>
//       <div className="shadow-custom pb-6 pt-6 container max-w-lg rounded-md backdrop-blur md:w-1/2 md:pl-6 md:pr-6">
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-xs md:max-w-sm mx-auto p-4  flex flex-col gap-4"
//         >
//           <InputField
//             id="name"
//             label={t("contactForm.name")}
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <InputField
//             id="email"
//             label={t("contactForm.email")}
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextareaField
//             id="message"
//             label={t("contactForm.message")}
//             value={formData.message}
//             onChange={handleChange}
//           />
//           <CheckboxField
//             checked={consent}
//             onChange={handleChange}
//             label={t("contactForm.consent")}
//             linkText={t("contactForm.privacyPolicy")}
//             linkUrl="/privacy-policy"
//           />
//           {/* <ReCaptcha submitting={submitting} /> */}
//           {error && (
//             <p className="text-red-500 mt-4 bg-white font-bold text-center rounded-md p-1">
//               {error}
//             </p>
//           )}
//           {success && (
//             <p className="text-green-500 mt-4 bg-white font-bold text-center rounded-md p-1">
//               {success}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import CheckboxField from "./CheckboxField";

import useContactForm from "../utils/useContactForm";
import Button from "./Button";

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
      <Helmet>
        <title>
          Contact | Scoala de soferi TopalX | Școala de Șoferi din București
        </title>
        <meta
          name="description"
          content="Contactați-ne la Scoala de soferi TopalX - școală de șoferi din București. Suntem aici pentru a răspunde la toate întrebările dvs. despre cursurile de conducere și obținerea permisului auto."
        />
        <meta
          name="keywords"
          content="contact școală de șoferi, Scoala de soferi TopalX, contact Scoala de soferi TopalX, școală de șoferi București, întrebări cursuri de conducere, permis auto, informații contact școală de șoferi"
        />
        <meta name="author" content="Scoala de soferi TopalX" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Contact - Scoala de soferi TopalX - Școala de Șoferi din București"
        />
        <meta
          property="og:description"
          content="Contactați-ne la Scoala de soferi TopalX - școală de șoferi din București. Suntem aici pentru a răspunde la toate întrebările dvs. despre cursurile de conducere și obținerea permisului auto."
        />
        <meta
          property="og:url"
          content="https://www.topalxscoalaauto.ro/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.topalxscoalaauto.ro/images/contact.jpg"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="TopalX Scoala Auto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Contact - Scoala de soferi TopalX - Școala de Șoferi din București"
        />
        <meta
          property="twitter:description"
          content="Contactați-ne la Scoala de soferi TopalX - școală de șoferi din București. Suntem aici pentru a răspunde la toate întrebările dvs. despre cursurile de conducere și obținerea permisului auto."
        />
        <meta
          property="twitter:image"
          content="https://www.topalxscoalaauto.ro/images/contact.jpg"
        />
        <meta property="twitter:site" content="@TopalXScoalaAuto" />
        <meta property="twitter:creator" content="@TopalXScoalaAuto" />
      </Helmet>
      <div className="shadow-custom pb-6 pt-6 container max-w-lg rounded-md backdrop-blur md:w-1/2 md:pl-6 md:pr-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-xs md:max-w-sm mx-auto p-4 flex flex-col gap-4"
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
          {error && (
            <p className="text-red-500 mt-4 bg-white font-bold text-center rounded-md p-1">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-500 mt-4 bg-white font-bold text-center rounded-md p-1">
              {success}
            </p>
          )}
          <Button
            onClick={() => {
              const fakeEvent = {
                preventDefault: () => {}, // Mock preventDefault for handleSubmit
              } as React.FormEvent;
              handleSubmit(fakeEvent);
            }}
            textKey={submitting ? "contactForm.sending" : "contactForm.send"}
            additionalClasses={`w-fit mx-auto mt-4 md:mt-6 ${
              submitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
