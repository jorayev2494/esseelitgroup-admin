import { ref } from "vue";
import { useStore } from "vuex"

export default () => {

  const store = useStore()

  const participants = ref(null);

  const loadParticipants = (params = {}) => {

    store.dispatch('contest/loadParticipantsAsync', { params })
      .then(response => {
        participants.value = response
      })
  }

  return {
    participants,

    loadParticipants,
  }
}
