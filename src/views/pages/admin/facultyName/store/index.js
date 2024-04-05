import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  async loadFacultyNamesListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/faculties/names/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadFacultyNameAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/faculties/names', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createFacultyNameAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/faculties/names', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showFacultyNameAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/faculties/names/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateFacultyNameAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/faculties/names/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteFacultyNameAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/faculties/names/${uuid}`)
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
