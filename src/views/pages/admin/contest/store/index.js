import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadContestsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/contests/contests', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadContestListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/contests/contests/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createContestAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/contests/contests', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showContestAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/contests/contests/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateContestAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/contests/contests/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteContestAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/contests/contests/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async loadParticipantsAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/contests/contests/participants', { params })
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
