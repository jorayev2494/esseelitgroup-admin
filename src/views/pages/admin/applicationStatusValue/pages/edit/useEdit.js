import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useEdit() {

  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  const { t } = useI18n();
  const { protectPermission } = useACLProtection();

  const { uuid } = route.params;

  const form = ref({
    // color: '',
    // is_required_note: true,
    // translations: {},
    // // is_active: true,
  });

  const inputs = useInput();

  const decorateData = () => {
    return form.value;
  }

  const loadStatus = () => {
    store.dispatch('applicationStatusValue/showStatusAsync', { uuid })
      .then(response => {
        form.value = response.data
      })
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('applicationStatusValue/updateStatusAsync', { uuid, data: decorateData() })
        .then(() => {
          router.push({ name: 'application-statuses' }).then(() => {
            toast.success(t('applicationStatusValue.flash_messages.success.application_status_was_updated'));
          });
        })
    })
  }

  onMounted(() => {
    loadStatus()
  })

  return {
    form,
    inputs,

    update,
  }
}
