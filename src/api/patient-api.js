import {
  PatientLoginApiUrl,
  PatientSignUpApiUrl,
  PatientUpdateApiUrl,
  PatientChangePasswordApiUrl,
  PatientAddAppointmentApiUrl,
  FetchPatientAppointmentApiUrl,
  addReviewApiUrl,
  uploadImageApiUrl,
  uploadPatientReportsApiUrl,
  addAppointmentDocsApiUrl,
  ForgotPasswordUrl,
  OtpUrl,
  NewPasswordpUrl,
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

export const addReviewToAppointmentApi = async (data) => {
  return await axios
    .post(`${addReviewApiUrl}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const uploadProfileImageApi = async (userId, type, data) => {
  return await axios
    .post(`${uploadImageApiUrl}/${userId}/${type}`, data, {
      "Content-Type": "multipart/form-data",
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const uploadPatientReportsDocumnetApi = async (
  userId,
  docType,
  data,
  appointmentId
) => {
  return await axios
    .post(
      `${uploadPatientReportsApiUrl}/${userId}/${docType}/${appointmentId}`,
      data,
      {
        "Content-Type": "multipart/form-data",
      }
    )
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const addPatientReportsToAppointmentApi = async (data) => {
  return await axios
    .post(`${addAppointmentDocsApiUrl}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const forgotPasswordApi = async (email) => {
  return await axios
    .post(`${ForgotPasswordUrl}/${email}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const matchOtpApi = async (data) => {
  return await axios
    .post(`${OtpUrl}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const newPasswordApi = async (data, newPassword) => {
  return await axios
    .put(`${NewPasswordpUrl}?password=${newPassword}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};
