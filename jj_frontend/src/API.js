
const URL =  "http://localhost:3000/";

const getToken = () => localStorage.getItem("jwt");

const authorizedFetch = (url, options = {}) => {
    return fetch(url, {
      method: options.method,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getToken()}`,
      },
      body: options.body,
    })
  }

const getPrintsCollection = () => {
    fetch(URL + "prints")
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

export default { getPrintsCollection }