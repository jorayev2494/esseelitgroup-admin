const routes = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('./index/index.vue'),
    meta: {
      title: 'dashboard.context_title',
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
      ],
    },
  },
]

export default routes;
