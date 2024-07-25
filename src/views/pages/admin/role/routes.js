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
