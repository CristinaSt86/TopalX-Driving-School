// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import ro from "../src/locales/ro.json";
// import en from "../src/locales/en.json";
// import LanguageDetector from "i18next-browser-languagedetector";

// // Define the type for the resources
// const resources = {
//   ro: {
//     translation: ro,
//   },
//   en: {
//     translation: en,
//   },
// } as const;

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector) // detect user language
//   .init({
//     resources,
//     supportedLngs: ["ro", "en"],
//     fallbackLng: "ro",
//     lng: "ro",
//     detection: {
//       order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
//       caches: ["cookie"],
//     },
//     react: {
//       useSuspense: false,
//     },
//   });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ro from "../src/locales/ro.json";
import en from "../src/locales/en.json";

// Define the type for the resources
const resources = {
  ro: {
    translation: ro,
  },
  en: {
    translation: en,
  },
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detect user language
  .init({
    resources,
    supportedLngs: ["ro", "en"],
    fallbackLng: "ro",
    lng: "ro", // set the default language to Romanian
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    react: {
      useSuspense: true, // Enable suspense
    },
  });

export default i18n;
