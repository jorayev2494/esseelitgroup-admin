import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../acl/constants'
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";
import Tr from '@/services/translations/translation.js';

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { uuid } = route.params;
  const { protectPermission } = useACLProtection();
  const { t } = useI18n();

  const form = ref({});
  
  const inputs = useInput();

  const loadItem = () => {
    store.dispatch('language/showLanguageAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('language/updateLanguageAsync', { uuid, data: decorateFormData() })
        .then(() => {
          router.push(Tr.makeRoute({ name: 'languages' })).then(() => {
            toast.success(t('language.flash_messages.success.language_was_updated'));
          });
        })
    })
  }

  onMounted(() => {
    loadItem();
  })

  return {
    RESOURCE_ACTIONS,
    form,
    inputs,

    update,
  }
}
