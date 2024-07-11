const addresses = {
  local: 'http://127.0.0.1:9000',
  develop: 'http://212.24.101.35:9000',
  development: 'http://212.24.101.35:9000',
  production: 'http://31.131.17.136:9000',
}

const endpoint = addresses[process.env.NODE_ENV] ?? addresses['local'];

export function useUrlPattern() {

  const defaultImage = (prefix, w = null, h = null) => require(`@/assets/img/default/${prefix}.jpg`);

  const image = (urlPattern = null, w = null, h = null, prefix = 'avatar') => {
    if (urlPattern !== null) {
      let { width, height, url_pattern } = urlPattern

      const avatarPatterns = {
        endpoint,
        width: w ?? width,
        height: h ?? height,
      }

      for (const key in avatarPatterns) {
        if (Object.hasOwnProperty.call(avatarPatterns, key)) {
          const replace = avatarPatterns[key];
          url_pattern = url_pattern.replaceAll(`{${key}}`, replace)
        }
      }

      return url_pattern
    }

    return defaultImage(prefix, w, h)
  }

  const file = (urlPattern = null) => {
    if (urlPattern !== null) {
      let { url_pattern } = urlPattern

      const avatarPatterns = {
        endpoint: process.env.VUE_APP_STORAGE_URL,
      }

      for (const key in avatarPatterns) {
        if (Object.hasOwnProperty.call(avatarPatterns, key)) {
          const replace = avatarPatterns[key];
          url_pattern = url_pattern.replaceAll(`{${key}}`, replace)
        }
      }

      return url_pattern
    }

    return null;
  }

  return {
    image,
    file,
    defaultImage,
  }
}
