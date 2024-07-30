import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('./pages/index/index.vue'),
    meta: {
      title: 'dashboard.context_title',
      middleware: [
        'auth',
      ],
      // ...makeRouterPermission([
      //   RESOURCE_ACTIONS.RESOURCE_INDEX,
      // ]),
      breadcrumbs: [
        {
          label: 'dashboard.context_title',
          route: {
            name: 'dashboard',
          },
        },
      ],
    },
  },
]

export default routes;
