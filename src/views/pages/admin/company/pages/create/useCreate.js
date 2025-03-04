import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const { image } = useUrlPattern();
  const { protectPermission } = useACLProtection();
  const { t } = useI18n();

  const logoPreview = ref(null);

  const form = ref({
    name: '',
    email: '',
    logo: '',
    is_main: false,
  });

  const uploadLogo = event => {
    const [uploadedLogo] = event.target.files;

    if (uploadedLogo) {
      form.value.logo = uploadedLogo;
      logoPreview.value = URL.createObjectURL(uploadedLogo);
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

    console.log('awdawd decorateFormData: ', formData)

    return formData;
  }

  const create = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_CREATE).then(async () => {
      await store.dispatch('company/createCompanyAsync', { data: decorateFormData() })
        .then(() => {
          router.push({ name: 'companies' }).then(() => {
            toast.success(t('company.flash_messages.success.company_was_created'));
          });
        })
    })
  }

  onMounted(() => {
    logoPreview.value = image(logoPreview.value)
  })

  return {
    RESOURCE_ACTIONS,

    form,
    logoPreview,

    uploadLogo,
    create,
  }
}
