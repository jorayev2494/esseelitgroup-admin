const routes = [
  // {
  //   path: 'cities',
  //   name: 'cities',
  //   component: () => import('./index/Index.vue'),
  //   meta: {
  //     title: 'city.context_title',
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
  //         label: 'city.context_title',
  //         route: {
  //           name: 'cities',
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    path: 'cities/create',
    name: 'city-create',
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
            name: 'city.create',
          },
        },
      ],
    },
  },
  {
    path: 'cities/edit/:uuid',
    name: 'city-edit',
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
