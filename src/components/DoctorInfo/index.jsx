import React from "react";
import styles from "./styles.module.scss";
import DoctorStats from "../DoctorStats";
import DoctorImg from "../../assets/doctor-img.png";

const DoctorInfo = ({
  name = "Dr. jassica",
  title = "Recovered Patients",
  subtitle = "50",
  img,
}) => {
  return (
    <div className={styles.doctorInfoContainer}>
      <div className={styles.title} component="h2">
        Today Appointment <br /> with&nbsp;
        <span className={styles.doctorName} component="div">
          {name}
        </span>
      </div>
      <div className={styles.statsTop}>
        <DoctorStats title={title} subtitle={subtitle} />
      </div>

      <img
        className={img ? styles.therapistImage : styles.doctorImage}
        src={img ?? DoctorImg}
        alt="doctor-img"
      />
    </div>
  );
};

export default DoctorInfo;
