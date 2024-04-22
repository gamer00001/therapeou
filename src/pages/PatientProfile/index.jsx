import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";

import { Input, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import NotificationIcon2 from "../../assets/notification-icon-1.svg";
// import ChatIcon from "../../assets/chat-icon.svg";

import styles from "./styles.module.scss";
import ProfileInfo from "./ProfileInfo";
import NotesSection from "./NotesSection";
import DocumentSection from "./DocumentSection";
import {
  fetchPatientAppointmentsApi,
  fetchPatientInfoByIdApi,
} from "../../api/patient-api";
import { UserProfieInfo } from "../../constants/common";
import {
  parseAppointmetStats,
  parsePatientOverviewInfo,
} from "../../data-parsers/patient-parser";
import Loader from "../../components/Loader";
import { fetchDocumentsByPatientId } from "../../api/admin-api";

const PatientProfile = () => {
  const [state, setState] = useState({
    userInfo: {},
    isLoading: true,
    overviewInfo: UserProfieInfo,
  });
  const location = useLocation();

  const loc = location.pathname.split("/");

  const fetchPatientProfile = () => {
    fetchPatientInfoByIdApi(loc.at(-1)).then((res) => {
      let overviewInfo = parsePatientOverviewInfo(res.data);
      setState((prev) => ({
        ...prev,
        overviewInfo,
        isLoading: false,
        userInfo: res.data,
      }));
    });
  };

  const fetchSpecificPatientAppointments = () => {
    fetchPatientAppointmentsApi(loc.at(-1)).then((res) => {
      const stats = parseAppointmetStats(res.data);
      setState((prev) => ({
        ...prev,
        appointmentInfo: stats,
      }));
    });
  };

  const fetchDocumentsOfPatient = () => {
    fetchDocumentsByPatientId(loc.at(-1)).then((res) => {
      const stats = parseAppointmetStats(res.data);
      setState((prev) => ({
        ...prev,
        appointmentInfo: stats,
      }));
    });
  };

  useEffect(() => {
    fetchPatientProfile();
    fetchSpecificPatientAppointments();
    fetchDocumentsOfPatient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AdminLayoutView>
        <div className={styles.patientProfileContainer}>
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
            <ProfileInfo
              userId={loc.at(-1)}
              userInfo={state.userInfo}
              overviewInfo={state.overviewInfo}
              appointmentInfo={state.appointmentInfo}
            />
          </div>

          <Grid container className="pt-20 d-flex">
            <Grid item md={5} lg={5} xl={5}>
              <NotesSection />
            </Grid>

            <Grid item md={7} lg={7} xl={7}>
              <DocumentSection />
            </Grid>
          </Grid>
        </div>
      </AdminLayoutView>

      {state.isLoading && <Loader isShow={state.isLoading} />}
    </>
  );
};

export default PatientProfile;
