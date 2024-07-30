import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'documents',
    name: 'documents',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'document.context_title',
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
          label: 'document.context_title',
          route: {
            name: 'documents',
          },
        },
      ],
    },
  },
  {
    path: 'documents/create',
    name: 'document-create',
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
          label: 'document.context_title',
          route: {
            name: 'documents',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'dashboard',
          },
        },
      ],
    },
  },
  {
    path: 'documents/show/:uuid',
    name: 'document-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'system.show',
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
          label: 'document.context_title',
          route: {
            name: 'documents',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'documents/edit/:uuid',
    name: 'document-edit',
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
          label: 'document.context_title',
          route: {
            name: 'documents',
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

