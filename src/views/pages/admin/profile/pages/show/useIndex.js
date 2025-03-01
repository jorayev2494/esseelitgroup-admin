import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref } from "vue"
import { useStore } from "vuex"
import { useCompany } from '../../useCases/usePartials' 
import useChangeImage from "@/views/pages/useCases/useChangeImage";

export default () => {

  const store = useStore();
  const { image } = useUrlPattern();

  const { imagePreview: avatarPreview } = useChangeImage();
  const { companyPreview, companies, loadCompanies } = useCompany();

  const form = ref({});

  const studentMapper = student => {    
    avatarPreview.value = image(student.avatar);
    student.avatar = '';

    return student;
  }

  const loadStudent = () => {
    store.dispatch('profile/showProfileAsync').then(response => {
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

    companyPreview,
    companies,
  }
}
