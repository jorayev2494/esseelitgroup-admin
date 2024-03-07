import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useInputs } from '../useCases/usePartials'

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();
  const { uuid } = route.params;

  const companies = ref([])
  const inputs = useInputs()

  const form = ref({
    youtube_video_id: '',
    logo: null,
    cover: null,
    name: '',
    label: '',
    company_uuid: '',
    description: '',
    translations: {
      // en: {
      //   name: '',
      //   label: '',
      //   description: '',
      // },
      // ru: {
      //   name: '',
      //   label: '',
      //   description: '',
      // },
    },
  });

  const logoPreview = ref(null);
  const coverPreview = ref(null);

  const decorateFormData = () => {
    const formData = new FormData();

    for (const key in form.value) {
      if (Object.hasOwnProperty.call(form.value, key)) {
        const value = form.value[key];

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

  const loadCompanies = () => {
    store.dispatch('company/loadCompanyListAsync', { params: {} }).then(response => {
      companies.value = response.data.map(({ uuid, name }) => ({
        uuid,
        name,
      }))
    })
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
    logoPreview,
    coverPreview,
    uploadMedia,
    companies,

    uploadLogo,
    uploadCover,

    create,
  }
}
