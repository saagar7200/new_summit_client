import axios from "axios";

// axios intance

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// inceptors
api.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers.Authorization = access_token;
    }

    return config;
  },
  (error) => {
   return  Promise.reject(error);
  },
);

export default api;
