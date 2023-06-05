import React from "react";
import { Grid, Typography } from "@mui/material";
import UserLogo from "../../assets/user-logo.png";
import styles from "./styles.module.scss";

const UserProfileBlock = ({
  username = "Irfan Ahsan",
  userType = "Patient",
}) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <img
          className={styles.logoContainer}
          src={UserLogo}
          alt="user-avatar"
        />
        <Typography component="div">
          <Typography component="h2" className={styles.userName}>
            {username}
          </Typography>
        </Typography>

        <Typography component="div">
          <Typography component="h5" className={styles.userType}>
            {userType}
          </Typography>
        </Typography>

        <hr className={styles.underLine} />
      </Grid>
    </Grid>
  );
};

export default UserProfileBlock;
