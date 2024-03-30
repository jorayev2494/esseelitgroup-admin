import { ref } from "vue"
import { useStore } from "vuex";

export function useCity()
{
  const storage = useStore();

  const cities = ref([]);

  const loadCities = (params = {}) => {
    storage.dispatch('city/loadCityListAsync', { params }).then(response => {
      cities.value = response.data;
    })
  }

  return {
    cities,

    loadCities,
  }
}

