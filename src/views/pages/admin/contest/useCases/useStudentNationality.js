import { ref } from "vue"
import { useStore } from "vuex"

export default () => {
  const store = useStore()

  const studentNationalityPreview = ref(null)
  const studentNationalities = ref([])

  const loadStudentNationalities = (params = {}) => {
    store.dispatch('country/loadCountryListAsync', { params })
      .then(response => {
        studentNationalities.value = response.data
      })
  }

  return {
    studentNationalityPreview,
    studentNationalities,

    loadStudentNationalities,
  }
}
