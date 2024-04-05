const routes = [
  {
    path: 'faculties/names',
    name: 'faculties-names',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'facultyName.context_title',
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
          label: 'facultyName.context_title',
          route: {
            name: 'faculties-names',
          },
        },
      ],
    },
  },

  {
    path: 'faculties/names/create',
    name: 'faculty-name-create',
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
          label: 'facultyName.context_title',
          route: {
            name: 'faculties-names',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'faculty-name.create',
          },
        },
      ],
    },
  },

  {
    path: 'faculties/names/edit/:uuid',
    name: 'faculty-name-edit',
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
          label: 'facultyName.context_title',
          route: {
            name: 'faculties-names',
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
