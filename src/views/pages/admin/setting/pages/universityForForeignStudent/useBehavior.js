import { onMounted, ref } from "vue"
import { useStore } from "vuex"
import { useAboutUsInput } from '../../useCases/useInput'
import { formDataTranslations } from '../../../../utils/helpers'
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default () => {
  const store = useStore();

  const inputs = useAboutUsInput();
  const { checkPermissions, protectPermission } = useACLProtection();
  const { t } = useI18n();

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
        .then(() => {
            toast.success(t('setting.flash_messages.university_for_foreign_student.success.university_for_foreign_student_was_updated'));
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
