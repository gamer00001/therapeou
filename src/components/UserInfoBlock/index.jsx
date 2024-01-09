import React from "react";

import styles from "./styles.module.scss";

const UserInfoBlock = ({ name = "John", subtitle = "Weekly Visit", logo }) => {
  return (
    <div className={styles.userBlock}>
      <div>
        <img src={logo ?? "/user-logo.png"} alt="user-img" />
      </div>

      <div className={styles.userInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </div>
  );
};

export default UserInfoBlock;
