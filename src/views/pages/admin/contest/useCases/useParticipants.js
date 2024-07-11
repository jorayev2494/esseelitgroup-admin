import { ref } from "vue";
import { useStore } from "vuex"

export default () => {

  const store = useStore()

  const participants = ref(null);

  const loadParticipants = async (params = {}) => {
    return await new Promise((resolve, reject) => {
      store.dispatch('contest/loadParticipantsAsync', { params })
        .then(response => {
          participants.value = response

          return resolve(response);
        })
        .catch(reject)
    })
  }

  return {
    participants,

    loadParticipants,
  }
}
