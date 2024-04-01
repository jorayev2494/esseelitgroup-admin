const routes = [
  {
    path: 'aliases',
    name: 'aliases',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'alias.context_title',
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
          label: 'alias.context_title',
          route: {
            name: 'aliases',
          },
        },
      ],
    },
  },

  {
    path: 'aliases/create',
    name: 'alias-create',
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
          label: 'alias.context_title',
          route: {
            name: 'aliases',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'alias.create',
          },
        },
      ],
    },
  },

  {
    path: 'aliases/edit/:uuid',
    name: 'alias-edit',
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
          label: 'alias.context_title',
          route: {
            name: 'aliases',
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
