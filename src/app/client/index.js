import Axios from "axios";

const client = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

let loaderCount = 0;

/**
 * Modifies the loader element's display based on the count value.
 * If the count is 0, the loader element will be hidden. Otherwise, it will be displayed.
 * @param {number} count - The count value to determine the display of the loader element.
 */
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
  (error) => {
    modifyLoader(--loaderCount);
    Promise.reject(error);
  }
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
