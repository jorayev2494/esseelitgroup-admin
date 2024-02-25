export default [
  {
    path: 'companies',
    name: 'companies',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'company.context_title',
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
          label: 'company.context_title',
          route: {
            name: 'companies',
          },
        },
      ],
    },
  },
  {
    path: 'companies/create',
    name: 'company-create',
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
          label: 'company.context_title',
          route: {
            name: 'companies',
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
    path: 'companies/show/:uuid',
    name: 'company-show',
    component: () => import('./show/Index.vue'),
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
          label: 'company.context_title',
          route: {
            name: 'companies',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'companies/edit/:uuid',
    name: 'company-edit',
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
          label: 'company.context_title',
          route: {
            name: 'companies',
          },
        },
        {
          label: 'system.edit',
        },
      ],
    },
  },
];
