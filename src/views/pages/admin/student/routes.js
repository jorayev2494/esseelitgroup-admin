import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'students',
    name: 'students',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'student.context_title',
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
          label: 'student.context_title',
          route: {
            name: 'students',
          },
        },
      ],
    },
  },
  {
    path: 'students/create',
    name: 'student-create',
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
          label: 'student.context_title',
          route: {
            name: 'students',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'students/show/:uuid',
    name: 'student-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'student.context_title',
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
          label: 'student.context_title',
          route: {
            name: 'students',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'students/edit/:uuid',
    name: 'student-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'student.context_title',
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
          label: 'student.context_title',
          route: {
            name: 'students',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
  {
    path: 'students/pdf/preview/:uuid',
    name: 'student-pdf-preview',
    component: () => import('./pages/pdfPreview/Index.vue'),
    meta: {
      title: 'department.context_title',
      middleware: [
        'auth',
      ],
      breadcrumbs: [
        {
          label: 'dashboard.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'student.context_title',
          route: {
            name: 'students',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
]

export default routes;
