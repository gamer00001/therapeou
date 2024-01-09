import React from "react";
import styles from "./styles.module.scss";

const DoctorSpeciality = ({ title = "Psychotherapy" }) => {
  return <span className={styles.specialityContainer}>{title}</span>;
};

export default DoctorSpeciality;
