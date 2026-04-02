export const API_VERSION = "api/v1";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_VERSION}/admin/login`,
    VERIFY_OTP: `${API_VERSION}/admin/verifyOTP`,
  },
  DOCTOR: {
    CREATE: `${API_VERSION}/admin/addDoctor`,
    LIST_DOCTORS: `${API_VERSION}/admin/userList`,
    BLOCK_UNBLOCK_DOCTOR: `${API_VERSION}/admin/blockUnblockDoctor`,
  },
  PATIENT: {
    VIEW_DETAILS: `${API_VERSION}/admin/viewUser`,
    BLOCK_UNBLOCK: `${API_VERSION}/admin/activeBlockUser`,
  },
  SUBSCRIPTION: {
    TRANSACTION_HISTORY: `${API_VERSION}/transaction/transactionHistory`,
    CREATE_SUBSCRIPTION: `${API_VERSION}/subscription/addSubscription`,
    LIST_SUBSCRIPTION: `${API_VERSION}/subscription/listSubscriptions`,
    EDIT_SUBSCRIPTION: `${API_VERSION}/subscription/editSubscription`,
    DELETE_SUBSCRIPTION: `${API_VERSION}/subscription/deleteSubscription`,
    CHANGE_STATUS: `${API_VERSION}/subscription/changeStatus`,
  },
  NOTIFICATIONS: {
    ACTIVITY_LIST: `${API_VERSION}/notification/listActivity`,
  },
  APPOINTMENTS: {
    APPOINTMENTS_LIST: `${API_VERSION}/appointments/listAppointments`,
    APPROVE_APPOINTMENTS: (id: string) =>
      `${API_VERSION}/appointments/approveAppointment/${id}`,
    CANCEL_APPOINTMENTS: (id: string) =>
      `${API_VERSION}/appointments/cancelAppointmentAdmin/${id}`,
    UPDATE_APPOINTMENT_PRICE: `${API_VERSION}/admin/updateAppointmentPrice`,
    GET_APPOINTMENT_PRICE: `${API_VERSION}/admin/getAppointmentPrice`,
  },
  NURSING: {
    ADD_NURSING_SERVICE: `${API_VERSION}/nursing/addService`,
    LIST_NURSING_SERVICES: `${API_VERSION}/nursing/listAllServices`,
    LIST_NURSING_BOOKINGS: `${API_VERSION}/nursing/listAllBookings`,
    EDIT_SERVICE: (id: string) => `${API_VERSION}/nursing/editService/${id}`,
    CONFIRM_BOOKING_REQUEST: (id: string) =>
      `${API_VERSION}/nursing/confirmSchedule/${id}`,
    COMPLETE_BOOKING_REQUEST: (id: string) =>
      `${API_VERSION}/nursing/completeBooking/${id}`,
  },
  STATISTICS: {
    FINANCIAL_DASHBOARD: `${API_VERSION}/admin/financialDashBoard`,
    CONSULTANT_TREND: `${API_VERSION}/admin/consultantTrend`,
    DASHBOARD_GRAPH: `${API_VERSION}/admin/graphDWConsultant`,
    DASHBOARD: `${API_VERSION}/admin/dashboard`,
    USER_GRAPH: `${API_VERSION}/admin/graphForUser`,
    DW_GRAPH: `${API_VERSION}/admin/graphDW`,
  },
  STATIC_CONTENT: {
    VIEW_CONTENT: `${API_VERSION}/static/viewStaticContent`,
    EDIT_CONTENT: `${API_VERSION}/static/editStaticContent`,
  },
};
