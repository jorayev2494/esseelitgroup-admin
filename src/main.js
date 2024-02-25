import { createApp } from 'vue';
import store from './services/store'
import router from './services/router';
import translation from './services/translations/index.js';
import globalVariables from './services/globalVariables/index'

// Table
import Vue3Datatable from '@bhplugin/vue3-datatable';
import '@bhplugin/vue3-datatable/dist/style.css';

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { BarChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import App from "./App.vue";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fontawesome/css/fontawesome.min.css'
import './assets/fontawesome/css/all.min.css'
import Vue3AutoCounter from 'vue3-autocounter';

import LayoutHeaderAdmin from './views/layouts/admin/Header'
import LayoutSidebarAdmin from './views/layouts/admin/Sidebar'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import VueSelect from 'vue3-select2-component'
import Datepicker from 'vue3-datepicker'

/** Breadcrumbs**/
import Breadcrumb from './components/breadcrumb/Dashboard'
import Breadcrumb1 from './components/breadcrumb/MyBookings'
import Breadcrumb2 from './components/breadcrumb/ScheduleTimings'
import Breadcrumb3 from './components/breadcrumb/MenteeList'
import Breadcrumb4 from './components/breadcrumb/MenteeProfile'
import Breadcrumb5 from './components/breadcrumb/Blog'
import Breadcrumb6 from './components/breadcrumb/BlogDetails'
import Breadcrumb7 from './components/breadcrumb/AddBlog'
import Breadcrumb8 from './components/breadcrumb/EditBlog'
import Breadcrumb9 from './components/breadcrumb/Invoices'
import Breadcrumb10 from './components/breadcrumb/ProfileSettings'
import Breadcrumb11 from './components/breadcrumb/Reviews'
import Breadcrumb12 from './components/breadcrumb/SearchResults'
import Breadcrumb13 from './components/breadcrumb/MentorProfile'
import Breadcrumb14 from './components/breadcrumb/Checkout'
import Breadcrumb15 from './components/breadcrumb/BookingSuccess'
import Breadcrumb16 from './components/breadcrumb/Favourites'
import Breadcrumb17 from './components/breadcrumb/ChangePassword'
import Breadcrumb18 from './components/breadcrumb/BlogList'
import Breadcrumb19 from './components/breadcrumb/BlogGrid'
import Breadcrumb20 from './components/breadcrumb/Components'
import Breadcrumb21 from './components/breadcrumb/BlankPage'
import Breadcrumb22 from './components/breadcrumb/InvoiceView'
import Breadcrumb23 from './components/breadcrumb/Booking'
import Breadcrumb24 from './components/breadcrumb/Appointments'
import Settings from './components/breadcrumb/Settings'
import ReportFilter from './components/breadcrumb/ReportFilter'



// plugins
import jquery from 'jquery';

window.$ = jquery

require('./assets/css/admin/style.css');
// require('./assets/css/admin/bootstrap.min.css');
require('./assets/css/admin/bootstrap.css');
require('./assets/css/admin/dataTables.bootstrap.min.css');
require('./assets/css/admin/jquery.dataTables.min.js');
require('./assets/css/admin/dataTables.bootstrap.min.js');
require('./assets/css/feather.css');

import Raphael from 'raphael/raphael'
global.Raphael = Raphael
const app = createApp(App)

/** Global components    */
// app.component('layout-header', LayoutHeader)
// app.component('layout-header1', LayoutHeader1)
// app.component('layout-header-two', LayoutHeaderTwo)
// app.component('layout-header-three', LayoutHeaderThree)
// app.component('layout-header-four', LayoutHeaderFour)
// app.component('layout-header-five', LayoutHeaderFive)
// app.component('layout-header-six', LayoutHeaderSix)
// app.component('layout-header-seven', LayoutHeaderSeven)
// app.component('layout-header-eight', LayoutHeaderEight)
// app.component('layout-footer', LayoutFooter)
// app.component('layout-footer-two', LayoutFooterTwo)
// app.component('layout-footer-three', LayoutFooterThree)
// app.component('layout-footer-four', LayoutFooterFour)
// app.component('layout-footer-five', LayoutFooterFive)
// app.component('layout-footer-six', LayoutFooterSix)
// app.component('layout-footer-seven', LayoutFooterSeven)
// app.component('layout-footer-eight', LayoutFooterEight)
app.component('layout-headeradmin', LayoutHeaderAdmin)
app.component('layout-sidebar', LayoutSidebarAdmin)
// app.component('sidebar', Sidebar)
// app.component('sidebar1', Sidebar1)
// app.component('carousel', Carousel)
// app.component('vue-select', VueSelect)
// app.component('slide', Slide)
// app.component('pagination', Pagination)
// app.component('navigation', Navigation)
// app.component('datepicker', Datepicker)

// app.component('latest-posts', LatestPosts);
// app.component('search-bar', SearchBar);
// app.component('blog-categories', BlogCategories);
// app.component('tags', Tags);
// app.component('loader', Loader);

/** Breadcrumbs **/
app.component('breadcrumb', Breadcrumb);
app.component('breadcrumb1', Breadcrumb1);
app.component('breadcrumb2', Breadcrumb2);
app.component('breadcrumb3', Breadcrumb3);
app.component('breadcrumb4', Breadcrumb4);
app.component('breadcrumb5', Breadcrumb5);
app.component('breadcrumb6', Breadcrumb6);
app.component('breadcrumb7', Breadcrumb7);
app.component('breadcrumb8', Breadcrumb8);
app.component('breadcrumb9', Breadcrumb9);
app.component('breadcrumb10', Breadcrumb10);
app.component('breadcrumb11', Breadcrumb11);
app.component('breadcrumb12', Breadcrumb12);
app.component('breadcrumb13', Breadcrumb13);
app.component('breadcrumb14', Breadcrumb14);
app.component('breadcrumb15', Breadcrumb15);
app.component('breadcrumb16', Breadcrumb16);
app.component('breadcrumb17', Breadcrumb17);
app.component('breadcrumb18', Breadcrumb18);
app.component('breadcrumb19', Breadcrumb19);
app.component('breadcrumb20', Breadcrumb20);
app.component('breadcrumb21', Breadcrumb21);
app.component('breadcrumb22', Breadcrumb22);
app.component('breadcrumb23', Breadcrumb23);
app.component('breadcrumb24', Breadcrumb24);
app.component('settings', Settings);
app.component('reportfilter',ReportFilter);

// Table
app.component('data-table', Vue3Datatable);

app.use(Vue3AutoCounter);
app.use(translation);
app.use(globalVariables);
app.use(
    Vue3Toasity,
    {
        autoClose: 3000,
    },
);
app.use(store);
app.use(router);
app.mount('#app');
