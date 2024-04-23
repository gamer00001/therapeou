import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";

import { Input, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import NotificationIcon2 from "../../assets/notification-icon-1.svg";
// import ChatIcon from "../../assets/chat-icon.svg";

import styles from "./styles.module.scss";
import ProfileInfo from "./ProfileInfo";
import {
  fetchPatientAppointmentsApi,
  fetchPatientInfoByIdApi,
} from "../../api/patient-api";
import { UserProfieInfo } from "../../constants/common";
import {
  parseAppointmentListing,
  parseAppointmetStats,
  parsePatientOverviewInfo,
} from "../../data-parsers/patient-parser";
import Loader from "../../components/Loader";
import { fetchDocumentsByPatientId } from "../../api/admin-api";
import { isEmpty } from "lodash";
import PatientAppointemntInfo from "../../components/PatientAppointmentInfo";
import { AppointmentColors } from "../../constants/Appointments";

const PatientProfile = () => {
  const [state, setState] = useState({
    userInfo: {},
    isLoading: true,
    appointmentsListing: [],
    overviewInfo: UserProfieInfo,
  });
  const location = useLocation();
  const navigate = useNavigate();

  const loc = location.pathname.split("/");

  const fetchPatientProfile = () => {
    fetchPatientInfoByIdApi(loc.at(-1)).then((res) => {
      let overviewInfo = parsePatientOverviewInfo(res.data);
      setState((prev) => ({
        ...prev,
        overviewInfo,
        // isLoading: false,
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

  const fetchAppointmentListing = async () => {
    const resp = await fetchPatientAppointmentsApi(loc.at(-1));

    const parseData = parseAppointmentListing(resp.data);

    setState((prev) => ({
      ...prev,
      isLoading: false,
      appointmentsListing: parseData,
    }));
  };

  useEffect(() => {
    fetchPatientProfile();
    fetchSpecificPatientAppointments();
    fetchDocumentsOfPatient();
    fetchAppointmentListing();
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

          <div className="pt-20 pb-20">
            <ProfileInfo
              userId={loc.at(-1)}
              userInfo={state.userInfo}
              overviewInfo={state.overviewInfo}
              appointmentInfo={state.appointmentInfo}
            />
          </div>

          <Typography
            component="h3"
            // className={styles.appointmentListTitle}
            className={`${styles.notesSection} ${styles.appointmentListTitle}`}
          >
            Appointment List
            <div>
              {isEmpty(
                state.appointmentsListing.filter(
                  (item) => item.status?.toLowerCase() === "pending"
                )
              ) ? (
                <div style={{ fontSize: "16px" }}>No Appointments Found.</div>
              ) : (
                state.appointmentsListing
                  .filter((item) => item.status?.toLowerCase() === "pending")
                  .map((item, index) => {
                    return (
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          navigate("/admin/reports/appointments-detail", {
                            state: {
                              appointmentInfo: item,
                              // parent: "patient",
                            },
                          })
                        }
                      >
                        <PatientAppointemntInfo
                          {...item}
                          {...AppointmentColors[index]}
                        />
                      </div>
                    );
                  })
              )}
            </div>
          </Typography>

          {/* <Grid container className="pt-20 d-flex">
            <Grid item md={5} lg={5} xl={5}>
              <NotesSection />
            </Grid>

            <Grid item md={7} lg={7} xl={7}>
              <DocumentSection />
            </Grid>
          </Grid> */}
        </div>
      </AdminLayoutView>

      {state.isLoading && <Loader isShow={state.isLoading} />}
    </>
  );
};

export default PatientProfile;
