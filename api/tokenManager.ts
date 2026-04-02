export const tokenManager = {
  getAccessToken() {
    return localStorage.getItem("accessToken");
  },

  setAccessToken(token: string) {
    localStorage.setItem("accessToken", token);
  },

  removeAccessToken() {
    localStorage.removeItem("accessToken");
  },
};
