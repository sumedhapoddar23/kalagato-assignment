import axios from "axios";

let ip = "https://shrouded-oasis-94153.herokuapp.com";

export const rootPath = ip + "";

axios.defaults.withCredentials = false;

const api = axios.create({
  baseURL: rootPath,
});

export const logout = () => {
  window.location.href = "/unauthorized";
};

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    try {
      if (error.response.status === 401) {
        logout();
      }
    } catch (err) {
      return Promise.reject(error);
    }
  }
);

export default api;
