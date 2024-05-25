import axios from "axios";

const BASE_URL = process.env.VUE_APP_API;
const API_KEY = process.env.VUE_APP_API_KEY;
const timeForCancelRequest = 5000;

export const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: timeForCancelRequest,
  headers: {
    Authorization: API_KEY,
  },
});
