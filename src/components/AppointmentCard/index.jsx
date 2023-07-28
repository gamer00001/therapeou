import React from "react";
import styles from "./styles.module.scss";
import { Grid } from "@mui/material";

const AppointmentCard = ({
  appointmentId = 3433,
  patientName,
  purpose,
  rating = 4.3,
  date = "June 25-2022",
}) => {
  return (
    <div className={styles.appointmentBlock}>
      <Grid container style={{ padding: "20px" }}>
        <Grid item sm={4}>
          <img
            className={styles.userLogo}
            src="/user-logo.png"
            alt="user-logo"
          />
        </Grid>

        <Grid item sm={8}>
          <div className={styles.name}>{patientName}</div>
          <div className={styles.purpose}>{purpose}</div>
          <div className={styles.ratingRow}>
            <img src="/rating-star.svg" alt="rating" />
            <span>{rating}</span>
          </div>
        </Grid>
      </Grid>

      <div className={styles.appointmentId}>Appointment Id:{appointmentId}</div>
      <div className={styles.appointmentDate}>{date}</div>
    </div>
  );
};

export default AppointmentCard;
