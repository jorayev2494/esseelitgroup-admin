import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadFacultiesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/faculties', payload)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async loadFacultyListAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/faculties/list', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createFacultyAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/faculties', payload)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showFacultyAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/faculties/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateFacultyAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/faculties/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteFacultyAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/faculties/${uuid}`)
        .then(response => {
          return resolve(response);
        })
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
