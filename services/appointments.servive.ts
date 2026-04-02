import { http } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endPoints";

export const appointmentsService = {
  appointmentsList: (params: { userId: string }) =>
    http.get(API_ENDPOINTS.APPOINTMENTS.APPOINTMENTS_LIST, { params }),
  approveAppointment: (id: string) =>
    http.put(API_ENDPOINTS.APPOINTMENTS.APPROVE_APPOINTMENTS(id), {}),
  cancelAppointment: (id: string) =>
    http.put(API_ENDPOINTS.APPOINTMENTS.CANCEL_APPOINTMENTS(id), {}),
  updateAppointmentPrice: (payload: { appointmentPrice: string }) =>
    http.put(API_ENDPOINTS.APPOINTMENTS.UPDATE_APPOINTMENT_PRICE, payload),
  getAppointmentPrice: () =>
    http.get(API_ENDPOINTS.APPOINTMENTS.GET_APPOINTMENT_PRICE, {}),
};
