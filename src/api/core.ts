import axios from "axios";

const BASE_URL = process.env.VUE_APP_API;
const API_KEY = process.env.VUE_APP_API_KEY;

export const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: API_KEY,
  },
});
