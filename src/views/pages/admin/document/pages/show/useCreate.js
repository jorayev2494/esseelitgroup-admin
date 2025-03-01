import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";
import { useStore } from "vuex"
import useInput from '../../useCases/useInputs'
import useType from "../../useCases/useType";
import { formDataTranslations } from '../../../../utils/helpers'
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useCreate() {

  const store = useStore();
  const route = useRoute();
  const inputs = useInput();
  const { protectPermission } = useACLProtection();

  const { types, loadTypes } = useType();
  const { uuid } = route.params;

  const form = ref(null);

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        let value = form.value[key];

        if (key === 'file' && !(value instanceof File)) {
          value = '';
        }

        formData.append(key, value);
      }
    }

    formDataTranslations(formData, form)

    return formData;
  }

  const fileMapper = file => {
    return file;
  }

  const loadItem = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_SHOW).then(() => {
      store.dispatch('document/showDocumentAsync', { uuid })
        .then(response => {
          form.value = response.data;
          form.value.file = fileMapper(response.data.file);
        })
    })
  }

  onMounted(() => {
    loadItem();
    loadTypes();
  })

  return {
    form,
    types,
    inputs,
  }
}
