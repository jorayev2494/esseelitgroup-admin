import { ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../acl/constants'
import Tr from '@/services/translations/translation.js';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const { t } = useI18n();

  const inputs = useInput();
  const { protectPermission } = useACLProtection();

  const form = ref({
    value: '',
    translations: {},
    // is_active: true,
  });

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(() => {
      store.dispatch('language/createLanguageAsync', { data: decorateData() })
        .then(() => {
          router.push(Tr.makeRoute({ name: 'languages' })).then(() => {
            toast.success(t('language.flash_messages.success.language_was_created'));
          });
        })
    })
  }

  return {
    RESOURCE_ACTIONS,

    form,
    inputs,

    create,
  }
}
