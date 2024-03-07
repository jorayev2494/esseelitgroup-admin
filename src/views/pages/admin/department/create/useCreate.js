import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'
import useCompany from '../../globalUseCases/useCompany';

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();
  const { companies, loadCompanies } = useCompany()

  const logoPreview = ref(null);

  const universities = ref([]);
  const faculties = ref([]);

  const inputs = useInputs();

  const translations = {
    name: '',
    description: '',
  }

  const form = reactive({
    company_uuid: '',
    university_uuid: '',
    faculty_uuid: '',
    is_active: '',
    translations: {},
  });
  
  const activityOptions = {
    active: true,
    notActive: false,
  }

  const makeTranslationsForm = (form, translations) => {
    const clientSupportedLocales = getCurrentInstance().appContext.config.globalProperties.$clientSupportedLocales;

    clientSupportedLocales.forEach(locale => {
      form.translations[locale] = { ...translations };
    });
  }

  const uploadLogo = event => {
    const uploadedLogo = event.target.files[0];

    if (uploadedLogo) {
      form.logo = uploadedLogo;
      logoPreview.value = URL.createObjectURL(uploadedLogo);
    }
  }

  const loadUniversities = (params = {}) => {
    store.dispatch('university/loadUniversityListAsync', { params }).then(response => {
      universities.value = response.data;
    })
  }

  const loadFaculties = (params) => {
    store.dispatch('faculty/loadFacultyListAsync', { params })
      .then(response => {
        faculties.value = response.data;
      })
  }

  const companyWasChanged = event => {
    const uuid = event.target.value;
    
    form.university_uuid = null;
    form.faculty_uuid = null;

    universities.value = [];
    faculties.value = [];

    loadUniversities({
      filter_by_company_uuid: uuid,
    });
  }

  const universityWasChanged = event => {
    const uuid = event.target.value;

    form.faculty_uuid = null;

    faculties.value = [];

    loadFaculties({
      filter_by_university_uuid: uuid,
    })
  }

  const getData = () => form;

  const create = () => {
    store.dispatch('department/createDepartmentAsync', { data: getData() })
      .then(() => {
        router.push({ name: 'departments' });
      })
  }

  onMounted(() => {
    loadCompanies()
    logoPreview.value = image(logoPreview.value)
    makeTranslationsForm(form, translations)
  })

  return {
    form,
    companies,
    inputs,
    activityOptions,
    translations,
    universities,
    faculties,
    logoPreview,
    
    companyWasChanged,
    universityWasChanged,
    loadFaculties,
    uploadLogo,
    create,
  }
}
