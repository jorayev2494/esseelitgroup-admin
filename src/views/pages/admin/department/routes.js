import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'departments',
    name: 'departments',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'department.context_title',
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
          label: 'department.context_title',
          route: {
            name: 'departments',
          },
        },
      ],
    },
  },
  {
    path: 'departments/create',
    name: 'department-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'department.context_title',
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
          label: 'department.context_title',
          route: {
            name: 'departments',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'departments/show/:uuid',
    name: 'department-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'department.context_title',
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
          label: 'department.context_title',
          route: {
            name: 'departments',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'departments/edit/:uuid',
    name: 'department-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'department.context_title',
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
          label: 'department.context_title',
          route: {
            name: 'departments',
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
