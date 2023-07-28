import React from "react";
import { Grid, Typography } from "@mui/material";
import AdminLayoutView from "../../../components/layout/AdminView";
import styles from "../styles.module.scss";

const AppointmentDetail = () => {
  return (
    <AdminLayoutView>
      <div>
        <Typography className={styles.mainHeading} component="h2">
          Past Booking View Details
        </Typography>

        <Grid container className={styles.appointmentInfoContainer}>
          <Grid item sm={5}>
            <PatientAppointmentGeneralInfo />
          </Grid>

          <Grid item sm={7} position="relative">
            {/* <hr /> */}
            <div className={styles.verticalBar} />
            <div className={styles.title}>Review:</div>

            <div className={styles.reviewDetails}>
              “I feel compelled to express my utmost gratitude for the
              exceptional care and guidance provided by my therapist. From the
              very first session, I knew I had found someone who truly
              understood the depths of my struggles and who possessed the
              knowledge and empathy to guide me towards healing.”
            </div>
          </Grid>
          <div>
            <img
              className={styles.appointmentIcon}
              src="/appointment-detail-page-icon.png"
              alt="icon"
            />
          </div>
        </Grid>
      </div>
    </AdminLayoutView>
  );
};

export default AppointmentDetail;

const PatientAppointmentGeneralInfo = () => {
  return (
    <>
      <div className={styles.title}>Status:</div>
      <div className={styles.value}>Completed</div>
      <div className={styles.title}>Patient General Detail:</div>
      <div className={styles.value}>
        <span>Name:Alex </span>
        <span> Age:25</span>
      </div>
      <div className={styles.value}>
        <span>Patient Type: </span>
        <span> Knee Injury</span>
      </div>

      <div className={styles.title}>Appointment Date:</div>
      <div className={styles.value}>11-12-2021</div>

      <div className={styles.title}>Patient Report:</div>
      <div className={styles.value}>Medical Report.pdf</div>
      <div className={styles.value}>Xray Report.pdf</div>
      <div className={styles.value}>Images.jpg</div>

      <div className={styles.title}>Amount Paid:</div>
      <div className={styles.value}>$250/-</div>
    </>
  );
};
