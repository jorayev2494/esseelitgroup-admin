const routes = [
  {
    path: 'applications/statuses',
    name: 'application-statuses',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'applicationStatusValue.context_title',
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
          label: 'applicationStatusValue.context_title',
          route: {
            name: 'application-statuses',
          },
        },
      ],
    },
  },
  {
    path: '/applications/statuses/create',
    name: 'application-status-create',
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
          label: 'applicationStatusValue.context_title',
          route: {
            name: 'application-statuses',
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
    path: '/applications/statuses/edit/:uuid',
    name: 'application-status-edit',
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
          label: 'applicationStatusValue.context_title',
          route: {
            name: 'application-statuses',
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
