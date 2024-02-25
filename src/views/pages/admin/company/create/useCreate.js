import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const { image } = useUrlPattern();

  const logoPreview = ref(null);

  const form = reactive({
    name: '',
    domain: '',
    // logo: '',
  });

  const uploadLogo = event => {
    const uploadedLogo = event.target.files[0];
    console.log('event uploadLogo: ', uploadedLogo);

    if (uploadedLogo) {
      form.logo = uploadedLogo;
      logoPreview.value = URL.createObjectURL(uploadedLogo);
    }

  }

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        const value = form[key];
        formData.append(key, value);
      }
    }

    return formData;
  }

  const create = () => {
    store.dispatch('company/createCompanyAsync', decorateFormData())
      .then(() => {
        router.push({ name: 'companies' });
      })
  }

  onMounted(() => {
    logoPreview.value = image(logoPreview.value)
  })

  return {
    form,
    logoPreview,

    uploadLogo,
    create,
  }
}
