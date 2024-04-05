const routes = [
  {
    path: 'departments/names',
    name: 'departments-names',
    component: () => import('./index/Index.vue'),
    meta: {
      title: 'departmentName.context_title',
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
          label: 'departmentName.context_title',
          route: {
            name: 'departments-names',
          },
        },
      ],
    },
  },

  {
    path: 'departments/names/create',
    name: 'department-name-create',
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
          label: 'departmentName.context_title',
          route: {
            name: 'departments-names',
          },
        },
        {
          label: 'system.create',
          route: {
            name: 'department-name.create',
          },
        },
      ],
    },
  },

  {
    path: 'departments/names/edit/:uuid',
    name: 'department-name-edit',
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
          label: 'departmentName.context_title',
          route: {
            name: 'departments-names',
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
