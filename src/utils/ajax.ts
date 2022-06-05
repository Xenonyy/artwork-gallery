import axios from 'axios';

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? `${process.env.NEXT_PUBLIC_APP_URL ?? ''}/api`;

export const ajax = axios.create({
  baseURL: apiBaseUrl,
});
