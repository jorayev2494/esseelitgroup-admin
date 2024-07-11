const routes = [
  {
    path: 'applications',
    name: 'applications',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'application.context_title',
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
          label: 'application.context_title',
          route: {
            name: 'applications',
          },
        },
      ],
    },
  },
  {
    path: 'applications/create/:student_uuid',
    name: 'application-create',
    component: () => import('./create/Index.vue'),
    meta: {
      title: 'department.context_title',
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
          label: 'application.context_title',
          route: {
            name: 'applications',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'applications/show/:uuid',
    name: 'application-show',
    component: () => import('./show/Index.vue'),
    meta: {
      title: 'application.context_title',
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
          label: 'application.context_title',
          route: {
            name: 'applications',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'applications/edit/:uuid',
    name: 'application-edit',
    component: () => import('./edit/Index.vue'),
    meta: {
      title: 'application.context_title',
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
          label: 'application.context_title',
          route: {
            name: 'applications',
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
