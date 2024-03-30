import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCountry } from "../useCases/useCountry";
import { useInput } from "../useCases/useInput";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const { countries, loadCountries } = useCountry();

  const companies = ref([])

  const form = ref({
    company_uuid: '',
    country_uuid: '',
    value: '',
    translations: {},
    // is_active: true,
  });

  const inputs = useInput();

  const decorateData = () => {
    return form.value;
  }

  const create = () => {
    store.dispatch('city/createCityAsync', { data: decorateData() })
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

  const companyChanged = event => {
    const { value } = event.target;

    loadCountries({ filters: { company_uuid: value } })
  }

  onMounted(() => {
    loadCompanies()
  })

  return {
    form,
    inputs,
    companies,
    countries,

    companyChanged,
    create,
  }
}
