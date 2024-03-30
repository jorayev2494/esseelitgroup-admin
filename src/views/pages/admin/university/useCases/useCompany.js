import { ref } from "vue"
import { useStore } from "vuex";

export function useCompany()
{
  const store = useStore();

  const companies = ref([])

  const loadCompanies = (params = {}) => {
    store.dispatch('company/loadCompanyListAsync', { params }).then(response => {
      companies.value = response.data.map(({ uuid, name }) => ({
        uuid,
        name,
      }))
    })
  }

  return {
    companies,

    loadCompanies,
  } 
}
