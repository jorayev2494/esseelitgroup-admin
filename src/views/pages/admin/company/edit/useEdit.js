import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();

  const logoPreview = ref(null);

  const form = ref({
    name: '',
    domain: '',
    logo: '',
  });

  const uploadLogo = event => {
    const uploadedLogo = event.target.files[0];

    if (uploadedLogo) {
      form.value.logo = uploadedLogo;
      logoPreview.value = URL.createObjectURL(uploadedLogo);
    }
  }

  const loadCompany = () => {
    const { uuid } = route.params;
    store.dispatch('company/showCompanyAsync', uuid)
      .then(response => {
        form.value = response.data;
        logoPreview.value = image(response.data.logo);
      })
  }

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];
        formData.append(key, value);
      }
    }

    return formData;
  }

  const update = () => {
    store.dispatch('company/createCompanyAsync', decorateFormData())
      .then(() => {
        router.push({ name: 'companies' });
      })
  }

  onMounted(() => {
    loadCompany()
    logoPreview.value = image(logoPreview.value)
  })

  return {
    form,
    logoPreview,

    uploadLogo,
    update,
  }
}
