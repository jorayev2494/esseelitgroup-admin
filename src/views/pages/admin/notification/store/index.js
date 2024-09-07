import httpClient from "@/services/http"

const state = {
  quantityUnviewed: 0,
}

const getters = {
  getQuantityUnviewed: state => state.quantityUnviewed,
}

const mutations = {
  setQuantityUnviewed: (state, payload) => {
    state.quantityUnviewed = payload ?? 0
  },
  incrementQuantityUnviewed: (state, payload = 1) => {
    state.quantityUnviewed += payload;
  },
  decrementQuantityUnviewed: (state, payload = 1) => {
    state.quantityUnviewed -= payload;
  },
}

const actions = {
  async loadQualityUnviewedNotificationsAsync({ commit },) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/notifications/quantity_unviewed`)
        .then(response => {
          const { data: { quantity_unviewed: quantityUnviewed } } = response;
          commit('setQuantityUnviewed', quantityUnviewed)

          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async loadNotificationListAsync(_, { params = {} }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/notifications/list', { params })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async loadNotificationsAsync(_, payload) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/notifications', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async createNotificationAsync(_, { data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.post('/notifications', data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => reject(error));
    })
  },

  async showNotificationAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/notifications/${uuid}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async updateNotificationAsync(_, { uuid, data }) {
    return await new Promise((resolve, reject) => {
      return httpClient.put(`/notifications/${uuid}`, data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  },

  async deleteNotificationAsync(_, { uuid }) {
    return await new Promise((resolve, reject) => {
      return httpClient.delete(`/notifications/${uuid}`)
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
