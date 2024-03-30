import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs, useCompanies } from '../useCases/usePartials'

export default function useCreate() {

  const store = useStore();
  const router = useRouter();
  const { image } = useUrlPattern();
  const { companies, loadCompanies } = useCompanies();

  const logoPreview = ref(null);
  const inputs = useInputs();

  const universities = ref([]);

  const form = reactive({
    logo: '',
    company_uuid: '',
    university_uuid: '',
    translations: {},
  });

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

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        const value = form[key];

        if (key === 'translations') {
          for (const kk in value) {
            if (Object.hasOwnProperty.call(value, kk)) {
              const vv = value[kk];
              console.log('Nested: ', kk, 'vv: ', vv);

              for (const k in vv) {
                if (Object.hasOwnProperty.call(vv, k)) {
                  const v = vv[k];
                  console.log('Nested - Nested: ', k, 'v: ', v);
                  
                  formData.append(`${key}[${kk}][${k}]`, v);

                }
              }

            }
          }
          continue;
        }


        formData.append(key, value);
      }
    }

    return formData;
  }

  const companyWasChanged = event => {
    const uuid = event.target.value;
    
    form.university_uuid = null;

    universities.value = [];

    loadUniversities({
      filters: {
        company_uuid: uuid,
      }
    });
  }

  const create = () => {
    store.dispatch('faculty/createFacultyAsync', decorateFormData())
      .then(() => {
        router.push({ name: 'faculties' });
      })
  }

  onMounted(() => {
    loadCompanies();
    logoPreview.value = image(logoPreview.value)
  })

  return {
    form,
    inputs,
    companies,
    universities,
    logoPreview,

    companyWasChanged,
    uploadLogo,
    create,
  }
}
