const keyName = 'auth_data'

const getAuthData = () => {
  const authData = localStorage.getItem(keyName);

  return authData !== null ? state.authData = JSON.parse(authData) : null;
}

// const loadAccessToken = () => window.localStorage.getItem('access_token');

const state = {
  accessToken: null,
  keyName,
  authData: null,
}

const getters = {
  getAccessToken: state => state.accessToken ?? window.localStorage.getItem('access_token'),
  getAuthData: state => state.authData ?? getAuthData(),
  getAuthDataProperty: state => prop => {
    const authData = getAuthData();

    return authData !== null ? authData[prop] : null
  },
  getKeyName: state => state.keyName,
}

const mutations = {
  setAccessToken: (state, accessToken) => {
    state.accessToken = accessToken
  },
  setAuthData: (state, payload) => {
    state.authData = payload;
    localStorage.setItem(state.keyName, JSON.stringify(payload));
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
