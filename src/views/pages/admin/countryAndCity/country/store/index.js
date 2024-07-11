import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  async loadCountryListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/countries/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadCountriesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/countries', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createCountryAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/countries', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showCountryAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/countries/${payload}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateCountryAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/countries/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteCountryAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/countries/${uuid}`)
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
