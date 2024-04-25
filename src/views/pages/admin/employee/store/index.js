import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadEmployeesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/companies/employees', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createEmployeeAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/companies/employees', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showEmployeeAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/companies/employees/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateEmployeeAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/companies/employees/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteEmployeeAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/companies/employees/${uuid}`)
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
