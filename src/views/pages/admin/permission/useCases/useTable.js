export function rowBgClass({ resource }) {
  // https://getbootstrap.com/docs/5.3/utilities/background/
  const resourceClasses = {
    country: 'bg-danger text-white bg-opacity-70',
    language: 'bg-danger text-black bg-opacity-50',
  }

  return resourceClasses[resource] ?? 'bg-success text-black bg-opacity-10';
}
