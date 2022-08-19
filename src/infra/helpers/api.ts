import axios from 'axios';

export const api = axios.create({ baseURL: process.env.CRYPTO_API_BASE_URL });
