import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

const TimeOfAppointment = ({ time, backgroundColor, textColor }) => {
  return (
    <Typography
      style={{ backgroundColor: backgroundColor ?? "", color: textColor ?? "" }}
      className={styles.timeBlock}
      component="div"
    >
      {time}
    </Typography>
  );
};

const PatientAppointemntInfo = ({
  logo,
  purpose,
  time,
  textColor,
  therapistName,
  backgroundColor,
}) => {
  return (
    <Typography component="div" className={styles.container}>
      <Typography className={styles.sideArea} component="div">
        <img src={logo} alt={logo} className={styles.logoImg} />
        <Typography component="div">
          <Typography className={styles.appointmentTitle} component="h3">
            {therapistName}
          </Typography>

          <Typography
            style={{ color: textColor ?? "" }}
            className={styles.appointmentSubtitle}
            component="h3"
          >
            {purpose}
          </Typography>
        </Typography>
      </Typography>

      <Typography component="div">
        <TimeOfAppointment
          time={time}
          textColor={textColor}
          backgroundColor={backgroundColor}
        />
      </Typography>
    </Typography>
  );
};

export default PatientAppointemntInfo;
