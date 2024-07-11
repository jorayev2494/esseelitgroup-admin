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
  ]
  
  export default routes;
  