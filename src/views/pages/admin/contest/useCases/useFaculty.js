import { ref } from "vue";
import { useStore } from "vuex";

export function useFaculty()
{
  const store = useStore();

  const facultiesPreview = ref(null);
  const faculties = ref([]);

  const loadFaculties = (params) => {
    store.dispatch('faculty/loadFacultyListAsync', { params })
      .then(response => {
        faculties.value = response.data;
      })
  }

  return {
    facultiesPreview,
    faculties,

    loadFaculties,
  }
}