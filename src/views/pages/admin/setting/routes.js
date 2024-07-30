import { RESOURCE_ACTIONS } from './acl/constants'
import { makeRouterAnyPermission, makeRouterPermission } from '@/services/acl/useACLProtection';

export default [
  {
    path: 'settings',
    name: 'settings',
    component: () => import('./pages/index/Index.vue'),
    meta: {
      title: 'setting.context_title',
      middleware: [
        'auth',
      ],
      ...makeRouterAnyPermission([
        RESOURCE_ACTIONS.RESOURCE_INDEX,
        // RESOURCE_ACTIONS.RESOURCE_ABOUT_US,
      ]),
      breadcrumbs: [
        {
          label: 'dashboard.context_title',
          route: {
            name: 'dashboard',
          },
        },
        {
          label: 'setting.context_title',
          route: {
            name: 'settings',
          },
        },
      ],
    },
    children: [
      {
        path: 'about-us',
        name: 'settings.about-us',
        component: () => import('./pages/aboutUs/Index.vue'),
        meta: {
          title: 'setting.context_title',
          middleware: [
            'auth',
          ],
          ...makeRouterPermission([
            RESOURCE_ACTIONS.RESOURCE_ABOUT_US,
          ]),
          breadcrumbs: [
            {
              label: 'dashboard.context_title',
              route: {
                name: 'dashboard',
              },
            },
            {
              label: 'setting.context_title',
              route: {
                name: 'settings',
              },
            },
            {
              label: 'setting.tabs.about_us',
              route: {
                name: 'settings',
              },
            },
          ],
        },
      }
    ],
  }
]
