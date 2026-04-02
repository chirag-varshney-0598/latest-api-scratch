import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const reportsService = {
  userGraph: () => http.get(API_ENDPOINTS.STATISTICS.USER_GRAPH),
  consultantTrend: () => http.get(API_ENDPOINTS.STATISTICS.CONSULTANT_TREND),
  dwGraph: () => http.get(API_ENDPOINTS.STATISTICS.DW_GRAPH),
  financialDashboard: () =>
    http.get(API_ENDPOINTS.STATISTICS.FINANCIAL_DASHBOARD),
};
