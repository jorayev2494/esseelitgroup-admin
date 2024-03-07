import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { onMounted, reactive, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { image } = useUrlPattern();
  const { uuid } = route.params;

  const companies = ref([])

  const form = ref({
    company_uuid: '',
    value: '',
    iso: '',
    is_active: true,
  });

  const logoPreview = ref(null);
  const coverPreview = ref(null);

  const decorateData = () => {
    return form.value;
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
    store.dispatch('country/createCountryAsync', { data: decorateData() })
      .then(() => {
        router.push({ name: 'countries' });
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
    logoPreview,
    coverPreview,
    uploadMedia,
    companies,

    uploadLogo,
    uploadCover,

    create,
  }
}
