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

  const loadAlias = () => {
    store.dispatch('alias/showAliasAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('alias/updateAliasAsync', { uuid, data: decorateFormData() })
        .then(() => {
          router.push({ name: 'aliases' }).then(() => {
            toast.success(t('alias.flash_messages.success.alias_was_updated'));
          });
        })
    })
  }

  onMounted(() => {
    loadAlias();
  })

  return {
    form,
    inputs,

    update,
  }
}
