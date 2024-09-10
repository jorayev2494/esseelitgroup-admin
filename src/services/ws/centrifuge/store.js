import httpClient from "@/services/http";

const WS_ACCESS_TOKEN_KEY = 'ws_access_token';

const loadWSAccessToken = () => window.localStorage.getItem(WS_ACCESS_TOKEN_KEY);

const state = {
  WSAccessToken: null,
}

const getters = {
  getWSAccessToken: state => {
    const res = state.WSAccessToken = state.WSAccessToken ?? loadWSAccessToken();

    return res;
  },
}

const mutations = {
  setWSAccessToken: (state, accessToken) => {
    localStorage.setItem(WS_ACCESS_TOKEN_KEY, state.accessToken = accessToken);
  },
}

const actions = {
  async loadWSAccessTokenAsync({ commit }) {
    return await new Promise((resolve, reject) => {
      return httpClient.get('/tokens/centrifuge/generate_connection_token')
        .then(response => {
          const { data: { ws_access_token } } = response;
          commit('setWSAccessToken', ws_access_token);

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
