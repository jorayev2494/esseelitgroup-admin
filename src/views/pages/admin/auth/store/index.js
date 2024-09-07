import { jwtDecode } from "jwt-decode";
const keyName = 'auth_data'

const getAuthData = async () => {
  const authData = await localStorage.getItem(keyName);

  return authData !== null ? state.authData = await JSON.parse(authData) : null;
}

const loadAccessToken = () => window.localStorage.getItem('access_token');

const state = {
  accessToken: null,
  keyName,
  authData: null,
  permissions: null,
}

const getters = {
  getAccessToken: state => state.accessToken = state.accessToken ?? loadAccessToken(),
  getAuthData: async state => state.authData = state.authData ?? await getAuthData(),
  getAuthDataProperty: state => prop => {
    const authData = state.authData ?? getAuthData();

    return authData !== null ? authData[prop] : null
  },
  getKeyName: state => state.keyName,
  getRole: state => {
    getAuthData();

    return state.authData !== null ? state.authData['role'] : null
  },
  getPermissions: state => {
    if (! Array.isArray(state.permissions) || ! state.permissions.length) {
      const { role: { permissions } } = jwtDecode(loadAccessToken());

      state.permissions = permissions;
    }

    return state.permissions ?? [];
  },
  isAuthenticated: () => typeof(loadAccessToken()) === 'string',
}

const mutations = {
  setAccessToken: (state, accessToken) => {
    localStorage.setItem('access_token', state.accessToken = accessToken);
  },
  setAuthData: (state, payload) => {
    state.authData = payload;
    localStorage.removeItem(state.keyName);
    localStorage.setItem(state.keyName, JSON.stringify(payload));
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
