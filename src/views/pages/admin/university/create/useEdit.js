import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'
import { useCountry } from "../useCases/useCountry";
import { useCity } from "../useCases/useCity";
import { useCropper } from '../useCases/useCropper';

export default function useEdit() {

  const store = useStore();
  const router = useRouter();

  const inputs = useInputs();

  const { countries, loadCountries } = useCountry();
  const { cities, loadCities } = useCity();

  const form = ref({
    youtube_video_id: '',
    logo: null,
    cover: null,
    name: '',
    label: '',
    country_uuid: '',
    city_uuid: '',
    description: '',
    translations: {},
    is_on_the_country_list: false,
  });

  const {
    logoPreview,
    coverPreview,
    modalBindings,

    uploadMedia,
    croppedMedia,
  } = useCropper({ form });

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        if (key === 'is_on_the_country_list') {
          formData.append(key, value === true ? 1 : 0);
          continue;
        }

        if (key === 'translations') {
          for (const kk in value) {
            if (Object.hasOwnProperty.call(value, kk)) {
              const vv = value[kk];

              for (const k in vv) {
                if (Object.hasOwnProperty.call(vv, k)) {
                  const v = vv[k];
                  
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
    store.dispatch('university/createUniversityAsync', { data: decorateFormData() })
      .then(() => {
        router.push({ name: 'universities' });
      })
  }

  const countryChanged = event => {
    const { value } = event.target;

    loadCities({ filters: { country_uuids: [value] } })
  }

  watch(() => form.value.youtube_video_id, (newV, oldV) => {
    console.log(newV, oldV);
  })

  onMounted(() => {
    loadCountries();
  })

  return {
    form,
    inputs,
    countries,
    cities,
    logoPreview,
    coverPreview,
    uploadMedia,
    croppedMedia,
    modalBindings,

    countryChanged,
    create,
  }
}
