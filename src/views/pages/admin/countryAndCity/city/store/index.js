import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  async loadCityListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/countries/cities/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadCitiesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/countries/cities', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createCityAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/countries/cities', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showCityAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/countries/cities/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateCityAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/countries/cities/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteCityAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/countries/cities/${uuid}`)
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
