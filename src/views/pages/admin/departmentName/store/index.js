import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  async loadDepartmentNamesListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/departments/names/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadDepartmentNameAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/departments/names', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createDepartmentNameAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/departments/names', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showDepartmentNameAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/departments/names/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateDepartmentNameAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/departments/names/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteDepartmentNameAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/departments/names/${uuid}`)
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
