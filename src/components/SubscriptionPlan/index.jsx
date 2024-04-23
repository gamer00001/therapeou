import React from "react";
import styles from "./styles.module.scss";

const SubscriptionPlan = ({ title, packagePrice, perksList = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <span>{title}</span>
        <span>{packagePrice}</span>
      </div>
      <hr />

      {perksList?.map((item) => (
        <div>
          <span>{item}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SubscriptionPlan;
