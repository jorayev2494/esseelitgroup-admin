import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'
import { useName } from "../useCases/useName";
import { useUniversity } from "../useCases/useUniversity";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();
  const inputs = useInputs();
  const { nameSelectedPreview, names, loadNamesList, makeNameSelectedPreview } = useName()
  const { universitiesPreview, universities, loadUniversities } = useUniversity();

  const { uuid } = route.params;

  const logoPreview = ref(null);

  const form = ref({});

  const uploadLogo = event => {
    const uploadedLogo = event.target.files[0];

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

        if (key === 'logo' && ! (value instanceof File)) {
          formData.append(key, '');
          continue;
        }
        
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

  const mapFaculty = faculty => {
    const { name_uuid, logo } = faculty
    form.value = faculty;
    logoPreview.value = logo.url
    makeNameSelectedPreview(item => item.uuid === name_uuid)

    return faculty;
  }

  const loadFaculty = () => {
    store.dispatch('faculty/showFacultyAsync', { uuid }).then(response => {
      form.value = mapFaculty(response.data)
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
    loadNamesList()
    loadUniversities()
  })

  return {
    form,
    names,
    inputs,
    universitiesPreview,
    universities,
    logoPreview,
    nameSelectedPreview,

    uploadLogo,
    update,
  }
}
