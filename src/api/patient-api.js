import {
  PatientLoginApiUrl,
  PatientSignUpApiUrl,
  PatientUpdateApiUrl,
  PatientChangePasswordApiUrl,
  PatientAddAppointmentApiUrl,
  FetchPatientAppointmentApiUrl,
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
    .post(`${PatientLoginApiUrl}`, {
      email: `${loginData.email}`,
      password: `${loginData.password}`,
    })
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

export const patientChangePasswordApi = async (data) => {
  return await axios
    .post(`${PatientChangePasswordApiUrl}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const AddPatientAppointmentApi = async (appoinmtentData) => {
  return await axios
    .post(`${PatientAddAppointmentApiUrl}`, appoinmtentData)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchPatientAppointmentsApi = async (userId) => {
  return await axios
    .get(`${FetchPatientAppointmentApiUrl}/${userId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};
