import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  // async loadLanguagesListAsync(_, { params = {} }) {
  //   return await new Promise((resolve, reject) => {
  //     return httpClient.get('/languages/list', { params })
  //       .then(response => resolve(response))
  //       .catch(error => reject(error));
  //   })
  // },

  async loadLanguagesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/languages', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createLanguageAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/languages', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showLanguageAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/languages/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateLanguageAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/languages/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteLanguageAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/languages/${uuid}`)
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
