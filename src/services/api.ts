import axios from "axios";

const api = axios.create({
  baseURL: "http://gateway.marvel.com:80/v1/public/",
});

export default api;
