export const BASE_URL = "https://therapeuo-production.up.railway.app/";

const apiVersion = "";

const PatientBaseUrl = `${apiVersion}patient`;
const TherapistBaseUrl = `${apiVersion}therapist`;

export const PatientSignUpApiUrl = `${PatientBaseUrl}/signup`;
export const PatientLoginApiUrl = `${PatientBaseUrl}/login`;
export const PatientInfoGetApiUrl = `${PatientBaseUrl}/get`;
export const PatientInfoGetAllApiUrl = `${PatientBaseUrl}/get-all`;
export const PatientUpdateApiUrl = `${PatientBaseUrl}/update`;
export const PatientChangePasswordApiUrl = `${PatientBaseUrl}/change-password`;

export const TherapistSignUpApiUrl = `${TherapistBaseUrl}/signup`;
export const TherapistLoginApiUrl = `${TherapistBaseUrl}/login`;
export const TherapistInfoGetApiUrl = `${TherapistBaseUrl}/get`;
export const TherapistInfoGetAllApiUrl = `${TherapistBaseUrl}/get-all`;
export const TherapistUpdateApiUrl = `${TherapistBaseUrl}/update`;
