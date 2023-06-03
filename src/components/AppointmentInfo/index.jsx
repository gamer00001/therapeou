import React from "react";
import DatePickerTime from "../DateTimePicker";
import { Typography } from "@mui/material";
import UpcomingAppointmentView from "../UpcomingAppointmentView";
import styles from "./styles.module.scss";

const AppointmentInfo = () => {
  return (
    <div className={styles.appointmentInfoContainer}>
      <Typography className={styles.calenderTitle} component="h3">
        Calender
      </Typography>
      <DatePickerTime />

      <Typography className={styles.upcomingTitle} component="h3">
        Upcoming
      </Typography>

      <UpcomingAppointmentView />
    </div>
  );
};

export default AppointmentInfo;
