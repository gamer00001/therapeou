import {
  TherapistInfoGetAllApiUrl,
  TherapistLoginApiUrl,
  TherapistSignUpApiUrl,
} from "../config/apiRoutes";
import axios from "../utility/axiosWrapper";

export const therapistSignupApi = async (patientData) => {
  return await axios
    .post(`${TherapistSignUpApiUrl}`, patientData)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const therapistLoginApi = async (loginData) => {
  return await axios
    .post(
      `${TherapistLoginApiUrl}?email=${loginData.email}&password=${loginData.password}`
    )
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchAllTherapistApi = async (loginData) => {
  return await axios
    .get(`${TherapistInfoGetAllApiUrl}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};