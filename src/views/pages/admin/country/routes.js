const routes = [
  {
    path: 'countries',
    name: 'countries',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'country.context_title',
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
          label: 'country.context_title',
          route: {
            name: 'countries',
          },
        },
      ],
    },
  },
  {
    path: 'countries/create',
    name: 'country-create',
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
          label: 'country.context_title',
          route: {
            name: 'countries',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'country.create',
          },
        },
      ],
    },
  },
  {
    path: 'countries/edit/:uuid',
    name: 'country-edit',
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
          label: 'country.context_title',
          route: {
            name: 'countries',
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