import JwtService from './jwtService'

export default function useJwt(httpClientIns, jwtOverrideConfig) {
  const jwt = new JwtService(httpClientIns, jwtOverrideConfig)

  return {
    jwt,
  }
}
