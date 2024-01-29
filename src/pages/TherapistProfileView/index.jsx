import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";

import { useLocation } from "react-router-dom";
import { Input, Grid } from "@mui/material";

import NotificationIcon2 from "../../assets/notification-icon-1.svg";
// import ChatIcon from "../../assets/chat-icon.svg";

import ProfileOverview from "./ProfileOverview";

import styles from "./styles.module.scss";
import AboutSection from "./AboutSection";
import AppointmentTimes from "./AppointmentTimes";
import {
  fetchTherapistInfoApi,
  fetchTherapistScheduleApi,
} from "../../api/therapist-api";
import Loader from "../../components/Loader";
import { mapToDesiredFormat } from "../../data-parsers/therapist-parser";

const TherapistProfileView = () => {
  const [state, setState] = useState({
    isLoading: true,
    userInfo: {},
    // overviewInfo: UserProfieInfo,
  });
  const location = useLocation();

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const fetchPatientProfile = () => {
    const loc = location.pathname.split("/");

    fetchTherapistInfoApi(loc.at(-1)).then((res) => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        userInfo: res.data,
      }));
    });
  };

  const fetchTherapistSchedule = () => {
    const loc = location.pathname.split("/");

    fetchTherapistScheduleApi(loc.at(-1))
      .then((res) => {
        const parseData = mapToDesiredFormat(res.data);

        handleLoader();

        setState((prev) => ({
          ...prev,
          schedule: parseData,
        }));
      })
      .catch((error) => {
        handleLoader();
        console.log({ error });
      });
  };

  useEffect(() => {
    fetchPatientProfile();

    fetchTherapistSchedule();
  }, []);

  return (
    <>
      <AdminLayoutView>
        <div className={styles.therapistProfileContainer}>
          <div className="d-flex justify-between">
            <Input
              placeholder="Search Patients"
              className={styles.searchField}
            />

            <img
              className={styles.notificationIcon}
              src={NotificationIcon2}
              alt="notification-icon"
            />
          </div>

          <div className="pt-20">
            <ProfileOverview userInfo={state.userInfo} />
          </div>

          <Grid container className="pt-20 d-flex">
            <Grid item md={5} lg={5}>
              <AboutSection userInfo={state.userInfo} />
            </Grid>

            <Grid item md={7} lg={7}>
              <AppointmentTimes schedule={state.schedule} />
            </Grid>
          </Grid>
        </div>
      </AdminLayoutView>
      {state.isLoading && <Loader isShow={state.isLoading} />}
    </>
  );
};

export default TherapistProfileView;
