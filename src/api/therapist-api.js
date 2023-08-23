import {
  AddTherapistScheduleApiUrl,
  FetchTherapistAppointmentApiUrl,
  GetTherapistScheduleApiUrl,
  ModifyAppointmentApiUrl,
  ModifyTherapistScheduleApiUrl,
  SearchTherapistApiUrl,
  TherapistAppointmentSlots,
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
    .post(`${TherapistLoginApiUrl}`, {
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

export const searchTherapistApi = async (data) => {
  return await axios
    .get(`${SearchTherapistApiUrl}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchTherapistAppointmentSlots = async (therapistId, day) => {
  return await axios
    .get(`${TherapistAppointmentSlots}/${therapistId}/${day}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchTherapistAppointmentsApi = async (therapistId) => {
  return await axios
    .get(`${FetchTherapistAppointmentApiUrl}/${therapistId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const updateAppointmentApi = async (appointmentId, data) => {
  return await axios
    .put(`${ModifyAppointmentApiUrl}/${appointmentId}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const addTherapistScheduleApi = async (data) => {
  return await axios
    .post(`${AddTherapistScheduleApiUrl}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchTherapistScheduleApi = async (therapistId) => {
  return await axios
    .get(`${GetTherapistScheduleApiUrl}/${therapistId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const updateTherapistScheduleByDayApi = async (
  data,
  therapistId,
  day
) => {
  return await axios
    .put(`${ModifyTherapistScheduleApiUrl}/${therapistId}/${day}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};
