import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'announcements',
    name: 'announcements',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'announcement.context_title',
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
          label: 'announcement.context_title',
          route: {
            name: 'announcements',
          },
        },
      ],
    },
  },
  {
    path: 'announcements/create',
    name: 'announcement-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'announcement.context_title',
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
          label: 'announcement.context_title',
          route: {
            name: 'announcements',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'announcements/show/:uuid',
    name: 'announcement-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'announcement.context_title',
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
          label: 'announcement.context_title',
          route: {
            name: 'announcements',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'announcements/edit/:uuid',
    name: 'announcement-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'announcement.context_title',
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
          label: 'announcement.context_title',
          route: {
            name: 'announcements',
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
