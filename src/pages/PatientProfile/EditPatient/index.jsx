import React, { useEffect, useState } from "react";
import { Grid, Input } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import AdminLayoutView from "../../../components/layout/AdminView";
import { PatientFields } from "../../../constants/LoginRegister";

import styles from "../styles.module.scss";
import { getGoogleApiKey } from "../../../utility/common-helper";
import CButton from "../../../components/CButton";
import {
  fetchPatientInfoByIdApi,
  patientUpdateInfoApi,
} from "../../../api/patient-api";
import Loader from "../../../components/Loader";

const INITIAL_STATE = {
  image: null,
  fullName: "",
  email: "",
  address: "",
  medical: "",
};

const EditPatientProfile = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    isLoading: true,
    userInfo: INITIAL_STATE,
  });

  const location = useLocation();

  const loc = location.pathname.split("/");

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const handleFieldChange = (e) => {
    setState((prev) => ({
      ...prev,
      userInfo: {
        ...prev.userInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const updatePatientInfo = () => {
    handleLoader();

    const data = {
      ...state.userInfo,
    };
    patientUpdateInfoApi(loc.at(-1), data)
      .then((res) => {
        console.log({ res });
        toast.success("Patient Info Updated Successfully.");

        setTimeout(() => {
          navigate(`/admin/patient-profile/${loc.at(-1)}`);
        }, 500);
      })
      .catch((error) => {
        console.log({ error });
        handleLoader();
        toast.error("Something went wrong!");
      });
  };

  const fetchPatientProfile = () => {
    fetchPatientInfoByIdApi(loc.at(-1)).then((res) => {
      //   let overviewInfo = parsePatientOverviewInfo(res.data);
      setState((prev) => ({
        ...prev,
        // overviewInfo,
        isLoading: false,
        userInfo: res.data,
      }));
    });
  };

  useEffect(() => {
    fetchPatientProfile();
  }, []);

  return (
    <>
      <AdminLayoutView>
        <div className={styles.editPatientTitle}>Edit Patient Profile</div>

        {PatientFields.map((item, index) => {
          return (
            <Grid
              container
              key={index}
              justifyContent="center"
              style={{ paddingTop: index === 0 ? "" : "20px" }}
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
                          address:
                            place?.formatted_address || place?.name || "",
                        }));
                      }}
                    />
                    <p style={{ color: "#bdadad" }}>
                      Format (House/flat number, street name)
                    </p>
                  </>
                ) : (
                  <Input
                    name={item.fieldName}
                    value={state.userInfo[item.fieldName]}
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
          style={{ marginTop: "10px", marginBottom: "40px" }}
        >
          <Grid item>
            <CButton
              title="Save Changes"
              type="submit"
              width="180px"
              borderRadius="20px"
              height="50px"
              onClick={updatePatientInfo}
            />
          </Grid>
        </Grid>
      </AdminLayoutView>

      {state.isLoading && <Loader />}
    </>
  );
};

export default EditPatientProfile;
