import React from "react";
import { Grid, Input } from "@mui/material";

import { getUserInfoFromStorage } from "../../utility/common-helper";

import ProfileLogo from "../../assets/user-logo.png";
// import NotificationIcon from "../../assets/notification-icon.svg";
import NotificationIcon2 from "../../assets/notification-icon-1.svg";
import ChatIcon from "../../assets/chat-icon.svg";

import styles from "./styles.module.scss";

const AdminNavbar = () => {
  const profileImage = getUserInfoFromStorage()?.image;
  return (
    <Grid container className={styles.navContainer}>
      <Grid item xs={7}>
        <Input placeholder="Search" className={styles.searchField} />
      </Grid>

      <Grid item xs={5} className={styles.profileContainer}>
        <img
          className={styles.notificationIcon}
          src={ChatIcon}
          alt="notification-icon"
        />

        <img
          className={styles.notificationIcon}
          src={NotificationIcon2}
          alt="notification-icon"
        />
        <ProfileBlock
          image={profileImage}
          name={getUserInfoFromStorage()?.fullName}
        />
      </Grid>
    </Grid>
  );
};

export default AdminNavbar;

const ProfileBlock = ({ image = ProfileLogo, name = "Alex" }) => {
  return (
    <div className={styles.profileBlockContainer}>
      <img className={styles.profileLogo} src={image} alt="profile-logo" />
      <span className={styles.userName}>{name}</span>
    </div>
  );
};
