import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const notificationService = {
  activityList: (params: { userId: string }) =>
    http.get(API_ENDPOINTS.NOTIFICATIONS.ACTIVITY_LIST, { params }),
};
