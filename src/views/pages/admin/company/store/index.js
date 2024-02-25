import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadCompaniesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/companies', payload)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async createCompanyAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/companies', payload)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showCompanyAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/companies/${payload}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteCompanyAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/companies/${payload}`)
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