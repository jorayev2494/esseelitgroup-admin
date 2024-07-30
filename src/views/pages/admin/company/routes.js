import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'companies',
    name: 'companies',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'company.context_title',
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
          label: 'company.context_title',
          route: {
            name: 'companies',
          },
        },
      ],
    },
  },
  {
    path: 'companies/create',
    name: 'company-create',
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
          label: 'company.context_title',
          route: {
            name: 'companies',
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
    path: 'companies/show/:uuid',
    name: 'company-show',
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
          label: 'company.context_title',
          route: {
            name: 'companies',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'companies/edit/:uuid',
    name: 'company-edit',
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
          label: 'company.context_title',
          route: {
            name: 'companies',
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

