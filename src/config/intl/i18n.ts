import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import resources from "./LanguageConfig"

const LANG = "en"

i18n.use(initReactI18next).init({
  lng: LANG,
  fallbackLng: LANG,
  debug: false,
  interpolation: {
    escapeValue: false
  },
  resources
})

export default i18n
