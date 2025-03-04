import { createStore, createLogger } from 'vuex'
import { defaultLocale, localeOptions } from '@/configs/index.js';

import ws from '@/services/ws/store.js';
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
import manager from '@/views/pages/admin/manager/store/index.js';
import profile from '@/views/pages/admin/profile/store/index.js';
import currency from '@/views/pages/admin/currency/store/index.js';
import contest from '@/views/pages/admin/contest/store/index.js';
import contestStudent from '@/views/pages/admin/contestStudent/store/index.js';
import setting from '@/views/pages/admin/setting/store/index.js';
import document from '@/views/pages/admin/document/store/index.js';
import role from '@/views/pages/admin/role/store/index.js';
import permission from '@/views/pages/admin/permission/store/index.js';
import notification from '@/views/pages/admin/notification/store/index.js';
import staticPage from './staticPage.js'

const plugins = process.env.NODE_ENV === 'production' ? [] : [
  createLogger(),
]

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
    ws,
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
    manager,
    profile,
    currency,
    contest,
    contestStudent,
    setting,
    document,
    role,
    permission,
    notification,
    staticPage,
  },
  plugins,
});