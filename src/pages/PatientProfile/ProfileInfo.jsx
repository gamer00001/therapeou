import React from "react";
import { Grid, Button } from "@mui/material";

import styles from "./styles.module.scss";

const ProfileInfo = ({ userInfo, overviewInfo }) => {
  return (
    <div className={styles.profileInfoBlock}>
      <Grid container>
        <Grid item sm={4} md={4} lg={4} className={styles.leftGrid}>
          <div className={styles.infoBlock}>
            <img src="/user-logo.png" alt="logo" />

            <div className={styles.title}>{userInfo?.fullName || ""}</div>
            <div className={styles.subtitle}>{userInfo?.email || ""}</div>
          </div>

          <div className={styles.appointmentTitle}>Appointments</div>

          <div className={styles.appointmentInfo}>
            <div className="text-center">
              <div className={styles.title}>5</div>
              <div className={styles.subtitle}>Past</div>
            </div>

            <hr className={styles.verticalLine} />

            <div className="text-center">
              <div className={styles.title}>2</div>
              <div className={styles.subtitle}>Upcoming</div>
            </div>
          </div>
        </Grid>

        <Grid item sm={8} md={8} lg={8}>
          <div className={styles.overviewRow}>
            <div className={styles.overviewTitle}>Overview</div>

            <Button className={styles.editProfileBtn}>Edit Profile</Button>
          </div>

          <Grid container padding="35px 32px">
            {overviewInfo?.map((item) => (
              <Grid item sm={6} md={6} lg={6} key={item.id}>
                <div>
                  <div className={styles.fieldTitle}>{item.title}</div>

                  <div className={styles.fieldValue}>{item.value}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileInfo;
