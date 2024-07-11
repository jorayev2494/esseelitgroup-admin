const routes = [
  {
    path: 'managers',
    name: 'managers',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'manager.context_title',
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
          label: 'manager.context_title',
          route: {
            name: 'managers',
          },
        },
      ],
    },
  },
  {
    path: 'managers/create',
    name: 'manager-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'manager.context_title',
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
          label: 'manager.context_title',
          route: {
            name: 'managers',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'managers/show/:uuid',
    name: 'manager-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'manager.context_title',
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
          label: 'manager.context_title',
          route: {
            name: 'managers',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'managers/edit/:uuid',
    name: 'manager-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'manager.context_title',
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
          label: 'manager.context_title',
          route: {
            name: 'managers',
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
