import httpClient from "@/services/http"

const loadAccessToken = () => window.localStorage.getItem('access_token');

const state = {

}

const getters = {
  getAccessToken: state => loadAccessToken(),
}

const mutations = {

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
