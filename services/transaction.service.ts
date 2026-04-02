import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const transactionService = {
  transactionHistory: (params: any) =>
    http.get(API_ENDPOINTS.SUBSCRIPTION.TRANSACTION_HISTORY, { params }),
};
