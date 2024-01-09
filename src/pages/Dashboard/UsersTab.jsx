import React from "react";

import { Tab, Tabs } from "@mui/material";

import styles from "./styles.module.scss";

const UsersTab = ({ state, handleChange }) => {
  return (
    <div>
      <Tabs
        value={state.tabId}
        onChange={handleChange}
        aria-label="basic tabs example"
        className={styles.tabsContainer}
      >
        <Tab label="Patient" value="1" className={styles.tabsView} />
        <Tab label="Therapist" value="2" className={styles.tabsView} />
      </Tabs>
    </div>
  );
};

export default UsersTab;
