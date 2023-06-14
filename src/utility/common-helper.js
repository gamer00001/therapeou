export const getUserInfoFromStorage = () => {
  const data = localStorage.getItem("userInfo");

  return JSON.parse(data);
};

export const logoutUser = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("isLoggedIn");
};
