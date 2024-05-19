import httpClient from "../http"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  showStaticPageAsync: async (_, { slug }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get(`/static-pages/static-pages/${slug}`)
        .then(resolve)
        .catch(reject)
    })
  },
  updateStaticPageAsync: async (_, { slug, data }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.post(`/static-pages/static-pages/${slug}`, data)
        .then(resolve)
        .catch(reject)
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
