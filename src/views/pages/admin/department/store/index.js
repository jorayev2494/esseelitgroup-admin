import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadDepartmentsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/departments', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadDepartmentListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/departments/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createDepartmentAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/departments', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showDepartmentAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/departments/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateDepartmentAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/departments/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteDepartmentAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/departments/${uuid}`)
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
