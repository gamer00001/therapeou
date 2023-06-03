import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import AppointmentInfo from "../../components/AppointmentInfo";
import { Grid, Typography } from "@mui/material";
import BlogRead from "../../components/BlogRead";
import DoctorInfo from "../../components/DoctorInfo";
import {
  AppointmentColors,
  AppointmentListMock,
} from "../../constants/Appointments";

import styles from "./styles.module.scss";
import PatientAppointemntInfo from "../../components/PatientAppointmentInfo";

const AppointmentsPage = () => {
  return (
    <AdminLayoutView>
      <Grid container>
        <Grid item xs={8}>
          <div style={{ paddingTop: "50px" }}></div>
          <DoctorInfo />

          <Typography
            component="div"
            style={{ marginTop: "20px", marginRight: "20px" }}
            className={styles.appointmentListContainer}
          >
            <Typography component="h3" className={styles.appointmentListTitle}>
              Appointment List
              <div>
                {AppointmentListMock.map((item, index) => {
                  return (
                    <div>
                      <PatientAppointemntInfo
                        {...item}
                        {...AppointmentColors[index]}
                      />
                    </div>
                  );
                })}
              </div>
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <AppointmentInfo />
          <Typography
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            component="div"
          >
            <BlogRead />
          </Typography>
        </Grid>
      </Grid>
    </AdminLayoutView>
  );
};

export default AppointmentsPage;
