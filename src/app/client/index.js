import Axios from "axios";

const client = Axios.create({
  baseURL: "https://dev.obtenmas.com",
  headers: {
    "Content-Type": "application/json",
  },
});

let loaderCount = 0;

const modifyLoader = (count) => {
  if (count === 0) {
    document.getElementById("loader").style.display = "none";
  } else {
    document.getElementById("loader").style.display = "block";
  }
};

client.interceptors.request.use(
  (config) => {
    modifyLoader(++loaderCount);
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (response) => {
    modifyLoader(--loaderCount);
    return response;
  },
  (error) => {
    loaderCount--;
    return Promise.reject(error);
  }
);

export default client;
