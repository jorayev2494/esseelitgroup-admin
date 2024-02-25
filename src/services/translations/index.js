import { createI18n } from 'vue-i18n'

import en from '@/services/translations/locales/en.js'
import ru from '@/services/translations/locales/ru.js'
import tm from '@/services/translations/locales/tm.js'

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
});

export default i18n;