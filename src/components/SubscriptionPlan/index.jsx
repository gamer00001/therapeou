import React from "react";
import styles from "./styles.module.scss";
import CButton from "../CButton";

const SubscriptionPlan = ({
  title,
  packagePrice,
  perksList = [],
  onEditAction,
}) => {
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

      <div className={styles.editBtnBlock}>
        <CButton type="submit" title="Edit" onClick={onEditAction} />
      </div>
    </div>
  );
};

export default SubscriptionPlan;
