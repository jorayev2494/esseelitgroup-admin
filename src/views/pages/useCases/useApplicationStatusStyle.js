export const useApplicationStatusStyle = (status, hasBorderRadius = false) => {
  const statusClasses = {
    color: status.text_color,
    backgroundColor: status.background_color,
  }

  // if (hasBorderRadius) {
    statusClasses.borderRadius = '5px';
  // }

  return statusClasses;
}