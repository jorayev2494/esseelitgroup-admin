import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  async loadRolesListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/managers/roles/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadRolesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/managers/roles', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createRoleAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/managers/roles', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showRoleAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/managers/roles/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateRoleAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/managers/roles/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updatePermissionsAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/managers/roles/${uuid}/permissions`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteRoleAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/managers/roles/${uuid}`)
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
