// primary-color: #0f271a - green
// Star color: #eda713 - yellow

const routes = [
  {
    path: 'auth',
    name: 'auth',
    component: () => import('./layout/Index.js.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('./login/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('./register/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
      {
        path: 'restore-password/link',
        name: 'restore_password.link',
        component: () => import('./restore-password/link/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
      {
        path: 'restore-password',
        name: 'restore_password',
        component: () => import('./restore-password/restore/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
      {
        path: 'lock-screen',
        name: 'lock-screen',
        component: () => import('./lock-screen/Index.vue'),
        meta: {
          middleware: [
            'guest',
          ],
        },
      },
    ],
  },
];

export default routes;
