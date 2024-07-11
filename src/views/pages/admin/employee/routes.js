const routes = [
  {
    path: 'employees',
    name: 'employees',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'employee.context_title',
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
          label: 'employee.context_title',
          route: {
            name: 'employees',
          },
        },
      ],
    },
  },
  {
    path: 'employees/create',
    name: 'employee-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'employee.context_title',
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
          label: 'employee.context_title',
          route: {
            name: 'employees',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'employees/show/:uuid',
    name: 'employee-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'employee.context_title',
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
          label: 'employee.context_title',
          route: {
            name: 'employees',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'employees/edit/:uuid',
    name: 'employee-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'employee.context_title',
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
          label: 'employee.context_title',
          route: {
            name: 'employees',
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
