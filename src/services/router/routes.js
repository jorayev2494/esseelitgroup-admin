import Mentor from '../../views/pages/admin/all/mentor'
import Mentee from '../../views/pages/admin/all/mentee'
import Bookinglist from '../../views/pages/admin/all/bookinglist'
import Categories from '../../views/pages/admin/all/categories'
import Transactionlist from '../../views/pages/admin/all/transactionslist'
import Settings from '../../views/pages/admin/all/settings'
import Invoicereport from '../../views/pages/admin/all/invoicereport'
import Profile from '../../views/pages/admin/all/profile'
import Blog from '../../views/pages/admin/all/blog'
import Blogdetails from '../../views/pages/admin/all/blogdetails'
import Addblog from '../../views/pages/admin/all/addblog'
import Editblog from '../../views/pages/admin/all/editblog'
// import Register from '../../views/pages/admin/all/auth/register'
// import Forgotpassword from '../../views/pages/admin/all/auth/forgotpassword'
// import Lockscreen from '../../views/pages/admin/all/lockscreen'
// import Error404 from '../../views/pages/admin/all/error404'
// import Error500 from '../../views/pages/admin/all/error500'
import Blankpage from '../../views/pages/admin/all/blankpage'
import Components from '../../views/pages/admin/all/components'
import Formbasicinputs from '../../views/pages/admin/all/formbasicinputs'
import Forminputgroups from '../../views/pages/admin/all/forminputgroups'
import Formhorizontal from '../../views/pages/admin/all/formhorizontal'
import Formvertical from '../../views/pages/admin/all/formvertical'
import Formmask from '../../views/pages/admin/all/formmask'
import Formvalidation from '../../views/pages/admin/all/formvalidation'
import Tablesbasic from '../../views/pages/admin/all/tablesbasic'
import Datatables from '../../views/pages/admin/all/datatables'
import Invoice from '../../views/pages/admin/all/invoice'
import Localizationdetails from '../../views/pages/admin/all/localization-details'
import Paymentsettings from '../../views/pages/admin/all/payment-settings'
import Emailsettings from '../../views/pages/admin/all/email-settings'
import Socialsettings from '../../views/pages/admin/all/social-settings'
import Sociallinks from '../../views/pages/admin/all/social-links'
import Seosettings from '../../views/pages/admin/all/seo-settings'
import Otherssettings from '../../views/pages/admin/all/others-settings'
import InvoicesReport from '../../views/pages/admin/all/invoices'
import InvoiceGrid from '../../views/pages/admin/all/invoice-grid'
import AddInvoice from '../../views/pages/admin/all/add-invoice'
import EditInvoice from '../../views/pages/admin/all/edit-invoice'
import ViewInvoice from '../../views/pages/admin/all/view-invoice'
import InvoicesSettings from '../../views/pages/admin/all/invoices-settings'
import InvoiceItems from '../../views/pages/admin/all/invoice-items'
import InvoiceCategory from '../../views/pages/admin/all/invoice-category'
import InvoiceDraft from '../../views/pages/admin/all/invoices-draft'
import InvoiceCancelled from '../../views/pages/admin/all/invoices-cancelled'
import InvoicePaid from '../../views/pages/admin/all/invoices-paid'
import InvoiceRecurring from '../../views/pages/admin/all/invoices-recurring'
import InvoiceOverdue from '../../views/pages/admin/all/invoices-overdue'
import BankSettings from '../../views/pages/admin/all/bank-settings'
import TaxSettings from '../../views/pages/admin/all/tax-settings'

import auth from '@/views/pages/admin/auth/routes';
import dashboard from '@/views/pages/admin/dashboard/routes';
import company from '@/views/pages/admin/company/routes';
import university from '@/views/pages/admin/university/routes';
import faculty from '@/views/pages/admin/faculty/routes';
import department from '@/views/pages/admin/department/routes';
import application from '@/views/pages/admin/application/routes';
import countryAndCity from '@/views/pages/admin/countryAndCity/routes';
import country from '@/views/pages/admin/countryAndCity/country/routes';
import city from '@/views/pages/admin/countryAndCity/city/routes';
import errors from '@/views/pages/admin/errors/routes';
import degree from '@/views/pages/admin/degree/routes';

const routes = [
  ...auth,
  {
    path: '',
    name: 'panel',
    component: () => import('@/views/layouts/admin/Panel.vue'),
    redirect: { name: 'dashboard' },
    children: [
      ...dashboard,
      ...company,
      ...university,
      ...faculty,
      ...department,
      ...application,
      ...countryAndCity,
      ...country,
      ...city,
      ...degree,
    ],
    meta: {
      middleware: [
        'auth',
        // 'guest',
      ],
    },
  },
  ...errors,
  {
    path: 'mentor',
    name: 'mentor',
    component: Mentor
  },
  {
    path: 'mentee',
    name: 'mentee',
    component: Mentee
  },
  {
    path: 'booking-list',
    name: 'booking-list',
    component: Bookinglist
  },
  {
    path: 'categories',
    name: 'categories',
    component: Categories
  },
  {
    path: 'transaction-list',
    name: 'transaction-list',
    component: Transactionlist
  },
  {
    path: 'settings',
    name: 'settings',
    component: Settings
  },
  {
    path: 'invoicereport',
    name: 'invoicereport',
    component: Invoicereport
  },
  {
    path: 'profile',
    name: 'profile',
    component: Profile
  },
  {
    path: 'blog',
    name: 'blog',
    component: Blog
  },
  {
    path: 'blogdetails',
    name: 'blogdetails',
    component: Blogdetails
  },
  {
    path: 'addblog',
    name: 'addblog',
    component: Addblog
  },
  {
    path: 'editblog',
    name: 'editblog',
    component: Editblog
  },
  // {
  //   path: 'error404',
  //   name: 'error404',
  //   component: Error404
  // },
  // {
  //   path: 'error500',
  //   name: 'error500',
  //   component: Error500
  // },
  {
    path: 'blankpage',
    name: 'blankpage',
    component: Blankpage
  },
  {
    path: 'components',
    name: 'components',
    component: Components
  },
  {
    path: 'formbasicinputs',
    name: 'formbasicinputs',
    component: Formbasicinputs
  },
  {
    path: 'forminputgroups',
    name: 'forminputgroups',
    component: Forminputgroups
  },
  {
    path: 'formhorizontal',
    name: 'formhorizontal',
    component: Formhorizontal
  },
  {
    path: 'formvertical',
    name: 'formvertical',
    component: Formvertical
  },
  {
    path: 'formmask',
    name: 'formmask',
    component: Formmask
  },
  {
    path: 'formvalidation',
    name: 'formvalidation',
    component: Formvalidation
  },
  {
    path: 'tablesbasic',
    name: 'tablesbasic',
    component: Tablesbasic
  },
  {
    path: 'datatables',
    name: 'datatables',
    component: Datatables
  },
  {
    path: 'invoice',
    name: 'invoice',
    component: Invoice
  },
  {
    path: 'localization-details',
    name: 'localization-details',
    component: Localizationdetails
  },
  {
    path: 'payment-settings',
    name: 'payment-settings',
    component: Paymentsettings
  },
  {
    path: 'email-settings',
    name: 'email-settings',
    component: Emailsettings
  },
  {
    path: 'social-settings',
    name: 'social-settings',
    component: Socialsettings
  },
  {
    path: 'social-links',
    name: 'social-links',
    component: Sociallinks
  },
  {
    path: 'seo-settings',
    name: 'seo-settings',
    component: Seosettings
  },
  {
    path: 'others-settings',
    name: 'others-settings',
    component: Otherssettings
  },
  {
    path: 'invoices',
    name: 'invoices',
    component: InvoicesReport
  },
  {
    path: 'invoice-grid',
    name: 'invoice-grid',
    component: InvoiceGrid
  },
  {
    path: 'add-invoice',
    name: 'add-invoice',
    component: AddInvoice
  },
  {
    path: 'edit-invoice',
    name: 'edit-invoice',
    component: EditInvoice
  },
  {
    path: 'view-invoice',
    name: 'view-invoice',
    component: ViewInvoice
  },
  {
    path: 'invoices-settings',
    name: 'invoices-settings',
    component: InvoicesSettings
  },
  {
    path: 'invoice-items',
    name: 'invoice-items',
    component: InvoiceItems
  },
  {
    path: 'invoice-category',
    name: 'invoice-category',
    component: InvoiceCategory
  },
  {
    path: 'invoices-draft',
    name: 'invoices-draft',
    component: InvoiceDraft
  },
  {
    path: 'invoices-cancelled',
    name: 'invoices-cancelled',
    component: InvoiceCancelled
  },
  {
    path: 'invoices-paid',
    name: 'invoices-paid',
    component: InvoicePaid
  },
  {
    path: 'invoices-recurring',
    name: 'invoices-recurring',
    component: InvoiceRecurring
  },
  {
    path: 'invoices-overdue',
    name: 'invoices-overdue',
    component: InvoiceOverdue
  },
  {
    path: 'bank-settings',
    name: 'bank-settings',
    component: BankSettings
  },
  {
    path: 'tax-settings',
    name: 'tax-settings',
    component: TaxSettings
  },
];

export default routes;
