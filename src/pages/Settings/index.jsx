import React, { useEffect, useRef, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { Grid, Input, Typography } from "@mui/material";
import ImageUpload from "../../components/ImageUpload";
import styles from "./styles.module.scss";
import { RegisterFields } from "../../constants/LoginRegister";
import CButton from "../../components/CButton";
import ChangePassword from "../../components/ChangePassword";
import { getUserInfoFromStorage } from "../../utility/common-helper";
import { patientUpdateInfoApi } from "../../api/patient-api";

const INITIAL_STATE = {
  image: null,
  fullName: "",
  email: "",
  // password: "",
};

const Settings = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const inputReference = useRef(null);

  useEffect(() => {
    let userData = getUserInfoFromStorage();
    setState({
      ...state,
      ...userData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fileUploadAction = () => inputReference.current.click();

  const fileUploadInputChange = (e) => {
    let formData = new FormData();
    let file = e.target?.files[0];
    formData.append("images", file);

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        setState({
          ...state,
          image: reader.result,
        });
      });

      reader.readAsDataURL(file);
    }
  };

  const handleSaveUserInfo = async () => {
    let updatedData = { ...state };
    let resp = await patientUpdateInfoApi(state?.id, updatedData);

    let userInfo = resp?.data;

    delete userInfo?.password;

    localStorage.setItem("userInfo", userInfo);
  };

  const handleFieldChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
              {RegisterFields.map((item, index) => {
                return (
                  <Grid
                    container
                    justifyContent="center"
                    style={{ paddingTop: index === 0 ? "" : "40px" }}
                  >
                    <Grid item>
                      <Input
                        name={item.fieldName}
                        value={state[item.fieldName]}
                        placeholder={item.placeholder}
                        className={styles.profileFields}
                        onChange={handleFieldChange}
                      />
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
              <ChangePassword />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AdminLayoutView>
  );
};

export default Settings;
