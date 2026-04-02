import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const dashboardService = {
  dashboardGraph: () => http.get(API_ENDPOINTS.STATISTICS.DASHBOARD_GRAPH),
  dashboard: () => http.get(API_ENDPOINTS.STATISTICS.DASHBOARD),
};
