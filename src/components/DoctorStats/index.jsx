import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

const DoctorStats = () => {
  return (
    <div className={styles.statsContainer}>
      <Typography className={styles.title} component="h3">
        Recovered Patients
      </Typography>

      <Typography className={styles.subtitle} component="h3">
        40
      </Typography>
    </div>
  );
};

export default DoctorStats;
