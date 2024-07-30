import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();
  const { protectPermission } = useACLProtection();

  const logoPreview = ref(null);

  const form = ref({
    name: '',
    email: '',
    is_main: '',
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

        if (key === 'logo' && ! (value instanceof File)) {
          formData.append(key, '');
          continue;
        }

        formData.append(key, value);
      }
    }

    return formData;
  }

  const update = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_UPDATE).then(() => {
      store.dispatch('company/updateCompanyAsync', { uuid: route.params.uuid, data: decorateFormData() })
        .then(() => {
          router.push({ name: 'companies' });
        })
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
