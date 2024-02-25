const routes = [
  {
    path: 'faculties',
    name: 'faculties',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'faculty.context_title',
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
          label: 'faculty.context_title',
          route: {
            name: 'faculties',
          },
        },
      ],
    },
  },
  {
    path: 'faculties/create',
    name: 'faculty-create',
    component: () => import('./create/Index.vue'),
    meta: {
      title: 'faculty.context_title',
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
          label: 'faculty.context_title',
          route: {
            name: 'faculties',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'faculty.create',
          },
        },
      ],
    },
  },
  {
    path: 'faculties/show/:uuid',
    name: 'faculty-show',
    component: () => import('./show/Index.vue'),
    meta: {
      title: 'faculty.context_title',
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
          label: 'faculty.context_title',
          route: {
            name: 'faculties',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'faculties/edit/:uuid',
    name: 'faculty-edit',
    component: () => import('./edit/Index.vue'),
    meta: {
      title: 'faculty.context_title',
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
          label: 'faculty.context_title',
          route: {
            name: 'faculties',
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
