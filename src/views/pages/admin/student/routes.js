const routes = [
  {
    path: 'students',
    name: 'students',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'student.context_title',
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
          label: 'student.context_title',
          route: {
            name: 'students',
          },
        },
      ],
    },
  },
  {
    path: 'students/create',
    name: 'student-create',
    component: () => import('./pages/create/Index.vue'),
    meta: {
      title: 'department.context_title',
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
          label: 'student.context_title',
          route: {
            name: 'students',
          },
        },
        {
          label: 'system.create',
        },
      ],
    },
  },
  {
    path: 'students/show/:uuid',
    name: 'student-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'student.context_title',
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
          label: 'student.context_title',
          route: {
            name: 'students',
          },
        },
        {
          label: 'system.show',
        },
      ],
    },
  },
  {
    path: 'students/edit/:uuid',
    name: 'student-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'student.context_title',
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
          label: 'student.context_title',
          route: {
            name: 'students',
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
