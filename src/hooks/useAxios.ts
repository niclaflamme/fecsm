import axios from "axios";

export const useAxios = () => {
  const baseURL = import.meta.env.VITE__BACKEND_URL as string;

  const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  return instance;
};
