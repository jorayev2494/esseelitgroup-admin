import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'faculties/names',
    name: 'faculties-names',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'facultyName.context_title',
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
          label: 'facultyName.context_title',
          route: {
            name: 'faculties-names',
          },
        },
      ],
    },
  },

  {
    path: 'faculties/names/create',
    name: 'faculty-name-create',
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
          label: 'facultyName.context_title',
          route: {
            name: 'faculties-names',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'faculty-name.create',
          },
        },
      ],
    },
  },

  {
    path: 'faculties/names/edit/:uuid',
    name: 'faculty-name-edit',
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
          label: 'facultyName.context_title',
          route: {
            name: 'faculties-names',
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
