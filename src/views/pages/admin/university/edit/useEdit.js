import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'
import { useCountry } from "../useCases/useCountry";
import { useCity } from "../useCases/useCity";
import { useCropper } from '../useCases/useCropper';
import { useUrlPattern } from "@/views/pages/utils/UrlPattern";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { uuid } = route.params;
  const { image } = useUrlPattern();

  const form = ref({});
  const inputs = useInputs();

  const {
    logoPreview,
    coverPreview,
    modalBindings,

    uploadMedia,
    croppedMedia,
  } = useCropper({ form });

  const { countries, loadCountries } = useCountry();
  const { cities, loadCities } = useCity();

  const loadUniversity = () => {
    store.dispatch('university/showUniversityAsync', uuid)
      .then(response => {
        const { logo, cover, country_uuid } = response.data
        form.value = response.data;

        logoPreview.value = image(logo)
        coverPreview.value = image(cover)

        loadCities({ filters: { country_uuids: [country_uuid] } })
      })
  }

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

        if (key === 'logo' || key === 'cover') {
          console.log('typeof(value): ', typeof(value), value instanceof File)
          if (! (value instanceof File)) {
            formData.append(key, '');
            continue;
          }
        }

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

  const uploadLogo = event => {
    const uploadedLogo = event.target.files[0];

    if (uploadedLogo) {
      form.value.logo = uploadedLogo;
      logoPreview.value = URL.createObjectURL(uploadedLogo);
    }
  }

  const uploadCover = event => {
    const uploadedCover = event.target.files[0];

    if (uploadedCover) {
      form.value.cover = uploadedCover;
      coverPreview.value = URL.createObjectURL(uploadedCover);
    }
  }

  const countryChanged = event => {
    const { value } = event.target;

    loadCities({ filters: { country_uuids: [value] } })
  }

  const update = () => {
    store.dispatch('university/updateUniversityAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'universities' });
      })
  }

  onMounted(() => {
    loadUniversity()
    loadCountries()
  })

  return {
    form,
    inputs,
    logoPreview,
    coverPreview,
    uploadMedia,
    countries,
    cities,

    croppedMedia,
    modalBindings,

    countryChanged,
    uploadLogo,
    uploadCover,

    update,
  }
}
