import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const financialService = {
  dashboardData: () => http.get(API_ENDPOINTS.STATISTICS.FINANCIAL_DASHBOARD),
};
