import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCompany } from '../../useCases/usePartials' 
import Tr from '@/services/translations/translation'
import useChangeImage from "@/views/pages/useCases/useChangeImage";
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../../acl/constants';

export default () => {

  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const { image } = useUrlPattern();
  const { protectPermission } = useACLProtection();

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

  const studentMapper = student => {    
    avatarPreview.value = student.avatar !== null ? image(student.avatar) : avatarPreview.value;
    student.avatar = '';

    return student;
  }

  const loadStudent = () => {
    protectPermission(RESOURCE_ACTIONS.RESOURCE_SHOW).then(() => {
      store.dispatch('employee/showEmployeeAsync', { uuid }).then(response => {
        form.value = studentMapper(response.data);
      })
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
  }
}
