import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const staticService = {
  viewPagContent: (params: { type: string }) =>
    http.get(API_ENDPOINTS.STATIC_CONTENT.VIEW_CONTENT, { params }),
  editPageContent: (payload: any) =>
    http.put(API_ENDPOINTS.STATIC_CONTENT.EDIT_CONTENT, payload),
};
