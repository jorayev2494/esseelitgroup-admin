import { ref } from "vue";
import { useStore } from "vuex";

export function useFacultyName()
{
  const store = useStore();

  const facultyNamesPreview = ref(null);
  const facultyNames = ref([]);

  const loadFacultyNames = (params) => {
    store.dispatch('facultyName/loadFacultyNamesListAsync', { params })
      .then(response => {
        facultyNames.value = response.data;
      })
  }

  return {
    facultyNamesPreview,
    facultyNames,

    loadFacultyNames,
  }
}