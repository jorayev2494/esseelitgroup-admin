import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'degrees',
    name: 'degrees',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'degree.context_title',
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
          label: 'degree.context_title',
          route: {
            name: 'degrees',
          },
        },
      ],
    },
  },

  {
    path: 'degrees/create',
    name: 'degree-create',
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
          label: 'degree.context_title',
          route: {
            name: 'degrees',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'degree.create',
          },
        },
      ],
    },
  },

  {
    path: 'degrees/edit/:uuid',
    name: 'degree-edit',
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
          label: 'degree.context_title',
          route: {
            name: 'degrees',
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
