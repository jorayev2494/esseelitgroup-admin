const routes = [
  {
    path: 'degrees',
    name: 'degrees',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'degree.context_title',
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
          label: 'degree.context_title',
          route: {
            name: 'degrees',
          },
        },
      ],
    },
  },

  {
    path: 'degrees/create',
    name: 'degree-create',
    component: () => import('./create/Index.vue'),
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
          label: 'degree.context_title',
          route: {
            name: 'degrees',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'degree.create',
          },
        },
      ],
    },
  },

  {
    path: 'degrees/edit/:uuid',
    name: 'degree-edit',
    component: () => import('./edit/Index.vue'),
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
          label: 'degree.context_title',
          route: {
            name: 'degrees',
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
