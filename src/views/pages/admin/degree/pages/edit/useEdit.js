import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../../useCases/useInput";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { protectPermission } = useACLProtection();
  const { uuid } = route.params;

  const form = ref({});
  
  const inputs = useInput();

  const loadDegree = () => {
    store.dispatch('degree/showDegreeAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('degree/updateDegreeAsync', { uuid, data: decorateFormData() })
        .then(() => {
          router.push({ name: 'degrees' });
        })
    })
  }

  onMounted(() => {
    loadDegree();
  })

  return {
    form,
    inputs,

    update,
  }
}
