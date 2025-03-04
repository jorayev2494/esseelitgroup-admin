import { ref, watch } from "vue"
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
  const { protectPermission } = useACLProtection();
  const { t } = useI18n();

  const form = ref({
    value: '',
    iso: '',
    translations: {},
    is_active: true,
  });

  const inputs = useInput();

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(() => {
      store.dispatch('country/createCountryAsync', { data: decorateData() })
        .then(() => {
          router.push(Tr.makeRoute({ name: 'countries' })).then(() => {
            toast.success(t('country.flash_messages.success.country_was_created'));
          });
        })
    })
  }

  watch(() => form.value.youtube_video_id, (newV, oldV) => {
    console.log(newV, oldV);
  })

  return {
    form,
    inputs,

    create,
  }
}
