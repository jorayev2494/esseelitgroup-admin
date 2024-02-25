export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('./404/Index.vue'),
    meta: {
      middleware: [
        'auth',
      ]
    },
  },
  {
    path: '/internal-server-error',
    name: 'internal-server-error',
    component: () => import('./500/Index.vue'),
    meta: {
      middleware: [
        
      ]
    },
  },    
]
