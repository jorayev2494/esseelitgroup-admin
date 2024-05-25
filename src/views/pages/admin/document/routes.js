export default [
  {
    path: 'documents',
    name: 'documents',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'document.context_title',
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
          label: 'document.context_title',
          route: {
            name: 'documents',
          },
        },
      ],
    },
  },
  {
    path: 'documents/create',
    name: 'document-create',
    component: () => import('./pages/create/Index.vue'),
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
          label: 'document.context_title',
          route: {
            name: 'documents',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'dashboard',
          },
        },
      ],
    },
  },
  {
    path: 'documents/show/:uuid',
    name: 'document-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'system.show',
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
          label: 'document.context_title',
          route: {
            name: 'documents',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'documents/edit/:uuid',
    name: 'document-edit',
    component: () => import('./pages/edit/Index.vue'),
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
          label: 'document.context_title',
          route: {
            name: 'documents',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
];
