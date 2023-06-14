import {
  PatientLoginApiUrl,
  PatientSignUpApiUrl,
  PatientUpdateApiUrl,
} from "../config/apiRoutes";
import axios from "../utility/axiosWrapper";

export const patientSignupApi = async (patientData) => {
  return await axios
    .post(`${PatientSignUpApiUrl}`, patientData)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const patientLoginApi = async (loginData) => {
  return await axios
    .post(
      `${PatientLoginApiUrl}`,{
        "email": `${loginData.email}`,
        "password": `${loginData.password}`
      }
    )
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const patientUpdateInfoApi = async (id, data) => {
  return await axios
    .put(`${PatientUpdateApiUrl}/${id}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};
