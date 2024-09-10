import { onMounted, ref } from "vue"
import { useStore } from "vuex"
import { useAboutUsInput } from '../../useCases/useInput'
import { formDataTranslations } from '../../../../utils/helpers'
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default () => {
  const store = useStore();

  const inputs = useAboutUsInput();
  const { checkPermissions, protectPermission } = useACLProtection();

  const slug = 'u-for-foreign-s'; // university-for-foreign-student
  const form = ref(null);

  const itemDataMapper = item => {

    return item;
  }

  const loadItemData = () => {
    store.dispatch('staticPage/showStaticPageAsync', { slug })
      .then(response => {
        form.value = itemDataMapper(response.data)
      })
  }

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        if (key === 'cover' && ! (value instanceof File)) {
          continue;
        }

        formData.append(key, value)
      }
    }

    formDataTranslations(formData, form);

    return formData;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_ABOUT_US).then(() => {
      store.dispatch('staticPage/updateStaticPageAsync', { slug, data: getData() })
        .then(response => {
            alert('Updated')
        })
    })
  }

  onMounted(() => {
    loadItemData()
  })

  return {
    form,
    inputs,

    update,
  }
}
