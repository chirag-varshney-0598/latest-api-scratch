import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const authService = {
  login: (payload: { email: string; password: string }) =>
    http.post(API_ENDPOINTS.AUTH.LOGIN, payload),
  verifyOtp: (payload: { email: string; otp: string }) =>
    http.patch(API_ENDPOINTS.AUTH.VERIFY_OTP, payload),
};
