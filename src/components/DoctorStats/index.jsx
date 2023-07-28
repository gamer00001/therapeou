import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

const DoctorStats = ({
  title = "Recovered Patients",
  subtitle = "40",
  time,
}) => {
  return (
    <div className={styles.statsContainer}>
      <Typography className={styles.title} component="h3">
        {title}
      </Typography>

      <Typography className={styles.subtitle} component="h3">
        {subtitle}
      </Typography>

      {time && (
        <Typography className={styles.subtitle} component="h3">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default DoctorStats;
