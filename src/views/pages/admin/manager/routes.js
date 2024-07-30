import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'managers',
    name: 'managers',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'manager.context_title',
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
          label: 'manager.context_title',
          route: {
            name: 'managers',
          },
        },
      ],
    },
  },
  {
    path: 'managers/create',
    name: 'manager-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'manager.context_title',
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
          label: 'manager.context_title',
          route: {
            name: 'managers',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'managers/show/:uuid',
    name: 'manager-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'manager.context_title',
      middleware: [
        'auth',
      ],
      ...makeRouterPermission([
        RESOURCE_ACTIONS.RESOURCE_SHOW,
      ]),
      breadcrumbs: [
        {
          label: 'dashboard.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'manager.context_title',
          route: {
            name: 'managers',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'managers/edit/:uuid',
    name: 'manager-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'manager.context_title',
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
          label: 'manager.context_title',
          route: {
            name: 'managers',
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
