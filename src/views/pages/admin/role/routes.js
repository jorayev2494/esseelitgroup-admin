import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterPermission } from '@/services/acl/useACLProtection';

const routes = [
  {
    path: 'roles',
    name: 'roles',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'role.context_title',
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
          label: 'role.context_title',
          route: {
            name: 'roles',
          },
        },
      ],
    },
  },
  {
    path: 'roles/create',
    name: 'role-create',
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
          label: 'role.context_title',
          route: {
            name: 'roles',
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
  // {
  //   path: 'roles/show/:uuid',
  //   name: 'role-show',
  //   component: () => import('./pages/show/Index.vue'),
  //   meta: {
  //     title: 'system.show',
  //     middleware: [
  //       'auth',
  //     ],
      // ...makeRouterPermission([
      //   RESOURCE_ACTIONS.RESOURCE_SHOW,
      // ]),
  //     breadcrumbs: [
  //       {
  //         label: 'dashboard.context_title',
  //         route: {
  //           name: 'dashboard',
  //         },
  //       },
  //       {
  //         label: 'role.context_title',
  //         route: {
  //           name: 'roles',
  //         },
  //       },
  //       {
  //         label: 'system.show',
  //       },
  //     ],
  //   },
  // },
  {
    path: 'roles/edit/:uuid',
    name: 'role-edit',
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
          label: 'role.context_title',
          route: {
            name: 'roles',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
];

export default routes;
