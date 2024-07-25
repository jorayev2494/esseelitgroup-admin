import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  async loadPermissionsListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/managers/roles/permissions/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadRolePermissionsListAsync(_, { roleUuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/managers/roles/${roleUuid}/permissions`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadPermissionsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/managers/roles/permissions', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createPermissionAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/managers/roles/permissions', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showPermissionAsync(_, { id }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/managers/roles/permissions/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updatePermissionAsync(_, { id, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/managers/roles/permissions/${id}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deletePermissionAsync(_, { id }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/managers/roles/permissions/${id}`)
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
