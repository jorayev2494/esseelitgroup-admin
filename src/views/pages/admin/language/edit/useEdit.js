import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../acl/constants'

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { uuid } = route.params;
  const { protectPermission } = useACLProtection();

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
          router.push({ name: 'languages' });
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
