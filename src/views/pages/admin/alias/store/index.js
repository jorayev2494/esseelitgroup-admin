import httpClient from "@/services/http"

const state = {

}

const getters = {
  
}

const mutations = {

}

const actions = {
  // async loadAliasListAsync(_, { params = {} }) {
  //   return await new Promise((resolve, reject) => {
  //     return httpClient.get('/aliases/list', { params })
  //       .then(response => resolve(response))
  //       .catch(error => reject(error));
  //   })
  // },

  async loadAliasesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/aliases', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createAliasAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/aliases', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showAliasAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/aliases/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateAliasAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/aliases/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteAliasAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/aliases/${uuid}`)
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
