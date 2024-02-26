import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();

  const { uuid } = route.params;

  const logoPreview = ref(null);

  const universities = ref([]);

  const form = ref({
    logo: '',
    university_uuid: '',
    translations: {},
  });

  const uploadLogo = event => {
    const uploadedLogo = event.target.files[0];

    if (uploadedLogo) {
      form.value.logo = uploadedLogo;
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

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];
        
        if (key === 'translations') {
          console.log('aaa key: ', key, 'Value: ', form.value, 'value: ', value);
          for (const kk in value) {
            console.log('aaa kk: ', kk, 'value: ', value)
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

        console.log('Key: ', key, 'Value: ', value)

        formData.append(key, value);
      }
    }

    return formData;
  }

  const loadFaculty = () => {
    store.dispatch('faculty/showFacultyAsync', { uuid }).then(response => {
      const { logo } = response.data
      form.value = response.data;
      logoPreview.value = logo.url
    })
  }

  const update = () => {
    store.dispatch('faculty/updateFacultyAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'faculties' });
      })
  }

  onMounted(() => {
    loadFaculty()
    loadUniversities()
    logoPreview.value = image(logoPreview.value)
  })

  return {
    form,
    universities,
    logoPreview,

    uploadLogo,
    update,
  }
}
