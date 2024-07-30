import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'departments/names',
    name: 'departments-names',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'departmentName.context_title',
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
          label: 'departmentName.context_title',
          route: {
            name: 'departments-names',
          },
        },
      ],
    },
  },

  {
    path: 'departments/names/create',
    name: 'department-name-create',
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
          label: 'departmentName.context_title',
          route: {
            name: 'departments-names',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'department-name.create',
          },
        },
      ],
    },
  },

  {
    path: 'departments/names/edit/:uuid',
    name: 'department-name-edit',
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
          label: 'departmentName.context_title',
          route: {
            name: 'departments-names',
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
