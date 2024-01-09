import React from "react";
import styles from "./styles.module.scss";

const RegistrationProcess = ({ title, icon }) => {
  return (
    <div className={styles.processBlock}>
      <span className={styles.title}>{title}</span>
      <img
        className={styles.checkIcon}
        src={icon ?? "/tick-icon.svg"}
        alt="icon"
      />
    </div>
  );
};

export default RegistrationProcess;
