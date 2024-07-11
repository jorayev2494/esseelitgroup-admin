import httpClient from "@/services/http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadAnnouncementsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/announcements/announcements', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadAnnouncementListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/announcements/announcements/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createAnnouncementAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/announcements/announcements', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async showAnnouncementAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/announcements/announcements/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async viewAnnouncementAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/announcements/announcements/view/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateAnnouncementAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/announcements/announcements/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteAnnouncementAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/announcements/announcements/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadAnnouncementStatusListAsync(_, { params }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/announcements/announcements/statuses/list`, { params })
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
