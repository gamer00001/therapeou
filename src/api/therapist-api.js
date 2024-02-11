import {
  AddTherapistScheduleApiUrl,
  FetchTherapistAppointmentApiUrl,
  GetTherapistScheduleApiUrl,
  ModifyAppointmentApiUrl,
  ModifyTherapistScheduleApiUrl,
  SearchTherapistApiUrl,
  TherapistAppointmentSlots,
  TherapistInfoGetAllApiUrl,
  TherapistInfoGetApiUrl,
  TherapistLoginApiUrl,
  TherapistServicesBaseUrl,
  TherapistSignUpApiUrl,
  TherapistUpdateApiUrl,
  addAppointmentNoteeApiUrl,
  addTherapistServiceApiUrl,
  fetchTherapistServiceApiUrl,
  searchTherapistApiUrl,
  updateAppointmentNoteApiUrl,
  uploadDocumentApiUrl,
} from "../config/apiRoutes";
import axios from "../utility/axiosWrapper";

export const therapistSignupApi = async (therapistData) => {
  return await axios
    .post(`${TherapistSignUpApiUrl}`, therapistData)
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

export const fetchAllTherapistApi = async () => {
  return await axios
    .get(`${TherapistInfoGetAllApiUrl}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const searchTherapistApi = async (searchType, queryParams) => {
  return await axios
    .get(`${SearchTherapistApiUrl}/${searchType}${queryParams}`)
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

export const addNoteToAppointmentApi = async (data) => {
  return await axios
    .post(`${addAppointmentNoteeApiUrl}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const updateNoteToAppointmentApi = async (data, noteId) => {
  return await axios
    .put(`${updateAppointmentNoteApiUrl}/${noteId}`, data)
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

export const uploadTherapistDocumnetApi = async (userId, docType, data) => {
  return await axios
    .post(`${uploadDocumentApiUrl}/${userId}/${docType}`, data, {
      "Content-Type": "multipart/form-data",
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const therapistUpdateInfoApi = async (id, data) => {
  return await axios
    .put(`${TherapistUpdateApiUrl}/${id}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchTherapistInfoApi = async (id) => {
  return await axios
    .get(`${TherapistInfoGetApiUrl}/${id}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const addTherapistServiceApi = async (data) => {
  return await axios
    .post(`${addTherapistServiceApiUrl}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchTherapistServiceApi = async (therapistId) => {
  return await axios
    .get(`${fetchTherapistServiceApiUrl}/${therapistId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const deleteTherapistServiceApi = async (servieId) => {
  return await axios
    .delete(`${TherapistServicesBaseUrl}/${servieId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const searchTherapistForAdminApi = async (searchQuery) => {
  return await axios
    .get(`${searchTherapistApiUrl}/${searchQuery}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};
