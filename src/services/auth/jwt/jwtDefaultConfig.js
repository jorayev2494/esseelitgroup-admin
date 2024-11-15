export default {
  // Endpoints
  loginEndpoint: '/auth/login',
  registerEndpoint: '/auth/register',
  refreshEndpoint: '/auth/refresh-token',
  forgotPasswordEndpoint: '/auth/restore-password/link',
  restorePasswordEndpoint: '/auth/restore-password/restore',
  logoutEndpoint: '/auth/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'access_token',
  storageRefreshTokenKeyName: 'refresh_token',
  storageAuthDataKeyName: 'auth_data',
}