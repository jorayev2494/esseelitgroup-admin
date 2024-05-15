import { ref } from "vue"
import { useStore } from "vuex"

export default () => {
  const store = useStore()

  const applicationStatusPreview = ref(null)
  const applicationStatuses = ref([])

  const loadApplicationStatuses = (params = {}) => {
    store.dispatch('applicationStatusValue/loadStatusListAsync', { params })
      .then(response => {
        applicationStatuses.value = response.data
      })
  }

  return {
    applicationStatusPreview,
    applicationStatuses,

    loadApplicationStatuses,
  }
}
