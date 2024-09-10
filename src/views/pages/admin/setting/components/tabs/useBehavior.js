import { computed } from "vue"
import { useRoute } from "vue-router"
import { makePermission } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default () => {
  const route = useRoute()

  const items = [
    // {
    //   label: 'setting.tabs.general_settings',
    //   route: {
    //     name: 'settings',
    //   },
    // },
    {
      label: 'setting.tabs.about_us',
      route: {
        name: 'settings.about-us',
      },
      meta: {
        ...makePermission([
          RESOURCE_ACTIONS.RESOURCE_ABOUT_US,
        ]),
      },
    },
    {
      label: 'setting.tabs.university-for-foreign-student',
      route: {
        name: 'settings.university-for-foreign-student',
      },
      meta: {
        ...makePermission([
          RESOURCE_ACTIONS.RESOURCE_UNIVERSITY_FOR_FOREIGN_STUDENT,
        ]),
      },
    },
    // {
    //   label: 'Localization',
    //   route: {
    //     name: 'localization-details',
    //   },
    // },
    // {
    //   label: 'Payment Settings',
    //   route: {
    //     name: 'payment-settings',
    //   },
    // },
    // {
    //   label: 'Email Settings',
    //   route: {
    //     name: 'email-settings',
    //   },
    // },
    // {
    //   label: 'Social Media Login',
    //   route: {
    //     name: 'social-settings',
    //   },
    // },
    // {
    //   label: 'Social Links',
    //   route: {
    //     name: 'social-links',
    //   },
    // },
    // {
    //   label: 'SEO Settings',
    //   route: {
    //     name: 'seo-settings',
    //   },
    // },
    // {
    //   label: 'Others',
    //   route: {
    //     name: 'others-settings',
    //   },
    // },
  ];

  const currentPath = computed(() => route.name)

  return {
    currentPath,
    items,
  }
}
