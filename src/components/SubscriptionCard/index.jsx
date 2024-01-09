import React from "react";
import styles from "./styles.module.scss";

const SubscriptionCard = ({
  packageName = "Premium",
  packageAmount = "$100/mo.",
  isPremium = false,
  handlePackage,
}) => {
  return (
    <div className={styles.container} onClick={handlePackage}>
      <div
        className={`${styles.packageInfo} ${isPremium && `${styles.premuim}`}`}
      >
        <span>{packageName}</span>
        <span>{packageAmount}</span>
      </div>
    </div>
  );
};

export default SubscriptionCard;
