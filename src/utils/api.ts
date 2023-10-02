import axios from "axios";

const api = axios.create({
  baseURL: "https://staging-server.eurekatraders.org/api/v1/",
});

export default api;
