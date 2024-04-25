import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCompany } from '../../useCases/usePartials' 
import Tr from '@/services/translations/translation'
import useChangeImage from "@/views/pages/useCases/useChangeImage";

export default () => {

  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const { image } = useUrlPattern();

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
    store.dispatch('employee/updateEmployeeAsync', { uuid, data: getData() })
      .then(() => {
        router.push(Tr.makeRoute({ name: 'employees' }))
      })
  }

  const studentMapper = student => {    
    avatarPreview.value = student.avatar !== null ? student.avatar.url : avatarPreview.value;
    student.avatar = '';

    return student;
  }

  const loadStudent = () => {
    store.dispatch('employee/showEmployeeAsync', { uuid }).then(response => {
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
