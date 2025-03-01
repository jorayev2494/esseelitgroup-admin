import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";
import { useStore } from "vuex"
import { useCompany } from '../../useCases/usePartials' 
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { toast } from "vue3-toastify";
import { useI18n } from "vue-i18n";

export default () => {

  const route = useRoute();
  const store = useStore();
  const { image } = useUrlPattern();
  const { t } = useI18n();

  const { uuid } = route.params;

  const { imagePreview: avatarPreview, uploadImage: uploadAvatar } = useChangeImage();
  const { companyPreview, companies, loadCompanies } = useCompany();

  const form = ref({});

  const getData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        formData.append(key, value);
      }
    }

    return formData;
  };

  const update = () => {
    store.dispatch('profile/updateProfileAsync', { uuid, data: getData() })
      .then(() => {
        toast.success(t('profile.flash_messages.success.profile_was_updated'))
      })
  }

  const studentMapper = student => {    
    avatarPreview.value = image(student.avatar);
    student.avatar = '';

    return student;
  }

  const loadStudent = () => {
    store.dispatch('profile/showProfileAsync', { uuid }).then(response => {
      form.value = studentMapper(response.data);
    })
  }

  onMounted(() => {
    loadStudent();
    loadCompanies();
  })

  return {
    form,
    avatarPreview,
    uploadAvatar,

    companyPreview,
    companies,

    update,
  }
}
