import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const nursingService = {
  addNursingService: (payload: any) =>
    http.post(API_ENDPOINTS.NURSING.ADD_NURSING_SERVICE, payload),
  nursingServiceList: (params: any) =>
    http.get(API_ENDPOINTS.NURSING.LIST_NURSING_SERVICES, { params }),
  nursingServiceBookingList: (params: any) =>
    http.get(API_ENDPOINTS.NURSING.LIST_NURSING_BOOKINGS, { params }),
  editService: (id: string, payload: any) =>
    http.put(API_ENDPOINTS.NURSING.EDIT_SERVICE(id), payload),
  confirmNursingRequest: (
    id: string,
    payload: {
      confirmedDate: string;
      confirmedTimeFrom: string;
      confirmedTimeTo: string;
    }
  ) => http.put(API_ENDPOINTS.NURSING.CONFIRM_BOOKING_REQUEST(id), payload),
  completeNursingRequest: (id: string) =>
    http.put(API_ENDPOINTS.NURSING.COMPLETE_BOOKING_REQUEST(id), {}),
};
