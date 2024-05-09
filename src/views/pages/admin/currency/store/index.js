import httpClient from "@/services/http"

const state = {
  
}

const getters = {

}

const mutations = {

}

const actions = {
  loadCurrencyListAsync: async (_, { params }) => {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/currencies/currencies/list', { params })
      .then(resolve)
      .then(reject)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
