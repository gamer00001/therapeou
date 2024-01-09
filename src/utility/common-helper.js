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

export const validateEmail = (email = "") => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export function isStrongPassword(password) {
  // Regular expressions to check for each condition
  const capitalLetterRegex = /[A-Z]/;
  const smallLetterRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  // eslint-disable-next-line no-useless-escape
  const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

  // Check if the password meets all the conditions
  const hasCapitalLetter = capitalLetterRegex.test(password);
  const hasSmallLetter = smallLetterRegex.test(password);
  const hasNumber = numberRegex.test(password);
  const hasSpecialCharacter = specialCharacterRegex.test(password);

  // Return true if all conditions are met
  return hasCapitalLetter && hasSmallLetter && hasNumber && hasSpecialCharacter;
}
