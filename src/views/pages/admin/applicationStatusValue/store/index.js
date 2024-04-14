import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  // async loadCityListAsync(_, { params = {} }) {
  //   return await new Promise((resolve, reject) => {
  //     return httpClient.get('/countries/cities/list', { params })
  //       .then(response => resolve(response))
  //       .catch(error => reject(error));
  //   })
  // },

  async loadStatusesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/applications/statuses', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createStatusAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/applications/statuses', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showStatusAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/applications/statuses/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateStatusAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/applications/statuses/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteStatusAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/applications/statuses/${uuid}`)
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
