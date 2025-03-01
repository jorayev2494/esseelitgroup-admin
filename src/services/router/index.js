import { createRouter, createWebHistory, RouterView } from 'vue-router';
import routes from './routes.js';
import Tr from '@/services/translations/translation.js';

const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: routes,
    },
  ],
});

router.beforeEach(function(to, from, next) {
  // Middleware
  if (to.meta.hasOwnProperty('middleware')) {
    const accessToken = localStorage.getItem('access_token');

    // For Guest
    if (to.meta.middleware.includes('guest')) {
      if (accessToken) {
        next(Tr.makeRoute({ name: 'dashboard' }));
      }
    }

    // For Authorization
    if (to.meta.middleware.includes('auth')) {
      if (accessToken) {
        next();
      } else {
        next(Tr.makeRoute({ name: 'login' }));
      }
    }

    next();
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;
