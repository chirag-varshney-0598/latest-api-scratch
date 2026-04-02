import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const patientService = {
  patientView: (params: { userId: string }) =>
    http.get(API_ENDPOINTS.PATIENT.VIEW_DETAILS, { params }),
  blockUnblockPatient: (params: any) =>
    http.put(API_ENDPOINTS.PATIENT.BLOCK_UNBLOCK, null, { params }),
};
