import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'languages',
    name: 'languages',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'language.context_title',
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
          label: 'language.context_title',
          route: {
            name: 'languages',
          },
        },
      ],
    },
  },

  {
    path: 'languages/create',
    name: 'language-create',
    component: () => import('./create/Index.vue'),
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
          label: 'language.context_title',
          route: {
            name: 'languages',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'language.create',
          },
        },
      ],
    },
  },

  {
    path: 'languages/edit/:uuid',
    name: 'language-edit',
    component: () => import('./edit/Index.vue'),
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
          label: 'language.context_title',
          route: {
            name: 'languages',
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
