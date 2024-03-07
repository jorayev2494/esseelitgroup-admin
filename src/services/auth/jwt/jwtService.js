import jwtDefaultConfig from './jwtDefaultConfig';
import router from '@/services/router/index.js';
import store from '@/services/store/index';
// import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';
// import ServerValidateToastificationContent from '@core/components/toastification/ServerValidateToastificationContent.vue';
// import defineAbilityFor from "@/services/acl";
import { toast } from 'vue3-toastify';

export default class JwtService {
  // Will be used by this service for making API calls
  httpClientIns = null

  // jwtConfig <= Will be used by this service
  jwtConfig = {
    ...jwtDefaultConfig
  }

  // For Refreshing Token
  isAlreadyFetchingAccessToken = false

  toast = null

  // For Refreshing Token
  subscribers = []

  constructor(httpClientIns, jwtOverrideConfig) {
    this.httpClientIns = httpClientIns
    this.jwtConfig = {
      ...this.jwtConfig,
      ...jwtOverrideConfig,
    }

    // // Request Interceptor
    // this.httpClientIns.interceptors.request.use(
    //   config => {
    //     // Get token from localStorage
    //     const accessToken = this.getToken()

    //     // If token is present add it to request's Authorization Header
    //     if (accessToken) {
    //       // eslint-disable-next-line no-param-reassign
    //       config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
    //     }
    //     return config
    //   },
    //   error => Promise.reject(error),
    // )

    // Add request/response interceptor
    this.httpClientIns.interceptors.response.use(
      response => response,
      error => {
        const { config, response } = error
        const originalRequest = config

        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true
            this.refreshToken().then(r => {
              this.isAlreadyFetchingAccessToken = false
              const { access_token: accessToken, refresh_token: refreshToken } = r.data;

              // Update accessToken in localStorage
              this.setAccessToken(accessToken)
              this.setRefreshToken(refreshToken)

              this.onAccessTokenFetched(accessToken)
            })
          }

          const retryOriginalRequest = new Promise(resolve => {
            this.addSubscriber(accessToken => {
              // Make sure to assign accessToken according to your response.
              // Check: https://pixinvent.ticksy.com/ticket/2413870
              // Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
              resolve(this.httpClientIns(originalRequest))
            })
          })

          return retryOriginalRequest
        }

        return Promise.reject(error)
      },
    )
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter(callback => callback(accessToken));
  }

  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
  }

  setAccessToken(value) {
    store.commit('auth/setAccessToken', value);
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
  }

  login(...args) {
    return new Promise((resolve, reject) => {
      return this.httpClientIns.post(this.jwtConfig.loginEndpoint, ...args).then(response => {
        const {
          access_token: accessToken,
          refresh_token: refreshToken,
          // auth_data: authData,
        } = response.data;

        this.setAccessToken(accessToken);
        this.setRefreshToken(refreshToken);
        // this.setAuthData();

        // userData.role.permissions = [...userData.role.permissions, ...initialAbility, ...profileAbility]
        // localStorage.setItem('userData', JSON.stringify(userData))
        // this.$ability.update(userData.role.permissions.length ? userData.role.permissions : initialAbility)

        return resolve(response);
      }).catch(error => reject(error));
    });
  }

  register(...args) {
    const response = this.httpClientIns.post(this.jwtConfig.registerEndpoint, ...args);

    return response;
  }

  forgotPassword(...args) {
    return this.httpClientIns.post(this.jwtConfig.forgotPasswordEndpoint, ...args);
  }

  restorePassword(...args) {
    return this.httpClientIns.put(this.jwtConfig.restorePasswordEndpoint, ...args);
  }

  refreshToken() {
    return this.httpClientIns.post(this.jwtConfig.refreshEndpoint, {
      refresh_token: this.getRefreshToken(),
    })
  }

  logout(...args) {
    const serverResponse = this.httpClientIns.post(this.jwtConfig.logoutEndpoint, ...args);

    // Reset ability
    // vue.$ability.update(guestAbility)

    // Remove userData from localStorage
    // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
    const authClearKeys = [
      this.jwtConfig.storageTokenKeyName,
      this.jwtConfig.storageRefreshTokenKeyName,
      this.jwtConfig.storageAuthDataKeyName,
    ];

    authClearKeys.forEach(key => localStorage.removeItem(key));

    // Redirect to login page
    // router.push({
    //   name: 'login'
    // });

    return serverResponse;
  }
}