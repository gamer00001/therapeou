import {
  adminDashboardStatsApiUrl,
  adminLoginApiUrl,
  editSubPackagesApiUrl,
  fetchDocumentListing,
  getSubPackagesApiUrl,
  subPackagesApiUrl,
} from "../config/apiRoutes";
import axios from "../utility/axiosWrapper";

export const adminLoginApi = async (loginData) => {
  return await axios
    .post(`${adminLoginApiUrl}`, {
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

export const fetchSubscriptionsPlansApi = async () => {
  return await axios
    .get(`${getSubPackagesApiUrl}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const fetchSubscriptionsPlanByIdApi = async (id) => {
  return await axios
    .get(`${getSubPackagesApiUrl}/${id}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const editSubscriptionsPlanByIdApi = async (data) => {
  return await axios
    .put(`${editSubPackagesApiUrl}`, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err?.response;
    });
};
