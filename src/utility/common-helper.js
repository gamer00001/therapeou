export const getUserInfoFromStorage = () => {
  const data = localStorage.getItem("userInfo");

  return JSON.parse(data);
};

export const isCurrentUserPatient = () => {
  const data = localStorage.getItem("userInfo");

  return JSON.parse(data).userType === "patient";
};

export const logoutUser = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("isLoggedIn");
};
