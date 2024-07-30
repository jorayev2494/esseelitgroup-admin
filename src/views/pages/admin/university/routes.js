import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

export default [
  {
    path: 'universities',
    name: 'universities',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'university.context_title',
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
          label: 'university.context_title',
          route: {
            name: 'universities',
          },
        },
      ],
    },
  },
  {
    path: 'universities/create',
    name: 'university-create',
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
          label: 'university.context_title',
          route: {
            name: 'universities',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'university.create',
          },
        },
      ],
    },
  },
  {
    path: 'universities/edit/:uuid',
    name: 'university-edit',
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
          label: 'university.context_title',
          route: {
            name: 'universities',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
]
