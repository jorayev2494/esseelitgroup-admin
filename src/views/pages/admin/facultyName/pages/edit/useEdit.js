import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInput } from "../../useCases/useInput";
import Tr from '@/services/translations/translation'
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

  const loadItem = () => {
    store.dispatch('facultyName/showFacultyNameAsync', { uuid })
      .then(response => {
        form.value = response.data;
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('facultyName/updateFacultyNameAsync', { uuid, data: decorateFormData() })
        .then(() => {
          router.push(Tr.makeRoute({ name: 'faculties-names' }))
        })
    })
  }

  onMounted(() => {
    loadItem();
  })

  return {
    form,
    inputs,

    update,
  }
}
