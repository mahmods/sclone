import camelize from 'camelize';

export const callApi = (url, options) =>
fetch(url, options)
  .then(
    response => (response.ok
      ? response.json()
      : Promise.reject(response.text())
    ),
    error => Promise.reject(error))
  .then(
    json => ({ json: camelize(json) }),
    error => ({ error }))
  .catch(error => ({ error }));

  const padZero = (num, size) => {
    let s = String(num);
    while (s.length < size) {
      s = `0${s}`;
    }
    return s;
  };

  export const formatSeconds = (num) => {
    const minutes = padZero(Math.floor(num / 60), 2);
    const seconds = padZero(num % 60, 2);
    return `${minutes}:${seconds}`;
  };
  
  export const kFormatter = (num) => {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}