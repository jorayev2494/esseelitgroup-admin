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

  const translations = {
    name: '',
    description: '',
  }

  const form = reactive({
    logo: '',
    university_uuid: '',
    translations: {},
  });

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
    store.dispatch('university/loadUniversityListAsync').then(response => {
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

  const create = () => {
    store.dispatch('faculty/createFacultyAsync', decorateFormData())
      .then(() => {
        router.push({ name: 'faculties' });
      })
  }

  onMounted(() => {
    loadUniversities();
    logoPreview.value = image(logoPreview.value)
    makeTranslationsForm(form, translations)
  })

  return {
    form,
    translations,
    universities,
    logoPreview,

    uploadLogo,
    create,
  }
}
