import React from "react";
import styles from "./styles.module.scss";

const RegistrationProcess = ({ title }) => {
  return (
    <div className={styles.processBlock}>
      <span className={styles.title}>{title}</span>
      <img src="/tick-icon.svg" alt="icon" />
    </div>
  );
};

export default RegistrationProcess;
