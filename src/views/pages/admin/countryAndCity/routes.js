import { RESOURCE_ACTIONS as COUNTRY_RESOURCE_ACTIONS } from './country/acl/constants'
import { RESOURCE_ACTIONS as CITY_RESOURCE_ACTIONS } from './city/acl/constants'
import { makeRouterAnyPermission } from '@/services/acl/useACLProtection';

const routes = [
    {
      path: 'countries',
      name: 'countries',
      component: () => import('./index/Index.vue'),
      meta: {
        title: 'country.context_title',
        middleware: [
          'auth',
        ],
        ...makeRouterAnyPermission([
          COUNTRY_RESOURCE_ACTIONS.RESOURCE_INDEX,
          CITY_RESOURCE_ACTIONS.RESOURCE_INDEX,
        ]),
        breadcrumbs: [
          {
            label: 'dashboard.context_title',
            route: {
              name: 'dashboard',
            },
          },
          {
            label: 'country.context_title',
            route: {
              name: 'countries',
            },
          },
        ],
      },
    },
  ]
  
  export default routes;
  