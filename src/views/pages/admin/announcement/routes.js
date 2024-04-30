const routes = [
  {
    path: 'announcements',
    name: 'announcements',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'announcement.context_title',
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
          label: 'announcement.context_title',
          route: {
            name: 'announcements',
          },
        },
      ],
    },
  },
  {
    path: 'announcements/create',
    name: 'announcement-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'announcement.context_title',
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
          label: 'announcement.context_title',
          route: {
            name: 'announcements',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'announcements/show/:uuid',
    name: 'announcement-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'announcement.context_title',
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
          label: 'announcement.context_title',
          route: {
            name: 'announcements',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'announcements/edit/:uuid',
    name: 'announcement-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'announcement.context_title',
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
          label: 'announcement.context_title',
          route: {
            name: 'announcements',
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
