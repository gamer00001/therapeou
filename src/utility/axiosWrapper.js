import axios from "axios";
import { BASE_URL } from "../config/apiRoutes";

const getOptions = (additionalData) => {
  const timeout = additionalData?.timeout ? additionalData?.timeout : 90000;
  //   let Authorization = getJwt();
  let options = {
    headers: {
      "Content-Type":
        additionalData && additionalData["Content-Type"]
          ? additionalData["Content-Type"]
          : "application/json",
      //   Authorization,
    },
    data:
      additionalData && additionalData["data"] ? additionalData["data"] : null,
    timeout,
  };
  const isFile = additionalData?.isFile ? additionalData?.isFile : false;
  if (isFile) {
    options.responseType = "blob";
  }
  return options;
};

const prepareUrl = (api, serverUrl = BASE_URL) => `${serverUrl}${api}`;
const axiosWrapper = {
  get: (api, additionalData = {}) =>
    axios.get(prepareUrl(api, BASE_URL), getOptions(additionalData)),
  post: (api, formData = {}, additionalData = {}) => {
    return axios.post(
      prepareUrl(api, BASE_URL),
      formData,
      getOptions(additionalData)
    );
  },
  put: (api, formData = {}) =>
    axios.put(prepareUrl(api, BASE_URL), formData, getOptions()),
  patch: (api, formData = {}, additionalData = {}) =>
    axios.patch(
      prepareUrl(api, BASE_URL),
      formData,
      getOptions(additionalData)
    ),
  delete: (api, formData = {}, additionalData = {}) =>
    axios.delete(
      prepareUrl(api, BASE_URL),
      getOptions({ ...additionalData, data: formData })
    ),
};

export default axiosWrapper;
