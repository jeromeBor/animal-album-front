import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL_ENDPOINT,
  timeout: 5000,
});

export default api;
