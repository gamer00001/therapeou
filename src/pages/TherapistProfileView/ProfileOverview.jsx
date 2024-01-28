import React from "react";
import { Grid, Button } from "@mui/material";

import styles from "./styles.module.scss";
// import { UserProfieInfo } from "../../constants/common";

const ProfileOverview = ({ userInfo }) => {
  return (
    <div className={styles.profileInfoBlock}>
      <Grid container>
        <Grid item sm={4} md={4} lg={4} className={styles.leftGrid}>
          <div className={styles.infoBlock}>
            <img src="/user-logo.png" alt="logo" />

            <div className={styles.title}>{userInfo?.fullName || "N/A"}</div>
            <div className={styles.subtitle}>danielzkevin@gmail.com</div>
          </div>

          <div className={styles.appointmentTitle}>
            {userInfo?.profileTitle || "N/A"}
          </div>
        </Grid>

        <Grid item sm={8} md={8} lg={8}>
          <div className={styles.overviewRow}>
            <div className={styles.overviewTitle}>Overview</div>

            <Button className={styles.editProfileBtn}>Edit Profile</Button>
          </div>

          <Grid container padding="35px 32px">
            <Grid item md={7} lineHeight={2.5}>
              <div>
                <span className={styles.overviewTitle}>Information</span>
              </div>
              <div className={styles.fieldTitle}>
                {userInfo?.country || "N/A"}
              </div>

              <div className={styles.fieldTitle}>Active Yesterday</div>

              <div className={styles.fieldTitle}>Response Within 24 hours</div>
            </Grid>

            <Grid item md={5}>
              <div>
                <span className={styles.overviewTitle}>Expertise</span>
              </div>

              <div>
                <div className="d-flex gap-20 pt-20">
                  <ExpertiseBlock title="Physical Therapy" />

                  <ExpertiseBlock title="Injury" />
                </div>

                <div className="pt-20">
                  <ExpertiseBlock title="Dry Need" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileOverview;

const ExpertiseBlock = ({ title }) => {
  return <div className={styles.expertiseBlock}>{title}</div>;
};
