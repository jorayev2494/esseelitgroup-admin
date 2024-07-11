const routes = [
  {
    path: 'profile/show',
    name: 'profile-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'profile.context_title',
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
          label: 'profile.context_title',
          route: {
            name: 'profile',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'profile/edit',
    name: 'profile-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'profile.context_title',
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
          label: 'profile.context_title',
          route: {
            name: 'profile-show',
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
