import React, { useEffect, useRef, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { Grid, Input, Typography } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import { toast } from "react-toastify";

import ImageUpload from "../../components/ImageUpload";
import { SettingsFields } from "../../constants/LoginRegister";
import CButton from "../../components/CButton";
import ChangePassword from "../../components/ChangePassword";
import {
  getGoogleApiKey,
  getUserInfoFromStorage,
} from "../../utility/common-helper";
import {
  patientUpdateInfoApi,
  uploadProfileImageApi,
} from "../../api/patient-api";
import Loader from "../../components/Loader";
import { therapistUpdateInfoApi } from "../../api/therapist-api";

import styles from "./styles.module.scss";

const INITIAL_STATE = {
  image: null,
  fullName: "",
  email: "",
  address: "",
  medical: "",
};

const Settings = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);

  const userData = getUserInfoFromStorage();

  const inputReference = useRef(null);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      ...userData?.apiUserInfo,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fileUploadAction = () => inputReference.current.click();

  const fileUploadInputChange = async (e) => {
    setIsLoading(true);

    let formData = new FormData();
    let file = e.target?.files[0];
    formData.append("image", file);

    const type = userData.userType === "patient" ? 1 : 2;

    const resp = await uploadProfileImageApi(userData.id, type, formData);

    setState((prev) => ({ ...prev, image: resp?.data?.url }));

    setIsLoading(false);
  };

  const handleSaveUserInfo = async () => {
    let updatedData = { ...state };
    setIsLoading(true);

    const apiToCall =
      userData.userType === "patient"
        ? patientUpdateInfoApi
        : therapistUpdateInfoApi;

    let resp = await apiToCall(state?.id, updatedData);

    if (resp.status === 200) {
      let userInfo = resp?.data;

      delete userInfo?.password;

      setIsLoading(false);

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          ...userInfo,
          userType: userData?.userType,
          apiUserInfo: userInfo,
        })
      );

      return toast.success("Settings Updated Successfully.");
    } else {
      return toast.error("Some Error Occred. Please try again later.");
    }
  };

  const handleFieldChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {isLoading && <Loader isShow={isLoading} />}
      <AdminLayoutView>
        <Grid container className={styles.settingsContainer}>
          <Grid item className="w-100">
            <Grid container justifyContent="center">
              <Grid item xs={12} className={"d-flex justify-center"}>
                <ImageUpload
                  state={state}
                  inputReference={inputReference}
                  fileUploadAction={fileUploadAction}
                  fileUploadInputChange={fileUploadInputChange}
                />
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Grid item xs={12} className={styles.imageContainer}>
                <Typography component="div" className={styles.imageSubtitle}>
                  <span className={styles.requiredText}>*</span> The uploaded
                  image must be <br />
                  500px wide and 500px long
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              style={{ paddingTop: "30px" }}
            >
              <Grid item xs={6} className="flex-column">
                {SettingsFields.map((item, index) => {
                  return (
                    <Grid
                      container
                      justifyContent="center"
                      style={{ paddingTop: index === 0 ? "" : "40px" }}
                    >
                      <Grid item>
                        {item.fieldName === "address" ? (
                          <>
                            <Autocomplete
                              className={`${styles.profileFields} ${styles.mapAddressSearchField}`}
                              componentRestrictions={{ country: "us" }}
                              options={{
                                types: ["geocode", "establishment"],
                              }}
                              defaultValue={state[item.fieldName]}
                              apiKey={getGoogleApiKey()}
                              onPlaceSelected={(place) => {
                                console.log({ place });
                                setState((prev) => ({
                                  ...prev,
                                  address: place?.formatted_address || "",
                                }));
                              }}
                            />
                            <p style={{color: "#bdadad"}}>Format (House/flat number, street name) </p>

                          </>
                        ) : (
                          <Input
                            name={item.fieldName}
                            value={state[item.fieldName]}
                            placeholder={item.placeholder}
                            className={`${styles.profileFields} pl-12`}
                            onChange={handleFieldChange}
                            disabled={item.fieldName === "email"}
                          />
                        )}
                      </Grid>
                    </Grid>
                  );
                })}

                <Grid
                  container
                  justifyContent="center"
                  style={{ marginTop: "40px", marginBottom: "40px" }}
                >
                  <Grid item>
                    <CButton
                      title="Save Changes"
                      type="submit"
                      width="180px"
                      borderRadius="20px"
                      height="50px"
                      onClick={handleSaveUserInfo}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} className={"flex-column"}>
                <ChangePassword
                  email={state.email}
                  setIsLoading={setIsLoading}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AdminLayoutView>
    </>
  );
};

export default Settings;
