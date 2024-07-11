import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  async loadDegreeListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/degrees/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadDegreesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/degrees', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createDegreeAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/degrees', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showDegreeAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/degrees/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateDegreeAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/degrees/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteDegreeAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/degrees/${uuid}`)
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
