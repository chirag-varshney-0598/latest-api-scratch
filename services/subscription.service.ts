import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const subscriptionService = {
  addSubscription: (payload: any) =>
    http.post(API_ENDPOINTS.SUBSCRIPTION.CREATE_SUBSCRIPTION, payload),
  listSubscription: (params: { userId: string }) =>
    http.get(API_ENDPOINTS.SUBSCRIPTION.LIST_SUBSCRIPTION, { params }),
  editSubscription: (payload: any) =>
    http.put(API_ENDPOINTS.SUBSCRIPTION.EDIT_SUBSCRIPTION, payload),
  deleteSubscription: (params: { subscriptionId: string }) =>
    http.delete(API_ENDPOINTS.SUBSCRIPTION.DELETE_SUBSCRIPTION, { params }),
  changeStatus: (payload: { subscriptionId: string; status: string }) =>
    http.patch(API_ENDPOINTS.SUBSCRIPTION.CHANGE_STATUS, payload),
};
