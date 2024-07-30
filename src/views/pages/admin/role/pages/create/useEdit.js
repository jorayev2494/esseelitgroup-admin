import { ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useEdit() {

  const store = useStore();
  const router = useRouter();

  const inputs = useInput();
  const { protectPermission } = useACLProtection();

  const form = ref({
    translations: {},
    is_active: true,
  });

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(async () => {
      await store.dispatch('role/createRoleAsync', { data: decorateData() })
        .then(() => {
          router.push({ name: 'roles' });
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
