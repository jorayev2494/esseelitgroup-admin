import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'faculties',
    name: 'faculties',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'faculty.context_title',
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
          label: 'faculty.context_title',
          route: {
            name: 'faculties',
          },
        },
      ],
    },
  },
  {
    path: 'faculties/create',
    name: 'faculty-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'faculty.context_title',
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
          label: 'faculty.context_title',
          route: {
            name: 'faculties',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'faculty.create',
          },
        },
      ],
    },
  },
  {
    path: 'faculties/show/:uuid',
    name: 'faculty-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'faculty.context_title',
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
          label: 'faculty.context_title',
          route: {
            name: 'faculties',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'faculties/edit/:uuid',
    name: 'faculty-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'faculty.context_title',
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
          label: 'faculty.context_title',
          route: {
            name: 'faculties',
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
