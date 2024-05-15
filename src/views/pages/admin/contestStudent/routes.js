const routes = [
  // {
  //   path: 'contests/:contestUuid/students',
  //   name: 'contests-students',
  //   component: () => import('./pages/index/Index.vue'),
  //   meta: {
  //     title: 'contestStudent.context_title',
  //     middleware: [
  //       'auth',
  //     ],
  //     breadcrumbs: [
  //       {
  //         label: 'dashboard.context_title',
  //         route: {
  //           name: 'dashboard',
  //         },
  //       },
  //       {
  //         label: 'contestStudent.context_title',
  //         route: {
  //           name: 'contests-students',
  //         },
  //       },
  //     ],
  //   },
  // },

  {
    path: 'contests/:contestUuid/students/show/:code',
    name: 'contest-student-show',
    component: () => import('./pages/show/Index.vue'),
    meta: {
      title: 'contestStudent.context_title',
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
        // {
        //   label: 'contestStudent.context_title',
        //   route: {
        //     name: 'contests-students',
        //   },
        // },
        {
          label: 'system.show',
        },
      ],
    },
  },

  {
    path: 'contests/:contestUuid/students/edit/:code',
    name: 'contest-student-edit',
    component: () => import('./pages/edit/Index.vue'),
    meta: {
      title: 'contestStudent.context_title',
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
        // {
        //   label: 'contestStudent.context_title',
        //   route: {
        //     name: 'contests-students',
        //   },
        // },
        {
          label: 'system.edit',
        },
      ],
    },
  },
]

export default routes;
