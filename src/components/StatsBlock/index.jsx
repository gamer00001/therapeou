import React from "react";

import styles from "./styles.module.scss";

const StatsBlock = ({ list = [] }) => {
  return (
    <div className={styles.statsContainer}>
      {list.map((item) => (
        <div className={styles.rowBlock}>
          <span
            className={styles.title}
            style={{ fontWeight: item.id === 1 ? "bold" : "normal" }}
          >
            {item.title}
          </span>
          <span
            className={styles.value}
            style={{ fontWeight: item.id === 1 ? "bold" : "normal" }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsBlock;
