const routes = [
  {
    path: 'permissions',
    name: 'permissions',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'permission.context_title',
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
          label: 'permission.context_title',
          route: {
            name: 'permissions',
          },
        },
      ],
    },
  },
  // {
  //   path: 'permissions/create',
  //   name: 'permission-create',
  //   component: () => import('./pages/create/Index.vue'),
  //   meta: {
  //     title: 'system.create',
  //     middleware: [
  //       'auth',
  //     ],
  //     breadcrumbs: [
  //       {
  //         label: 'dashboard.context_title',
  //         route: {
  //           name: 'dashboard',
  //         },
  //       },
  //       {
  //         label: 'permission.context_title',
  //         route: {
  //           name: 'permissions',
  //         },
  //       },
  //       {
  //         label: 'system.create',
  //         route: {
  //           name: 'dashboard',
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: 'permissions/show/:id',
  //   name: 'permission-show',
  //   component: () => import('./pages/show/Index.vue'),
  //   meta: {
  //     title: 'system.show',
  //     middleware: [
  //       'auth',
  //     ],
  //     breadcrumbs: [
  //       {
  //         label: 'dashboard.context_title',
  //         route: {
  //           name: 'dashboard',
  //         },
  //       },
  //       {
  //         label: 'permission.context_title',
  //         route: {
  //           name: 'permissions',
  //         },
  //       },
  //       {
  //         label: 'system.show',
  //       },
  //     ],
  //   },
  // },
  {
    path: 'permissions/edit/:id',
    name: 'permission-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'system.edit',
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
          label: 'permission.context_title',
          route: {
            name: 'permissions',
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
