import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async showProfileAsync(_) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/profile/profiles`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateProfileAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/profile/profiles`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
