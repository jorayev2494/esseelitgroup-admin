import i18n from './index';
import { nextTick } from 'vue';

const Trans = {
  get defaultLocale() {
    return process.env.VUE_APP_DEFAULT_LOCALE;
  },
  get supportedLocales() {
    return process.env.VUE_APP_SUPPORTED_LOCALES.split(',');
  },
  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },
  async switchLanguage(newLocale) {
    // await Trans.loadLocaleMessages(newLocale);
    Trans.currentLocale = newLocale;
    document.querySelector('html').setAttribute('lang', newLocale);
    localStorage.setItem('user-locale', newLocale);
  },
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale)
  },
  getUserLocale() {
    const locale = window.navigator.language ||
      window.navigator.userLanguage ||
      Trans.defaultLocale;

    // const locale = i18n.global.locale.value; // localStorage.getItem('user-locale');
    // const locale = localStorage.getItem('user-locale');

    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0]
    }
  },
  get currentLocale() {
    return i18n.global.locale.value;
  },
  getPersistedLocale() {
    const persistedLocale = localStorage.getItem('user-locale');

    if (Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },
  guessDefaultLocale() {
    const userPersistedLocale = Trans.getPersistedLocale();

    if (userPersistedLocale) {
      return userPersistedLocale;
    }

    const userPreferredLocale = Trans.getUserLocale();

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }
  
    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }
    
    return Trans.defaultLocale;
  },
  async routeMiddleware(to, _from, next) {
    const paramLocale = to.params.locale;
    // console.log('routeMiddleware: ', paramLocale);

    // if (!Trans.isLocaleSupported(paramLocale)) {
    //   return next(Trans.guessDefaultLocale());
    // }

    

    // console.log('2 routeMiddleware: ', paramLocale);

    if (paramLocale === undefined || paramLocale === null) {
      await Trans.switchLanguage('ru');
    } else {
      await Trans.switchLanguage(paramLocale);
    }

    return next();
    // return next('ru');
  },
  async loadLocaleMessages(locale) {
    if (! i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/services/translations/locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, messages.default)
    }

    return nextTick();
  },
  i18nRoute(to) {
    return {
      ...to,
      params: {
        locale: Trans.currentLocale,
        ...to.params
      }
    }
  },
  route(to) {
    return {
      ...to,
      params: {
        locale: Trans.currentLocale,
        ...to.params
      }
    }
  },
}

export default Trans;
