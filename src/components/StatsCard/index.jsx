import React from "react";

import styles from "./styles.module.scss";

const StatsCard = ({
  title = "Total Patients",
  value = "34,543",
  percentValue = "+4.54",
  isHighlighted = false,
}) => {
  return (
    <div
      style={{
        background: isHighlighted ? "#3C5671" : "#fff",
        color: isHighlighted ? "#fff" : "#000",
      }}
      className={styles.container}
    >
      <div className={styles.title}>{title}</div>

      <div className={styles.value}>{value}</div>

      <div className={styles.rowValues}>
        <span className={styles.vsMonth}>vs last month</span>
        <span className={styles.percentValue}>{percentValue}%</span>
      </div>
    </div>
  );
};

export default StatsCard;
