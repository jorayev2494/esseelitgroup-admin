import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadManagersAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/managers/managers', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createManagerAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/managers/managers', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showManagerAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/managers/managers/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateManagerAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/managers/managers/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteManagerAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/managers/managers/${uuid}`)
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
