import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadApplicationsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/applications', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createApplicationAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/applications', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showApplicationAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/applications/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateApplicationAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/applications/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteApplicationAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/applications/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async loadApplicationStatusesListAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/applications/status-list')
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
