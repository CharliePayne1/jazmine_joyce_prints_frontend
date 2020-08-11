
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

const validateUser = async () => {
  try {
    const res = await fetch(URL + "admin", {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        }
    });
    return await res.json();
  } catch (error) { console.log(error) }
}

const logInUser = (userData) => {
  return fetch(URL + `login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userData }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        return res;
      })
}


export default { getPrintsCollection, validateUser, logInUser }