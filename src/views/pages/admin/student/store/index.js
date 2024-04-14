import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadStudentsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/students', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createStudentAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/students', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showStudentAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/students/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateStudentAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/students/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteStudentAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/students/${uuid}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  // async loadApplicationStatusesListAsync(_, payload) {
  //   return await new Promise((resolve, reject) => {
  //     return httpClient.get('/students/statuses/list')
  //       .then(response => resolve(response))
  //       .catch(error => reject(error));
  //   })
  // },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
