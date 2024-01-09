import React from "react";

import styles from "./styles.module.scss";
import Logo from "../../assets/user-logo.png";
import { Typography } from "@mui/material";

const UpcomingAppointmentView = () => {
  return (
    <div className={styles.upcomingContainer}>
      <img className={styles.logoImg} src={Logo} alt="dd" />

      <div>
        <Typography className={styles.appointmentTitle} component="h3">
          Montly doctor’s meet
        </Typography>

        <Typography className={styles.appointmentSubtitle} component="h3">
          8 April, 2021 | 04:00 PM
        </Typography>
      </div>
    </div>
  );
};

export default UpcomingAppointmentView;
