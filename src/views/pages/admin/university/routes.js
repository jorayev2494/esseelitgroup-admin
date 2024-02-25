export default [
  {
    path: 'universities',
    name: 'universities',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'university.context_title',
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
          label: 'university.context_title',
          route: {
            name: 'universities',
          },
        },
      ],
    },
  },
  {
    path: 'universities/create',
    name: 'university-create',
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
          label: 'university.context_title',
          route: {
            name: 'universities',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'university.create',
          },
        },
      ],
    },
  },
  {
    path: 'universities/edit/:uuid',
    name: 'university-edit',
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
          label: 'university.context_title',
          route: {
            name: 'universities',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
]
