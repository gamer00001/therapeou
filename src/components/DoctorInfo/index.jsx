import React from "react";
import styles from "./styles.module.scss";
import DoctorStats from "../DoctorStats";
import DoctorImg from "../../assets/doctor-img.png";

const DoctorInfo = () => {
  return (
    <div className={styles.doctorInfoContainer}>
      <div className={styles.title} component="h2">
        Today Appointment <br /> with&nbsp;
        <span className={styles.doctorName} component="div">
          Dr. jassica
        </span>
      </div>
      <div className={styles.statsTop}>
        <DoctorStats />
      </div>

      <img className={styles.doctorImage} src={DoctorImg} alt="doctor-img" />
    </div>
  );
};

export default DoctorInfo;
