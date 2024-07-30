import { ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../acl/constants'

export default function useEdit() {

  const store = useStore();
  const router = useRouter();

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
          router.push({ name: 'languages' });
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
