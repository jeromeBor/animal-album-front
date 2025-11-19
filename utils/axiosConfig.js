import axios from 'axios';

// Use Next.js public env var if available; fallback to localhost:5000 (api server)
const DEFAULT_API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const $axios = axios.create({
  baseURL: DEFAULT_API_URL,
  // you can set other defaults here, e.g. timeout, headers
  // timeout: 5000,
});

export default $axios;
