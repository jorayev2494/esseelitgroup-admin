import { onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();

  const inputs = useInput();
  const { t } = useI18n();
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
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(async () => {
      store.dispatch('degree/createDegreeAsync', { data: decorateData() })
        .then(() => {
          router.push({ name: 'degrees' }).then(() => {
            toast.success(t('degree.flash_messages.success.degree_was_created'));
          });
        })
    })
  }

  return {
    form,
    inputs,

    create,
  }
}
