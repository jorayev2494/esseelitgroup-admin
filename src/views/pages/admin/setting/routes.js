export default [
  {
    path: 'settings',
    name: 'settings',
    component: () => import('./pages/index/Index.vue'),
    children: [
      {
        path: 'about-us',
        name: 'settings.about-us',
        component: () => import('./pages/aboutUs/Index.vue'),
        meta: {
          title: 'setting.context_title',
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
              label: 'setting.context_title',
              route: {
                name: 'settings',
              },
            },
            {
              label: 'setting.tabs.about_us',
              route: {
                name: 'settings',
              },
            },
          ],
        },
      }
    ],
    meta: {
      title: 'setting.context_title',
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
          label: 'setting.context_title',
          route: {
            name: 'settings',
          },
        },
      ],
    },
  }
]
