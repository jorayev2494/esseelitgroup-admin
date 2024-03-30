import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"

export default function useEdit() {

  const store = useStore();
  const router = useRouter();

  const companies = ref([])

  const form = ref({
    company_uuid: '',
    value: '',
    iso: '',
    is_active: true,
  });

  const decorateData = () => {
    return form.value;
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
  })

  return {
    form,
    companies,

    create,
  }
}
