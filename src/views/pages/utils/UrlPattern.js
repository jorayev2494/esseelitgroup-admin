const endpoint = process.env.VUE_APP_STORAGE_ENDPOINT;

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
        endpoint,
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
