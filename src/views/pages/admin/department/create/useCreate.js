import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();

  const logoPreview = ref(null);

  const universities = ref([]);
  const faculties = ref([]);

  const translations = {
    name: '',
    description: '',
  }

  const form = reactive({
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

  const loadUniversities = () => {
    store.dispatch('university/loadUniversityListAsync', {
      params: {
        
      }
    }).then(response => {
      universities.value = response.data;
    })
  }

  const loadFaculties = ({ target }) => {
    const universityUuid = target.value;

    store.dispatch('faculty/loadFacultyListAsync', {
      params: {
        filter_by_university_uuid: universityUuid,
      }
    }).then(response => {
      faculties.value = response.data;
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
    loadUniversities()
    logoPreview.value = image(logoPreview.value)
    makeTranslationsForm(form, translations)
  })

  return {
    form,
    activityOptions,
    translations,
    universities,
    faculties,
    logoPreview,
    
    loadFaculties,
    uploadLogo,
    create,
  }
}
