import httpClient from "@/services/http"

// const loadAccessToken = () => window.localStorage.getItem('access_token');

const state = {
  accessToken: null,
}

const getters = {
  getAccessToken: state => state.accessToken ?? window.localStorage.getItem('access_token'),
}

const mutations = {
  setAccessToken: (state, accessToken) => {
    state.accessToken = accessToken
  },
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
