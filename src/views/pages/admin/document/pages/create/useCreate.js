import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import useInput from '../../useCases/useInputs'
import useType from "../../useCases/useType";
import { formDataTranslations } from '../../../../utils/helpers'

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const inputs = useInput();

  const { typePreview, types, loadTypes } = useType();

  const form = ref({
    file: '',
    type: '',
    translations: {},
    is_active: true,
  });

  const uploadFile = event => {
    const [uploadedFile] = event.target.files;

    if (uploadedFile) {
      form.value.file = uploadedFile;
      // logoPreview.value = URL.createObjectURL(uploadedLogo);
    }
  }

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];
        formData.append(key, value);
      }
    }

    formDataTranslations(formData, form)

    return formData;
  }

  const create = () => {
    store.dispatch('document/createDocumentAsync', { data: decorateFormData() })
      .then(() => {
        router.push({ name: 'documents' });
      })
  }

  onMounted(() => {
    loadTypes();
  })

  return {
    form,
    types,
    inputs,

    create,
    uploadFile,
  }
}
