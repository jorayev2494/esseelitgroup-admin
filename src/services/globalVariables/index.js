// import axios from '@/services/';
// import ws from './webSocket/index.js';
import Tr from '@/services/translations/translation.js';

const services = {
    install(Vue) {
        // Vue.config.globalProperties.$axios = window.axios = axios;
        // Vue.config.globalProperties.$ws = window.ws = ws;
        // Vue.config.globalProperties.$tMakeRoute = Tr.route;

        Vue.config.globalProperties.$supportedLocales = [
            'en',
            'ru',
        ];

        Vue.config.globalProperties.$clientSupportedLocales = [
            'en',
            'ru',
        ];

        Vue.config.globalProperties.$clientDefaultLocale = 'en';
        Vue.config.globalProperties.$tMakeRoute = Tr.route;
        

        console.log('global service: ', Vue)
        
    }
};

export default services;
