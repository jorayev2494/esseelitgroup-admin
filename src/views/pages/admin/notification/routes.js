import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'notifications',
    name: 'notifications',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'notification.context_title',
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
          label: 'notification.context_title',
          route: {
            name: 'notifications',
          },
        },
      ],
    },
  },

  {
    path: 'notifications/create',
    name: 'notification-create',
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
          label: 'notification.context_title',
          route: {
            name: 'notifications',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'notification.create',
          },
        },
      ],
    },
  },

  {
    path: 'notifications/edit/:uuid',
    name: 'notification-edit',
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
          label: 'notification.context_title',
          route: {
            name: 'notifications',
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
