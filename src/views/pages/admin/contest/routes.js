import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'contests',
    name: 'contests',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'contest.context_title',
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
          label: 'contest.context_title',
          route: {
            name: 'contests',
          },
        },
      ],
    },
  },
  {
    path: 'contests/create',
    name: 'contest-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'contest.context_title',
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
          label: 'contest.context_title',
          route: {
            name: 'contests',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'contests/show/:uuid',
    name: 'contest-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'contest.context_title',
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
          label: 'contest.context_title',
          route: {
            name: 'contests',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'contests/edit/:uuid',
    name: 'contest-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'contest.context_title',
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
          label: 'contest.context_title',
          route: {
            name: 'contests',
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
