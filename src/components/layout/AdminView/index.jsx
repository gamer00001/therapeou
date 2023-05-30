import React from "react";
import Sidebar from "../../sidebar";

import styles from "./styles.module.scss";

const AdminLayoutView = ({ children, accessToken, signOutUser }) => {
  return (
    <div className={styles.adminContainer}>
      <Sidebar accessToken={accessToken} />
      <div className={styles.childContent}>
        <div className={styles.childWrapper}>
          <div className={styles.child}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayoutView;
