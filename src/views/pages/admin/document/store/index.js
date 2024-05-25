import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadDocumentsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/documents/documents', payload)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async loadDocumentListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/documents/documents/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createDocumentAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/documents/documents', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showDocumentAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/documents/documents/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateDocumentAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/documents/documents/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteDocumentAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/documents/documents/${payload}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async loadDocumentTypeListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/documents/documents/types/list', { params })
        .then(resolve)
        .catch(reject);
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