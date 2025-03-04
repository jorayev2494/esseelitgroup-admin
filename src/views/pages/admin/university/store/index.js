import httpClient from "@/services/http"

const state = {
  logo: {
    width: 400,
    height: 400,
  },
  cover: {
    width: 1280,
    height: 568,
  },
}

const getters = {
  getLogoProp: state => prop => state.logo[prop] ?? null,
  getCoverProp: state => prop => state.cover[prop] ?? null,
}

const mutations = {

}

const actions = {
  async loadUniversityListAsync(_, { params }) {
    console.log('Load university params: ', params)
    return await new Promise((resolve, reject) => {
      return httpClient.get('/universities/list', {  params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadUniversitiesAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/universities', payload)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async createUniversityAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/universities', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showUniversityAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/universities/${payload}`)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async updateUniversityAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/universities/${uuid}`, data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async deleteUniversityAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/universities/${uuid}`)
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
