import { ref } from "vue";
import { useStore } from "vuex";

export default function useDegree()
{
  const store = useStore();

  const degreesPreviews = ref([]);
  const degrees = ref([]);

  const loadDegrees = (params = {}) => {
    store.dispatch('degree/loadDegreeListAsync', { params }).then(response => {
      degrees.value = response.data.map(({ uuid, value }) => ({ uuid, value }));
    })
  }

  return {
    degreesPreviews,
    degrees,

    loadDegrees,
  };
}