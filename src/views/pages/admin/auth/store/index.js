import { jwtDecode } from "jwt-decode";
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
  permissions: null,
}

const getters = {
  getAccessToken: state => state.accessToken = state.accessToken ?? window.localStorage.getItem('access_token'),
  getAuthData: state => state.authData = state.authData ?? getAuthData(),
  getAuthDataProperty: state => prop => {
    const authData = getAuthData();

    return authData !== null ? authData[prop] : null
  },
  getKeyName: state => state.keyName,
  getRole: state => {
    getAuthData();

    return state.authData !== null ? state.authData['role'] : null
  },
  getPermissions: state => state.permissions ?? [],
}

const mutations = {
  setAccessToken: (state, accessToken) => {
    state.accessToken = accessToken
  },
  setAuthData: (state, payload) => {
    state.authData = payload;
    localStorage.removeItem(state.keyName);
    localStorage.setItem(state.keyName, state.authData = JSON.stringify(payload));
  },
  setPermissions: (state, accessToken) => {
    const { role: { permissions } } = jwtDecode(accessToken);

    state.permissions = permissions ?? [];
  }
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
