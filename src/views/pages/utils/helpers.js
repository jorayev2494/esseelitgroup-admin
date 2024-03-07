export function useDate() {
  const separator = (value, to, from = '/') => value.replaceAll(from, to)

  const formatDate = (date = new Date()) => {
    const year = date.toLocaleString('default', {year: 'numeric'});
    const month = date.toLocaleString('default', {
      month: '2-digit',
    });

    const day = date.toLocaleString('default', {day: '2-digit'});
  
    return [year, month, day].join('-');
  }

  const dateFromTimestamp = timestamp => new Date(timestamp * 1000);

  return {
    separator,
    formatDate,
    dateFromTimestamp,
  }
}