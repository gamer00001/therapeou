export const BASE_URL = "https://therapeuo-production.up.railway.app/";

const apiVersion = "";

const PatientBaseUrl = `${apiVersion}patient`;
const TherapistBaseUrl = `${apiVersion}therapist`;
const AppointmentsBaseUrl = `${apiVersion}appointments`;
const ScheduleBaseUrl = `${apiVersion}schedule`;
const ReviewsBaseUrl = `${apiVersion}reviews`;
const UploadFileBaseUrl = `${apiVersion}upload-doc`;
const UploadImageBaseUrl = `${apiVersion}upload-image`;
const AppointmentNotesBaseUrl = `${apiVersion}notes`;
const AppointmentDocsBaseUrl = `${apiVersion}appointment-docs`;

export const ForgotPasswordUrl = `${apiVersion}forgot-password`;

export const OtpUrl = `${apiVersion}match-otp`;

export const NewPasswordpUrl = `${apiVersion}new-password`;

export const TherapistServicesBaseUrl = `${apiVersion}therapist-services`;

export const updateAppointmentNoteApiUrl = `${AppointmentNotesBaseUrl}`;
export const addAppointmentNoteeApiUrl = `${AppointmentNotesBaseUrl}/add`;

export const PatientSignUpApiUrl = `${PatientBaseUrl}/signup`;
export const PatientLoginApiUrl = `${PatientBaseUrl}/login`;
export const PatientInfoGetApiUrl = `${PatientBaseUrl}/get`;
export const PatientInfoGetAllApiUrl = `${PatientBaseUrl}/get-all`;
export const PatientUpdateApiUrl = `${PatientBaseUrl}/update`;
export const PatientChangePasswordApiUrl = `${PatientBaseUrl}/change-password`;
export const PatientAddAppointmentApiUrl = `${AppointmentsBaseUrl}/add`;
export const FetchPatientAppointmentApiUrl = `${AppointmentsBaseUrl}/get/user`;

export const TherapistSignUpApiUrl = `${TherapistBaseUrl}/signup`;
export const TherapistLoginApiUrl = `${TherapistBaseUrl}/login`;
export const TherapistInfoGetApiUrl = `${TherapistBaseUrl}/get`;
export const TherapistInfoGetAllApiUrl = `${TherapistBaseUrl}/get-all`;
export const SearchTherapistApiUrl = `${TherapistBaseUrl}/search`;
export const TherapistUpdateApiUrl = `${TherapistBaseUrl}/update-therapist`;

export const TherapistAppointmentSlots = `${AppointmentsBaseUrl}/therapist/available-times`;
export const FetchTherapistAppointmentApiUrl = `${AppointmentsBaseUrl}/get/therapist`;
export const ModifyAppointmentApiUrl = `${AppointmentsBaseUrl}/update`;

export const AddTherapistScheduleApiUrl = `${ScheduleBaseUrl}/add`;
export const GetTherapistScheduleApiUrl = `${ScheduleBaseUrl}/get/therapist`;
export const ModifyTherapistScheduleApiUrl = `${ScheduleBaseUrl}/update`;

export const addReviewApiUrl = `${ReviewsBaseUrl}/add`;

export const uploadDocumentApiUrl = `${UploadFileBaseUrl}/therapist`;
export const uploadImageApiUrl = `${UploadImageBaseUrl}/profile`;

export const uploadPatientReportsApiUrl = `${UploadFileBaseUrl}/patient-reports`;

export const addAppointmentDocsApiUrl = `${AppointmentDocsBaseUrl}/add`;

export const addTherapistServiceApiUrl = `${TherapistServicesBaseUrl}/add`;
export const fetchTherapistServiceApiUrl = `${TherapistServicesBaseUrl}/therapist`;
