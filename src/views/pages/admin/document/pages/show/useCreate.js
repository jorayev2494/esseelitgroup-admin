import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import useInput from '../../useCases/useInputs'
import useType from "../../useCases/useType";
import { formDataTranslations } from '../../../../utils/helpers'

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const inputs = useInput();

  const { types, loadTypes } = useType();
  const { uuid } = route.params;

  const form = ref(null);

  const uploadFile = event => {
    const [uploadedFile] = event.target.files;

    if (uploadedFile) {
      form.value.file = uploadedFile;
    }
  }

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

  const loadItem = () => {
    store.dispatch('document/showDocumentAsync', { uuid })
      .then(response => {
        form.value = response.data
      })
  }

  const update = () => {
    store.dispatch('document/updateDocumentAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'documents' });
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

    update,
    uploadFile,
  }
}
