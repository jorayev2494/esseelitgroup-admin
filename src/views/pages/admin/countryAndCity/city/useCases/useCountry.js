import { ref } from "vue"
import { useStore } from "vuex";

export function useCountry()
{
  const storage = useStore();

  const countries = ref([]);

  const loadCountries = (params = {}) => {
    storage.dispatch('country/loadCountryListAsync', { params }).then(response => {
      countries.value = response.data;
    })
  }

  return {
    countries,

    loadCountries,
  }
}

