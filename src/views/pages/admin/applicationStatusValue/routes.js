import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'applications/statuses',
    name: 'application-statuses',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'applicationStatusValue.context_title',
      middleware: [
        'auth',
      ],
      ...makeRouterPermission([
        RESOURCE_ACTIONS.RESOURCE_INDEX,
      ]),
      breadcrumbs: [
        {
          label: 'dashboard.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'applicationStatusValue.context_title',
          route: {
            name: 'application-statuses',
          },
        },
      ],
    },
  },
  {
    path: '/applications/statuses/create',
    name: 'application-status-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'system.create',
      middleware: [
        'auth',
      ],
      ...makeRouterPermission([
        RESOURCE_ACTIONS.RESOURCE_CREATE,
      ]),
      breadcrumbs: [
        {
          label: 'dashboard.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'applicationStatusValue.context_title',
          route: {
            name: 'application-statuses',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'city.create',
          },
        },
      ],
    },
  },
  {
    path: '/applications/statuses/edit/:uuid',
    name: 'application-status-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'system.edit',
      middleware: [
        'auth',
      ],
      ...makeRouterPermission([
        RESOURCE_ACTIONS.RESOURCE_UPDATE,
      ]),
      breadcrumbs: [
        {
          label: 'dashboard.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'applicationStatusValue.context_title',
          route: {
            name: 'application-statuses',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
]

export default routes;
