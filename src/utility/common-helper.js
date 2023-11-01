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

export const getGoogleApiKey = () => {
  return process.env.REACT_APP_GOOGLE_API_KEY;
};
