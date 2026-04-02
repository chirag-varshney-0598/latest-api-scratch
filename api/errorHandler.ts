export function extractErrorMessage(error: any): string {
  if (error?.response?.data?.responseMessage)
    return error?.response?.data?.responseMessage;
  if (error?.response?.data?.error) return error.response.data.error;
  if (typeof error === "string") return error;
  return "Something went wrong. Please try again.";
}
