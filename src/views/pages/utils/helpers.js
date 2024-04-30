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

  const convertToDateTimeLocalString = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  const dateTimeFromTimestamp = timestamp => convertToDateTimeLocalString(new Date(timestamp * 1000));

  return {
    separator,
    formatDate,
    dateFromTimestamp,
    dateTimeFromTimestamp,
  }
}