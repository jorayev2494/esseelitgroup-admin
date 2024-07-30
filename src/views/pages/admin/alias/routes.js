import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'aliases',
    name: 'aliases',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'alias.context_title',
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
          label: 'alias.context_title',
          route: {
            name: 'aliases',
          },
        },
      ],
    },
  },

  {
    path: 'aliases/create',
    name: 'alias-create',
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
          label: 'alias.context_title',
          route: {
            name: 'aliases',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'alias.create',
          },
        },
      ],
    },
  },

  {
    path: 'aliases/edit/:uuid',
    name: 'alias-edit',
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
          label: 'alias.context_title',
          route: {
            name: 'aliases',
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
