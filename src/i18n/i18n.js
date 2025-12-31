import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";

const saved = localStorage.getItem("asenda_lang");
const initial = saved || (navigator.language?.toLowerCase().startsWith("de") ? "de" : "en");

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: initial,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export function setLang(lang) {
  i18n.changeLanguage(lang);
  localStorage.setItem("asenda_lang", lang);
}

export default i18n;
