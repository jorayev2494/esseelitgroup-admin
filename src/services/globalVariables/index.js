// import axios from '@/services/';
// import ws from './webSocket/index.js';
// Load the full build.
var _ = require('lodash');
import Tr from '@/services/translations/translation.js';

const services = {
    install(Vue) {
        Vue.config.globalProperties.$_ = _;
        // Vue.config.globalProperties.$axios = window.axios = axios;
        // Vue.config.globalProperties.$ws = window.ws = ws;
        // Vue.config.globalProperties.$tMakeRoute = Tr.route;
        Vue.config.globalProperties.$app = {
            getNodeEnv: () => process.env.NODE_ENV,
            isLocal: process.env.NODE_ENV === 'local',
            isDevelop: process.env.NODE_ENV === 'development',
            isProduction: process.env.NODE_ENV === 'production',
            isNodeEnv: mode => process.env.NODE_ENV === mode,
        };


        Vue.config.globalProperties.$supportedLocales = [
            'en',
            'ru',
            'tm',
        ];

        Vue.config.globalProperties.$clientSupportedLocales = [
            'en',
            'ru',
            'tm',
            'tr',
        ];

        Vue.config.globalProperties.$clientDefaultLocale = 'en';
        Vue.config.globalProperties.$tMakeRoute = Tr.route;

        Vue.config.globalProperties.$date = {
            change: {
                separator: (value, to, from = '/') => value.replace(from, to),
            },
        };
        
    }
};

export default services;
