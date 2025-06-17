import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "20c935360a7a52afa88b1d6c620c42de",
    language: "pt-BR",
    page: 1
  }
});

export default api;