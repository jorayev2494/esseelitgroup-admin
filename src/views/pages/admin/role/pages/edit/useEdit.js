import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { t } = useI18n();
  const { protectPermission } = useACLProtection();
  const { uuid } = route.params;

  const form = ref({});
  
  const inputs = useInput();

  const loadItem = () => {
    store.dispatch('role/showRoleAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('role/updateRoleAsync', { uuid, data: decorateFormData() })
        .then(() => {
          router.push({ name: 'roles' }).then(() => {
            toast.success(t('role.flash_messages.success.role_was_updated'));
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
