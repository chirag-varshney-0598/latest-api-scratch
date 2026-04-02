import axios from "axios";
import { tokenManager } from "./tokenManager";
import { extractErrorMessage } from "./errorHandler";
import { showError } from "../utils/toast";

export const http = axios.create({
  baseURL: import.meta.env.VITE_APIM_URL,
  timeout: 20000,
});

// Request interceptor → attach token
http.interceptors.request.use((config) => {
  const token = tokenManager.getAccessToken();
  if (token) config.headers.token = `${token}`;
  return config;
});

// Response interceptor → normalize + toast + auto redirect
http.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const status = error?.response?.status;
    const message = extractErrorMessage(error);

    // Auto logout on unauthorized
    if (status === 401) {
      tokenManager.removeAccessToken();
      window.location.href = "/login";
    }

    showError(message);
    return Promise.reject(message);
  }
);
