import {
  adminDashboardStatsApiUrl,
  fetchDocumentListing,
  subPackagesApiUrl,
} from "../config/apiRoutes";
import axios from "../utility/axiosWrapper";

export const fetchAdminDashboardStats = async (id) => {
  return await axios
    .get(`${adminDashboardStatsApiUrl}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const addSubscriptionPackageForTherapistApi = async (
  subscriptionData
) => {
  return await axios
    .post(`${subPackagesApiUrl}`, subscriptionData)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchDocumentsByPatientId = async (id) => {
  return await axios
    .get(`${fetchDocumentListing}/${id}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};
