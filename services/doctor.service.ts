import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const doctorService = {
  createDoctor: (payload: {
    email: string;
    firstName: string;
    lastName: string;
  }) => http.post(API_ENDPOINTS.DOCTOR.CREATE, payload),

  listDoctor: (params: any) =>
    http.get(API_ENDPOINTS.DOCTOR.LIST_DOCTORS, { params }),
  blockUnblockDoctor: (params: any) =>
    http.put(API_ENDPOINTS.DOCTOR.BLOCK_UNBLOCK_DOCTOR, null, { params }),
};
