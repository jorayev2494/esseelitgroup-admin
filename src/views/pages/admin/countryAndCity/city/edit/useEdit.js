import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex"
import { useCountry } from "../useCases/useCountry";
import { useInput } from "../useCases/useInput";

export default function useEdit() {

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { countries, loadCountries } = useCountry();
  const { uuid } = route.params;

  const form = ref({});
  const companies = ref([]);
  const inputs = useInput();

  const loadCity = () => {
    store.dispatch('city/showCityAsync', { uuid })
      .then(response => {
        form.value = response.data;
        loadCountries({ filters: { company_uuid: response.data.company_uuid } })
      })
  }

  const decorateFormData = () => {
    return form.value;
  }

  const loadCompanies = () => {
    store.dispatch('company/loadCompanyListAsync', { params: {} }).then(response => {
      companies.value = response.data.map(({ uuid, name }) => ({
        uuid,
        name,
      }))
    })
  }

  const update = () => {
    store.dispatch('city/updateCityAsync', { uuid, data: decorateFormData() })
      .then(() => {
        router.push({ name: 'countries' });
      })
  }

  const companyChanged = event => {
    const { value } = event.target;

    loadCountries({ filters: { company_uuid: value } })
  }

  onMounted(() => {
    loadCity()
    loadCompanies()
  })

  return {
    form,
    inputs,
    companies,
    countries,

    companyChanged,
    update,
  }
}
