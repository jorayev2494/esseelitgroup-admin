export default [
  {
    path: ':pathMatch(.*)*',
    name: 'not-found',
    component: () => import('./4xx/404/Index.vue'),
    meta: {
      middleware: [
        'auth',
      ]
    },
  },
  {
    path: 'access-denied',
    name: 'access-denied',
    component: () => import('./4xx/403/Index.vue'),
    meta: {
      middleware: [
        
      ]
    },
  },
  {
    path: 'internal-server-error',
    name: 'internal-server-error',
    component: () => import('./5xx/500/Index.vue'),
    meta: {
      middleware: [
        
      ]
    },
  },
]
