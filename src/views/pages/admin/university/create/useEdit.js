import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'
import { useCompany } from "../useCases/useCompany";
import { useCountry } from "../useCases/useCountry";
import { useCity } from "../useCases/useCity";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const { image } = useUrlPattern();

  
  const inputs = useInputs()

  const { companies, loadCompanies } = useCompany();
  const { countries, loadCountries } = useCountry();
  const { cities, loadCities } = useCity();

  const form = ref({
    youtube_video_id: '',
    logo: null,
    cover: null,
    name: '',
    label: '',
    company_uuid: '',
    country_uuid: '',
    city_uuid: '',
    description: '',
    translations: {},
    is_on_the_country_list: false,
  });

  const logoPreview = ref(null);
  const coverPreview = ref(null);

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

  const uploadMedia = (event, type) => {
    const uploadedMedia = event.target.files[0];

    if (uploadedMedia) {
      form.value[type] = uploadedMedia;

      if (type === 'logo') {
        logoPreview.value = URL.createObjectURL(uploadedMedia);
      }

      if (type === 'cover') {
        coverPreview.value = URL.createObjectURL(uploadedMedia);
      }      
    }
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

  const create = () => {
    store.dispatch('university/createUniversityAsync', { data: decorateFormData() })
      .then(() => {
        router.push({ name: 'universities' });
      })
  }

  const companyChanged = event => {
    const { value } = event.target;

    loadCountries({ filters: { company_uuid: value } })
    form.value.country_uuid = '';
    form.value.city_uuid = '';
    cities.value = [];
  }

  const countryChanged = event => {
    const { value } = event.target;

    loadCities({ filters: { country_uuids: [value] } })
  }

  watch(() => form.value.youtube_video_id, (newV, oldV) => {
    console.log(newV, oldV);
  })

  onMounted(() => {
    loadCompanies()
    logoPreview.value = image(logoPreview.value)
    coverPreview.value = image(coverPreview.value, 1200, 800, 'cover')
  })

  return {
    form,
    inputs,
    countries,
    cities,
    logoPreview,
    coverPreview,
    uploadMedia,
    companies,

    uploadLogo,
    uploadCover,

    companyChanged,
    countryChanged,
    create,
  }
}
