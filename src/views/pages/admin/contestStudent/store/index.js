import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadContestStudentsAsync(_, { contestUuid, params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/contests/contests/${contestUuid}/students`, { params })
        .then(resolve)
        .catch(reject);
    })
  },
  async createContestStudentAsync(_, { contestUuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/contests/contests/${contestUuid}/students`)
        .then(resolve)
        .catch(reject);
    })
  },
  async showContestStudentAsync(_, { contestUuid, code }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/contests/contests/${contestUuid}/students/${code}`)
        .then(resolve)
        .catch(reject);
    })
  },
  async updateContestStudentAsync(_, { contestUuid, code, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/contests/contests/${contestUuid}/students/${code}`, data)
        .then(resolve)
        .catch(reject);
    })
  },
  async deleteContestStudentAsync(_, { contestUuid, code }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/contests/contests/${contestUuid}/students/${code}`)
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
