import { ref } from "vue"
import { useStore } from "vuex";

export function useName()
{
  const store = useStore()

  const names = ref([]);
  const nameSelectedPreview = ref(null)

  const loadNamesList = (params = {}) => {
    store.dispatch('departmentName/loadDepartmentNamesListAsync', { params }).then(response => {
      names.value = response.data
    })
  }

  const makeNameSelectedPreview = (callback, column = null) => {
    const foundName = names.value.find(callback)

    nameSelectedPreview.value = column !== null ? foundName[column] : foundName;
  }

  return {
    nameSelectedPreview,
    names,

    loadNamesList,
    makeNameSelectedPreview,
  }
}