import { createStore } from 'vuex'
import { defaultLocale, localeOptions } from '@/configs/index.js';

import auth from '@/views/pages/admin/auth/store/index.js';
import company from '@/views/pages/admin/company/store/index.js';
import university from '@/views/pages/admin/university/store/index.js';
import faculty from '@/views/pages/admin/faculty/store/index.js';
import department from '@/views/pages/admin/department/store/index.js';
import application from '@/views/pages/admin/application/store/index.js';
import country from '@/views/pages/admin/countryAndCity/country/store/index.js';
import city from '@/views/pages/admin/countryAndCity/city/store/index.js';
import degree from '@/views/pages/admin/degree/store/index.js';
import alias from '@/views/pages/admin/alias/store/index.js';
import language from '@/views/pages/admin/language/store/index.js';
import facultyName from '@/views/pages/admin/facultyName/store/index.js';
import departmentName from '@/views/pages/admin/departmentName/store/index.js';
import student from '@/views/pages/admin/student/store/index.js';
import applicationStatusValue from '@/views/pages/admin/applicationStatusValue/store/index.js';
import employee from '@/views/pages/admin/employee/store/index.js';
import announcement from '@/views/pages/admin/announcement/store/index.js';

export default createStore({
  state: {
    langIcon: '',
    langLangauge: '',
    isActive: false,
    defaultLangLangauge: defaultLocale,
    defaultLangIcon: 'flag-icon-' + defaultLocale,
  },
  getters: {
    langIcon: (state) => { return state.langIcon },
    langLangauge: (state) => { return state.langLangauge },
  },
  mutations: {
    changeLang (state, payload) {
      localStorage.setItem('currentLanguage', state.langLangauge = payload.id || state.defaultLangLangauge);
      localStorage.setItem('currentLanguageIcon', state.langIcon = payload.icon || state.defaultLangIcon);
    },
    change(state) {
      state.isActive = !state.isActive
    }
  },
  actions: {
    setLang ({ commit }, payload) {
      commit('changeLang', payload);  
    }
  },
  modules: {
    auth,
    company,
    university,
    faculty,
    department,
    application,
    country,
    city,
    degree,
    alias,
    language,
    facultyName,
    departmentName,
    student,
    applicationStatusValue,
    employee,
    announcement,
  }
});