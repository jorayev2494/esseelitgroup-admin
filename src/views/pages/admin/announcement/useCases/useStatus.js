import { ref } from "vue"
import { useStore } from "vuex"

export default () => {
  const store = useStore()

  const statusSelectedPreview = ref(null)
  const statuses = ref()

  const loadStatusList = (params = {}) => {
    store.dispatch('announcement/loadAnnouncementStatusListAsync', { params })
      .then(response => {
        statuses.value = response.data
      })
  }

  return {
    statusSelectedPreview,
    statuses,

    loadStatusList,
  }
}