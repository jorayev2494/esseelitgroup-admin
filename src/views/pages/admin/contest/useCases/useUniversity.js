import { ref } from "vue";
import { useStore } from "vuex";

export function useUniversity()
{
  const store = useStore();

  const universities = ref([]);

  const loadUniversities = (params = {}) => {
    store.dispatch('university/loadUniversityListAsync', { params }).then(response => {
      universities.value = response.data;
    })
  }

  return {
    universities,

    loadUniversities,
  }
}
