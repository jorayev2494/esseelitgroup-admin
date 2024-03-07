import { createI18n } from 'vue-i18n'

import en from '@/services/translations/locales/en.js'
import ru from '@/services/translations/locales/ru.js'
import tm from '@/services/translations/locales/tm.js'

import dEn from '@/services/translations/locales/datetime/en'
import dRu from '@/services/translations/locales/datetime/ru'
import dTm from '@/services/translations/locales/datetime/tm'

const i18n = createI18n({
  locale: process.env.VUE_APP_DEFAULT_LOCALE,
  fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE,
  globalInjection: true,
  legacy: false,
  messages: {
    en,
    ru,
    tm,
  },
  datetimeFormats: {
    en: dEn,
    ru: dRu,
    tm: dTm,
  },
});

export default i18n;